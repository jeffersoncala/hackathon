/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App)

registerPlugins(app)


app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD_Eb7sC0rZ4rgdrnXOy7Mh4S98eiUQRzw',
  },
}).mount('#app');
