<template class="section-body">
  <b-table :items="items" :fields="fields">
    <template slot="details" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2 btn-success">
       {{ row.detailsShowing ? 'Hide' : 'View'}} Details
      </b-button>
      <!-- In some circumstances you may need to use @click.native.stop instead -->
      <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
    </template>
    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <!-- <b-col sm="3" class="text-sm-right"><b>Built With:</b></b-col> -->
          <b-col>{{ row.item.details }}</b-col>
        </b-row>
        <!-- <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
          <b-col>{{ row.item.isActive }}</b-col>
        </b-row> -->
      </b-card>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "EmploymentHistory",
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
.section-body {
  padding-left: 50px;
  padding-right: 50px;
}
</style>
