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
            <tr class="text-center"  >
                <td>Emiliano20 </td>
                <td>Emiliano </td>
                <td>Ruiz Gomez </td>
                <td class="">emilianoruizgomez@outlook.com</td>
                <td class="pl-5">
                  <button 
                    class="p-2 mr-[3.5px] ml-[3.5px] rounded-3xl border border-gray rounded-xl relative inline-block group" 
                    @click="seeMatches(user.id)">
                    <i class="fa-solid fa-people-arrows"></i>
                    <div class="hidden group-hover:block bg-gray-800 text-white text-sm py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2">
                      This is the description
                    </div>
                  </button> 
                  <button 
                    class="p-2 mr-[3.5px] ml-[3.5px] rounded-3xl border border-gray rounded-xl"
                    @click="blockUser(user.id)">
                    <i class="fa-solid fa-user-slash"></i>
                  </button> 
                </td>
            </tr>
            </tbody>
        </table>
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
        _username : '',
        description : '',
        identitiesData : [],
        selectedIdentity : null,
        orientationData : [],
        selectedOrientation : null,
        interestsData : [],
        selectedInterests : null,
        pictures: [],
        
        users : [],

        };

    },
    

  methods: { 

    async blockUser(id) {
      try {
        
        const _userId = localStorage.getItem('CupidConnectId');
        const token = localStorage.getItem('CupidConnectToken');
        

        const dataf = {
            userId: _userId,
            id: id,

        };

        const response = await axios.post('https://espacionebula.com:8000/delete-picture-user', dataf, {

          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`,
          },
          mode: 'cors',
        });
          
        if (response.data.success) {
          
          this.save.photos = "The photos were deleted successfully: ";
          this.clearErrorMessageAfterDelay();
          console.log(`The user has been blocked: ${id}`);

        } else {
            this.errors.photos = "There was an error deleting photos : "+response.data.error; 
            console.log("There was an error deleting photos : "+ response.data.error);
            this.clearErrorMessageAfterDelay();
        }
      } catch (error) {
        console.error('Error when deleting a user', error);
      }
    },
    seeMatches(id) {
      console.log(`Matches from user:  ${id}`);
    },
    async fetchUsers() { 

        try {
        
            const response = await axios.get('https://espacionebula.com:8000/get-users', {

                headers: {

                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data',
                
                },
                mode: 'cors',

            });
        
            this.users = response.data.users; 
        
        } catch (error) {

            console.error('Error in fetching users:', error);

        }

    },

  },
};
</script>
