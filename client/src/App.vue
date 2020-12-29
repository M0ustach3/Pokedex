<template>
  <v-app>
    <v-toolbar
        dense
    >
      <v-btn icon @click.stop="navigationDrawer = !navigationDrawer">
        <v-icon>$logo</v-icon>
      </v-btn>
      <v-app-bar-title>Pokédex
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="changeTheme">
        <v-icon v-if="$vuetify.theme.dark">mdi-brightness-4</v-icon>
        <v-icon v-else>mdi-brightness-5</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
        v-model="navigationDrawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="$router.push('/').catch(err => {
            if (
              err.name !== 'NavigationDuplicated' && !err.message.includes('Avoided redundant navigation to current location')
            ) {
              console.error(err);
            }
          })">
            <v-list-item-title>
              Accueil
            </v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('items').catch(err => {
            if (
              err.name !== 'NavigationDuplicated' && !err.message.includes('Avoided redundant navigation to current location')
            ) {
              console.error(err);
            }
          })">
            <v-list-item-title>
              Objets
            </v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('moves').catch(err => {
            if (
              err.name !== 'NavigationDuplicated' && !err.message.includes('Avoided redundant navigation to current location')
            ) {
              console.error(err);
            }
          })">
            <v-list-item-title>Capacités</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('pokemons').catch(err => {
            if (
              err.name !== 'NavigationDuplicated' && !err.message.includes('Avoided redundant navigation to current location')
            ) {
              console.error(err);
            }
          })">
            <v-list-item-title>Pokémons</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container fluid fill-height
                 v-bind:class="{ 'custom-pokemon-bg': !$vuetify.theme.dark, 'custom-pokemon-bg-dark': $vuetify.theme.dark }">
      <v-row align="center">
        <v-col align-self="center" class="text-center">
          <router-view/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    navigationDrawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.navigationDrawer = false
    },
  },
  methods: {
    changeTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped>
.custom-pokemon-bg {
  background-image: url("assets/background.jpg");
  background-position: center;
  background-size: cover;
}

.custom-pokemon-bg-dark {
  background-image: url("assets/background_dark.png");
  background-position: center;
  background-size: cover;
}
</style>
