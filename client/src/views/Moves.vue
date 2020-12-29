<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1 class="text-h1">Capacités</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
            :headers="headers"
            :items="this.moves"
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
                label="Rechercher une capacité"
                class="mx-4"
                clearable
            ></v-text-field>
          </template>
          <template v-slot:item.type="{ item }">
            <v-img :src="require('@/assets/types/'+ item.type.toLowerCase() + '.svg')" height="20px" width="20px">
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
  name: "Moves",
  data: function () {
    return {
      moves: [],
      search: '',
      typeColors: Constants.TYPES_COLORS,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        {text: 'Nom Anglais', value: 'ename'},
        {text: 'Précision', value: 'accuracy'},
        {text: 'Nom Japonais', value: 'jname'},
        {text: 'Nom Chinois', value: 'cname'},
        {text: 'Puissance', value: 'power'},
        {text: 'PP', value: 'pp'},
        {text: 'Type', value: 'type'},
      ]
    }
  },
  mounted() {
    axios.get(Constants.API_URL + '/moves').then(data => {
      this.moves = data.data;
    })
  },
  methods: {}
}
</script>

<style scoped>

</style>