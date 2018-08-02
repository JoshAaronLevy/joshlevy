<template>
  <div class="home">
    <Header/>
    <Hero/>
    <!-- <h2>Projects</h2>
    <Projects/> -->
    <!-- <h2>Skills</h2>
    <h3>Technical Skills</h3>
    <h3>Soft Skills</h3> -->
    <h2 class="section-heading">Employment History</h2>
    <EmploymentHistory/>
    <h2 class="section-heading">Education</h2>
    <Education/>
    <!-- <h2>Volunteer Work</h2> -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Projects from "@/components/Projects.vue";
import EmploymentHistory from "@/components/EmploymentHistory.vue";
import Education from "@/components/Education.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Hero,
    Projects,
    EmploymentHistory,
    Education,
    Footer
  }
};
</script>

<style scoped>
.section-heading {
  text-align: center;
  padding-top: 50px;
  margin-bottom: 20px;
}
</style>
