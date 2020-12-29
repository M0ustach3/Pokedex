<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar
              dense
              floating
          >
            <v-text-field
                hide-details
                prepend-icon="mdi-magnify"
                single-line
                label="Nom du Pokémon"
                clearable
                v-model="filterCriteria"
                @input="changeFilter"
            ></v-text-field>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text-center">
            <v-container>
              <v-row v-if="this.loading">
                <v-col v-for="index in this.step" :key="index">
                  <PokemonCard :pokemon="undefined" :stats="undefined">
                  </PokemonCard>
                </v-col>
              </v-row>
              <v-row v-else>
                <v-col v-for="pokemon in this.displayedPokemon" :key="pokemon.id">
                  <PokemonCard :pokemon="pokemon" :stats="data.stats">
                  </PokemonCard>
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <v-row justify="center"
                     v-if="(filterCriteria==null || filterCriteria === '') && (selectedTypes.length === 0)">
                <v-col cols="12">
                  <v-container class="max-width">
                    <v-pagination
                        v-model="page"
                        :length="Math.floor(data.pokemons.length/step) + 1"
                        :total-visible="6"
                        color="primary"
                        @input="next"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            fab
            dark
            bottom
            right
            fixed
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
            dark
            color="primary"
        >
          <v-btn
              icon
              dark
              @click="filterWithTypes"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Filtres</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list
            subheader
        >
          <v-subheader>Types</v-subheader>
          <v-list-item v-for="(type,i) in availableTypes" :key="i">
            <v-list-item-action>
              <v-checkbox v-model="selectedTypes" :label="type.french" :value="type.english">{{ type.french }}
              </v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import axios from "axios";
import {Constants} from "@/constants";
import PokemonCard from "@/components/PokemonCard";

export default {
  name: "Pokemons",
  components: {PokemonCard},
  data() {
    return {
      displayedPokemon: [],
      data: {
        "pokemons": [],
        "stats": {}
      },
      page: 1,
      filterCriteria: "",
      oldFilter: null,
      timer: null,
      selectedTypes: [],
      dialog: false,
      availableTypes: [],
      step: 6,
      loading: true
    }
  },
  mounted() {
    axios.get(Constants.API_URL + '/pokemons').then(data => {
      this.data = data.data;
      this.displayedPokemon = this.data.pokemons.slice(0, this.step)
      axios.get(Constants.API_URL + '/types').then(data => {
        this.availableTypes = data.data;
        this.loading = false;
      })
    });
  },
  methods: {
    next(page) {
      this.displayedPokemon = this.data.pokemons.slice(this.step * (page - 1), this.step * (page - 1) + this.step)
    },
    changeFilter(data) {
      this.oldFilter = data;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.timer = null;
        if (this.filterCriteria === this.oldFilter) {
          if (this.selectedTypes.length === 0) {
            if (data === "" || data === null) {
              this.displayedPokemon = this.data.pokemons.slice(0, this.step)
            } else {
              this.displayedPokemon = this.data.pokemons.filter((item) => {
                return (item.name.french.toLowerCase().includes(data.toLowerCase()))
              });
            }
          } else {
            if (data === "" || data === null) {
              this.displayedPokemon = this.data.pokemons.filter((item) => {
                return item.type.some(r => this.selectedTypes.includes(r))
              });
            } else {
              this.displayedPokemon = this.displayedPokemon.filter((item) => {
                return (item.name.french.toLowerCase().includes(data.toLowerCase()))
              });
            }
          }
        }
      }, 1000);
    },
    filterWithTypes() {
      this.dialog = false
      if (this.selectedTypes.length === 0) {
        this.displayedPokemon = this.data.pokemons.slice(0, this.step)
      } else {
        this.displayedPokemon = this.data.pokemons.filter((item) => {
          return item.type.some(r => this.selectedTypes.includes(r))
        });
      }
    }
  }
}
</script>

<style scoped>

</style>