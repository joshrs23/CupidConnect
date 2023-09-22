<link href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap" rel="styleLang">

<template>
    <div class="container mx-auto mt-4">
  <div class="grid grid-cols-12 gap-4">
    <!-- First Column (7 columns wide) -->
    <div id="logo" class="col-span-7 bg-black-200 p-4 flex justify-center">
      <h2 class="text-xl font-semibold">LOGO</h2>
     
    </div>

    <!-- Second Column (5 columns wide)
    <div id="content" class="col-span-5 bg-black p-4">
      <h2 id="Login" class="text-xl font-semibold text-white flex flex-col justify-center items-center ">Log in</h2>

      <!-- Form for Sign Up -->
      <form>
        <div class="mb-4">
          <input type="text" id="username" name="username" class="form-input mt-1 block w-full rounded-md border-black-300" placeholder="Username">
        </div>

        <div class="mb-4">
          <input type="password" id="password" name="password" class="form-input mt-1 block w-full rounded-md border-gray-300" placeholder="Password">
        </div>

        <div id="btnRegister" class="flex justify-center"> <!-- Added this flex container for centering -->
            <button  type="submit" class="bg-black-200 text-white">Register -></button>
          </div>
      </form>
    </div>
  </div>
</div>
</template>


<style>
    div{
      font-family: serif;
    }
    #logo{
        margin-top: 15em;
    }
    
#Login{
       margin-top: 3em;
        font-size: 2.5em;
        font-family: 'Lovers Quarrel', serif;
    }
    #btnRegister{
      font-size: 1.5em; 
      margin-top: 14em;
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