<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Logo from "./assets/logo.png"
</script>

<template>
  <div class="d-flex align-items-stretch">
    <Navbar></Navbar>

    <div class="content container">
      <RouterView/>  

      <div class="logo">
        <Logo/>
      </div>

    </div>
  </div>
 
  
 
</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #099909);
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
