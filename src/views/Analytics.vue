<template>
  <!-- {{ properties.input }} -->
  <div class="container">
    <div class="mid">
      <div class="aside">
      <h3>Informações da categoria</h3>
      <v-list
        class="mx-1"
        max-width="350"
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
          prepend-icon="mdi-cash-plus"
          title="Maior Valor Gastos"
        >
          <template v-slot:append>
            <v-badge
              color="success"
              :content=response.dealStatics.maxValue
              inline
            ></v-badge>
          </template>
        </v-list-item>

        <v-list-item
          link
          prepend-icon="mdi-cash-minus"
          title="Menor Valor Gastos"
        >
          <template v-slot:append>
            <v-badge
              color="success"
              :content=response.dealStatics.minValue
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
          :center=mapConfig.center
          :zoom=mapConfig.zoom
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
            :position="m.position"
            :clickable="true"
            :draggable="false"
          >
            <GMapInfoWindow :opened="true">
              <h4>{{ m.position.name }}</h4>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapMap>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import GoogleMap from '../components/GoogleMap.vue';
import GoogleMapMarkers from '../components/GoogleMapMarkers.vue';
import axios from 'axios'

export default {
  components: {
    GoogleMap,
    GoogleMapMarkers,
  },
  data() {
    return {
      mapConfig: {
        zoom: 10,
        center: {
          lat: -23.5924312,
          lng: -46.6883448,
        },
      },
      mapMarkers: [
        {
          position: {
            name: 'SMS Controle Total',
            lat: -23.5232598,
            lng: -46.69411,
          }
        },
        {
          position: {
            name: 'Pagamento Banco CSF',
            lat: -23.6154476,
            lng: -46.7033633,
          }
        },
        {
          position: {
            name: 'Microsoft*Xbox, Sao Paulo',
            lat: -23.5924312,
            lng: -46.6883448,
          }
        },
        {
          position: {
            name: 'LOPES   SILVA, SANTA RITA DO',
            lat: -23.6219561,
            lng: -46.6931732,
          }
        },
        {
          position: {
            name: 'SMS Controle Total',
            lat: -23.5232598,
            lng: -46.6964681,
          }
        },
        {
          position: {
            name: 'GIL MATERIAL DE CONST, SANTA RITA DO',
            lat: -23.5237339,
            lng: -46.5209817,
          }
        },
        {
          position: {
            name: 'GIL MATERIAL DE CONST, SANTA RITA DO',
            lat: -23.5237339,
            lng: -46.5209817,
          }
        },
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
      },
    };
  },
  mounted () {
    axios
      .get('https://a257-200-232-152-13.ngrok-free.app/api/User/john@example.com')
      .then(response => {
        console.log(response)
      })
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
    width: 900px;
    height: 500px;
    border-radius: 10px;
    display: flex;
    margin-top: 50px;
  }

  .aside {
    width: 400px;
  }

  h3{
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
    width: 80px;
  }

  .v-list {
    overflow: hidden !important;
  }
</style>
