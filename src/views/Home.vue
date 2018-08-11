<template>
  <div class="home">
    <Header/>
    <Hero/>
    <h2 id="aboutMe" class="section-heading">About Me</h2>
    <AboutMe/>
    <h2 id="skills" class="section-heading">Skills</h2>
    <Skills/>
    <!-- <h3>Technical Skills</h3> -->
    <!-- <h3>Soft Skills</h3> -->
    <h2 id="projects" class="section-heading">Projects</h2>
    <Projects/>
    <h2 id="workHistory" class="section-heading">Work History</h2>
    <EmploymentHistory/>
    <h2 id="education" class="section-heading">Education</h2>
    <Education/>
    <!-- <h2>Volunteer Work</h2> -->
    <h2 id="resume" class="section-heading">Resume</h2>
    <Resume/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import EmploymentHistory from "@/components/EmploymentHistory.vue";
import Education from "@/components/Education.vue";
import Resume from "@/components/Resume.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Hero,
    AboutMe,
    Skills,
    Projects,
    EmploymentHistory,
    Education,
    Resume,
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
