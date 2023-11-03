<template>
    <div class="chat-list">
      <div class="mx-auto">
        <div v-for="(user, index) in users" :key="index" class="chat-item">
          <nuxt-link :to="'/chats/' + user._username" class="no-underline">
            <div class="flex items-center space-x-4 p-4 border-b">
              <div class="flex-shrink-0">
                <img :src="user._profilePicture" alt="Profile" class="w-12 h-12 rounded-full object-cover">
              </div>
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-white">{{ user._fname }}</h2>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/users'

  export default {
    data() {
      return {
        users: []
      };
    },
    created() {
      this.users = useUserStore().getArrayOfChatHistoryProspects()
    },
  };
  </script>
  
  <style scoped>
  .chat-list {
    max-height: 100vh;
    overflow-y: auto;
  }
  
  .chat-item:hover {
    background-color: #68626264;
  }
  </style>
  