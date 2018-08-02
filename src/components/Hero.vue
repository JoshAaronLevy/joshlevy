<template>
  <section class="main-hero col-lg-12">
    <section class="hero-designer col-xs-6 col-lg-6">
      <div class="hero-inner">
        <h1 class="animate fadeInLeft">Designer</h1>
        <h2>HTML5/CSS3</h2>
      </div>
    </section>
    <section class="hero-developer col-xs-6 col-lg-6">
      <div class="hero-inner">
        <h1 class="animate fadeInRight">Developer</h1>
        <h2>JavaScript</h2>
      </div>
    </section>
  </section>
</template>

<style scoped>
.main-hero {
  display: inline-flex;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.hero-designer {
  height: 500px;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  color: white;
  background-image: url("../assets/html-sample.png");
  background-size: 51%;
  background-position: left center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 50%;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.hero-developer {
  height: 500px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: white;
  background-image: url("../assets/javascript-sample.png");
  background-size: 51%;
  background-position: center right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 50%;
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
  background-image: url("../assets/javascript-heading.png");
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.hero-heading .hero-inner h1 {
  font-size: 5em;
  margin-top: 0;
  margin-bottom: 15px;
  padding-bottom: 5px;
  padding-left: 100px;
  padding-right: 100px;
  background: rgba(0, 0, 0, 0.8);
}

.hero-inner h1 {
  font-size: 5em;
  margin-top: 0;
  margin-bottom: 0.5em;
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
</style>
