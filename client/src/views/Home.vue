<template>
  <div>
    <v-scroll-y-transition>
      <v-card-text v-show="true" class="text-h1">
        Pokédex
      </v-card-text>
    </v-scroll-y-transition>
    <v-scroll-y-transition>
      <v-card-text v-show="true" class="text-h4">
        Bienvenue sur le Pokédex de Pablo Bondia-Luttiau
      </v-card-text>
    </v-scroll-y-transition>
    <v-scroll-y-transition>
      <v-card-text v-show="true" class="text-subtitle-1">
        Cliquez sur la Pokéball pour naviguer sur le site !
      </v-card-text>
    </v-scroll-y-transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>