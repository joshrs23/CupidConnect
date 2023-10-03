<link href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap" rel="stylesheet">

<template>
  <div class=" grid col-4 flex items-center justify-center h-screen  text-white">
    
    <div class="white mx-40 text-5xl lg:text-9xl">
    
      <h1>Change Password</h1>

    </div>

    <div class="mx-40 lg:mx-72  md:text-md lg:text-lg">

        <label>

          <span class="block font-medium"> Please enter passwords: </span>

          <input class="block form-input border-black-300  mt-3 bg-black border border-gray"
          type="text" id="previousPassword" name="previousPassword" placeholder="Previous password" v-model="previousPassword" required>

          <input class="block form-input border-black-300  mt-3 bg-black border border-gray"
          type="text" id="newPassword" name="newPassword" placeholder="New Password" v-model="newPassword" required>

          <input class="form-input border-black-300  mt-3 bg-black border border-gray"
          type="text" id="confirmNewPassword" name="confirmNewPassword" placeholder="Confirm New Password" v-model="confirmNewPassword" required>

        </label>

    </div>

        <div class="w-32 mx-40 lg:mx-80 font-medium hover:bg-gray-700 p-5 text-lg flex justify-center border border-white-500 p-5">

        <button @click="changePasswordMessage"> Change Password </button>
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

    changePasswordMessage(){
      this.message = 'You have changed your password';
    }
  },
};
</script>

<style scoped>
  h1 {
      font-family: 'Lovers Quarrel', serif;
  }


</style>
