<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"
import { navbarfadein } from "../../utils/motion";

    const scrolldown =  () => {
         setTimeout(() =>{
            window.scrollTo({
            top: window.innerHeight / 1.25,
            behavior: 'smooth'
            });
        }, 20)
    }
    const secondnavbar = ref(false)


    const handleScroll = () => {
      if (window.scrollY > 700) {
        console.log("asbjkdf")
        secondnavbar.value = true;
      } else {
        secondnavbar.value = false;
      }
    };
    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    
 <div id="container">
     <!-- MAKE ANIMATIONS HS-->
     
    <div class="absolute top-0 right-0" id="secondary" v-if="secondnavbar"
    
        v-motion="navbarfadein">
        <ul class="navbar-top" :style="{letterSpacing: '0.1em'}" >
            <li>
                <RouterLink to="/projects" @click ="scrolldown">
                    Projects
                </RouterLink> 
            </li>
            <li>
                <RouterLink to="/about" @click ="scrolldown">
                    About
                </RouterLink> 
            </li>
            <li>
                <RouterLink to="/contact" @click ="scrolldown">
                     Contact
                </RouterLink> 
            </li>
        </ul>   
    </div>
    <transition name="fade">

        <!-- MAKE ANIMATIONS HS-->

    <ul id="primary-list" v-if="!secondnavbar" >
        <li style="--i:4;">
            <RouterLink to="/" @click ="scrolldown">
                 Home
            </RouterLink>    
        </li>
        <li style="--i:3;">
            <RouterLink to="/projects">
                 Projects
            </RouterLink>
        </li>
        <li style="--i:2;">
            <RouterLink to="/about" @click ="scrolldown">
                 About
            </RouterLink>  
        </li>
        <li style="--i:1;">
            <RouterLink to="/contact">
                Contact
            </RouterLink>  
        </li>
    </ul>
    </transition>
    
  </div>



</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

*{
    margin: 0;
    padding:0;
}
.navbar-top ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.navbar-top li{
    display: inline;
    margin-right: 20px;

}

#container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

#secondary{
    position:fixed;
    color: white;
    padding: 10px;
}
#primary-list {
    
    position: relative;
    transform: skewY(-15deg);
    transition: 0.5s;
}

#primary-list li {
    color: #3282B8;
}

#primary-list li:hover {
    filter: drop-shadow(0 0 2em #0C3E5C);
}

#primary-list li {
    position: relative;
    flex-direction: column;
    list-style-type: none;
    width: 500px;
    height: 100px;
    background-color: #0F4C75;
    padding: 15px; 
    transition: 0.5s;
    letter-spacing: 0.05em;
    z-index: var(--i);
}

#primary-list li:hover {
    background-color: #3577A1;
    transform: translateX(-20px);
}

#primary-list li::before {
    content: "";
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #0B3E5D;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
}

#primary-list li::after {
    content: '';
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #0B3E5D;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
}

#primary-list li a {
    justify-content: center;
    padding: 20px 0;
    text-transform: uppercase;
    display: block;
}

#primary-list li:hover a {
    color: #BBE1FA;
}


</style>