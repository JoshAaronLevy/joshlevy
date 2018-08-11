<template>
  <b-table :items="items" :fields="fields" class="section-body site-table table-responsive">
  </b-table>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      fields: ["school", "degree", "area_of_study", "graduation_date"],
      items: [
        {
          school: "Galvanize",
          degree: "Certificate",
          area_of_study: "Web Development Immersive",
          graduation_date: "October 2018"
        },
        {
          school: "University of Colorado at Denver",
          degree: "Bachelor's",
          area_of_study: "Communications and Economics",
          graduation_date: "December 2012"
        }
      ]
    };
  }
};
</script>

<style scoped>
.site-table {
  display: table;
  width: 80%;
  margin: 0 auto;
  border-left: 2px solid lightgrey;
  border-right: 2px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}
@media (max-width: 768px) {
  .site-table {
    display: block;
    width: 90%;
    margin: 0 auto;
    border-left: 2px solid lightgrey;
    border-right: 2px solid lightgrey;
    border-bottom: 1px solid lightgrey;
  }
}
</style>
