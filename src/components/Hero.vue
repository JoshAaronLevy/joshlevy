<template>
  <b-row lg="12" sm="12">
    <section class="main-hero d-none d-lg-block flex">
      <b-col lg="6" sm="12" md="12" xs="12" class="hero-container">
        <section class="hero-designer">
          <div class="hero-inner">
            <h1 class="animate fadeInLeft">Designer</h1>
            <h2>Vue.js/React/Angular</h2>
          </div>
        </section>
      </b-col>
      <b-col lg="6" sm="12" md="12" xs="12" class="hero-container">
        <section class="hero-developer">
          <div class="hero-inner">
            <h1 class="animate fadeInRight">Developer</h1>
            <h2>Node.js/Express/SQL</h2>
          </div>
        </section>
      </b-col>
    </section>
  </b-row>
</template>

<style scoped>
@media (max-width: 1023px) {
  .main-hero {
    margin-top: 100px;
  }
  .hero-designer {
    visibility: hidden;
  }
  .hero-developer {
    visibility: hidden;
  }
}
@media (min-width: 1024px) {
  .flex {
    display: inline-flex !important;
  }
  .main-hero {
    display: inline-flex;
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin-top: 100px;
    width: 100%;
  }

  .hero-container {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .hero-designer {
    min-height: 500px;
    max-height: 700px;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    color: white;
    background-image: url('https://s3-us-west-2.amazonaws.com/joshlevyportfolio/vue-sample.jpg');
    background-size: 51%;
    background-position: left top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .hero-developer {
    min-height: 500px;
    max-height: 700px;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    color: white;
    background-image: url('https://s3-us-west-2.amazonaws.com/joshlevyportfolio/express-sample.jpg');
    background-size: 51%;
    background-position: right top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .hero-heading {
    width: 100vw;
    height: 320px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-image: url('../assets/javascript-heading.png');
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  /* .hero-heading .hero-inner h1 {
    font-size: 5em;
    margin-top: 0;
    margin-bottom: 15px;
    padding-bottom: 5px;
    padding-left: 100px;
    padding-right: 100px;
    background: rgba(0, 0, 0, 0.8);
  } */

  .hero-inner h1 {
    font-size: 5em;
    margin-top: 0;
    margin-bottom: 0.25em;
    padding-bottom: 5px;
    padding-left: 100px;
    padding-right: 100px;
    background: rgba(0, 0, 0, 0.8);
  }

  .hero-heading .hero-inner ul {
    font-size: 28px;
    font-weight: 700;
    display: inline-flex;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 0px;
    background: rgba(0, 0, 0, 0.8);
  }

  .hero-inner h2 {
    display: inline;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 50px;
    padding-right: 50px;
    background: rgba(0, 0, 0, 0.8);
  }

  .hero-inner .btn {
    display: block;
    width: 200px;
    padding: 0.75em;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    background-color: #ae0001;
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: 700;
    border-radius: 3px;
  }

  .hero-inner .btn:hover {
    background-color: #222;
  }

  .hero-inner-title {
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .hero-inner-title h1 {
    font-size: 4em;
    margin-top: 0.75em;
    padding-bottom: 5px;
    padding-left: 50px;
    padding-right: 50px;
    background: rgba(0, 0, 0, 0.8);
  }

  li.separator {
    margin-left: 30px;
    margin-right: 30px;
  }
}
</style>
