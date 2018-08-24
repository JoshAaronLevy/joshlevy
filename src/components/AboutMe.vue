<template>
  <b-container class="bv-example-row">
    <div class="d-none d-lg-block">
      <b-row>
        <b-col lg="4">
          <b-img src="https://s3-us-west-2.amazonaws.com/joshlevyportfolio/josh-headshot.png" alt="josh levy"></b-img>
        </b-col>
        <b-col lg="8">
          <p>I believe we're living in the most exciting time for technology. Many of the biggest challenges we face now are going to be solved by developers. I am a junior/mid-level full stack web developer with 5 years of experience.</p>
          <p>My experience includes responsive UI/UX design in HTML5, CSS3 and Bootstrap. I also have solid working experience with modern front-end frameworks such as Vue.js and Angular, and back-end languages such as Node.js, Express, SQL and NoSQL databases. Furthermore, I have worked with dev ops technologies such as Firebase, Heroku, Docker and AWS. But I wouldn't be able to keep track of it all if it weren't for my strong working knowledge of Git.</p>
          <p>I take pride in combining my skills to develop apps with the highest standards of security, stability and scalability. But when I'm not geeking out over dev tech, you can catch me geeking out over Hi-Fi audio, or spending a day at my favorite place on earth - a tennis court.</p>
          <div>
            <p class="inline">Find me on:</p>
            <b-button class="github-button" href="https://github.com/JoshAaronLevy" target="_blank">GitHub</b-button>
            <b-button variant="primary" href="https://linkedin.com/in/JoshAaronLevy" target="_blank">LinkedIn</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="d-lg-none">
      <b-row>
        <b-col lg="8">
          <p class="main-paragraph">I believe we're living in the most exciting time for technology. Many of the biggest challenges we face now are going to be solved by developers. I am a junior/mid-level full stack web developer with 5 years of experience.</p>
          <b-collapse id=collapseAbout v-model="showCollapse">
            <p>My experience includes responsive UI/UX design in HTML5, CSS3 and Bootstrap. I also have solid working experience with modern front-end frameworks such as Vue.js and Angular, and back-end languages such as Node.js, Express, SQL and NoSQL databases. Furthermore, I have worked with dev ops technologies such as Firebase, Heroku, Docker and AWS. But I wouldn't be able to keep track of it all if it weren't for my strong working knowledge of Git.
            </p>
            <p>I take pride in combining my skills to develop apps with the highest standards of security, stability and scalability. But when I'm not geeking out over dev tech, you can catch me geeking out over Hi-Fi audio, or spending a day at my favorite place on earth - a tennis court.
            </p>
          </b-collapse>
          <a class="expand-toggle" @click="showCollapse = !showCollapse" aria-controls="collapseAbout" :class="showCollapse ? 'collapsed' : null" :aria-expanded="showCollapse ? 'true' : 'false'" v-b-toggle.collapseAbout>Read {{ showCollapse ? 'Less' : 'More'}}</a>
          <div class="connect-section">
            <p class="inline">Find me on:</p>
            <b-button class="github-button" href="https://github.com/JoshAaronLevy" target="_blank">GitHub</b-button>
            <b-button variant="primary" href="https://linkedin.com/in/JoshAaronLevy" target="_blank">LinkedIn</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      showCollapse: false,
      collapseAbout: false
    }
  }
}
</script>

<style scoped>
p {
  font-size: 18px;
  padding-left: 20px;
  padding-right: 20px;
}
.main-paragraph {
  margin-bottom: 5px !important;
}
.expand-toggle {
  padding-left: 20px;
  color: #ae0001 !important;
  font-weight: 700 !important;
}
.connect-section {
  margin-top: 15px;
}
.inline {
  display: inline;
}
.github-button {
  background-color: #222;
  margin-right: 5px;
}
img {
  width: 100%;
}
</style>

