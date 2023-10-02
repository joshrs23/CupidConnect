<template>
  <div class="flex flex-col menuOverall p-4 cont">
    <div class="w-fit">
      <ul class="flex flex-column">
        <nuxt-link to="/" class="mb-4 w-3/4"><img :src="logo" class=""/></nuxt-link>
        <li><nuxt-link to="/profile"><i class="fas fa-user"></i> Profile</nuxt-link></li>
        <li><nuxt-link to="/likes"><i class="fas fa-heart"></i> Likes</nuxt-link></li>
        <li><nuxt-link to="/chats"><i class="fas fa-comments"></i> Chats</nuxt-link></li>
        <li><nuxt-link to="/"><i class="fas fa-home"></i> Home</nuxt-link></li>
      </ul>
    </div>
    <div class="">
      <i class="fa-solid fa-bars"></i> Menu
    </div>
  </div>
</template>

<style scoped>
.cont{
  border-right: 1px solid #686262;;
}
* {
  color: white;
  list-style: none;
  font-size: 1.5rem;
  line-height: 2rem;
}
.menuOverall {
  height: 100%;
  justify-content: space-between;
}
li {
  margin-top: 0.5rem !important;
  width: fit-content;
}
i{
  min-width: 35px;
}
/* Remove underlines from anchor elements within li */
li a {
  text-decoration: none;
  color: inherit; /* Inherit the color from the parent li */
}
</style>

<script>
import logo from '@/assets/logoCupid.svg'

export default {
  data() {
    return {
      logo: logo,
    }
  },
}
</script>
