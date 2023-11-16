<template>
  <div class="h-full w-screen text-white flex">
    <div class="hidden lg:block w-[25.53rem]">
      <GeneralMenu />
    </div>
    <div class="pl-10  md:ml-[20rem] lg:pl-32 my-10 w-5/6 ">
      <div class=" border-black-300 rounded-3xl bg-black grid lg:grid-rows-2 mx-auto">
        <div class=" w-[70%] sm:w-[30%] md:w-[40%]">
          <div class="lg:pt-10 overflow-hidden relative">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div v-for="(photo, index) in pictures" :key="index" class=" lg:p-15 white swiper-slide">
                  <img :src="'https://espacionebula.com/img/' + photo" alt="Profile photo" class="rounded-lg" />
                </div>
              </div>
              <div class="swiper-button-prev bg-transparent" @click="prevSlide"></div>
              <div class="swiper-button-next bg-transparent" @click="nextSlide"></div>
            </div>
            <div class="bg-transparent flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
              <button
                v-for="(index) in pictures"
                :key="index"
                type="button"
                class="w-3 h-3 rounded-full"
                :aria-current="index === activeIndex"
                :aria-label="'Slide ' + (index + 1)"
                @click="setActiveIndex(index)"
              ></button>
            </div>
          </div>
        </div>
        <div class="col-span-1  lg:ml-3  lg:mt-5">
          <div class="text-xl md:text-3xl lg:text-5xl mb-4" type="text"><b>{{_username}}</b></div>

          <div class="text-xl leading-6 lg:text-4xl" type="text"><b>About</b></div>  
          <div class="my-4 lg:ml-8 text-lg lg:text-2xl">{{description}}</div>

          <div class="text-xl leading-6 lg:text-4xl" type="text"><b>Identity</b></div>
          <div class="my-4 lg:ml-8 text-lg lg:text-2xl">{{getIdentity(selectedIdentity)}}</div>

          <div class="text-xl leading-6 lg:text-4xl" type="text"><b>Orientation</b></div>
          <div class="my-4 lg:ml-8 text-lg lg:text-2xl">{{getOrientation(selectedOrientation)}}</div>
          
          <div class="text-xl leading-6 lg:text-4xl" type="text"><b>Interests</b></div>
          <div            
              v-for="interest in selectedInterests"
              :key="interest"
              class=" my-4 mx-8 lg:text-2xl pl-[12px] pr-[12px] mr-[3.5px] ml-[3.5px] rounded-3xl bg-black border border-gray rounded-xl  inline-block"
            >
              {{ getInterest(interest) }}
          </div>
          <div class="text-left text-2xl pt-10">
          <NuxtLink to="profile/edit">
            <button class=" hover:bg-gray-700 text-white font-bold italic py-2 px-4 rounded">
              Edit Info
            </button>
          </NuxtLink>
        </div>
        </div>
      </div>
    </div>
    
    <div class="lg:hidden fixed left-0 right-0 bottom-0 bg-gray-800">
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
      this._username = localStorage.getItem('CupidConnectuser');
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
        
              const data = response.data;
                if(data.success){
                  
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

