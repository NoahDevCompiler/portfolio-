 
<script setup>
    const scrolldown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }
</script>

<template>
 <div class="container">
    <ul>
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
            <RouterLink to="/about">
                 About
            </RouterLink>  
        </li>
        <li style="--i:1;">
            <RouterLink to="/contact">
                Contact
            </RouterLink>  
        </li>
    </ul>
  </div>
</template>

<style scoped>

*{
    margin: 0;
    padding:0;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
ul
{
    position: relative;
    transform: skewY(-15deg);
    transition: 0.5s;
}
li{
    color: #3282B8;
}
li:hover
{
    filter: drop-shadow(0 0 2em #0C3E5C );
}
ul li{
  position: relative ;
  flex-direction: column;
  list-style-type: none;
  width:200px;
  background-color: #0F4C75;
  padding: 15px; 
  transition: 0.5s;
  letter-spacing: 0.05em;
  z-index: var(--i)
}
ul li:hover
{
    background-color: #3577A1 ;
    transform: translateX(-20px);
}
ul li::before 
{
    content: "";
    position:absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #0B3E5D;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
}

ul li::after
{
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
ul li a
{
    text-transform: uppercase;
    display: block;
}
ul li:hover a
{
    color: #BBE1FA;

}

</style>