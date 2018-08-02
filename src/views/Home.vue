<template>
  <div class="home">
    <Header/>
    <Hero/>
    <Projects/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Projects from "@/components/Projects.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "home",
  components: {
    Header,
    Hero,
    Projects
  }
};
</script>
