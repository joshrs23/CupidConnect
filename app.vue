<template>
  <div class="app-container bg-black">
      <div class="containerNav grid grid-cols-12">
        <div class="col-span-12">
          <menu class="" v-if=" $route.name != 'authentication'"/>
        </div>
    </div>
    <div class="content-container grid grid-cols-12 min-h-screen">
      <div class="dos col-span-12">
        <NuxtPage class=""/>
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
  /* Reset all styles for all elements */
* {
  margin: 0;
  padding: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  box-sizing: border-box;
  border-color:#686262;
}

/* Additional resets for specific elements if needed */
/* For example, removing list styles from ul and ol */
ul, ol {
  list-style: none;
  padding-left: 0;
}

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