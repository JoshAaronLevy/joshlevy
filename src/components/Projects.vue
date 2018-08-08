<template>
  <div class="container">
    <div class="row">
      <div class="timeline-centered">
    <article class="timeline-entry">
      <div class="timeline-entry-inner">
        <time class="timeline-time" datetime="2014-01-10T03:45"><span>July 2018</span></time>
        <div class="timeline-icon bg-red">
          <i class="entypo-feather"></i>
        </div>
        <div class="timeline-label">
          <h2><a v-b-modal.modal1>Bad Movie Night</a></h2>
          <p>Serve data to end-users with custom API's.</p>
        </div>
      </div>
    </article>
    <article class="timeline-entry left-aligned">
      <div class="timeline-entry-inner">
        <time class="timeline-time" datetime="2014-01-10T03:45"><span>July 2018</span></time>
        <div class="timeline-icon bg-red">
          <i class="entypo-suitcase"></i>
        </div>
        <div class="timeline-label">
          <h2><a href="#">Dinosaur Jobs</a></h2>
          <p>First experience with React. Created job posting site using state management.</p>
        </div>
      </div>
    </article>
    <article class="timeline-entry">
      <div class="timeline-entry-inner">
        <time class="timeline-time" datetime="2014-01-10T03:45"><span>June 2018</span></time>
        <div class="timeline-icon bg-red">
          <i class="entypo-camera"></i>
        </div>
        <div class="timeline-label">
          <h2><a href="#">Calculator</a></h2>
          <p>Calculator made interactive with JavaScript DOM manipulation.</p>
        </div>
      </div>
    </article>
    <article class="timeline-entry begin">
      <div class="timeline-entry-inner">
        <div class="timeline-icon" style="-webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg);">
          <i class="entypo-flight"></i>
        </div>
      </div>
    </article>
  </div>
    </div>
  <b-modal id="modal1" size="lg" title="Bad Movie Night">
    <p class="my-4">View:</p>
    <!-- <font-awesome-icon icon="Git" /> -->
  </b-modal>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [],
      projectsURL: "https://joshlevy.herokuapp.com/projects"
    };
  },
  mounted() {
    fetch(this.projectsURL)
      .then(response => response.json())
      .then(response => {
        this.projects = response.projects;
      });
  }
};
</script>

<style scoped>
.site-table {
  padding-left: 50px;
  padding-right: 50px;
}
.row {
  align-items: center;
}
.modal-dialog {
  min-width: 900px !important;
  max-width: 900px !important;
}
.btn-secondary {
  visibility: hidden !important;
}
img {
  vertical-align: middle;
}
.img-responsive {
  display: block;
  height: auto;
  max-width: 100%;
}
.img-rounded {
  border-radius: 3px;
}
.img-thumbnail {
  background-color: #fff;
  border: 1px solid #ededf0;
  border-radius: 3px;
  display: inline-block;
  height: auto;
  line-height: 1.428571429;
  max-width: 100%;
  moz-transition: all 0.2s ease-in-out;
  o-transition: all 0.2s ease-in-out;
  padding: 2px;
  transition: all 0.2s ease-in-out;
  webkit-transition: all 0.2s ease-in-out;
}
.img-circle {
  border-radius: 50%;
}
.timeline-centered {
  position: relative;
  margin-bottom: 30px;
  width: 100%;
}

.timeline-centered:before,
.timeline-centered:after {
  content: " ";
  display: table;
}

.timeline-centered:after {
  clear: both;
}

.timeline-centered:before,
.timeline-centered:after {
  content: " ";
  display: table;
}

.timeline-centered:after {
  clear: both;
}

.timeline-centered:before {
  content: "";
  position: absolute;
  display: block;
  width: 4px;
  background: #f5f5f6;
  left: 50%;
  top: 20px;
  bottom: 20px;
  margin-left: -4px;
}

.timeline-centered .timeline-entry {
  position: relative;
  width: 50%;
  float: right;
  margin-bottom: 70px;
  clear: both;
}

.timeline-centered .timeline-entry:before,
.timeline-centered .timeline-entry:after {
  content: " ";
  display: table;
}

.timeline-centered .timeline-entry:after {
  clear: both;
}

.timeline-centered .timeline-entry:before,
.timeline-centered .timeline-entry:after {
  content: " ";
  display: table;
}

.timeline-centered .timeline-entry:after {
  clear: both;
}

.timeline-centered .timeline-entry.begin {
  margin-bottom: 0;
}

.timeline-centered .timeline-entry.left-aligned {
  float: left;
}

.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {
  margin-left: 0;
  margin-right: -18px;
}

.timeline-centered
  .timeline-entry.left-aligned
  .timeline-entry-inner
  .timeline-time {
  left: auto;
  right: -100px;
  text-align: left;
}

.timeline-centered
  .timeline-entry.left-aligned
  .timeline-entry-inner
  .timeline-icon {
  float: right;
}

.timeline-centered
  .timeline-entry.left-aligned
  .timeline-entry-inner
  .timeline-label {
  margin-left: 0;
  margin-right: 70px;
}

.timeline-centered
  .timeline-entry.left-aligned
  .timeline-entry-inner
  .timeline-label:after {
  left: auto;
  right: 0;
  margin-left: 0;
  margin-right: -9px;
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.timeline-centered .timeline-entry .timeline-entry-inner {
  position: relative;
  margin-left: -22px;
}

.timeline-centered .timeline-entry .timeline-entry-inner:before,
.timeline-centered .timeline-entry .timeline-entry-inner:after {
  content: " ";
  display: table;
}

.timeline-centered .timeline-entry .timeline-entry-inner:after {
  clear: both;
}

.timeline-centered .timeline-entry .timeline-entry-inner:before,
.timeline-centered .timeline-entry .timeline-entry-inner:after {
  content: " ";
  display: table;
}

.timeline-centered .timeline-entry .timeline-entry-inner:after {
  clear: both;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time {
  position: absolute;
  left: -100px;
  text-align: right;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span {
  display: block;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-time
  > span:first-child {
  font-size: 15px;
  font-weight: bold;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-time
  > span:last-child {
  font-size: 16px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {
  background: #fff;
  color: #737881;
  display: block;
  width: 40px;
  height: 40px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  text-align: center;
  -moz-box-shadow: 0 0 0 5px #f5f5f6;
  -webkit-box-shadow: 0 0 0 5px #f5f5f6;
  box-shadow: 0 0 0 5px #f5f5f6;
  line-height: 40px;
  font-size: 15px;
  float: left;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-primary {
  background-color: #ae0001;
  color: #fff;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-secondary {
  background-color: #ee4749;
  color: #fff;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-success {
  background-color: #00a651;
  color: #fff;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-info {
  background-color: #21a9e1;
  color: #fff;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-warning {
  background-color: #fad839;
  color: #fff;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-icon.bg-danger {
  background-color: #cc2424;
  color: #fff;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-red {
  background-color: #ae0001;
  color: #fff;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {
  position: relative;
  background: #f5f5f6;
  padding-left: 1.7em;
  padding-right: 1.7em;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-left: 70px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 9px 9px 9px 0;
  border-color: transparent #f5f5f6 transparent transparent;
  left: 0;
  top: 10px;
  margin-left: -9px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2,
.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p {
  color: #222;
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
  margin: 0;
  line-height: 1.428571429;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {
  margin-top: 15px;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 700;
}

.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {
  color: #ae0001;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label
  h2
  a:hover {
  color: #222;
  text-decoration: underline;
  cursor: pointer;
}

.timeline-centered
  .timeline-entry
  .timeline-entry-inner
  .timeline-label
  h2
  span {
  -webkit-opacity: 0.6;
  -moz-opacity: 0.6;
  opacity: 0.6;
  -ms-filter: alpha(opacity=60);
  filter: alpha(opacity=60);
}
</style>
