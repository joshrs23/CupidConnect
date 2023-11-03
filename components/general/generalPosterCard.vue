<template>
    <div class="w-[350px]">
        <div class="overflow-hidden cursor-pointer w-full h-[450px] rounded-xl relative">
            <img
            :src="'https://espacionebula.com/img/' + prospect._profilePicture"
            alt="Profile Picture"
            class="object-cover w-full h-full"
            />
            <div class="text-overlay bg-gradient-to-b from-black to-transparent">
            <h2 class="text-[28px] w-2/3 text-left">{{ prospect._fname + ' '+ prospect._lname }}</h2>
            <p class="text-[64px] w-1/3">{{ getAge(prospect) }}</p>
            </div>
        </div>
        <div class="buttons-overlay">
            <button class="fas fa-times fa-3x" @click="dislikeProspect"/>
            <button v-if="isLikesActive" class="fas fa-heart fa-3x" @click="likeProspect"/>
        </div>
    </div>
</template>
<script>
    import { useUserStore } from '@/stores/users'
    export default {
        props: {
            prospect: Object,
            index: Number,
            isLikesActive: Boolean,
        },
        methods:{
            dislikeProspect(){
                useUserStore().dislikeProspectById(this.prospect.id)
                this.$emit('dismissed');
            },
            likeProspect(){
                useUserStore().likeProspectById(this.prospect.id)
                this.$emit('dismissed');
            },
            getAge(userUSER){
                const dob = new Date(userUSER._dob);
                const today = new Date();
                const age = today.getFullYear() - dob.getFullYear();
                if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
                age--;
                }
                return age;
            }
        }
    }
</script>
<style scoped>
.text-overlay {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    height: fit-content;
    width: 100%;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content:space-between;
    align-items: flex-start;
}
.buttons-overlay{
    font-weight: bold;
    height: fit-content;
    width: 100%;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content:space-around;
    align-items: flex-start;
}
</style>