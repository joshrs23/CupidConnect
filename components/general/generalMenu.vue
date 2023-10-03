<template>
  <div class="flex flex-col menuOverall p-4 cont">
    <div class="w-fit mx-auto">
      <ul class="flex flex-col">
        <li class="mb-4"><nuxt-link to="/" class="w-3/4"><img :src="logo" class="h-16"/></nuxt-link></li>
        <li :class="{ 'font-bold': isProfileRoute }"><nuxt-link to="/profile"><i class="fas fa-user"></i> Profile</nuxt-link></li>
        <li :class="{ 'font-bold': isLikesRoute }"><nuxt-link to="/likes"><i class="fas fa-heart"></i> Likes</nuxt-link></li>
        <li :class="{ 'font-bold': isChatsRoute }"><nuxt-link to="/chats"><i class="fas fa-comments"></i> Chats</nuxt-link></li>
        <li :class="{ 'font-bold': isHomeRoute }"><nuxt-link to="/"><i class="fas fa-home"></i> Home</nuxt-link></li>
      </ul>
    </div>
    <div class="mx-auto">
      <button @click="showMenu"> <i class="fa-solid fa-bars"></i> Menu </button>
      <ul id="hiddenMenu" class="relative">
          <li v-if="isListVisible && !isLogin" class="hover:bg-gray-700 text-xs"> <NuxtLink to="Login">LogIn</NuxtLink></li>
          <li v-if="isListVisible && !isLogin" class="hover:bg-gray-700 text-xs"> <NuxtLink to="/admin/users/add-user">SignUp</NuxtLink></li>
          <li v-if="isListVisible && isLogin" class="hover:bg-gray-700"> <NuxtLink to="logout" @click="logout">Logout</NuxtLink></li>          
          <li v-if="isListVisible && isLogin" class="hover:bg-gray-700"> <NuxtLink to="/user/DeleteProfile">DeleteProfile</NuxtLink></li>   
          <li v-if="isListVisible && isLogin" class="hover:bg-gray-700 text-xs"> <NuxtLink to="/user/changePassword">Change Password</NuxtLink></li>  
      </ul>
    </div>
  </div>
</template>

<style scoped>
.cont {
  border-right: 1px solid #686262;
}
* {
  color: white;
  list-style: none;
  font-size: 1.5rem;
  line-height: 2rem;
}
.menuOverall {
  height: 100%;
  justify-content: space-between;
}
li {
  margin-top: 0.5rem !important;
  width: fit-content;
}
i {
  min-width: 35px;
}
/* Remove underlines from anchor elements within li */
li a {
  text-decoration: none;
  color: inherit; /* Inherit the color from the parent li */
}
</style>

<script>
import logo from '@/assets/logoCupid.svg'
import { useUserStore } from '../../stores/users'

export default {
  data() {
    return {
      logo: logo,
      isListVisible: false,
      isLogin: false,
      userData : useUserStore(),
    }
  },
  mounted() {

        if(localStorage.getItem('CupidConnectToken')){

            this.isLogin = true;

        }    
      
    },
  computed: {
    isProfileRoute() {
      return this.$route.path.startsWith('/profile');
    },
    isLikesRoute() {
      return this.$route.path.startsWith('/likes');
    },
    isChatsRoute() {
      return this.$route.path.startsWith('/chats');
    },
    isHomeRoute() {
      return this.$route.path === '/';
    },
  },
  methods: {
      showMenu(){

        this.isListVisible = !this.isListVisible;
    },
    logout() {

        this.userData.logOutUser();
        this.$router.push('/logout');

    }
  }
}
</script>
