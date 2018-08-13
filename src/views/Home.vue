<template>
  <div class="home">
    <router-view :name='home'></router-view>
    <Header/>
    <Hero/>
    <div id="aboutMe" class="scroll-tag"></div>
    <h2 class="section-heading">About Me</h2>
    <AboutMe/>
    <div id="skills" class="scroll-tag"></div>
    <h2 class="section-heading">Skills</h2>
    <Skills/>
    <div id="projects" class="scroll-tag"></div>
    <h2 class="section-heading">Projects</h2>
    <Projects/>
    <div id="workHistory" class="scroll-tag"></div>
    <h2 class="section-heading">Work History</h2>
    <WorkHistory/>
    <div id="education" class="scroll-tag"></div>
    <h2 class="section-heading">Education</h2>
    <Education/>
    <div id="resume" class="scroll-tag"></div>
    <h2 class="section-heading">Resume</h2>
    <Resume/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import router from "../router";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import WorkHistory from "@/components/WorkHistory.vue";
import Education from "@/components/Education.vue";
import Resume from "@/components/Resume.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    // router,
    Header,
    Hero,
    AboutMe,
    Skills,
    Projects,
    WorkHistory,
    Education,
    Resume,
    Footer
  }
};
</script>

<style scoped>
.scroll-tag {
  padding-top: 30px;
  padding-bottom: 30px;
}
.section-heading {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
}
</style>
