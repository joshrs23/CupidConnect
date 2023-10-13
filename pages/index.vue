<template>
  <div>
    <div class="flex min-h-screen">
      <div class="lg:hidden">
        <GeneralMenuPhone />
      </div>
      <div class="hidden lg:block w-1/6 z-20">
        <GeneralMenu />
      </div>
      <div class="w-4/6 relative">
        <div>
            <div id="swiper" class=" translate-x-1/2 translate-y-1/2">
              <Card v-for="(prospect, index) in prospects" 
              class=""
              :key="index" 
              :index="index"
              :prospect="prospect" 
              />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<style scoped>

</style>

  <script>
  import Swiper from 'swiper';
  import Card from '@/components/general/generalCard.vue'; // Adjust the import path as needed
  import { useUserStore } from '@/stores/users'

  export default {
    data() {
      return {
        isListVisible: false,
        prospects: useUserStore().getArrayOfProspects()
      };
    },
    computed: {
      sortedProspects() {
    return this.prospects.slice().sort((a, b) => b.id - a.id);
  },
    },
    components: {
      Card,
    },
    methods: {
      showMenu(){
        this.isListVisible = !this.isListVisible;
    },
      
    },
    beforeDestroy() {
    
  }
  };
  </script>
  
  <style scoped>
  *{
    color: white;
  }
  </style>