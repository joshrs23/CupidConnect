<template>
  <div>
    <div class="flex min-h-screen min-w-screen">
      <div class="lg:hidden">
        <GeneralMenuPhone />
      </div>
      <div class="hidden lg:block w-1/6 z-20">
        <GeneralMenu />
      </div>
      <div class="w-5/6 relative">
        <div v-if="showProspects">
            <div id="swiper" class="mt-10 translate-x-1/4 ">
              <Card v-for="(prospect, index) in prospects" 
              :key="index" 
              :index="index"
              :prospect="prospect" 
              :style="{ 'z-index': (index*-1) }"
              @dismissed="removeProspect(index)"
              />
            </div>
        </div>
        <div v-else>
          <div class="h-screen w-full">
            <div class="flex items-center justify-center h-full">
              <div class="text-center text-gray-500">
                <i class="fas fa-street-view fas-2xl text-4xl mb-4"></i> 
                <p class="text-2xl">
                  No more prospects were found at this moment, <br/>please reload the page soon!
                </p>
              </div>
            </div>
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
  import Card from '@/components/general/generalCard.vue'; // Adjust the import path as needed
  import { useUserStore } from '@/stores/users'

  export default {
    data() {
      return {
        activeCardIndex: 0,
        isListVisible: false,
        prospects: [],
        showProspects: true
      };
    },
    computed: {
      
    },
    components: {
      Card,
    },
    methods: {
      removeProspect(index) {
        this.prospects.splice(index, 1);
        if (this.prospects.length === 0) {
          this.showProspects = false;
        }
      },
      showMenu(){
        this.isListVisible = !this.isListVisible;
    },
      
    },
    created() {
      this.prospects = useUserStore().getArrayOfProspects()
    },
    watch: {
      prospects: {
        handler(newProspects, oldProspects) {
          console.log('Prospects changed:', newProspects);
        },
        deep: true,
      },
    },
  };
  </script>
  
  <style scoped>
 
  </style>