<template>
  <b-table :items="items" :fields="fields">
    <template slot="languages" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2 btn-success">
       {{ row.detailsShowing ? 'Hide' : 'View'}} Languages
      </b-button>
      <!-- In some circumstances you may need to use @click.native.stop instead -->
      <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
    </template>
    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
          <b-col>{{ row.item.age }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
          <b-col>{{ row.item.isActive }}</b-col>
        </b-row>
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
          project: "Josh Levy Portfolio"
        },
        {
          isActive: false,
          age: 21,
          project: "Title One"
        },
        {
          isActive: false,
          age: 89,
          project: "Basic Website"
        },
        {
          isActive: true,
          age: 38,
          project: "Carney"
        }
      ]
    };
  }
};
</script>