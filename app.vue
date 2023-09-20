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
    <footerbar class="shadow-md shadow-white"/>
  </div>
</template>

<script>
import Navbar from './components/navBar.vue'
import Footerbar from './components/footer.vue'

export default defineComponent({
  components: {
    Navbar,
    Footerbar
  },
})
</script>


<style>

*{
  scroll-behavior: smooth;
}

@keyframes moveGradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}


.gradient-title {
  font-weight: bold;
  background: linear-gradient(45deg, rgb(170, 225, 186),rgb(238, 173, 149), rgb(127, 142, 186), rgb(187, 199, 237), rgb(205, 230, 138), rgb(170, 225, 186),rgb(238, 173, 149));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite ;
  -webkit-background-clip: text;
  color: transparent;
}
  .bk{
    background: linear-gradient(45deg, rgb(170, 225, 186),rgb(238, 173, 149), rgb(127, 142, 186), rgb(187, 199, 237), rgb(205, 230, 138), rgb(170, 225, 186),rgb(238, 173, 149));
    background-size: 400% 400%;
    animation: gradient 15s ease infinite ;
  }
  .containerNav {
    background: linear-gradient(45deg, rgb(170, 225, 186),rgb(238, 173, 149), rgb(127, 142, 186), rgb(187, 199, 237), rgb(205, 230, 138), rgb(170, 225, 186),rgb(238, 173, 149));
    background-size: 400% 400%;
    animation: gradient 15s ease infinite ;
    height: fit-content;
    z-index: -1;
  }
  .containerNav::before {
    filter: blur(64px);    
  }
  .container {
    
    height: fit-content;
    min-height: 100vh;
    min-width: 100vw;
    width: 100vw;
    z-index: -1;
  }
  body{
    background: linear-gradient(45deg, rgb(170, 225, 186),rgb(238, 173, 149), rgb(127, 142, 186), rgb(187, 199, 237), rgb(205, 230, 138), rgb(170, 225, 186),rgb(238, 173, 149));
    background-size: 400% 400%;
    animation: gradient 15s ease infinite ;
  }
  body::before {
    filter: blur(64px);    
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .app-container {
    min-height: 100vh;
  }
  .content-container {
    flex-grow: 1;
  }
</style>