<template>
  <div class="app-container bg-black">
      <div class="containerNav grid grid-cols-12">
        <div class="col-span-12">
          
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
  /* html, body {
  overflow: hidden;
} */
* {
  margin: 0;
  padding: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  box-sizing: border-box;
  border-color:#686262;
  color: #FFF5F5;
  font-family: Inter;
  line-height: normal;
  font-style: normal;
}
ul, ol {
  list-style: none;
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