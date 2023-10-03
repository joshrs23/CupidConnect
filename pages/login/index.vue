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

      
      <form class=" md:mt-8 md:pr-20% text-white" @submit.prevent="login">

        <div class="mb-8">
          <input type="email" id="username" name="username" class="form-input mt-1 block w-10/12 border-black-300 border-b white" placeholder="Username" v-model="username" required>
        </div>

        <div class="mb-8">
          <input type="password" id="password" name="password" class="form-input mt-1 block w-10/12  border-gray-300 border-b white" placeholder="Password" v-model="password" required>
        </div>

        <!-- error -->
        <div v-if="error" class="text-red-500 text-center my-4">
          {{ error }}
        </div>

        <div id="arrow-right" class="mt-4">
          <button  type="submit">
            <img src="@/img/arrow-right.png" alt="arrowIcon" />
          </button>
        </div>

      </form>
      
      <div id="btnRegister" class="flex justify-center items-center mb-4">
        <label for="registerButton" class="cursor-pointer">
          <button id="registerButton" type="submit" class="bg-black-200 text-white flex items-center">
           <nuxt-link to="admin/users/add-user">Register</nuxt-link>
            <img src="@/img/arrow-right.png" alt="arrowIcon" class="mx-2" />
          </button>
        </label>  
      </div>
   

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
      margin-top: 55%;
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

    import { defineComponent, ref} from 'vue';
    import { useUserStore } from '../../stores/users'
    import axios from 'axios';

    export default defineComponent({      
        components: {
            
        },
        created() {

          
          
        },
        mounted() {

          if(localStorage.getItem('CupidConnectToken')){
              this.$router.push('/home');
          }        
          
        },
        data(){
            return {
              
              username : '',
              password : '',
              wrongPass: false,
              error : '',
              userData : useUserStore(),

            }
        },
        methods:{

          /*goToAddUser(){
            this.$router.push('admin/users/add-user?username=&password=&password=&password=&password=&password=');
          },*/
            
            async login() {

                try {

                      
                      const data = {

                        _email: this.username,
                        _password: this.password

                      };

                      const response = await axios.post('https://espacionebula.com:8000/sign-in', data, {

                      headers: {

                        'Access-Control-Allow-Origin': '*',

                      },
                      mode: 'cors',

                    });

                    //console.log(response); debugger;

                    if(response.data.success){

                      //crear variable de sesion
                      //mover a principal
                      this.wrongPassword = false;
                      localStorage.setItem('CupidConnectToken', response.data.token);
                      localStorage.setItem('CupidConnectEmail', response.data.user._email);
                      localStorage.setItem('CupidConnectuser', response.data.user._username);
                      localStorage.setItem('CupidConnectType', response.data.user._type);
                      localStorage.setItem('CupidConnectId', response.data.user._id);
                      this.userData.setEmail(localStorage.getItem('CupidConnectEmail'));
                      this.userData.setuser(localStorage.getItem('CupidConnectuser'));

                      //console.log(localStorage.getItem('CupidConnectToken')+" "+localStorage.getItem('CupidConnectId')+" "+localStorage.getItem('CupidConnectType'));debugger;
                      this.$router.push('/');
                      

                    }else{

                      this.wrongPass = true;
                      this.error = response.data.error;
                      console.log(response.data.error);
                    
                    }

                } catch (error) {

                    console.error("error exploto aca"+error)

                }

            },
        },
        setup() {

        },
    });
</script>

