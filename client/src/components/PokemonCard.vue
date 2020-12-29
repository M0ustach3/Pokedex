<template>
  <v-card
      class="mx-auto"
      max-width="344"
      outlined
      transition="scale-transition"
      elevation="5"
  >
    <v-card-title>
      <v-container fluid>
        <v-row no-gutters>
          <v-col sm="7" v-if="pokemon !== undefined && stats !== undefined">{{ this.pokemon.name.french }}</v-col>
          <v-col v-else>
            <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="text"
            ></v-skeleton-loader>
          </v-col>
          <v-col sm="5" v-if="pokemon !== undefined && stats !== undefined">
            <v-row justify="space-around">
              <v-col v-for="(type,i) in this.pokemon.type" :key="i" align="right">
                <v-img :src="require('@/assets/types/'+ type.toLowerCase() + '.svg')" height="25px" width="25px">
                </v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-else>
            <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="text"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row align="center"
               justify="center" v-if="pokemon !== undefined && stats !== undefined">
          <v-col sm="8">
            <v-subheader class="text-caption">En : {{ this.pokemon.name.english }}<br>Jp : {{
                this.pokemon.name.japanese
              }}
            </v-subheader>
          </v-col>
          <v-col sm="4">
            <span class="text-caption"> NO. {{ this.pokemon.id }}</span>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col>
            <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="text"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-row align="center">
          <v-col align-self="center" v-if="pokemon !== undefined && stats !== undefined">
            <v-img :src="this.url" max-width="200px" class="mx-auto"></v-img>
          </v-col>
          <v-col v-else>
            <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="image"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row align-content="center">
          <v-col align-self="center">
            <v-container class="text-center" v-if="pokemon !== undefined && stats !== undefined">
              <v-row>
                <v-col>HP</v-col>
                <v-col>
                  <v-progress-linear
                      color="green"
                      rounded
                      :value="this.pokemonPercentage['HP']"
                      height="25"
                  >
                    {{ this.pokemon.base['HP'] }}
                  </v-progress-linear>
                </v-col>
              </v-row>
              <v-row>
                <v-col>Attack</v-col>
                <v-col>
                  <v-progress-linear
                      color="red"
                      rounded
                      :value="this.pokemonPercentage['Attack']"
                      height="25"
                  >
                    {{ this.pokemon.base['Attack'] }}
                  </v-progress-linear>
                </v-col>
              </v-row>
              <v-row>
                <v-col>Defense</v-col>
                <v-col>
                  <v-progress-linear
                      color="blue"
                      rounded
                      :value="this.pokemonPercentage['Defense']"
                      height="25"
                  >
                    {{ this.pokemon.base['Defense'] }}
                  </v-progress-linear>
                </v-col>
              </v-row>
              <v-row>
                <v-col>Sp. Attack</v-col>
                <v-col>
                  <v-progress-linear
                      color="purple"
                      rounded
                      :value="this.pokemonPercentage['Sp. Attack']"
                      height="25"
                  >
                    {{ this.pokemon.base['Sp. Attack'] }}
                  </v-progress-linear>
                </v-col>
              </v-row>
              <v-row>
                <v-col>Sp. Defense</v-col>
                <v-col>
                  <v-progress-linear
                      color="indigo"
                      rounded
                      :value="this.pokemonPercentage['Sp. Defense']"
                      height="25"
                  >
                    {{ this.pokemon.base['Sp. Defense'] }}
                  </v-progress-linear>
                </v-col>
              </v-row>
              <v-row>
                <v-col>Speed</v-col>
                <v-col>
                  <v-progress-linear
                      color="yellow"
                      rounded
                      :value="this.pokemonPercentage['Speed']"
                      height="25"
                  >
                    {{ this.pokemon.base['Speed'] }}
                  </v-progress-linear>
                </v-col>
              </v-row>
            </v-container>
            <v-container v-else>
              <v-row>
                <v-col>
                  <v-skeleton-loader
                      class="mx-auto"
                      max-width="300"
                      type="image"
                  ></v-skeleton-loader>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import {Constants} from "@/constants";

export default {
  name: "PokemonCard",
  props: ['pokemon', 'stats'],
  data: function () {
    return {
      closeOnContentClick: true,
    }
  },
  computed: {
    url: function () {
      let modifiedId = "" + this.pokemon.id;
      if (this.pokemon.id < 10) {
        modifiedId = "00" + modifiedId;
      } else if (this.pokemon.id < 100) {
        modifiedId = "0" + modifiedId;
      }
      return `${Constants.POKEMON_SPRITES_URL}/${modifiedId}.png`
    },
    pokemonColor: function () {
      return Constants.TYPES_COLORS[this.pokemon.type[0]]
    },
    pokemonPercentage: function () {
      return {
        "HP": this.getOutOf100(this.stats.min.minHP, this.stats.max.maxHP, this.pokemon.base.HP),
        "Attack": this.getOutOf100(this.stats.min.minAttack, this.stats.max.maxAttack, this.pokemon.base.Attack),
        "Defense": this.getOutOf100(this.stats.min.minDefense, this.stats.max.maxDefense, this.pokemon.base.Defense),
        "Sp. Attack": this.getOutOf100(this.stats.min.minSpAttack, this.stats.max.maxSpAttack, this.pokemon.base['Sp. Attack']),
        "Sp. Defense": this.getOutOf100(this.stats.min.minSpDefense, this.stats.max.maxSpDefense, this.pokemon.base['Sp. Defense']),
        "Speed": this.getOutOf100(this.stats.min.minSpeed, this.stats.max.maxSpeed, this.pokemon.base.Speed),
      };
    }
  },
  methods: {
    getOutOf100: (min, max, value) => {
      return Math.floor(((value - min) * 100) / (max - min))
    }
  }
}
</script>

<style scoped>


</style>