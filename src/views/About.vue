<template>
  <div class="container"> 

    <div class="about-me-header">
    <div class="row">

      <div class="col-sm-3 col-md-2">
         <!-- empty -->

      </div>
      <div class="col-md-4">
          <h2 class="text-warning">About me</h2>
      </div>
  
      </div>
    </div>  

    <div class="about-me-body">

     <div class="row">

      <div class="col-sm-0 col-md-2">

                  <!-- empty -->

              </div>
            <div class="col-sm-3 col-md-4">

                 <img class="img-fluid" src="../img/myself.png" >

            </div>

             <div class="col-sm-9 col-md-6">

                 <p style="color:#fff;">
                  

                      Dear visitors, <br/><br/>
                      My name is Marco Alvarado and I'm a web developer. <br/><br/> My focus right now is on building SPA's with vue.js and react.js. I have started developing websites with HTML, CSS, JS (jQuery), PHP and mySQL<br/><br/> I know how to integrate APIs on the frontend and backend. I can also setup a backend server with node/express and incoporate a database like MonogoDB. <br/><br/> 
                      I have knowledge in programming JAVA and Python (network programming) and admin skills in Linux administration (Ubuntu / Debian).<br/><br/>
                      
                      Please click  <span @click="$router.push('contact')" class="text-warning" style="cursor:pointer;">HERE</span> to get in contact with me.
                      </p>
             </div>
             </div>
        </div>
       </div>
</template>

<style scoped>

    .about-me-header{

      margin-top:4rem;
      margin-bottom: 4rem;
    }

    .about-me-body{
     
     margin-top:2rem;
     margin-bottom: 8rem;
       

    }


     @media (max-width: 575px) {
      
      img {

        width:30%;
      }    

      p {

        margin-top: 2rem;
      }
 }

</style>
