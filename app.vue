<template>
  <div class="app-container">
      <div class="containerNav grid grid-cols-12">
        <div class="col-span-12">
          <navbar class="" v-if=" $route.name != 'authentication'"/>
        </div>
    </div>
    <div class="content-container grid grid-cols-12 min-h-screen">
      <div class="dos col-span-12">
        <NuxtPage class="pb-8"/>
      </div>
    </div>
    
  </div>
</template>

<script>


export default defineComponent({
  components: {
    
  },
})
</script>


<style>

  .container {
    
    height: fit-content;
    min-height: 100vh;
    min-width: 100vw;
    width: 100vw;
    z-index: -1;
  }
 
  .app-container {
    min-height: 100vh;
  }
  .content-container {
    flex-grow: 1;
  }
</style>