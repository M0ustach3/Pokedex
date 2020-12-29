import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Logo from "@/components/Logo";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {dark: false},
  icons: {
    values: {
      logo: { // name of our custom icon
        component: Logo, // our custom component
      },
    },
  }
});
