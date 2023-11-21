<template>
    <div class="h-full w-screen text-white flex">
    <div class="hidden lg:block w-1/6">
      <GeneralMenu />
    </div>
    
    <div class="overflow-x-auto">
        <table class="xl:m-32 hover:table-fixed text-xl">
          <caption class="text-3xl">List of all users</caption>
            <thead class="underline-offset-4 white">
            <tr >
                <th class="p-10" >Username</th>
                <th class="p-10">First Name</th>
                <th class="p-10">Last Name</th>
                <th class="p-10">Email</th>
                <th class="p-10">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="user in users" :key="user._id">
                <td>{{ user._username }}</td>
                <td>{{ user._fname }}</td>
                <td>{{ user._lname }}</td>
                <td class="">{{ user._email }}</td>
                <td class="pl-5">
                  <button 
                    :id="'seeMatches' + user._id"
                    class="p-2 mr-[3.5px] ml-[3.5px] rounded-3xl border border-gray rounded-xl relative inline-block group" 
                    @click="seeMatches(user._id)">
                    <i class="fa-solid fa-people-arrows"></i>
                    <div class="hidden group-hover:block bg-gray-800 text-white text-sm py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2">
                      Press to see matches from user
                    </div>
                  </button> 
                  <button 
                    :id="'blockButton_' + user._id"
                    class="p-2 mr-[3.5px] ml-[3.5px] rounded-3xl border border-gray rounded-xl relative inline-block group"
                    @click="blockUser(user._id)">
                    <i class="fa-solid fa-user-slash"></i>
                    <div class="hidden group-hover:block bg-gray-800 text-white text-sm py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2">
                      Press to block user
                    </div>
                  </button> 
                </td>
            </tr>
            </tbody>
        </table>
        <div  v-if="showModal" class="modal">
          <div class="modal-content">
            <span class="close" @click="closeModal"></span>
              <table>
                <caption class="text-3xl">List of all matches</caption>
                  <thead class="underline-offset-4 white">
                    <tr >
                      <th class="p-10" >Username</th>
                      <th class="p-10">First Name</th>
                      <th class="p-10">Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center" v-for="match in matches" :key="match._id">
                        <td> {{ match._username }} </td>
                        <td>  {{ match._fname }} </td>
                        <td>  {{ match._lname }} </td> 
                    </tr>
                </tbody>
              </table>
          </div>
        </div>
        <div v-if="error" class="text-red-500 text-center my-4">
              {{ error}}
      </div>
    </div>
    
    <div class="lg:hidden fixed left-0 right-0 bottom-0 bg-gray-800">
        <GeneralMenuPhone />
      </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {

    return {
        username : '',
        description : '',
        identitiesData : [],
        selectedIdentity : null,
        orientationData : [],
        selectedOrientation : null,
        interestsData : [],
        selectedInterests : null,
        pictures: [],
        error : '',
        showModal : false,
        
        users : [],
        matches : [],

        };

    },
    mounted() {

          

    if(!localStorage.getItem('CupidConnectToken')){

        this.$router.push('/');

    }
    this.fetchUsers();

    },
    

  methods: { 
    clearErrorMessageAfterDelay() {
        
        setTimeout(() => {
            this.error = "";
        }, 5000);
    },
    async blockUser(id) {
      try {
        
        const _userId = localStorage.getItem('CupidConnectId');
        const token = localStorage.getItem('CupidConnectToken');
        debugger;

        const dataf = {
          userId: _userId,
          userId2: id,
        };

        const response = await axios.post('https://espacionebula.com:8000/delete-user-admin', dataf, {

          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`,
          },
          mode: 'cors',
        });
          
        if (response.data.success) {
          
          console.log(`The user has been blocked: ${id}`);
          this.fetchUsers();
          

        } else {
          this.error = "Error when blocking a user : "+response.data.error;
          console.log('Error when blocking a user', error);
          this.clearErrorMessageAfterDelay();
            
        }
      } catch (error) {
        console.error('Error when blocking a user', error);
      }
    },
    getMatchesById(id) {
    try {
      const match = this.matches.find(match => match._userId === id || match.userId2 === id);
      if (match) {
        return match._username; 
      }
      return 'Username not found';
    } catch (error) {
      console.error('Error in getMatchesById:', error);
      return 'Error retrieving username';
    }
  },
    async seeMatches(id) {
      try {
        
        const _userId = localStorage.getItem('CupidConnectId');
        const token = localStorage.getItem('CupidConnectToken');
        debugger;

        const dataf = {
          userId: _userId,
          userId2: id,
        };

        const response = await axios.post('https://espacionebula.com:8000/get-all-matches', dataf, {

          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`,
          },
          mode: 'cors',
        });
        const data = response.data;
          
        if (data.success) {

          this.showModal = true;
          this.matches = data.matches;
          debugger;
          
          console.log(`The admin can see the matches: ${id}`);
          

        } else {

          this.error = "Error when trying to see the matches : "+response.data.error;
          console.log('Error when trying to see the matches', error);
          this.clearErrorMessageAfterDelay();
            
        }
      } catch (error) {
        console.error('Error when trying to see the matches', error);
      }
    },
    async fetchUsers(){

      try {
          
          const _userId = localStorage.getItem('CupidConnectId'); 
          const token = localStorage.getItem('CupidConnectToken');   
          const dataf = {
                userId: _userId,
            };

          const response = await axios.post('https://espacionebula.com:8000/get-all-users',dataf, {
            
            
              headers: {

                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
                
              },
              mode: 'cors',

          });
          
            const data = response.data;
              
              if(data.success){

                this.users = data.users;
                this.username = data._username;

              }else{

                this.error = "There was an error with the user : "+response.data.error;
                console.log("There was an error with the user : "+response.data.error);
                this.clearErrorMessageAfterDelay();

              };
                  
        
      } catch (error) {

          console.error('Error in fetchUser:', error);

      }


    },

  },
};
</script>
