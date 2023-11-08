<template>
  <div class="h-full w-full text-white bg-black min-w-screen">
    <div class="flex justify-center items-center logoEdit">
      <h2><img src="@/img/logo.svg" alt="frameIcon"/></h2>
    </div>
    <div class="grid grid-rows grid-flow-col gap-4 mx-10 sm:mx-20 lg:mx-40">
      <div class="">
        <form @submit.prevent="submitFormInterests">
          <div class="p-8">
            <label class="relative block">
              <span
                class="block text-2xl sm:text-m lg:text-5xl lg:pl-25 xl:px-28 lg:pt-18"
                >Please provide us with your <b>interests</b>.</span
              >
              <div class="block w-full w-full md:8/12 xl:pl-32 pt-12">
                <label class="block lg:text-3xl lg:pr-12 lg:pt-18 pt-12"
                  >Select minimum 3 and maximum 10. </label
                >
                <label class="text-red-700" v-if="showWarning">You have to select 3 or maximum 10!</label>
                <div class="flex flex-wrap">
                  <div
                    class="p-2 m-2 border-2 rounded-full border-[#686262] cursor-pointer"
                    v-for="interest in interestsData"
                    :id="interest._id"
                    :key="interest._id"
                    :value="interest._id"
                    @click="changeInterestStatus(interest)"
                  >
                    {{ interest.name }}
                  </div>
                </div>
              </div>
            </label>
            <div class="lg:mt-4 text-right pr-10 xl:pr-30">
              <button id="" type="submit">
                <i class="fa-solid fa-arrow-right fa-2x"></i>
              </button>
            </div>
            <div v-if="error" class="text-red-500 text-center my-4">
              {{ error }}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
strong,
b {
  font-weight: bold;
}
</style>
<style>
.logoEdit {
  width: 7.5em;
  height: 7em;
  margin-left: 20%;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      interestsData: [],
      error: "",
      interestSelected: [],
      showWarning: false,
    };
  },
  mounted() {
    if (!localStorage.getItem("CupidConnectToken")) {
      this.$router.push("/");
    }
    this._username = localStorage.getItem("CupidConnectuser");
    this.fetchInterests();
  },
  methods: {
    verify() {
      if (this.interestSelected.length < 3) {
        this.showWarning = true;
        return false;
      }
      return true;
    },
    clearErrorMessageAfterDelay() {
      setTimeout(() => {
        this.error = "";
      }, 5000);
    },
    async submitFormInterests() {
      if (this.verify(this.interestSelected)) {
        const _userId = localStorage.getItem("CupidConnectId");
        const token = localStorage.getItem("CupidConnectToken"); //para verificar id
        const dataf = {
          userId: _userId,
          newInterests: this.interestSelected,
        };
        const response = await axios.post(
          "https://espacionebula.com:8000/change-interest-user",
          dataf,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token}`,
            },
            mode: "cors",
          }
        );
        if (response.data.success) {
          this.$router.push("./validation-5");
        } else {
          this.error =
            "There was an error updating your interests : " +
            response.data.error;
          console.log(
            "There was an error updating your interests : " +
              response.data.error
          );
          this.clearErrorMessageAfterDelay();
        }
      }
    },
    async fetchInterests() {
      try {
        const response = await axios.get(
          "https://espacionebula.com:8000/get-interests",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "multipart/form-data",
            },
            mode: "cors",
          }
        );
        this.interestsData = response.data.interests; 
      } catch (error) {
      }
    },
    changeInterestStatus(interestName){
      const index = this.interestSelected.indexOf(interestName);
      if (index !== -1) {
        this.showWarning = false;
        this.interestSelected.splice(index, 1);
        var element = document.getElementById(interestName._id);
        element.style.backgroundColor = "transparent";
      }else{
        if(this.interestSelected.length == 10){
          this.showWarning = true;
          return;
        }
        this.showWarning = false;
        this.interestSelected.push(interestName);
        var element = document.getElementById(interestName._id);
        element.style.backgroundColor = "#686262";
      }
    },
  },
};
</script>