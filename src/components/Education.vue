<template>
  <b-table :items="items" :fields="fields" class="section-body site-table">
    <!-- <template slot="details" slot-scope="row">
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2 btn-success">
       {{ row.detailsShowing ? 'Hide' : 'View'}} Details
      </b-button>
    </template>
    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <b-col>{{ row.item.details }}</b-col>
        </b-row>
      </b-card>
    </template> -->
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
  width: 80% !important;
  margin: 0 auto;
  border-left: 2px solid lightgrey;
  border-right: 2px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}
</style>
