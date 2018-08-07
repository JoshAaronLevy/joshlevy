<template>
  <ul id="Skills" class="skill-list col-lg-12">
    <li class="skill-card" v-for="skill in skills" :key="skill.id">
      <div class="col-lg-3 list-inline">
        <div class="our-team-main">
        <div class="team-front">
        <img src="http://placehold.it/110x110/9c27b0/fff?text=Dilip" class="img-fluid" />
        <h3>{{ skill.name }}</h3>
        <h6>{{ skill.type }}</h6>
        </div>
        <div class="team-back">
          <h5>{{ skill.name }}</h5>
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</span>
        </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [],
      skillsURL: "https://joshlevy.herokuapp.com/skills"
    };
  },
  mounted() {
    fetch(this.skillsURL)
      .then(response => response.json())
      .then(response => {
        this.skills = response;
        console.log(skills);
      });
  }
  // name: "Skills",
  // data() {
  //   return {
  //     skills: [
  //       {
  //         id: 1,
  //         name: "React",
  //         type: "Front-End",
  //         image: "https://aws.com"
  //       },
  //       {
  //         id: 2,
  //         name: "Vue.js",
  //         type: "Front-End",
  //         image: "https://aws.com"
  //       }
  //     ]
  //   };
  // }
};
</script>

<style scoped>
body {
  background: #00bcd4;
}

h1 {
  color: #fff;
  margin: 40px 0 60px 0;
  font-weight: 300;
}

.skill-list {
  display: inline;
}

.skill-card {
  display: inline;
}

.list-inline {
  display: inline-flex;
}

.our-team-main {
  width: 100%;
  height: auto;
  border-bottom: 2px #323233 solid;
  background: #fff;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: 0.5s;
  margin-bottom: 28px;
}

.our-team-main img {
  border-radius: 50%;
  margin-bottom: 20px;
  width: 90px;
}

.our-team-main h3 {
  font-size: 20px;
  font-weight: 700;
}

.our-team-main p {
  margin-bottom: 0;
}

.team-back {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 0 15px;
  text-align: center;
  background: #fff;
}

.team-front {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
  background: #fff;
  padding: 15px;
  bottom: 0px;
  transition: all 0.5s ease;
}

.our-team-main:hover .team-front {
  bottom: -200px;
  transition: all 0.5s ease;
}

.our-team-main:hover {
  border-color: #777;
  transition: 0.5s;
}
</style>

