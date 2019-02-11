<template>
  <ul id="Skills" class="skill-list col-lg-12 col-xs-12 col-sm-12">
    <li class="skill-card" v-for="skill in skills" :key="skill.id">
      <div class="col-lg-3 col-xs-12 col-md-6 list-inline">
        <div class="skill-card-main">
        <div class="team-front">
        <div class="skill-card-img">
          <img :src="skill.img" class="img-fluid" :alt="skill.name" />
        </div>
        <h3>{{ skill.name }}</h3>
        <h6>{{ skill.type }}</h6>
        </div>
        <div class="team-back">
          <h5>{{ skill.name }}</h5>
          <span>{{ skill.experience }}</span>
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
      skillsURL: "https://joshlevyportfolio.herokuapp.com/skills"
    };
  },
  mounted() {
    fetch(this.skillsURL)
      .then(response => response.json())
      .then(response => {
        this.skills = response.skills;
      });
  }
};
</script>

<style scoped>
.skill-list {
  display: inline;
  padding-left: 0px;
  padding-right: 0px;
}

.skill-card {
  display: inline;
}

.list-inline {
  display: inline-flex;
}

.skill-card-main {
  width: 100%;
  height: auto;
  border-bottom: 2px solid gray;
  background: #fff;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: 0.5s;
  margin-bottom: 28px;
}

.skill-card-img {
  margin-bottom: 20px;
  height: 90px;
}

.skill-card-img img {
  width: auto;
  height: 100%;
}

.skill-card-main h3 {
  font-size: 20px;
  font-weight: 700;
}

.skill-card-main p {
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
</style>

