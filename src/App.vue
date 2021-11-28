<template>

  <div class="container-fluid">

    <the-header></the-header>
  

  <router-view></router-view>
  
  <the-footer></the-footer>
  
  </div>

  
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';

  export default {
    components: {
      TheHeader, TheFooter
    },
    
    methods: {
         moveToPage(newPage) {

            this.$emit('change-page',newPage);

          }

    }
  }

</script>

<style>

 
      body {
        background: #fff url("./img/astro101.jpg") center center no-repeat;
        background-attachment: fixed;
        background-size: 100% auto;
        margin: 0;
        padding: 0;
      }

      @media (max-width: 66rem) {
        
        body {
          width: 100%;
          background: #fff url("./img/astro101c.jpg") center center no-repeat;
          background-attachment: fixed;
          background-size: 100% auto;
        }

      
      }


/* BOOTSTRAP */

.container-fluid {
   padding: 1px !important;
  
}

</style>
