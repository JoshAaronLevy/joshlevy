<template>
  <b-table :items="items" :fields="fields" class="section-body site-table table-responsive">
    <template slot="details" slot-scope="row">
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2 btn-primary">
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
  name: 'Jobs',
  data() {
    return {
      fields: ['company', 'title', 'employment_date', 'details'],
      items: [
        {
          company: 'Learn to Code - Galvanize',
          title: 'Co-Organizer/Lead Instructor',
          employment_date: 'April 2018 - September 2018',
          details: [
            `One of three volunteer lead instructors of a weekly, student-run Learn to Code program`,
            `Delivered engaging classroom lectures on HTML, CSS and VanillaJS to students brand new to coding`,
            `Created and maintained Learn-to-Code website, providing program agendas and overall structure`,
            `Helped cultivate a team of future development stars - the TA's`
          ]
        },
        {
          company: 'Fireplace Warehouse',
          title: 'Marketing/IT/Web Developer',
          employment_date: 'August 2017 - March 2018',
          details: [
            `Redesigned company website. yielding a 300% increase in traffic and 200% increase in lead conversions`,
            `Managed internal infrastructure hosted on seven Google Cloud servers, supporting 50 employees in three locations`,
            `Overhauled company eCommerce site, increasing revenue by 53%`,
            `Managed SEM campaigns, increasing traffic by 150% while reducing SEM costs by over 20%`
          ]
        },
        {
          company: 'Freelance',
          title: 'Web Developer/Designer',
          employment_date: 'August 2017 - March 2018',
          details: [
            `Developed and maintained four separate client sites in WordPress/PHP, adhering to strict deadlines`,
            `Created and managed over 20 SEM and paid advertising campaigns, yielding a 59% increase in ad revenue for clients`
          ]
        },
        {
          company: 'Hillside Software',
          title: 'Full-Stack Developer',
          employment_date: 'April 2014 - September 2017',
          details: [
            `Developed a full-stack responsive web app`,
            `Utilized AngularJS, Node.js, Parse (MongoDB), Passport.js, Bootstrap, Jade/Pug and Grunt`
          ]
        },
        {
          company: 'mGive - Mobile Accord',
          title: 'Account Strategist',
          employment_date: 'April 2013 - March 2014',
          details: [
            `Assisted a wide variety of non-profit organizations with over 50 fundraising and outreach campaigns`,
            `Managed over 20 fundraising campaigns responsible for raising over $30 million for clients`,
            `Responsible for creating and presenting financial reports to internal management, as well as clients`
          ]
        },
        {
          company: 'Hillside Software',
          title: 'Support, Marketing and Training Manager',
          employment_date: 'December 2004 - March 2013',
          details: [
            `Trained current and prospective clients on using the software in both small and large settings with over 100 presentations delivered`,
            `Provided assistance to real estate agents on how to continuously implement the company’s products focused on their unique business needs`,
            `Worked closely with the development team on prioritizing bug fixes and new product development`,
            `Administered the execution of sales objectives and project progress`
          ]
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

.table th {
  font-size: 18px !important;
}

.table td {
  vertical-align: middle;
  font-size: 18px;
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

.btn-primary {
  background-color: #ae0001;
  border: none;
  font-size: 16px;
}

.btn-primary:hover {
  background-color: #222222;
  border: none;
}

.btn-primary:focus {
  background-color: #222222;
  border: none;
}

.btn-primary:active {
  background-color: #222222;
  border: none;
}

ul#Jobs li {
  font-size: 16px;
}
</style>
