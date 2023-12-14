<template>
  <!-- {{ properties.input }} -->
  <div class="container">
    <div class="mid">
      <div class="aside">
      <h4>Informações da categoria</h4>
      <v-list
        class="mx-1"
        max-width="300"
      >
        <v-list-item
          link
          prepend-icon="mdi-account-arrow-up"
          title="Idade mais comprou"
        >
          <template v-slot:append>
            <v-badge
              color="success"
              :content= response.ageMostInterest[0].idade
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
              :content= response.ageMostInterest[response.ageMostInterest.length-1].idade
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
              :content=response.dealStatics.average
              inline
            ></v-badge>
          </template>
        </v-list-item>

        <v-list-item
          link
          prepend-icon="mdi-calendar-month"
          title="Mês com mais vendas"
        >
          <template v-slot:append>
            <v-badge
              color="success"
              :content=response.bestMonths[0].month
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
      response: {
        ageMostInterest: [
          {
            idade: 33,
            quantity: 26,
            percent: "2,85%"
          },
          {
            idade: 35,
            quantity: 18,
            percent: "4,11%"
          },
          {
            idade: 31,
            quantity: 14,
            percent: "5,29%"
          },
          {
            idade: 39,
            quantity: 10,
            percent: "7,40%"
          },
          {
            idade: 34,
            quantity: 10,
            percent: "7,40%"
          },
          {
            idade: 27,
            quantity: 10,
            percent: "7,40%"
          },
          {
            idade: 28,
            quantity: 8,
            percent: "9,25%"
          },
          {
            idade: 32,
            quantity: 8,
            percent: "9,25%"
          },
          {
            idade: 40,
            quantity: 6,
            percent: "12,33%"
          },
          {
            idade: 36,
            quantity: 6,
            percent: "12,33%"
          },
          {
            idade: 37,
            quantity: 6,
            percent: "12,33%"
          },
          {
            idade: 25,
            quantity: 4,
            percent: "18,50%"
          },
          {
            idade: 42,
            quantity: 4,
            percent: "18,50%"
          },
          {
            idade: 30,
            quantity: 4,
            percent: "18,50%"
          },
          {
            idade: 24,
            quantity: 4,
            percent: "18,50%"
          },
          {
            idade: 29,
            quantity: 4,
            percent: "18,50%"
          },
          {
            idade: 26,
            quantity: 4,
            percent: "18,50%"
          },
          {
            idade: 38,
            quantity: 2,
            percent: "37,00%"
          }
        ],
        dealStatics: {
          maxValue: "R$ 2.500,00",
          minValue: "R$ 50,00",
          average: "R$ 417,60"
        },
        bestMonths: [
          {
            month: "nov",
            dealCount: 132
          },
          {
            month: "dez",
            dealCount: 16
          }
        ]
      }
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
    width: 450px;
  }

  .v-list-item__prepend{
    width: 30px;
  }

  .v-list-item__append{
    width: 60px;
  }

  .v-list {
    overflow: hidden !important;
  }
</style>
