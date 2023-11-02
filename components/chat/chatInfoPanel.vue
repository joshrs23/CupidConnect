<template>
    <div class="chat-info-panel p-4 border-b">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img :src="user.profilePicture" alt="Profile" class="w-20 h-20 rounded-full object-cover">
        </div>
        <div class="flex-grow">
          <h2 class="text-5xl font-semibold text-white">{{ user.name }}</h2>
        </div>
        <p class="text-gray-500 text-7xl font-bold">{{ user.age }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object, 
    },
  };
  </script>
  
  <style scoped>
  .chat-info-panel {
    background-color: transparent;
  }
  </style>
  