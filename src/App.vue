<script setup>
import { RouterView } from 'vue-router'
import Particles from './components/Particles.vue'
import PrimaryNavbar from './components/NavBars/Primary-Navbar.vue'
import router from "./router.js"
import { onMounted } from 'vue'

const scrollup =  () => {
         setTimeout(() =>{
            window.scrollTo({
            top: -window.innerHeight,
            behavior: 'smooth'
            });
        }, 20)
    }
</script>

<template>
    <div class="d-flex align-items-stretch">
      <PrimaryNavbar class="nav"/>

        <router-link to="/" class="logo">
          <img src="./assets/logo.png" alt="" @click="scrollup">
        </router-link>

      <div class="particles">
        <Particles/>
      </div>
      <div class="content-container">
        <RouterView/>  
      </div>
  </div>
 
</template>

<style scoped>

.nav{
  z-index: 2;
  position:relative;
}
.content-container{
  max-width: 800px;
  min-height: 100vh;
  z-index: 1;
  position:relative;
}
.particles
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.logo {
  display:flex;
  position:fixed;
  top:10px;
  left:10px;
  z-index: 1;
  height: 200px;
  transition: 0.7s;
 
}
.logo:hover {
  transition: 0.7s;
  filter: drop-shadow(0 0 2em #ffffff);
}
.logo.vue:hover {
  filter: drop-shadow;
}
</style>

