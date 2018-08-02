<template>
  <div class="home">
    <Header/>
    <Hero/>
    <Projects/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Hero,
    Projects,
    Footer
  }
};
</script>
