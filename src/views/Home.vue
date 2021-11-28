<template>
  
   
       <div class="container">

         
          <div class="row"> 
            <div class="col">
              <blockquote>
                <p>Never give up what you really want to do. The person with  <b>big dreams</b> is more powerful than the one with all the facts.</p>
                  <div class="author"> - Albert Einstein - </div>
              </blockquote>

         
          </div>
          </div>

             <div class="row"> 
            <div class="col">
            <img class="astro" src="../img/astronaut_transparent.png"/>
           </div>
          </div> 

             <div class="row"> 
            <div class="col">
                <button @click="$router.push('about')" class="btn btn-lg btn-success">Learn more!</button>
           </div>
          </div> 
         
          </div>       
          
  
 
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style scoped>

    div.container {

       z-index: -1;
       text-align: center;
    }

    div.container div div blockquote {

      font-size: 1.5rem;
      margin:4rem auto;
      color:white;
      text-align: center;
      max-width:40rem;

      border: none;
      quotes: "\201C" "\201D";
        display: inline-block;
     
    }

    div.container div div blockquote p {

      font-variant:small-caps;
      background: linear-gradient(
    to right, 
    hsl(98 100% 62%), 
    hsl(204 100% 59%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
        }

      div.container div div blockquote .author {
          font-variant:small-caps;

      }
      

      div.container .row .col blockquote p:before { 
          content: open-quote;
          font-weight: bold;
      } 

      div.container .row .col blockquote p:after { 
          content: close-quote;
          font-weight: bold;
      }


    div.container div div img.astro {
         
       transition: transform 5000ms ease-in-out;
  transform-origin: left top;
     
      display: block;
      margin-right: auto;
      margin-left: auto;

    }

    div.container div div img.astro:hover {
        transform: scale(0);
    }

    div.container div div button {

        margin: auto;
        display: block;
        margin-top: 4rem;
        margin-bottom: 6rem;
    }



</style>
