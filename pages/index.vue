<template>
  <div class=" min-h-screen flex items-center justify-center">
    <div class="text-white text-center ">
      <div class=" relative min-h-screen bg-black/50 w-screen text-left flex  flex-col justify-center p-32	 ">
        <div ref="title" class="transition-opacity duration-1000 opacity-0 ">
          <h1 class="text-9xl font-bold gradient-title">&nbsp;&nbsp;CupidConnect Index</h1>
          <p class="text-4xl mb-8 font-bold "> hola prueba cupid 1.</p>
        </div>
        <div class="column-2 sm: column-3 gap-6">
            <input type="text" class="username" name="username" value="Username">
            <input type="text" class="password" name="username" value="Password">
          </div>
      </div>
      <div class="h-96 min-w-screen shadow-inner shadow-lg shadow-black/50 bg-black/75 flex">
        <div class="w-1/2 h-full flex items-center justify-center">
          
          
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

  .mb-6{
      display: grid;
    }
    .username{
      background-color: black;
    }
    .password{
      background-color: black;
    }
</style>

  <script>
  import { defineComponent } from '@vue/composition-api'

  export default defineComponent({
    data() {
      return {
        
      }
    },
    mounted() {
      
    },
    methods: {
      
    },
    beforeDestroy() {
    
  }
  })
  </script>
  