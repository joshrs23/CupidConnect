<template>
    <div class="lg:h-full h-screen w-screen text-white flex">
        <div class="lg:hidden">
            <GeneralMenuPhone />
        </div>
        <div class="hidden lg:block w-1/6">
            <GeneralMenu />
            
        </div>
        <div>
              <div id="logoEdit" class="ml-76 w-52 flex justify-center items-center">
            
                <h2><img src="@/img/logo.svg" alt="frameIcon" /></h2>

            </div>

            <form  @submit.prevent="submitForm">

            <div>

    
                <label class="relative block">
                        
                    <span class="block text-2xl lg:text-5xl mx-10 sm:mx-40 lg:mx-52  lg:mt-18 mb-12">How do you <b>identity</b>?</span>

                    
                    <div class="relative flex flex-col lg:flex-row items-baseline block lg:w-8/12 xl:w-12/12  mx-10 sm:mx-40 lg:mx-52 pb-5">

                        <label class="block text-2xl lg:text-5xl mr-5"><b>I am: </b></label>

                        <select  :filterable="true" class="text-2xl lg:text-3xl p-4 md:w-max lg:w-9/12  xl:w-12/12 form-input rounded-3xl bg-black border border-gray pl-10  custom-scrollbar-container"
                          type="text" name="description" v-model="selectedIdentity" required>

                          <option value="" disabled selected>Select your identity</option>
                          <option v-for="identity in identitiesData" :key="identity._id" :value="identity._id" white>
                            {{ identity.name }}
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


    #arrow-r {
        
       margin-left: 70%;

          @screen  sm {
            
            margin-left: 80%;

          }

          @screen md {
            width: 3em;
            margin-left: 95%;

          }

          @screen lg {
            
            margin-left: 85%;
            
          }
          
          @screen xl {
            
            margin-left: 95%;

          }
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
      
      identitiesData : [],
      selectedIdentity : null,
      error : '',
      description: '',
      
    };
  },
  mounted() {

          if(!localStorage.getItem('CupidConnectToken')){  //// no necesitas loggearte ahora

              this.$router.push('/');

          }   

           this.fetchIdentities();
  },

  methods: {

    verify(){

            if (!this.selectedIdentity){

                this.error = "Please select an identity";
                console.log("Please select a identity");
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
              debugger;
                const dataf = {
                    userId: _userId,
                    newIdentity: this.selectedIdentity,

                };

                const response = await axios.post('https://espacionebula.com:8000/change-identity-user', dataf, {

                    headers: {

                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${token}`,

                    },
                    mode: 'cors',

                });
                
                //console.log(response); //debugger;
                if(response.data.success){

                    this.$router.push('./validation-3');

                }else{

                    this.error = "There was an error changing identity : "+response.data.error;
                    console.log("There was an error changing identity : "+response.data.error);
                    this.clearErrorMessageAfterDelay();

                }

            }

        },

    async fetchIdentities() {

            try {
              
                const response = await axios.get('https://espacionebula.com:8000/get-identities', {

                    headers: {

                      'Access-Control-Allow-Origin': '*',
                      'Content-Type': 'multipart/form-data',
                      
                    },
                    mode: 'cors',

                });
              
                this.identitiesData = response.data.identities; //debugger;
                
                if (this.identitiesData.length > 0) { //debugger;
                  this.selectedIdentity = ''; //para que el axios no se coma el option 1 
                }
              
            } catch (error) {

                console.error('Error in fetchIdentities:', error);

            }

        },
  },
};

</script>