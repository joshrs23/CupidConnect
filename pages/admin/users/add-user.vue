<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-3xl font-bold mb-6">Registration</h2>
        <form @submit.prevent="submitForm">
          

          <div class="flex justify-end">
            <button type="submit" class="bg-indigo-500 text-white px-6 py-2 rounded font-semibold hover:bg-indigo-600">Register</button>
          </div>
          
        </form>
      </div>
    </div>
  </template>
  
  <script>

  import axios from 'axios';
  import Swal from 'sweetalert2'
  
  export default {
    data() {
      return {
        
      };
    },
    mounted() {
      
    },
    methods: {
      
      async submitForm() {

        
      },

    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 480px;
    margin: 0 auto;
  }
  
  </style>
  