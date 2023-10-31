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
                        
                    <span class="block text-2xl lg:text-5xl mx-10 sm:mx-40 lg:mx-48  lg:mt-18 ">Please provide us with your <b>orientation</b>.</span>
                   
                    
                    <div class="block lg:w-8/12 xl:w-9/12  mx-10 sm:mx-40 lg:mx-52">

                        <label class="block text-2xl lg:text-3xl mr-5 pt-8">Select an option</label>

                      <select  :filterable="true" class=" origin-bottom text-2xl lg:text-3xl p-4 md:w-max lg:w-9/12  xl:w-10/12 form-input rounded-3xl bg-black border border-gray pl-10 custom-scrollbar-container"
                          type="text" v-model="selectedOrientation" required >

                          <option value="" disabled selected>Select your orientation</option>
                          <option v-for="orientation in orientationData" :key="orientation._id" :value="orientation._id" white>
                            {{ orientation.name }}
                          </option>

                        </select>

                    </div>
                </label>


            </div>



            <div id="arrow-r" class=" lg:mt-4">
                  <button type="submit">
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



    .cont{
      @screen md {

          height: screen;

        }

    }

    #arrow-r{

      margin-left: 60%;

        @screen  sm {
          
          margin-left: 70%;

        }

        @screen md {
          width: 3em;
          margin-left: 85%;

        }

        @screen lg {
          
          margin-left: 69%;
          
        }
        
        @screen xl {
          
          margin-left: 75%;

        }
        @screen 2xl {
          
          margin-left: 85%;

        }

    }

   #logo{
   
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
        margin-left: 50%;
        width: 15em;
        height: 15em;
        max-height: 100vh;
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

</style>

<script>
  import axios from 'axios';
export default {
  data() {
    return {

      orientationData : [],
      selectedOrientation : null,
      error : '',

    };
  },
    mounted() {

          if(localStorage.getItem('CupidConnectToken')){  //// no necesitas loggearte ahora

              this.$router.push('/');

          }   

           this.fetchOrientations();
  },


  methods: {

    verify(){

            if (!this.selectedOrientation){

                this.error = "Please select an orientation";
                console.log("Please select an orientation");
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
                    newOrientation: this.selectedOrientation,

                };

                const response = await axios.post('https://espacionebula.com:8000/change-orientation-user', dataf, {

                    headers: {

                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${token}`,

                    },
                    mode: 'cors',

                });
                
                //console.log(response); debugger;
                if(response.data.success){

                    this.$router.push('./validation-4');

                }else{

                    this.error = "There was an error changing orientation : "+response.data.error;
                    console.log("There was an error changing orientation : "+response.data.error);
                    this.clearErrorMessageAfterDelay();

                }

            }

        },


    async fetchOrientations() {

            try {
              
                const response = await axios.get('https://espacionebula.com:8000/get-orientations', {

                    headers: {

                      'Access-Control-Allow-Origin': '*',
                      'Content-Type': 'multipart/form-data',
                      
                    },
                    mode: 'cors',

                });
              
                this.orientationData = response.data.orientations; //debugger;
                
                if (this.orientationData.length > 0) { debugger;
                  this.selectedOrientation = ''; //para que el axios no se coma el option 1 
                }
              
            } catch (error) {

                console.error('Error in fetchOrientations:', error);

            }

        }
  }
  
};
</script>