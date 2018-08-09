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
          details: [`Redesigned company website. yielding a 300% increase in traffic and 200% increase in lead conversions`, `Managed internal infrastructure hosted on seven Google Cloud servers, supporting 50 employees in three locations`, `Overhauled company eCommerce site, increasing eCommerce revenue by 57%`, `Managed SEM campaigns, increasing traffic by 150% while reducing SEM costs by over 20%`]
        },
        {
          company: "Freelance",
          title: "Web Developer/Designer",
          employment_date: "August 2017 - March 2018",
          details: [`Created three separate client sites in WordPress, adhering to strict deadlines`, `Created and managed over 20 SEM and paid advertising campaigns, yielding a 57% increase in ad revenue for clients`]
        },
        {
          company: "Hillside Software",
          title: "Full-Stack Developer",
          employment_date: "April 2014 - September 2017",
          details: [`Developed a full-stack responsive web app`, `Utilized AngularJS, Node.js, Parse (MongoDB), Bootstrap, Jade/Pug and Grunt`]
        },
        {
          company: "mGive - Mobile Accord",
          title: "Account Strategist",
          employment_date: "April 2013 - March 2014",
          details: [`Assisted a wide variety of non-profit organizations with over 50 fundraising and outreach campaigns`, `Managed over 20 fundraising campaigns responsible for raising over $30 million for clients`, `Responsible for creating and presenting financial reports to internal management, as well as clients`]
        },
        {
          company: "Hillside Software",
          title: "Support, Marketing and Training Manager",
          employment_date: "December 2004 - March 2013",
          details: [`Trained current and prospective clients on using the software in both small and large settings with over 100 presentations delivered`, `Provided assistance to real estate agents on how to continuously implement the company’s products focused on their unique business needs`, `Worked closely with the development team on prioritizing bug fixes and new product development`, `Administered the execution of sales objectives and project progress`]
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
