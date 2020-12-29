<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1 class="text-h1">Objets</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
            :headers="headers"
            :items="this.items"
            :items-per-page="10"
            calculate-widths
            class="elevation-1"
            :search="search"
            dense
            :footer-props="{
      'items-per-page-options': [5,10,20],
    }"
        >
          <template v-slot:top>
            <v-text-field
                v-model="search"
                label="Rechercher un objet"
                class="mx-4"
                clearable
            ></v-text-field>
          </template>
          <template v-slot:item.url="{ item }">
            <v-img :src="url + '/' + item.url" height="30px" width="30px">
            </v-img>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import {Constants} from "@/constants";

export default {
  name: "Items",
  data: () => ({
    items: [],
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id',
      },
      {text: 'Nom Anglais', value: 'name.english'},
      {text: 'Nom Japonais', value: 'name.japanese'},
      {text: 'Nom Chinois', value: 'name.chinese'},
      {text: 'Miniature', value: 'url'},
    ],
    search: '',
    url: Constants.ITEMS_SPRITES_URL
  }),
  mounted() {
    axios.get(Constants.API_URL + '/items').then(data => {
      this.items = data.data;
    })
  }
}
</script>

<style scoped>

</style>