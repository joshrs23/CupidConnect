<template>

    <div class=" min-h-screen">

        <div class="grid grid-cols-12">

            <div id="menu" class="col-span-1 text-white mt-5% border border-white p-5">

                <button @click="showMenu" id="btnMenu" type="submit" class="hover:bg-gray-700 p-5 l-10">
                 Options
                </button>

                <ul v-if="isListVisible" id="hiddenMenu">

                    <li class="mt-5 mb-5 hover:bg-gray-700 p-5"> <NuxtLink to="Logout" @click="logout">Logout</NuxtLink></li>          
                    <li  class="hover:bg-gray-700 p-5"> <NuxtLink to="DeleteProfile">DeleteProfile</NuxtLink></li>     

                </ul>

            </div>
           
        </div>

    </div>

</template>

<style>



</style>

<style scoped>



</style>

<script>
    import { defineComponent, ref} from 'vue';
    import { useUserStore } from '../../stores/users'

      export default defineComponent({

        data() {

            return {

                isListVisible: false,
                userData : useUserStore(),

            };

        },
        created() {

          

        },
        mounted() {
          
            if(!localStorage.getItem('CupidConnectToken')){

                this.$router.push('/login');

            }

        },
        methods: {

            showMenu(){

                this.isListVisible = !this.isListVisible;

            },
            logout() {

                this.userData.logOutUser();
                this.$router.push('/');

            }
          
        },
        beforeDestroy() {


        
        }
      })
</script>
  