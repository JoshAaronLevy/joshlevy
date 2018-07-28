<template>
  <div class="home">
    <Header/>
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Projects/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "home",
  components: {
    // HelloWorld,
    Header,
    Projects
  }
};
</script>
