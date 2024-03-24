import { createApp } from 'vue'
import router from "./router.js"
import './style.css'
import { loadFull } from "tsparticles"; 
import App from './App.vue'
import Particles from "@tsparticles/vue3";

createApp(App).use(router).use(Particles, {
    init: async engine => {
      await loadFull(engine);
    },
  }).mount('#app');
