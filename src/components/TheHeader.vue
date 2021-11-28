<template>
   
  
    
 
   <header>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
      </button>

      <a class="navbar-brand text-uppercase" href="#">Alvarado - WEB DEVELOPMENT</a>

     <div class="collapse navbar-collapse" id="navbarTogglerDemo03" v-on:click="closeMobileMenue">
       <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
         <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/home" data-toggle="collapse" data-target=".navbar-collapse.show">Home<span class="sr-only">(current)</span></router-link>
         </li>
         
         <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/projects" data-toggle="collapse" data-target=".navbar-collapse.show">Projects</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/blog" data-toggle="collapse" data-target=".navbar-collapse.show">Blog</router-link>
          </li>
          <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/design" data-toggle="collapse" data-target=".navbar-collapse.show">Design</router-link>
          </li>
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/about" data-toggle="collapse" data-target=".navbar-collapse.show">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/contact" data-toggle="collapse" data-target=".navbar-collapse.show">Contact</router-link>
            </li>


    </ul>
    
    
  </div>
</nav>

<!-- Full Page Image Header with Vertically Centered Content -->

<div class="masthead">
 
    
       <div class="d-flex justify-content-around">
          <img src="../img/moonphase/moon1.jpg">
          <img src="../img/moonphase/moon2.jpg">
          <img src="../img/moonphase/moon3.jpg">
          <img src="../img/moonphase/moon4.jpg">
          <img src="../img/moonphase/moon5.jpg">
          <img src="../img/moonphase/moon6.jpg">
          <img src="../img/moonphase/moon7.jpg">
          <img src="../img/moonphase/moon8.jpg"> 

      </div>
      
    </div>    
 
 </header>
</template>

<script>
    export default {

      data() {
        return { counter: 0,
                 hideMobileMenueActive: false }

        
      },

      methods: {
            closeMobileMenue() {
                this.hideMobileMenueActive = !this.hideMobileMenueActive;
             
            }

      }


    }

</script>


<style scoped>


  header{ position:sticky; top: 0 ; z-index: 10;} 

  .masthead {
  height: 18vh;
   width:100%; 
  padding-top:2rem;
  background-color: black;

  }

/* menue */


img {
    height:50px;
    width:50px;
 
}

@media (max-width:430px) {

  img {
    height:20px;
    width:20px;
 
      }
  nav a {
        font-size: 0.8rem;

    }

  .masthead {
  height: 80%;
  padding-top:2rem;
 


  }

}

@media (min-width: 992px) { 

  img {
    height:100px;
    width:100px;
 
}
 
}


 

</style>

