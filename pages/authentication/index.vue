<template>
    <div class="min-h-screen min-w-screen h-screen ">
        <div class="w-1/3 bg-slate-800 bg-opacity-40 absolute right-0 p-3  min-h-full text-orange-100 font-sans font-extralight tracking-widest drop-shadow-xl flex flex-col justify-center items-center">
            <div class="w-5/6 mt-10">
                
                <form class="text-3xl leading-loose flex-col mb-3 mt-5" @submit.prevent="post_SignIn">
                    
                    <button class="w-full mb-3 mt-3" type="submit">Log In</button><br/>
                </form> 
            </div>
        </div>
    </div>
</template>

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