<template>
    <div class="chat-list">
      <div class="mx-auto">
        <div v-for="(user, index) in users" :key="index" class="chat-item">
          <nuxt-link :to="'/chats/' + user.userId" class="no-underline">
            <div class="flex items-center space-x-4 p-4 border-b">
              <div class="flex-shrink-0">
                <img :src="user.profilePicture" alt="Profile" class="w-12 h-12 rounded-full">
              </div>
              <div class="flex-grow">
                <h2 class="text-lg font-semibold text-white">{{ user.name }}</h2>
                <p class="text-gray-500">@{{ user.userId }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
            {
                name: 'John Doe',
                userId: 'john_doe123',
                profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            },
            {
                name: 'Jane Smith',
                userId: 'jane_smith456',
                profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            },
            {
                name: 'Alice Johnson',
                userId: 'alice_johnson789',
                profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            },
            {
                name: 'Bob Brown',
                userId: 'bob_brown010',
                profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            },
            {
                name: 'Ella Davis',
                userId: 'ella_davis789',
                profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            },
            {
                name: 'Michael Johnson',
                userId: 'michael_johnson007',
                profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            },
            {
                name: 'Olivia Williams',
                userId: 'olivia_williams123',
                profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            },
            {
                name: 'David Smith',
                userId: 'david_smith456',
                profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            },
            {
                name: 'Sophia Brown',
                userId: 'sophia_brown789',
                profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            },
        ],
      };
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
  