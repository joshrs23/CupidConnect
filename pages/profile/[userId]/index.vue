<template>
  <div class="h-full  w-screen  text-white bg-black flex">
    <div class="hidden lg:block w-1/6">
      <GeneralMenu />
    </div>
    <div class="grid grid-rows-5 px-10 sm:px-40 lg:px-60 mt-10 ">

      <div class="border-b white">
        <form @submit.prevent="submitFormDescription">
          <div class="p-8">
            <label>
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">Hello <b>{{_username}},</b><br>let's complete your profile!</span>
              <span class="block text-right lg:text-2xl lg:pr-12 lg:pt-18 pt-12">First provide us a quick <b>description</b> of<br>yourself:</span>
              <textarea rows="4" cols="50" class="text-lg p-4 leading-6  p-10 w-full lg:ml-10 lg:w-11/12   block form-input border-black-300 rounded-3xl mt-5 bg-black border border-gray" type="text" 
              id="" name="description" v-model="description" required></textarea>
            </label>
          </div>
          <div class="lg:mt-4 mb-10 text-right pr-10">
            <button type="submit">
              <i class="fa-solid fa-cloud-arrow-down fa-2x"></i> 
            </button>
          </div>
          <!-- error -->
          <div v-if="errors.description" class="text-red-500 text-center my-4">
            {{ errors.description }}
          </div>
          <div v-if="save.description" class="text-green-500 text-center my-4">
              {{ save.description }}
          </div>
        </form>
      </div>

      <div class="border-b">
        <form @submit.prevent="submitFormIdentity">
          <div  class="p-8">
            <label class="relative block">
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">How do you <b>identify</b>?</span>
              <div class="relative flex flex-col lg:flex-row items-baseline  w-full  md:8/12 lg:w-10/12  pt-12">
                <label class="block text-2xl  lg:text-5xl xl:pl-8 pr-5"><b>I am: </b></label>
                <select :filterable="true" class="origin-bottom text-2xl lg:text-3xl p-4 w-full  md:6/12 lg:w-8/12  form-input rounded-3xl bg-black border border-gray pl-10 custom-scrollbar-container" type="text" name="description" v-model="selectedIdentity" required>
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
              <i class="fa-solid fa-cloud-arrow-down fa-2x"></i> 
            </button>
          </div>
          <!-- error -->
          <div v-if="errors.identity" class="text-red-500 text-center my-4">
            {{ errors.identity }}
          </div>
          <div v-if="save.identity" class="text-green-500 text-center my-4">
              {{ save.identity }}
           </div>
        </form>
      </div>

      <div class="border-b">
        <form @submit.prevent="submitFormOrientation">
          <div  class="p-8">
            <label class="">
              <span class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28  lg:pt-18">Please provide us with your <b>orientation</b>.</span>
              <div class="block w-full w-full  md:8/12  xl:pl-32 pt-12">
                <label class="block lg:text-3xl lg:pr-12 lg:pt-18 pt-12">Select an option</label>
                <select :filterable="true" class="text-2xl lg:text-3xl p-4 w-full  md:6/12 lg:w-8/12  form-input rounded-3xl bg-black border border-gray pl-10 custom-scrollbar-container" type="text" v-model="selectedOrientation" required>
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
              <i class="fa-solid fa-cloud-arrow-down fa-2x"></i> 
            </button>
          </div>
          <!-- error -->
          <div v-if="errors.orientation" class="text-red-500 text-center my-4">
            {{ errors.orientation }}
          </div>
          <div v-if="save.orientation" class="text-green-500 text-center my-4">
              {{ save.orientation }}
           </div>
        </form>
      </div>

      <div class="border-b">
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
                <i class="fa-solid fa-cloud-arrow-down fa-2x"></i> 
              </button>
            </div>
            <!-- error -->
            <div v-if="errors.interests" class="text-red-500 text-center my-4">
              {{ errors.interests }}
            </div>
            <div v-if="save.interests" class="text-green-500 text-center my-4">
              {{ save.interests }}
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
                <input ref="picturesInput" id="pictures" name="pictures" type="file" 
                    class="hidden"
                    accept="image/*" 
                    @change="handlePicturesChange">

              </div>
              
            </label>
            <div class="lg:mt-4 text-right pr-10 xl:pr-52">
              <button id="" type="submit">
                <i class="fa-solid fa-cloud-arrow-down fa-2x"></i> 
              </button>
            </div>
            <!-- error -->
            <div v-if="errors.interests" class="text-red-500 text-center my-4">
              {{ errors.interests }}
            </div>
            <div v-if="save.photos" class="text-green-500 text-center my-4">
              {{ save.photos }}
            </div>
          </div>
        </form>
        <div v-for="(photo, index) in pictures" :key="index" >
          <div class="w-72 h-72 p-10 rounded">
            <img :src="'https://espacionebula.com/img/' + photo" alt="Profile photo" />
          </div>
          <button @click="deletePhoto(index)" class="text-red-500">
            <i class="fa-solid fa-circle-xmark  fa-2x"></i>
          </button>   
        </div> 
      </div>
      <div v-if="error" class="text-red-500 text-center my-4">
              {{ error}}
      </div>

      
    </div>
    <div class="lg:hidden fixed left-0 right-0 bottom-0 bg-gray-800 p-4">
        <GeneralMenuPhone />
      </div>  
  </div>
</template>



<style scoped>
strong, b {
  font-weight: bold;
}
.swiper-button-prev::after,
.swiper-button-next::after {
color: white; 
font-size: xx-large;
font-weight: 1000;
}
.swiper-button-prev, .swiper-button-next {
display: none;
}
.swiper-container:hover .swiper-button-prev,
.swiper-container:hover .swiper-button-next {
display: block;
}
</style>



<script>

import { useIdentitiesStore } from "@/stores/identities";
import { useInterestsStore } from "@/stores/interests";
import { useOrientationsStore } from "@/stores/orientations";
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

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

          activeIndex: 0,
          swiper: null,
          
      
    };

  },
  
  mounted() {
    
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: () => {
          this.activeIndex = this.swiper.realIndex;
        },
      },
    });



      if(!localStorage.getItem('CupidConnectToken')){

          this.$router.push('/');

      }
      this.fetchUser();   
  },
  methods: {

    setActiveIndex(index) {
      this.activeIndex = index;
      this.swiper.slideTo(index, 300);
    },
    prevSlide() {
      this.swiper.slidePrev();
    },
    nextSlide() {
      this.swiper.slideNext();
    },

    handlePicturesChange(event) {

      this.pictures = event.target.files;

    },

  clearErrorMessageAfterDelay() {
    
          setTimeout(() => {
              this.error = "";
          }, 5000);
      },

    getIdentity(identityId){
      return useIdentitiesStore().getIdentitiesById(identityId);
    },
    getInterest(interestId){
      return useInterestsStore().getInterestsById(interestId);
    },
    getOrientation(){
      const o = useOrientationsStore().getOrientationsById(this.selectedOrientation);
      return o;
    },
  
    
  async fetchUser(){

    try {
      const userId = this.$route.params.userId
        const token = localStorage.getItem('CupidConnectToken');   
        const dataf = {
              userId: userId, 
          };

          const dd = userId; debugger;
        const response = await axios.post('https://espacionebula.com:8000/get-user-visitor',dataf, {
          
          
            headers: {

              'Access-Control-Allow-Origin': '*',
              'Authorization': `Bearer ${token}`,
              
            },
            mode: 'cors',

        });
        
              const data = response.data;
                if(data.success){
                  
                  this._username = data.user._username
                  if (data.user.identities != '') { 
                    this.selectedIdentity = data.user.identities;
                  }
                  if (data.user._description != ''){
                    this.description = data.user._description; 
                  }
                  if (data.user._orientations != '') { 
                    this.selectedOrientation = data.user._orientations; 
                  }
                  this.selectedInterests = data.user._interests;
                  if (data.user._pictures.length > 0) { 
                    this.pictures = data.user._pictures; 
                  }

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

