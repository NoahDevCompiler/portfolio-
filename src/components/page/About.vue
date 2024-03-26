<script setup>
import Hero from "../Hero.vue"
import styles from "../../style.js"
import { services } from "../../constants/index.js"
import VanillaTilt from 'vanilla-tilt';
import { onMounted, ref } from 'vue';
import { fadeout, fadein } from "../../utils/motion.js"

const tiltElement = ref(null);

onMounted(() => {
  if (tiltElement.value) {
    VanillaTilt.init(tiltElement.value, {
      max: 25,
      perspective: 1000,
      scale: 1.05,
    });
  }
});
</script>

<template>
     <div>
        <p :style="{'font-size': '14px', 'text-transform': 'uppercase', letterSpacing: '0.10em' }">
            Introduction</p>
        <h2 :style="{ color: 'white', fontWeight: '900', fontSize: '30px',
         '@media (min-width: 640px)': { fontSize: '60px' }, 
         '@media (min-width: 768px)': { fontSize: '50px' }, 
         '@media (min-width: 480px)': { fontSize: '40px' } }"> Overview</h2>

     </div>

     <p class="text-descriptionText mt-5"
        v-motion = "fadein">
        Hello, I'm Noah, a software development apprentice at Benedict Schools Luzern, Switzerland, deeply passionate about problem-solving and innovation. 
        My journey into tech began with exploring programming languages, and now I thrive in back-end development while also enjoying front-end technologies. 
        During my apprenticeship, I've worked on diverse projects, refining skills in database management, scripting, and version control. Check out my projects under the "Projects" tab to see my dedication to high-quality solutions. 
        Excited for what's ahead in the ever-evolving world of technology!
     </p>
     <p :style="{'font-size': '16px', 'text-transform': 'uppercase', letterSpacing: '0.10em' }" class="mt-20">
            Capabilitys:</p>


     <div class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <ServiceCard v-for="(service, index) in services" :key="service.title" :index="index" :title="service.title" :otherProps="service.otherProps">
        <div ref="tiltElement" class="bg-indigo-800 text-white rounded-lg p-4 h-64 flex flex-col items-center justify-center border-2 border-blue-600"  >
          <img :src="service.icon" alt="Icon" class="w-16 h-16 object-contain" >
          <h3 class="text-white text-[20px] font-bold text-center" id="cock">
            {{ service.title }}
          </h3>
      
        </div>
      </ServiceCard>
  </div>
</template> 

<style scoped>
#cock{
  transition: 1.5s
}
#cock:hover
{
  transition: 1.5s;
  transform: skewY(-15deg);
}
</style>