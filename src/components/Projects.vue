<template>
  <b-table :items="items" :fields="fields">
    <template slot="languages" slot-scope="row">
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2 btn-success">
       {{ row.detailsShowing ? 'Hide' : 'View'}} Languages
      </b-button>
    </template>
    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Built With:</b></b-col>
          <b-col>{{ row.item.languages }}</b-col>
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
  name: "Projects",
  data() {
    return {
      fields: ["project", "languages", "additional_details"],
      items: [
        {
          isActive: true,
          age: 40,
          project: "Josh Levy Portfolio",
          languages: ["Vue", "PostgreSQL"]
        },
        {
          isActive: false,
          age: 21,
          project: "Bad Movie Night"
        },
        {
          isActive: false,
          age: 89,
          project: "Dino Jobs"
        },
        {
          isActive: true,
          age: 38,
          project: "Auth Playground"
        }
      ]
    };
  }
};
</script>