<link href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap" rel="stylesheet">

<template>
  <div class=" grid col-4 flex items-center justify-center h-screen  text-white">
    
    <div class="white mx-40 text-5xl lg:text-9xl">

      <h1>Delete Profile</h1>

    </div>

    <div class="mx-40 lg:mx-72  md:text-md lg:text-lg">

        <label>

          <span class="block font-medium"> Please to delete enter username: </span>

          <input class="form-input border-black-300  mt-3 bg-black border border-gray"
          type="text" id="username" name="username" placeholder="Username" v-model="username" required>

        </label>

    </div>

        <div class="w-32 mx-40 lg:mx-80  font-medium hover:bg-gray-700 p-5 text-lg flex justify-center border border-white p-5">

        <button @click="deleteMessage"> Delete </button>

    </div>

    <p class="text-white mx-40 lg:mx-64">{{message}}</p>
    
  </div>

</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {

    deleteMessage(){
      this.message = 'You have deleted your profile. Bye bye!';
    }
  },
};
</script>

<style scoped>
  h1 {
      font-family: 'Lovers Quarrel', serif;
  }


</style>
