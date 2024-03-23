<script setup>
import  styles  from '../style.js'
</script>

<template>
    <section class="">
        <div :class="`${styles.paddingX}  inset-0 top-10px right-10px max-w-7xl mx-auto flex flex-row items-start gap-5`">
            <div>
                <h1 :class="[styles.heroHeadText, 'text-white']">
                    Portfolio von <span class="customText">Noah</span>
                </h1>
            </div>            
        </div>
    </section> 
</template>
<style>
.customText
{
    color: #915eff;
  
}
</style>

 
