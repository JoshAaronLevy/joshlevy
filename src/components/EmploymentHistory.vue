<template>
  <b-table :items="items" :fields="fields" class="section-body site-table">
    <template slot="details" slot-scope="row">
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2 btn-success">
       {{ row.detailsShowing ? 'Hide' : 'View'}} Details
      </b-button>
    </template>
    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <b-col>
            <ul id="Jobs">
              <li v-for="detail in row.item.details" v-bind:key="detail">{{ detail }}</li>
            </ul>
          </b-col>
        </b-row>
      </b-card>
    </template>
  </b-table>
</template>

<script>
export default {
  // name: "Jobs",
  // data() {
  //   return {
  //     fields: ["company", "title", "employment_date", "details"],
  //     jobs: [],
  //     jobsURL: "https://joshlevy.herokuapp.com/jobs"
  //   };
  // },
  // mounted() {
  //   fetch(this.jobsURL)
  //     .then(response => response.json())
  //     .then(response => {
  //       this.jobs = response.jobs;
  //     });
  // }
  name: "Jobs",
  data() {
    return {
      fields: ["company", "title", "employment_date", "details"],
      items: [
        {
          company: "Fireplace Warehouse",
          title: "Marketing/IT/Web Developer",
          employment_date: "August 2017 - March 2018",
          details: ["Worked a lot", "Never got breaks"]
        },
        {
          company: "Self-Employed",
          title: "Freelance Developer",
          employment_date: "August 2017 - March 2018"
        },
        {
          company: "Hillside Software",
          title: "Full-Stack Developer",
          employment_date: "April 2014 - September 2017"
        },
        {
          company: "mGive - Mobile Accord",
          title: "Account Strategist",
          employment_date: "April 2013 - March 2014"
        },
        {
          company: "Hillside Software",
          title: "Support, Marketing and Training Manager",
          employment_date: "December 2004 - March 2013"
        }
      ]
    };
  }
};
</script>

<style scoped>
.site-table {
  width: 80% !important;
  margin: 0 auto;
  border-left: 2px solid lightgrey;
  border-right: 2px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}
</style>
