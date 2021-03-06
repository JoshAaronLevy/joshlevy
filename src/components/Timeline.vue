<template>
  <section class="cd-timeline js-cd-timeline">
		<div class="cd-timeline__container">
			<div class="cd-timeline__block js-cd-block" v-for="project in projects" :key="project.id">
				<div class="cd-timeline__img cd-timeline__img--picture js-cd-img">
					<i class="fas fa-code"></i>
				</div>
				<div class="cd-timeline__content js-cd-content">
					<a :href="project.deployedURL" target="_blank"><h2>{{ project.name }}</h2></a>
					<p>{{ project.snippet }}</p>
          <a v-if="project.youtubeURL" :href="project.youtubeURL" target="_blank"><i v-b-tooltip.hover title="View the live demo." class="fab fa-youtube ml-0 mr-7"></i></a>
          <a v-if="project.deployedURL" :href="project.deployedURL" target="_blank"><i v-b-tooltip.hover title="View deployed website in a new tab." class="fas fa-link"></i></a>
          <a v-if="project.githubURL" :href="project.githubURL" target="_blank"><i v-b-tooltip.hover title="View GitHub repository in a new tab." class="fab fa-github"></i></a>
					<span class="cd-timeline__date">{{ project.date }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      projects: [],
      projectsURL: "https://joshlevyportfolio.herokuapp.com/projects"
    };
  },
  mounted() {
    fetch(this.projectsURL)
      .then(response => response.json())
      .then(response => {
        this.projects = response.projects;
      });

    function VerticalTimeline( element ) {
      this.element = element;
      this.blocks = this.element.getElementsByClassName("js-cd-block");
      this.images = this.element.getElementsByClassName("js-cd-img");
      this.contents = this.element.getElementsByClassName("js-cd-content");
      this.offset = 0.8;
      this.hideBlocks();
    };

    VerticalTimeline.prototype.hideBlocks = function() {
      if ( !"classList" in document.documentElement ) {
        return;
      }
      var self = this;
      for( var i = 0; i < this.blocks.length; i++) {
        (function(i){
          if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
            self.images[i].classList.add("cd-is-hidden"); 
            self.contents[i].classList.add("cd-is-hidden"); 
          }
        })(i);
      }
    };

    VerticalTimeline.prototype.showBlocks = function() {
      if ( ! "classList" in document.documentElement ) {
        return;
      }
      var self = this;
      for( var i = 0; i < this.blocks.length; i++) {
        (function(i){
          if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
            self.images[i].classList.add("cd-timeline__img--bounce-in");
            self.contents[i].classList.add("cd-timeline__content--bounce-in");
            self.images[i].classList.remove("cd-is-hidden");
            self.contents[i].classList.remove("cd-is-hidden");
          }
        })(i);
      }
    };

    var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
      verticalTimelinesArray = [],
      scrolling = false;
    if( verticalTimelines.length > 0 ) {
      for( var i = 0; i < verticalTimelines.length; i++) {
        (function(i){
          verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
        })(i);
      }

      window.addEventListener("scroll", function(event) {
        if( !scrolling ) {
          scrolling = true;
          (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
        }
      });
    }

    function checkTimelineScroll() {
      verticalTimelinesArray.forEach(function(timeline){
        timeline.showBlocks();
      });
      scrolling = false;
    };
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1170px) {
  .cd-is-hidden {
    visibility: hidden;
  }
}

header {
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: #303e49;
}

header h1 {
  color: white;
  font-size: 1.1rem;
}

@media only screen and (min-width: 1170px) {
  header {
    height: 300px;
    line-height: 300px;
  }
  header h1 {
    font-size: 1.75rem;
  }
}

.cd-timeline {
  overflow: hidden;
}

.cd-timeline__container {
  position: relative;
  width: 100%;
  max-width: 1470px;
  margin: 0 auto;
}

.cd-timeline__container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #D3D3D3;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  .cd-timeline__container::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline__block {
  position: relative;
  margin: 2em 0;
}

.cd-timeline__block:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline__block:first-child {
  margin-top: 0;
}

.cd-timeline__block:last-child {
  margin-bottom: 0;
  padding-bottom: 20px;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline__block {
    margin: 4em 0;
  }
}

.cd-timeline__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline__img img {
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;
}

.cd-timeline__img.cd-timeline__img--picture {
  background: #AD0001;
}

.cd-timeline__img.cd-timeline__img--picture i {
  font-size: 22px;
  color: #FFF;
  margin-left: 12px;
  margin-top: 15px;
}

.cd-timeline__img.cd-timeline__img--movie {
  background: #c03b44;
}

.cd-timeline__img.cd-timeline__img--location {
  background: #f0ca45;
}

.fab {
  min-width: 18px;
  min-height: 14px;
  margin-bottom: 3px;
  font-size: 22px;
  margin-left: 7px;
  color: #AD0001;
}

.fab:hover {
  color: #333;
}

.fas {
  min-width: 18px;
  min-height: 14px;
  margin-bottom: 3px;
  font-size: 22px;
  margin-right: 7px;
  color: #AD0001;
}

.fas:hover {
  color: #333;
}

.ml-0 {
  margin-left: 0px !important;
}

.mr-7 {
  margin-right: 7px !important;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline__img {
    width: 50px;
    height: 50px;
    left: 50%;
    margin-left: -25px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .cd-timeline__img.cd-timeline__img--bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }
}

@-webkit-keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.cd-timeline__content {
  position: relative;
  margin-left: 60px;
  background: #F5F5F6;
  border-radius: 0.25em;
  padding: 1em;
  -webkit-box-shadow: 0 3px 0 #D3D3D3;
  box-shadow: 0 3px 0 #D3D3D3;
}

.cd-timeline__content:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline__content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid white;
}

.cd-timeline__content h2 {
  color: #303e49;
}

.cd-timeline__content p,
.cd-timeline__read-more,
.cd-timeline__date {
  font-size: 1.3rem;
}

.cd-timeline__content p {
  margin: 1em 0;
  line-height: 1.6;
}

.cd-timeline__read-more,
.cd-timeline__date {
  display: inline-block;
}

.cd-timeline__read-more {
  float: right;
  padding: .8em 1em;
  background: #acb7c0;
  color: white;
  border-radius: 0.25em;
}

.cd-timeline__read-more:hover {
  background-color: #bac4cb;
}

.cd-timeline__date {
  float: left;
  padding: .8em 0;
  padding-top: 7px;
  opacity: .7;
  font-size: 18px;
  font-weight: 700;
}

@media only screen and (min-width: 768px) {
  .cd-timeline__content h2 {
    font-size: 18px;
    font-weight: 700;
    color: #AD0001;
  }
  .cd-timeline__content a:hover {
    color: #333;
    text-decoration: none !important;
  }
  .cd-timeline__content h2:hover {
    color: #333;
    text-decoration: none !important;
  }
  .cd-timeline__content p {
    font-size: 16px;
  }
  .cd-timeline__read-more,
  .cd-timeline__date {
    font-size: 1.4rem;
  }
}

@media only screen and (min-width: 1170px) {
  .cd-timeline__content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .cd-timeline__content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: white;
  }
  .cd-timeline__read-more {
    float: left;
  }
  .cd-timeline__date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 18px;
    color: #000;
  }
  .cd-timeline__block:nth-child(even) .cd-timeline__content {
    float: right;
  }
  .cd-timeline__block:nth-child(even) .cd-timeline__content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: white;
  }
  .cd-timeline__block:nth-child(even) .cd-timeline__read-more {
    float: right;
  }
  .cd-timeline__block:nth-child(even) .cd-timeline__date {
    left: auto;
    right: 122%;
    text-align: right;
  }
  .cd-timeline__content.cd-timeline__content--bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}

@media only screen and (min-width: 1170px) {
  .cd-timeline__block:nth-child(even) .cd-timeline__content.cd-timeline__content--bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}

@-webkit-keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@-webkit-keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes cd-bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.cd-nugget-info {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 50px;
  line-height: 50px;
  top: 0;
  left: 0;
}

.cd-nugget-info a {
  position: relative;
  font-size: 14px;
  color: #718ca1;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
}

.cd-nugget-info a:hover {
  opacity: .8;
}

.cd-nugget-info span {
  vertical-align: middle;
  display: inline-block;
}

.cd-nugget-info span svg {
  display: block;
}

.cd-nugget-info .cd-nugget-info-arrow {
  fill: #718ca1;
}
</style>
