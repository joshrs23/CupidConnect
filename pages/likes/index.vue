<template>
    <div class=" h-screen w-screen text-white flex ">
        <div class="lg:hidden">
            <GeneralMenuPhone />
        </div>
        <div class="hidden lg:block w-1/6">
            <GeneralMenu />
        </div>
        <div class="w-full lg:w-5/6 relative">
            <ul class="w-full flex justify-center h-fit text-3xl p-5 mt-5">
                <li class="likesTitle p-5 font-bold" :style="{ fontWeight: isLikesActive ? 'bold' : 'normal' }">
                    <a @click="likesTabActive(true, false)">
                        Likes
                    </a>
                </li>
                <li class="w-[3px] bg-[#686262]"/>
                <li class="likeSentActive p-5" :style="{ fontWeight: isLikesActive ? 'normal' : 'bold' }">
                    <a @click="likesTabActive(false, true)">
                        Likes sent
                    </a>
                </li>
            </ul>
            <div class="w-full flex justify-center" v-if="isLikesActive">
                People who like you
            </div>
            <div class="w-full flex justify-center" v-if="isLikeSentActive">
                Likes you sent
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>

export default {
    data() {
        return {
            isLikesActive : true,
            isLikeSentActive : false,
            prospectsLiked:[],
            prospectsLikedSent: [],
        }
    },
    mounted() {
        
    },
    computed: {

    },
    methods: {
        likesTabActive(likesActive, likeSentActive) {
            this.isLikesActive = likesActive;
            this.isLikeSentActive = likeSentActive;
        },
    }
}
</script>
