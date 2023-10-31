<template>
    <div class="lg:h-full h-screen w-screen text-white flex">
        <div class="lg:hidden">
            <GeneralMenuPhone />
        </div>
        <div class="hidden lg:block w-1/6">
            <GeneralMenu />
            
        </div>
        <div>
              <div id="logo" class="flex justify-center items-center">
            
                <h2><img src="@/img/logo.svg" alt="frameIcon" /></h2>

            </div>

            <form  @submit.prevent="submitForm">

            <div>

    
                <label class="relative block">
                        
                    <span class="block text-2xl lg:text-5xl mx-10 sm:mx-40 lg:mx-52  lg:mt-18 ">Please provide us with your <b>interests</b>. </span>

                    
                    <div class=" block lg:w-8/12 xl:w-9/12  mx-10 sm:mx-40 lg:mx-52">

                        <label class="block text-2xl lg:text-3xl mr-5 pt-8">Select up to 3 interests</label>

                        <select  :filterable="true" class="origin-bottom text-2xl lg:text-3xl p-4 md:w-max lg:w-9/12  xl:w-10/12 form-input rounded-3xl bg-black border border-gray pl-10 custom-scrollbar-container"
                          type="text" name="description" v-model="selectedInterests" required>

                          <option value="" disabled selected>Select your interest</option>
                          <option v-for="interest in interestsData" :key="interest._id" :value="interest._id" white>
                            {{ interest.name }}
                          </option>

                        </select>
                    </div>

                </label>


            </div>

            <div id="arrow-r" class="">               

              <button id="" type="submit">

                <img :src="`../img/arrow-right.png`" alt="arrowIcon" />

              </button>

            </div>

            <!-- error -->
            <div v-if="error" class="text-red-500 text-center my-4">
              {{ error }}
            </div>
            
          </form>
           

        </div>
    </div>

</template>

<style>

    .custom-scrollbar-container {
      max-height: 200px;
      overflow-y: auto;
    }
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: black gray; /* Track color and thumb color */
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 5px; 
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 3px;
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background-color: black; 
      border-radius: 5px;
    }


  
    

    #spandStyle{

        margin-left: 5em;
        width: 65%;

        @screen  sm {
          
          margin-left: 8em;
          width: 68%;

        }

        @screen md {

          margin-left: 18em;
          width: 55%;

        }

        @screen lg {
            margin-left: 10em;
            width: 70%;
        }
        @screen xl {
            margin-left: 20em;
            width: 55%;
        }

    }
    
    #identityInput{



      @screen  sm {

        }
        
        @screen  md {

        }
        @screen  lg {

        }
        @screen  xl {
            width: 60%;
        }

    }

    

</style>

<script>
    import axios from 'axios';

    export default {
    data() {
      return {
        
        interestsData : [],
        selectedInterests : null,
        error : '',

        description: '',
        
      };
    },
    mounted() {

            if(localStorage.getItem('CupidConnectToken')){  //// no necesitas loggearte ahora

                this.$router.push('/');

            }   

            this.fetchInterests();
    },

    methods: {

      verify(){

              if (!this.selectedInterests){

                  this.error = "Please select an interest";
                  console.log("Please select a interest");
                  return false;

              }

              return true;

          },
      clearErrorMessageAfterDelay() {
        
              setTimeout(() => {
                  this.error = "";
              }, 5000);
          },

      async submitForm() {

              if(this.verify()){

                const _userId = localStorage.getItem('CupidConnectId'); 
                const token = localStorage.getItem('CupidConnectToken'); //para verificar id 
                //debugger;
                  const dataf = {
                      userId: _userId,
                      newInterest: this.selectedInterests,

                  };

                  const response = await axios.post('https://espacionebula.com:8000/change-interest-user', dataf, {

                      headers: {

                          'Access-Control-Allow-Origin': '*',
                          'Authorization': `Bearer ${token}`,

                      },
                      mode: 'cors',

                  });
                  
                  //console.log(response); debugger;
                  if(response.data.success){

                      this.$router.push('./validation-3');

                  }else{

                      this.error = "There was an error changing interest : "+response.data.error;
                      console.log("There was an error changing interest : "+response.data.error);
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