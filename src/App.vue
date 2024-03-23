<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import router from "./router.js"

</script>

<template>
  <div class="d-flex align-items-stretch">
    <Navbar></Navbar>

        <router-link to="/" class="logo">
          <img src="./assets/logo.png" alt="">
        </router-link>

    <div class="content container">
      <RouterView/>  
    </div>
  </div>
 
  
 
</template>

<style scoped>

.logo {
  display:flex;
  position:fixed;
  top:10px;
  left:10px;
  
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

<style>
body {
  background-color: #1B262C;
}
</style>
