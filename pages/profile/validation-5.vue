<template>
    <div class="h-full  w-full  text-white bg-black min-w-screen">
      <div class="flex justify-center items-center logoEdit">
          <h2><img src="@/img/logo.svg" alt="frameIcon" /></h2>
        </div>
  
      <div class="grid grid-rows grid-flow-col gap-4 mx-10 sm:mx-40 lg:mx-60 ">
        <div class="">
        <form @submit.prevent="submitFormPhotos" enctype="multipart/form-data">
          <div class="p-8">
            <label class="relative block">
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">Please provide us with your <b>photos</b>.</span>
              <div class="block w-full w-full  md:8/12  xl:pl-32 pt-12">

                <label for="pictures" class="text-xl border rounded p-2 cursor-pointer bg-black border border-gray hover:bg-gray-500 text-white py-2 px-4 rounded-full inline-flex items-center"> 
                  <i class="fa-solid fa-images pr-2 fa-lg"></i>
                    Upload photos
                </label> 
                <input ref="picturesInput" id="pictures" name="pictures" type="file" 
                    class="hidden"
                    accept="image/*" 
                    @change="handlePicturesChange">
              </div>                    
            </label>
            <div class="text-center">
              <button class="lg:mt-4 border border rounded p-4 text-2xl text-center" type="submit">
                Save photo
              </button>
            </div>
          </div>
        </form>
        <div class="lg:mt-4 text-right pr-10 xl:pr-52">
            <NuxtLink to="/">
              <button type="submit">
                <i class="fa-solid fa-arrow-right  fa-2x"></i>
              </button>
            </NuxtLink>  
            </div>
        <div class="sm:mx-40  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mb-20">
          <div v-for="(photo, index) in pictures" :key="index" class="">
            <button @click="deletePhoto(index)" class=" absolute">
              <i class="fa-solid fa-circle-xmark fa-2x"></i>
            </button>
            <div class=" sm:w-64 sm:h-64 lg:w-80 lg:h-80  rounded-lg p-2 custom-rounded">
              <img :src="'https://espacionebula.com/img/' + photo" alt="Profile photo" class="w-full h-full object-cover" loading="lazy"/>
            </div>
           
          </div>

        </div>
         <!-- error -->
        <div v-if="error" class="text-red-500 text-center my-4">
              {{ error }}
        </div>
         
         <div v-if="save" class="text-green-500 text-center my-4">
              {{ save }}
            </div>
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
            pictures: null,
            profilePicture : null,
            error : '',
            save : '',
      };
  
    },
    mounted() {
        
        if(!localStorage.getItem('CupidConnectToken')){
  
            this.$router.push('/');
  
        }
        this._username = localStorage.getItem('CupidConnectuser');
        this.fetchPhotos();
  
    },
    methods: {
  
    verifyPhotos() {
        
        if (this.pictures == null) {
            this.error = 'Please select a photo';
            return false;
          }
          this.error = '';
          return true;
    },
    verifyProfilePhoto() {

          if(this.profilePicture == null){
          this.error = 'Please select a profile photo';
            return false;
        }
          this.error = '';
          return true;
    },
    clearErrorMessageAfterDelay() { 
        
        setTimeout(() => {
            this.error = "";
            this.save = "";
        }, 5000);
    },
    handleProfilePicture(event) {
      this.profilePicture = event.target.files[0];
    },
    handlePicturesChange(event) {
      this.pictures = event.target.files[0];
    },
    async submitForms(){
      await this.submitFormPhotos;
      await this.submitFormProfilePhoto;
    },
    async submitFormPhotos() {

      if(this.verifyPhotos()){

        try {
          const formData = new FormData();
          const _userId = localStorage.getItem('CupidConnectId'); 
          const token = localStorage.getItem('CupidConnectToken');

          if (!token) {
            console.error('Token de autorización no encontrado en el localStorage');
            return;
          }

          formData.append('userId', _userId);
          formData.append('_pictures', this.pictures);
          const p = _pictures; debugger;
          

          const response = await axios.post('https://espacionebula.com:8000/upload-picture-user', formData, {

            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
            },
            mode: 'cors',
          });

          if (response.data.success) { 
            
            this.save = "The photo has been saved";
            this.clearErrorMessageAfterDelay();
            location.reload();

          } else {
              this.error = "There was an error updating photos : "+response.data.error;
              console.log("There was an error updating photos : "+response.data.error);
              this.clearErrorMessageAfterDelay();
              location.reload();
          }
        } catch (error) {
          console.error('Error in submitPhotos aquí:', error);

        }

      }
        
    },
    async submitFormProfilePhoto() {

      if(this.verifyProfilePhoto()){

        try {
          const formData = new FormData();
          const _userId = localStorage.getItem('CupidConnectId'); 
          const token = localStorage.getItem('CupidConnectToken');

          if (!token) {
            console.error('Token de autorización no encontrado en el localStorage');
            return;
          }

          formData.append('userId', _userId);
          formData.append('_profilePicture', this.profilePicture);

          

          const response = await axios.post('https://espacionebula.com:8000/upload-picture-user', formData, {

            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
            },
            mode: 'cors',
          });
            
          if (response.data.success) { 
            const data = response.data.success; debugger;
            
            this.save = "The photo has been saved";
            this.clearErrorMessageAfterDelay();
            location.reload();

          } else {
              this.error = "There was an error updating photos : "+response.data.error;
              console.log("There was an error updating photos : "+response.data.error);
              this.clearErrorMessageAfterDelay();
              location.reload();
          }
        } catch (error) {
          console.error('Error in explotó aquí:', error);

        }

      }
        
      },
    async deletePhoto(index) {

      try {
        
        const _userId = localStorage.getItem('CupidConnectId');
        const token = localStorage.getItem('CupidConnectToken');
        

        const dataf = {
            userId: _userId,
            index: index,

        };

        const response = await axios.post('https://espacionebula.com:8000/delete-picture-user', dataf, {

          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`,
          },
          mode: 'cors',
        });
          
        if (response.data.success) {
          
          this.pictures.splice(index, 1); // Remove the deleted photo from the pictures array
          this.errors.photos = "The photos were deleted successfully: ";
          this.clearErrorMessageAfterDelay();

        } else {
            this.errors.photos = "There was an error deleting photos : "+response.data.error; 
            console.log("There was an error deleting photos : "+ response.data.error);
            this.clearErrorMessageAfterDelay();
        }
      } catch (error) {
        console.error('Error al eliminar la foto', error);
      }
    },
    async fetchPhotos(){

      try {
          
          const _userId = localStorage.getItem('CupidConnectId'); 
          const token = localStorage.getItem('CupidConnectToken');   
          const dataf = {
                userId: _userId,
            };

          const response = await axios.post('https://espacionebula.com:8000/get-user',dataf, {
            
            
              headers: {

                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
                
              },
              mode: 'cors',

          });
          
            const data = response.data;debugger;
              
              if(data.success){

                if (data.user._pictures.length > 0) { 
                  this.pictures = data.user._pictures; //debugger;
                }
                if (data.user._profilePicture.length > 0) { 
                  this.profilePicture = data.user._profilePicture; //debugger;
                }

              }else{

                this.error = "There was an error with the user : "+response.data.error;
                console.log("There was an error with the user : "+response.data.error);
                this.clearErrorMessageAfterDelay();

              };
        
          //this.identitiesData = response.data.identities; //debugger;
          
        
      } catch (error) {

          console.error('Error in fetchUser:', error);

      }


    },

  
  },
  
  };
  
  </script>