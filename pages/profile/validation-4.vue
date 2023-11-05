<template>
  <div class="h-full  w-full  text-white bg-black min-w-screen">
    <div class="flex justify-center items-center logoEdit">
        <h2><img src="@/img/logo.svg" alt="frameIcon" /></h2>
      </div>

    <div class="grid grid-rows grid-flow-col gap-4 mx-10 sm:mx-40 lg:mx-60 ">
      

      <div class="">
        <form @submit.prevent="submitFormInterests">
          <div class="p-8">
            <label class="relative block">
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">Please provide us with your <b>interests</b>.</span>
              <div class="block w-full w-full  md:8/12  xl:pl-32 pt-12">
                <label class="block lg:text-3xl lg:pr-12 lg:pt-18 pt-12">Select up to 3 interests</label>
                <select :filterable="true" class="text-2xl lg:text-3xl p-4 w-full  md:6/12 lg:w-8/12  form-input rounded-3xl bg-black border border-gray pl-10 custom-scrollbar-container" 
                  type="text" name="description" v-model="selectedInterests" required multiple>
                  <option v-for="interest in interestsData" :key="interest._id" :value="interest._id" white>
                    {{ interest.name }}
                  </option>
                </select>
              </div>
            </label>
            <div class="lg:mt-4 text-right pr-10 xl:pr-52">
              <button id="" type="submit">
                <i class="fa-solid fa-arrow-right  fa-2x"></i>
              </button>
            </div>
            <!-- error -->
            <div v-if="error" class="text-red-500 text-center my-4">
              {{ error }}
            </div>
          </div>
        </form>
      </div>
            
    </div>
  </div>
</template>

<style scoped>

strong, b {
  font-weight: bold;
}
</style>
<style>
 
  .logoEdit {
 
  width: 7.5em;
  height: 7em;
  margin-left: 20%;


    @screen md {
      width: 10em;
      height: 10em;
      margin-left: 60%;

    }

    @screen lg {
      margin-left: 40%;
      width: 8em;
      height: 8em;
    }
    
    @screen xl {
      margin-left: 45%;
      width: 15em;
      height: 15em;
      
    }

}

 

</style>



<script>

import axios from 'axios';

export default {

  data() {

      return {
          interestsData : [],
          selectedInterests : [],
          error : '',
    };

  },
  mounted() {
      
      if(!localStorage.getItem('CupidConnectToken')){

          this.$router.push('/');

      }
      this._username = localStorage.getItem('CupidConnectuser');
      this.fetchInterests();

  },
  methods: {

    verify() {
      
        
      if (this.selectedInterests.length > 3) {
            this.error = 'Please select up to 3 interests';
            return false;
          }
      
        this.error = '';
        return true;
  },

  clearErrorMessageAfterDelay() {
      
      setTimeout(() => {
          this.error = "";
      }, 5000);
  },

  async submitFormInterests() {
      //debugger
      if(this.verify(this.formTypes.INTERESTS)){

        const _userId = localStorage.getItem('CupidConnectId'); 
        const token = localStorage.getItem('CupidConnectToken'); //para verificar id 
        //debugger;
          const dataf = {
              userId: _userId,
              newInterests: this.selectedInterests,

          };

          const response = await axios.post('https://espacionebula.com:8000/change-interest-user', dataf, {

              headers: {

                  'Access-Control-Allow-Origin': '*',
                  'Authorization': `Bearer ${token}`,

              },
              mode: 'cors',

          });
          
          //console.log(response);debugger;
          if (response.data.success) {
              
            this.$router.push('./validation-5'); 

          } else {
              this.error = "There was an error updating your interests : "+response.data.error;
              console.log("There was an error updating your interests : "+response.data.error);
              this.clearErrorMessageAfterDelay();
          }

      }

    },

    async fetchInterests() {

      try {
        
          const response = await axios.get('https://espacionebula.com:8000/get-interests', {

              headers: {

                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data',
                
              },
              mode: 'cors',

          });
        
          this.interestsData = response.data.interests; //debugger;
          
          if (this.interestsData.length > 0) { //debugger;
            this.selectedInterests = ''; //para que el axios no se coma el option 1 
          }
          
        
      } catch (error) {

          console.error('Error in fetchInterests:', error);

      }

  },
 


},

};

</script>