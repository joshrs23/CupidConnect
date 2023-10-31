<template>
  <div class="h-full  w-full  text-white bg-black min-w-screen">
    <!--"lg:h-full  lg:w-full h-screen w-screen text-white flex"
    <div class="lg:hidden">
      <GeneralMenuPhone />
    </div>
    <div class="hidden lg:block w-1/6">
      <GeneralMenu />
    </div>-->
    <div class="flex justify-center items-center logoEdit">
        <h2><img src="@/img/logo.svg" alt="frameIcon" /></h2>
      </div>

    <div class="grid grid-rows-5 grid-flow-col gap-4 border border mx-10 sm:mx-40 lg:mx-60 ">
      

      <div class="border-b white">
        <form @submit.prevent="submitForm">
          <div class="p-8">
            <label>
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">Welcome to your profile! <br><b>{{_username}}</b> </span>
              <span class="block text-right lg:text-2xl lg:pr-12 lg:pt-18 pt-12">Here is a quick look to your <b>description</b> of<br>yourself:</span>
              <textarea rows="4" cols="50" class="text-lg p-4 leading-6  p-10 w-full lg:ml-10 lg:w-11/12   block form-input border-black-300 rounded-3xl mt-5 bg-black border border-gray" type="text" 
              id="" name="description" required>{{  }}</textarea>
            </label>
          </div>
          <div class="lg:mt-4 mb-10 text-right pr-10">
            <button type="submit" id="" >
              <i class="fa-solid fa-arrow-right  fa-2x"></i>
            </button>
          </div>
          <!-- error -->
          <div v-if="error" class="text-red-500 text-center my-4">
            {{ error }}
          </div>
        </form>
      </div>

      <div class="border-b">
        <form @submit.prevent="submitForm">
          <div  class="p-8">
            <label class="relative block">
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">How do you <b>identify</b>?</span>
              <div class="relative flex flex-col lg:flex-row items-baseline  w-full  md:8/12 lg:w-10/12  pt-12">
                <label class="block text-2xl  lg:text-5xl xl:pl-8 pr-5"><b>I am: </b></label>
                <label :filterable="true" class="origin-bottom text-2xl lg:text-3xl p-4 w-full  md:6/12 lg:w-8/12  form-input rounded-3xl bg-black border border-gray pl-10 custom-scrollbar-container" type="text" name="description"  required>
                  {{identitiesData}}
                </label>
                <select :filterable="true" class="origin-bottom text-2xl lg:text-3xl p-4 w-full  md:6/12 lg:w-8/12  form-input rounded-3xl bg-black border border-gray pl-10 custom-scrollbar-container" type="text" name="description"  required>
                  <option value="" disabled selected>Select your identity</option>
                  <option v-for="identity in identitiesData" :key="identity._id" :value="identity._id" white>
                    {{ identity.name }}
                  </option>
                </select>
              </div>
            </label>
          </div>
          <div class="lg:mt-4 text-right pr-10 xl:pr-52">
            <button  type="submit">
              <i class="fa-solid fa-arrow-right  fa-2x"></i>
            </button>
          </div>
          <!-- error -->
          <div v-if="error" class="text-red-500 text-center my-4">
            {{ error }}
          </div>
        </form>
      </div>

      <div class="border-b">
        <form @submit.prevent="submitForm">
          <div  class="p-8">
            <label class="">
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">Please provide us with your <b>orientation</b>.</span>
              <div class="block w-full w-full  md:8/12  xl:pl-32 pt-12">
                <label class="block lg:text-3xl lg:pr-12 lg:pt-18 pt-12">Select an option</label>
                <select :filterable="true" class="text-2xl lg:text-3xl p-4 w-full  md:6/12 lg:w-8/12  form-input rounded-3xl bg-black border border-gray pl-10 custom-scrollbar-container" type="text"  required>
                  <option value="" disabled selected>Select your orientation</option>
                  <option v-for="orientation in orientationData" :key="orientation._id" :value="orientation._id" white>
                    {{ orientation.name }}
                  </option>
                </select>
              </div>
            </label>
          </div>
          <div class="lg:mt-4 text-right pr-10 xl:pr-52">
            <button type="submit">
              <i class="fa-solid fa-arrow-right  fa-2x"></i>
            </button>
          </div>
          <!-- error -->
          <div v-if="error" class="text-red-500 text-center my-4">
            {{ error }}
          </div>
        </form>
      </div>

      <div class="border-b">
        <form @submit.prevent="submitForm">
          <div class="p-8">
            <label class="relative block">
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">Please provide us with your <b>interests</b>.</span>
              <div class="block w-full w-full  md:8/12  xl:pl-32 pt-12">
                <label class="block lg:text-3xl lg:pr-12 lg:pt-18 pt-12">Select up to 3 interests</label>
                <select :filterable="true" class="text-2xl lg:text-3xl p-4 w-full  md:6/12 lg:w-8/12  form-input rounded-3xl bg-black border border-gray pl-10 custom-scrollbar-container" 
                  type="text" name="description" vv required multiple>
                  <option value="" disabled selected>Select your interest</option>
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

      <div class="border-b">
        <form @submit.prevent="submitFormPhotos" enctype="multipart/form-data">
          <div class="p-8">
            <label class="relative block">
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">Please provide us with your <b>photos</b>.</span>
              <div class="block w-full w-full  md:8/12  xl:pl-32 pt-12">

                <label for="pictures" class="text-xl border rounded p-2 cursor-pointer bg-black border border-gray hover:bg-gray-500 text-white py-2 px-4 rounded-full inline-flex items-center"> 
                  <i class="fa-solid fa-images pr-2 fa-lg"></i>
                    Upload File
                </label> 
                <input ref="picturesInput" id="pictures" name="pictures" type="file" multiple 
                    class="hidden"
                    accept="image/*" 
                    @change="handlePicturesChange">

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
            _username : '',
            description : '',
            identitiesData : [],
            selectedIdentity : null,
            orientationData : [],
            selectedOrientation : null,
            interestsData : [],
            selectedInterests : null,
            pictures: [],
            error : '',

            formTypes: {
              DESCRIPTION: 'description',
              IDENTITY: 'identity',
              ORIENTATION: 'orientation',
              INTERESTS: 'interests',
              PHOTOS: 'photos',
          },
          submissionStatus: {
            description: false,
            identity: false,
            orientation: false,
            interests: false,
            
          },
      };

    },
    mounted() {

      

        if(!localStorage.getItem('CupidConnectToken')){

            this.$router.push('/');

        }
        this._username = localStorage.getItem('CupidConnectuser');
        this.fetchIdentities();
        this.fetchOrientations();
        this.fetchInterests();

      
    },
    methods: {

     

      handlePicturesChange(event) {

        this.pictures = event.target.files;

      },

    clearErrorMessageAfterDelay() {
      
            setTimeout(() => {
                this.error = "";
            }, 5000);
        },


    async fetchDescription() {

          try {
            
              const response = await axios.get('https://espacionebula.com:8000/get-description-use', {

                  headers: {

                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'multipart/form-data',
                    
                  },
                  mode: 'cors',

              });
            
              this.description = response.data.description-use; //debugger;
              
            
          } catch (error) {

              console.error('Error in fetchDescription', error);

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

 