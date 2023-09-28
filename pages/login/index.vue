<link href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap" rel="stylesheet">
<link href="../../../assets/styles.css" rel="stylesheet">



<template>
<div class="container mx-auto mt-4">
  <div class="grid grid-cols-12 gap-5">
    <div id="logo" class="col-span-12 bg-black-200 p-4 flex justify-center md:col-span-7">
      <h2 class="text-x1 font-semibold"><img src="@/img/logo.svg" alt="frameIcon" /></h2>
    </div>

    
    <div id="content" class="col-span-12 bg-black p-4 lg:border-l white h-full md:col-span-5 md:border-l">
      <h2 id="Login" class="text-xl font-semibold text-white flex flex-col justify-center items-center">Log in</h2>

      
      <form class=" md:mt-8 md:pr-20% text-white">
        <div class="mb-8">
          <input type="text" id="username" name="username" class="form-input mt-1 block w-10/12 border-black-300 border-b white" placeholder="Username">
        </div>

        <div class="mb-8">
          <input type="password" id="password" name="password" class="form-input mt-1 block w-10/12  border-gray-300 border-b white" placeholder="Password">
        </div>


         <div id="arrow-right" class="mt-4">
          <button  @click="goToAddUser" type="submit">
            <img src="@/img/arrow-right.png" alt="arrowIcon" />
          </button>
        </div>

          <div id="btnRegister" class="flex justify-center items-center mb-4">
            <label for="registerButton" class="cursor-pointer">
              <button id="registerButton" type="submit" class="bg-black-200 text-white flex items-center">
                Register
                <img src="@/img/arrow-right.png" alt="arrowIcon" class="mx-2" />
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
    #arrow-right{
      margin-left: 76%;
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
    #Login{
    padding-top: 1.5em;
    margin-bottom: 15%;
    font-size: 5em;
    font-family: 'Lovers Quarrel', serif;
    font-weight: normal;
  }
    
    #btnRegister{
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      justify-content: center;
      font-size: 3em; 
      margin-top: 50%;
      margin-left: 1.5em;
      font-family: 'Lovers Quarrel', serif;
      font-weight: normal;
    }


    input{
      background-color: black;
    }
    input::placeholder{
        color: white;
        font-size: 1.5em;
    }

  </style>
  <script lang="ts">
//bg-black bg-opacity-70
    import { defineComponent, ref} from 'vue';
    import axios from 'axios';

    export default defineComponent({
        components: {
            
        },
        mounted(){

        },
        data(){
            return {
            
            }
        },
        methods:{

          goToAddUser(){
            
          },
            
            async post_SignIn() {

                try {


                } catch (error) {

                    console.error("error exploto aca"+error)

                }

            },
        },
        setup() {

        },
    });
</script>

