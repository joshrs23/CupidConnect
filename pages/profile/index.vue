<!-- <template>
    <div class=" h-screen w-screen text-white flex ">
        <div class="lg:hidden">
            <GeneralMenuPhone />
        </div>
        <div class="hidden lg:block w-1/6">
            <GeneralMenu />
        </div>
        <div class="text-center">
            Profile
        </div>
    </div>
</template> -->
<template>
    <div>
      <ion-icon id="dislike" name="heart-dislike"></ion-icon>
      <div id="swiper">
        <Card v-for="(prospect, index) in prospects" :key="index" :prospect="prospect" />
      </div>
      <ion-icon id="like" name="heart"></ion-icon>
    </div>
  </template>
  
  <script>
  import Card from '@/components/general/generalCard.vue'; // Adjust the import path as needed
  import { getArrayOfProspects } from '../../stores/users'

  export default {
    components: {
      Card,
    },
    data() {
      return {
        prospects: getArrayOfProspects()

      };
    },
  };
  </script>
  