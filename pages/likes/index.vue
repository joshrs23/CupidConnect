<template>
  <div class="h-screen w-screen text-white flex">
    <div class="lg:hidden">
      <GeneralMenuPhone />
    </div>
    <div class="hidden lg:block w-1/6">
      <GeneralMenu />
    </div>
    <div class="w-full lg:w-5/6 relative h-full overflow-scroll">
      <ul class="w-full flex justify-center h-fit text-3xl p-5 mt-5">
        <li
          class="likesTitle p-5 font-bold cursor-pointer"
          :style="{ fontWeight: isLikesActive ? 'bold' : 'normal' }"
        >
          <a @click="likesTabActive(true, false)"> Likes </a>
        </li>
        <li class="w-[3px] bg-[#686262]" />
        <li
          class="likeSentActive p-5 cursor-pointer"
          :style="{ fontWeight: isLikesActive ? 'normal' : 'bold' }"
        >
          <a @click="likesTabActive(false, true)"> Likes sent </a>
        </li>
      </ul>
      <div v-if="showProspects" class="w-full flex justify-center flex-wrap">
        <PosterCard
          v-for="(prospect, index) in prospectsToDisplay"
          class="m-1"
          :key="index"
          :index="index"
          :prospect="prospect"
          :isLikesActive="isLikesActive"
          @dismissed="removeProspect(index)"
        />
      </div>
      <div v-else class="w-full h-[70%]">
        <div class="flex items-center justify-center h-full">
          <div class="text-center text-gray-500 text-2xl">
            <i class="fas fa-street-view fas-2xl text-4xl mb-4"></i>
            <p v-if="isLikesActive">
              No one has liked you, <br />please continue to swipe!
            </p>
            <p v-else>You haven't like someone, <br />please start to swipe!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import PosterCard from "@/components/general/generalPosterCard.vue";
import { useUserStore } from "@/stores/users";
import axios from "axios";

export default {
  data() {
    return {
      isLikesActive: true,
      isLikeSentActive: false,
      prospectsLiked: [],
      prospectsLikedSent: [],
      showProspects: false,
    };
  },
  mounted() {},
  created: async function () {
    this.prospectsLiked = await this.getWhoLikedUsers();
    this.prospectsLikedSent = await this.getLikedByUsers();
    if(this.prospectsLiked && this.prospectsLiked.length>0){
      this.showProspects = true;
    }
  },
  computed: {
    prospectsToDisplay() {
      if (this.isLikeSentActive) {
        return this.prospectsLikedSent;
      } else if (this.isLikesActive) {
        return this.prospectsLiked;
      } else {
        this.showProspects = false;
        return [];
      }
    },
  },
  components: {
    PosterCard,
  },
  methods: {
    async getWhoLikedUsers() {
      try {
        const _userId = localStorage.getItem("CupidConnectId");
        const token = localStorage.getItem("CupidConnectToken");
        const dataf = {
          _liked_userId: _userId,
        };
        const response = await axios.post(
          "https://espacionebula.com:8000/get-likes-to-user",
          dataf,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token}`,
            },
            mode: "cors",
          }
        );
        const data = response.data;
        if (data.success) {
          return data.usersWhoLiked;
        } else {
          console.log(
            "There was an error with the user : " + response.data.error
          );
        }
      } catch (error) {
        console.error("Error in fetchUser:", error);
      }
    },
    async getLikedByUsers() {
      try {
        const _userId = localStorage.getItem("CupidConnectId");
        const token = localStorage.getItem("CupidConnectToken");
        const dataf = {
            liker_userId: _userId,
        };
        const response = await axios.post(
          "https://espacionebula.com:8000/get-likes-user",
          dataf,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token}`,
            },
            mode: "cors",
          }
        );
        const data = response.data;
        if (data.success) {
          return data.usersWhoILiked;
        } else {
          console.log(
            "There was an error with the user : " + response.data.error
          );
        }
      } catch (error) {
        console.error("Error in fetchUser:", error);
      }
    },
    async likesTabActive(likesActive, likeSentActive) {
      if (likesActive) {
        this.prospectsLiked = await this.getWhoLikedUsers();
        if (this.prospectsLiked.length > 0) {
          this.showProspects = true;
        }
      } else {
        this.prospectsLikedSent = await this.getLikedByUsers();
        if (this.prospectsLikedSent.length > 0) {
          this.showProspects = true;
        }
      }
      this.isLikesActive = likesActive;
      this.isLikeSentActive = likeSentActive;
    },
    removeProspect(index) {
      console.log("aqui");
      this.prospectsToDisplay.splice(index, 1);
      if (this.prospectsToDisplay.length === 0) {
        this.showProspects = false;
      }
    },
  },
};
</script>

