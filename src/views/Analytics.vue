<template>
  <!-- {{ properties.input }} -->
  <div class="container">
    <div class="mid">
      <div class="aside">
      <h4>Informações da categoria</h4>
      <v-list
        class="mx-1"
        max-width="256"
      >
        <v-list-item
          link
          prepend-icon="mdi-account-arrow-up"
          title="Idade mais comprou"
        >
          <template v-slot:append>
            <v-badge
              color="success"
              content="6"
              inline
            ></v-badge>
          </template>
        </v-list-item>

        <v-list-item
          link
          prepend-icon="mdi-account-arrow-down"
          title="Idade menos comprou"
        >
          <template v-slot:append>
            <v-badge
              color="success"
              content="6"
              inline
            ></v-badge>
          </template>
        </v-list-item>

        <v-list-item
          link
          prepend-icon="mdi-currency-usd"
          title="Média de Gastos"
        >
          <template v-slot:append>
            <v-badge
              color="success"
              content="6"
              inline
            ></v-badge>
          </template>
        </v-list-item>

        <v-list-item
          link
          prepend-icon="mdi-map-marker-star"
          title="Região Mais Comprou"
        >
          <template v-slot:append>
            <v-badge
              color="success"
              content="6"
              inline
            ></v-badge>
          </template>
        </v-list-item>
      </v-list>

      </div>
      <div class="content">
        <!-- <img src="../assets/notebook.png"> -->
        <GMapMap
          :center="{ lat: -23.60541, lng: -46.69411 }"
          :zoom="12"
          map-type-id="terrain"
          style="width: 480px; height: 500px"
          :options="{
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            rotateControl: true,
            fullscreenControl: true
          }"
        >
        <GMapMarker
          :key="index"
          v-for="(m, index) in mapMarkers"
          :position="m"
          :icon= '{
              url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png",
              scaledSize: {width: 77, height: 77},
              labelOrigin: {x: 16, y: -10}
          }'
          :clickable="true"
          :draggable="true"
        />
        </GMapMap>
      </div>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
interface IAnalyticsProperties {
  input: string;
  selectInput: string;
}

const properties = withDefaults(defineProps<IAnalyticsProperties>(), {
  input: '',
  selectInput: ''
});

console.log(properties);
</script> -->

<script lang="ts">
import GoogleMap from '../components/GoogleMap.vue';
import GoogleMapMarkers from '../components/GoogleMapMarkers.vue';

export default {
  components: {
    GoogleMap,
    GoogleMapMarkers,
  },
  data() {
    return {
      mapConfig: {
        zoom: 12,
        center: {
          lat: -6.1753871,
          lng: 106.8249641
        },
      },
      mapMarkers: [
        {
          name: 'GBK',
          lat: -23.60541,
          long: -46.69411,
        },
        {
          name: 'Ancol',
          lat: -6.1229209,
          long: 106.8228804,
        },
        {
          name: 'Monas',
          lat: -6.1753871,
          long: 106.8249641,
        }
      ],
    };
  },
}
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mid {
    background-color: white;
    width: 800px;
    height: 500px;
    border-radius: 10px;
    display: flex;
    margin-top: 50px;
  }

  .aside {
    width: 300px;
  }

  h4{
    margin: 10px;
  }
  .content {
    padding-left: 10px;
    width: 500px;
  }

  .v-list-item__prepend{
    width: 30px;
  }

  .v-list-item__append{
    width: 10px;
  }

  .v-list {
    overflow: hidden !important;
  }
</style>
