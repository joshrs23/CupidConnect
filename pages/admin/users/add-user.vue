<link href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap" rel="stylesheet">
<link href="../../../assets/styles.css" rel="stylesheet">




<template>
    <div class="container mx-auto mt-4">
  <div class="grid grid-cols-12 gap-5">

    <div id="logo" class="col-span-12 md:col-span-7 bg-black-200 p-4 flex justify-center">
      <h2 class="text-xl font-semibold"><img src="@/img/logo.svg" alt="frameIcon" /></h2>
    </div>

    <div id="content" class="col-span-12 bg-black p-4 lg:border-l white h-full md:col-span-5 md:border-l">
      <h2 id="Register" class="text-xl font-semibold text-white flex flex-col justify-center items-center">Register</h2>


        <form class="mt-8 md:mt-8 md:pr-20% text-white">
        <div class="mb-8">
          <input type="text" id="username" name="username" class="form-input mt-1 block w-10/12 border-black-300 border-b white" placeholder="Username" v-model="username" required>
        </div>
  
        <div class="mb-8">
          <input type="password" id="password" name="password" class="form-input mt-1 block w-10/12 border-black-300 border-b white" placeholder="Password"  v-model="password" required>
        </div>
        <div class="mb-8">
          <input type="password" id="confirmationPassword" name="confirmationPassword" class="form-input mt-1 block w-10/12 border-black-300 border-b white" placeholder="Confirm Password" v-model="confirmPassword" required>
        </div>
        <div class="mb-8">
          <input type="text" id="firstName" name="firstName" class="form-input mt-1 block w-10/12 border-black-300 border-b white" placeholder="First name" v-model="firstName" required>
        </div>
        <div class="mb-8">
          <input type="text" id="lastName" name="lastName" class="form-input mt-1 block w-10/12 border-black-300 border-b white" placeholder="Last name" v-model="lastName" required>
        </div>
        <div class="mb-8 grid grid-cols-12 items-center relative">
          <input type="text" id="birthDate" name="birthDate" class="form-input col-span-9 block border-black-300 border-b white" placeholder="Date of birth" v-model="birthDate" required>
          <img src="@/img/calendar.png" alt="calendarImg" class="col-span-3 mb-2 h-8 w-8"/>
        </div>

        <div id="arrow-right" class="mt-4">
          <button type="submit">
            <img src="@/img/arrow-right.png" alt="arrowImg" />
            <nuxt-link to="admin/users/add-user?username=&password=&password=&password=&password=&password="></nuxt-link>
          </button>
        </div>

        <div id="btnLogin" class="flex justify-center items-center mb-4">
          <label class="cursor-pointer">
            <button  type="submit" @click="goToLogin" class="bg-black-200 text-white flex items-center">
            <img src="@/img/arrow-left.png" alt="arrowImg" class="mx-2" />
            <nuxt-link to="/Login">Login</nuxt-link>
            
            </button>
          </label>
        </div>
      </form>
    </div>
  </div>
</div>
</template>


<style>
    #content{
      margin-left: 5%;
      @screen lg {
      margin-left: 23%;
  }
    }

    div{
      line-height: 1em; 
      background-color: black;
    }
    #logo{
      margin-left: 3em;
      align-items: center; 
      background-color: black;
      color: white;
    }
    icon {
    font-size: 24px;
    color: white;
    }
    #Register{
    padding-top: 1.5em;
    font-size: 5em;
    font-family: 'Lovers Quarrel', serif;
    font-weight: normal;
  }
  #arrow-right{
    margin-left: 76%;
  }
    
    #btnLogin{
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      justify-content: center;
      font-size: 4em; 
      margin-top: 2.5em;
      margin-left: 1.5em;
      font-family: 'Lovers Quarrel', serif;
      font-weight: normal;
      margin-inline-start: 3%;
    }

    form{
        padding-top: 5em;
    }
    input{
      background-color: black;
    }
    input::placeholder{
        color: white;
        font-size: 1.5em;
    }

</style>

  
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
      goToLogin(){
        this.$router.go('/Login');
      },
      
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
  