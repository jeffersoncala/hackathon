<template>
  <div class="container">
    <div class="left">
      <div class="caixa-dados">
        <img class="hi" src="../assets/hi.png">
        <h1>Hi-Analytics</h1>
        <div class="caixa-input">
          <v-text-field class="input1" label="Nome Produto" v-model="inputTexto"></v-text-field>
          <v-select label="Categoria" item-title="name" v-model="selectCategoria" :items="[{
            id: 'restaurant',
            name: 'Bares e Restaurantes'
          },
          {
            id: 'food',
            name: 'Bares e Restaurantes'
          },
          {
            id: 'establishment',
            name: 'Local Fisico'
          },
          {
            id: 'accounting',
            name: 'Serviços'
          },
          {
            id: 'aiport',
            name: 'Viagem'
          },
          {
            id: 'amusement_park',
            name: 'Transporte'
          },
          {
            id: 'aquarium',
            name: 'Lazer'
          },
          {
            id: 'art_gallery',
            name: 'Lazer'
          },
          {
            id: 'art',
            name: 'Serviços'
          },
          {
            id: 'bakery',
            name: 'Bares e Restaurantes'
          },
          {
            id: 'bank',
            name: 'Serviços'
          },
          {
            id: 'bar',
            name: 'Bares e Restaurantes'
          },
          {
            id: 'beauty_salon',
            name: 'Beleza'
          },
          {
            id: 'bicycle_store',
            name: 'Compras'
          },
          {
            id: 'book_store',
            name: 'Lazer'
          },
          {
            id: 'bowling_alley',
            name: 'Lazer'
          },
          {
            id: 'bus_station',
            name: 'Transporte'
          },
          {
            id: 'cafe',
            name: 'Bares e Restaurantes'
          },
          {
            id: 'campground',
            name: 'Lazer'
          },
          {
            id: 'car_dealer',
            name: 'Compras'
          },
          {
            id: 'car_rental',
            name: 'Serviços'
          },
          {
            id: 'car_repair',
            name: 'Serviços'
          },
          {
            id: 'car_wash',
            name: 'Serviços'
          },
          {
            id: 'casino',
            name: 'Lazer'
          },
          {
            id: 'cemetery',
            name: 'Serviços'
          },
          {
            id: 'city_hall',
            name: 'Serviços'
          },
          {
            id: 'clothing_store',
            name: 'Compras'
          },
          {
            id: 'dentist',
            name: 'Saúde'
          },
          {
            id: 'department_store',
            name: 'Compras'
          },
          {
            id: 'doctor',
            name: 'Saúde'
          },
          {
            id: 'drugstore',
            name: 'Saúde'
          },
          {
            id: 'electrician',
            name: 'Serviços'
          },
          {
            id: 'electronics_store',
            name: 'Compras'
          },
          {
            id: 'embassy',
            name: 'Serviços'
          },
          {
            id: 'fire_station',
            name: 'Serviços'
          },
          {
            id: 'florist',
            name: 'Serviços'
          },
          {
            id: 'funeral_home',
            name: 'Serviços'
          },
          {
            id: 'furniture_store',
            name: 'Compras'
          },
          {
            id: 'gas_station',
            name: 'Serviços'
          },
          {
            id: 'gym',
            name: 'Saúde'
          },
          {
            id: 'hair_care',
            name: 'Beleza'
          },
          {
            id: 'hardware_store',
            name: 'Compras'
          },
          {
            id: 'home_goods_store',
            name: 'Casa'
          },
          {
            id: 'hospital',
            name: 'Saúde'
          },
          {
            id: 'insurance_agency',
            name: 'Serviços'
          },
          {
            id: 'jewelry_store',
            name: 'Compras'
          },
          {
            id: 'laundry',
            name: 'Serviços'
          },
          {
            id: 'lawyer',
            name: 'Serviços'
          },
          {
            id: 'library',
            name: 'Educação'
          },
          {
            id: 'light_rail_station',
            name: 'Transporte'
          },
          {
            id: 'liquor_store',
            name: 'Lazer'
          },
          {
            id: 'local_government_office',
            name: 'Serviços'
          },
          {
            id: 'locksmith',
            name: 'Serviços'
          },
          {
            id: 'lodging',
            name: 'Viagem'
          },
          {
            id: 'meal_delivery',
            name: 'Bares e Restaurantes'
          },
          {
            id: 'movie_rental',
            name: 'Serviços'
          },
          {
            id: 'movie_theater',
            name: 'Lazer'
          },
          {
            id: 'moving_company',
            name: 'Serviços'
          },
          {
            id: 'museum',
            name: 'Lazer'
          },
          {
            id: 'night_club',
            name: 'Lazer'
          },
          {
            id: 'painter',
            name: 'Serviços'
          },
          {
            id: 'park_lazer',
            name: 'Serviços'
          },
          {
            id: 'pet_store',
            name: 'Pets'
          },
          {
            id: 'pharmacy',
            name: 'Saúde'
          },
          {
            id: 'physiotherapist',
            name: 'Saúde'
          },
          {
            id: 'plumber',
            name: 'Serviços'
          },
          {
            id: 'police',
            name: 'Serviços'
          },
          {
            id: 'post_office',
            name: 'Serviços'
          },
          {
            id: 'primary_school',
            name: 'Educação'
          },
          {
            id: 'real_estate_agency',
            name: 'Serviços'
          },
          {
            id: 'roofing_contractor',
            name: 'Serviços'
          },
          {
            id: 'rv_park',
            name: 'Lazer'
          },
          {
            id: 'school',
            name: 'Educação'
          },
          {
            id: 'secondary_school',
            name: 'Educação'
          },
          {
            id: 'shoe_store',
            name: 'Serviços'
          },
          {
            id: 'shopping_mall',
            name: 'Compras'
          },
          {
            id: 'stadium',
            name: 'Lazer'
          },
          {
            id: 'storage',
            name: 'Serviços'
          },
          {
            id: 'subway_station',
            name: 'Transporte'
          },
          {
            id: 'supermarket',
            name: 'Mercado'
          },
          {
            id: 'taxi_stand',
            name: 'Transporte'
          },
          {
            id: 'tourist_attraction',
            name: 'Viagem'
          },
          {
            id: 'train_station',
            name: 'Transporte'
          },
          {
            id: 'transit_station',
            name: 'Transporte'
          },
          {
            id: 'travel_agency',
            name: 'Serviços'
          },
          {
            id: 'university',
            name: 'Educação'
          },
          {
            id: 'veterinary_care',
            name: 'Pets'
          },
          {
            id: 'zoo',
            name: 'Lazer'
          },
          {
            id: 'grocery_or_supermarket',
            name: 'Supermercado'
          }]"></v-select>
          <v-btn color="#9400ff" @click="functionRouter()">Buscar</v-btn>
        </div>
      </div>
    </div>
    <div class="right">
      <img class="hipers" src="../assets/hipers.png">
      <img class="notebook" src="../assets/notebook.png">
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { reactive } from 'vue';

export default {
  name:"Hello",
  data () {
		return {
      inputTexto: "",
      selectCategoria:""
    }
  },
  methods: {
    functionRouter() {
      router.push({
        name: 'analytics/:input/:selectInput', params: {
          input: this.inputTexto,
          selectInput: this.selectCategoria
        }
      });
    }
  },

  watch: {
    inputTexto : {
      handler(newValue, oldValue) {
        console.log(newValue);
      },
      deep: true
    }
  }

}
</script>
