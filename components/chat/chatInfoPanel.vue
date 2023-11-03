<template>
    <div class="chat-info-panel p-4 border-b">
      <div class="flex items-center space-x-4" v-if="finalUser">
        <div class="flex-shrink-0">
          <img :src="'https://espacionebula.com/img/' + finalUser._profilePicture" alt="Profile" class="w-20 h-20 rounded-full object-cover">
        </div>
        <div class="flex-grow">
          <h2 class="text-5xl font-semibold text-white">{{ finalUser._fname }}</h2>
        </div>
        <p class="text-gray-500 text-7xl font-bold">{{ getAge(finalUser) }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/users'
  import axios from 'axios';


  export default {
    data() {
      return {
        userIDID : useRoute().params.id,
        finalUser : '',
      };
    },
    created: async function () {
      this.finalUser = await this.getUserById(this.userIDID);
      console.log(this.finalUser);
    },
    props: {
      user: Object, 
    },
    methods: {
      async getUserById(userIdProp){
        try {
          const _userId = userIdProp;
          const token = localStorage.getItem("CupidConnectToken");
          const dataf = {
            userId: _userId,
          };
          const response = await axios.post( "https://espacionebula.com:8000/get-user-visitor",
            dataf,
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
              },
              mode: "cors",
            }
          );
          const data = response.data;
          if (data.success) {
            return data.user;
          } else {
            console.log(
              "There was an error with the user : " + response.data.error
            );
          }
        } catch (error) {
          console.error("Error in fetchUser:", error);
        }
      },
      getAge(userUSER){
        const dob = new Date(userUSER._dob);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
          age--;
        }
        return age;
      }
    }
  };
  </script>
  
  <style scoped>
  .chat-info-panel {
    background-color: transparent;
  }
  </style>
  