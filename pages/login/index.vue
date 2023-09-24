@import url('https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap');
/images/arrow-right.png
/assets/styles.css;
 
<template>
    <div class="container mx-auto mt-4">
  <div class="grid grid-cols-12 gap-5">
    <div id="logo" class="col-span-7 bg-black-200 p-4 flex justify-center ">
      <h2 class="text-xl font-semibold">LOGO</h2>
    </div>


    <div id="content" class="col-span-5 bg-black p-4 border-l border-white h-full">
      <h2 id="Login" class="text-xl font-semibold text-white flex flex-col justify-center items-center ">Log in</h2>

      <form>
        <div class="mb-4">
          <input type="text" id="username" name="username" class="form-input mt-1 block w-full rounded-md border-black-300" placeholder="Username">
        </div>

        <div class="mb-4">
          <input type="password" id="password" name="password" class="form-input mt-1 block w-full rounded-md border-gray-300" placeholder="Password">
        </div>
         <button id="arrow-right" type="submit">
                <img src="@/images/arrow-right.png" alt="arrowIcon" />
          </button>

          <div id="btnRegister" class="flex justify-center items-center mb-4">
            <label for="registerButton" class="cursor-pointer">
              <button id="registerButton" type="submit" class="bg-black-200 text-white flex items-center">
                Register
                <img src="@/images/arrow-right.png" alt="arrowIcon" class="mx-2" />
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
      margin-left: 10em;
    }
    #arrow-right{
      margin-left: 20em;
    }
    div{
      font-family: 'Lovers Quarrel', serif;
      background-color: black;
    }
    #logo{
        padding-top: 15em;
        background-color: black;
        color: white;
    }
    icon {
    font-size: 24px;
    color: white;
    }
    
    #Login{
       padding-top: 2em;
        font-size: 2.5em;
        font-family: 'Lovers Quarrel', serif;
    }
    #btnRegister{
      font-size: 1.5em; 
      margin-top: 10em;
      margin-left: 2.5em;
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
<style scoped>
</style>