<template>

  <div class="cover-container">

    <the-header></the-header>
  

  <router-view/>
  </div>

  
</template>

<script>
  import TheHeader from './components/TheHeader.vue';

  export default {
    components: {
      TheHeader
    }
  }

</script>

<style>
html,
body {
  /* background-color: #333; */
  width: 100%;

  background: #fff url("./img/astro101.jpg") center center no-repeat;
  background-attachment: fixed;
  background-size: 100% auto;
  margin: 0;
  padding: 0;
}

/* Links */
a,
a:focus,
a:hover {
  color: #fff;
}

.cover-container {
  /* min-height: 50rem; */
  height: 100%;
  color: white;
 
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

/* M E D I A    Q U E R I E S */

/* at width: 1600 px */

@media (max-width: 100rem) {
  label.logo {
    font-size: 1.5rem;
  }
}

/* at width: 1360 px */

@media (max-width: 85rem) {
  label.logo {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
}

/* at width: 1280 px */

@media (max-width: 80rem) {
  label.logo:after {
    content: " DEV";
  }
}

/* at width: 1056 px */
/* hamburger menue starts!! */

@media (max-width: 66rem) {
  div#contact-container {
    height: 100%;
  }

  .checkbtn {
    display: block;
  }

  nav.nav-masthead {
    position: relative;
    width: 100%;
  }

  nav.nav-masthead ul {
    position: fixed;
    left: 13.1%;
    background: #2c3e50;
    text-align: center;
    top: 7.3em;
    width: 73%;
    padding: 0;
  }

  nav.nav-masthead ul li {
    display: block;
    width: 100%;
  }

  nav.nav-masthead ul li a.nav-link {
    display: block;
    border-bottom: none;
  }

  html,
  body {
    width: 100%;
    background: #fff url("./img/astro101c.jpg") center center no-repeat;
    background-attachment: fixed;
    background-size: 100% auto;
  }

  label.logo {
    font-size: 1.5rem;
  }

  nav.nav-masthead ul li {
    font-size: 1rem;
  }

  /*  about page  (max. 1056 px)   */
  div#about {
    height: 45rem;
  }

  div#about-content-left img {
    margin-top: 0;
  }

  div#about-content-left {
    display: block;
  }

  div#about-content-right {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

/* at width: 736 px */

@media (max-width: 46rem) {
  form#contact {
    max-width: 13rem;
    margin: 0.5rem auto;
  }
}

/* at width: 440 px */

@media (max-width: 27.5rem) {
  div#contact-container {
    height: 100%;
  }

  label.logo {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  footer.mastfoot {
    height: 5rem;
    color: rgba(255, 255, 255, 0.5);
    background: #0082e6;
    border: 5px solid #0082e6;
    border-radius: 0 0 25px 25px;
  }

  footer.mastfoot .bar {
    width: 100%;
    margin-top: 0;
  }

  div#home h2 {
    margin: 0 0.5rem 2rem 0.5rem;
  }

  div#projects {
    max-width: 16rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 0;
  }

  div#projects > div {
    width: 20rem;
    border: 0;
  }

  /* about + blog */

  div#about {
    height: 45rem;
  }

  div#about,
  .blog {
    margin: 0 auto;
    margin-bottom: 4rem;
    padding: 0 0.6rem;
  }

  div#about-content {
    margin-top: 0;
  }

  div.article {
    max-width: 16rem;
  }
}

/* at hight with min 800px */

@media (min-height: 50rem) {
  div#contact-container {
    margin-top: 0;
  }

  div#home {
    height: 40rem;
  }

  div#projects {
    justify-content: space-around;
  }

  div#about {
    height: 45rem;
  }

  div#design img {
    width: 40%;
    height: auto;
  }
}




</style>
