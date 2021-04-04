<template>
    <header>
      
       <div class="navbar">

            <label class="logo">Alvarado</label> 
            <ul>
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
                <li><router-link to="/design">Design</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>


            </ul>

       </div>



    </header>

</template>

<script>
export default {
  
    
}


</script>

<style scoped>

 .navbar {
    margin-bottom: 2rem;
    height: 7rem;
    width: 100%;
    background: #0082e6;
    border: 5px solid #00008b;
        /* border-radius: 25px 25px 0 0; */
      
 }

 ul {
     display:flex;
     list-style: none;
     width:35rem;

 }

 ul li {
     display: inline;
     width:100%;
     
 }

 ul li a {
     color:#fff;

 }



</style>

