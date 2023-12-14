<template>
  <VCard>
    <VCardTitle>
      <span class="text-h3">Hi-Analytics</span>
    </VCardTitle>
    <VCardText>
      <VRow>
        <VCol>
          <VSelect :items="properties.endpoints" item-title="url" return-object density="compact"
            v-model="data.selectedEndpoint" />
        </VCol>
      </VRow>
      <VRow>
        <VCol v-for="item in data.selectedEndpoint?.params">
          <VTextField :label="item" v-model="data.params[item]" />
        </VCol>
      </VRow>
      <VRow>
        <VBtn @click.stop="search">Buscar</VBtn>
      </VRow>
      <VRow>
        <VCol>
          <Pie v-if="!data.loading" :data="data.chartData" :options="data.chartOptions" :style="chartStyle" />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

interface IAnalyticsNoParamsProperties {
  endpoints: {
    url: string;
    params: string[];
  }[];
}

interface IAnalyticsNoParamsData {
  selectedEndpoint?: {
    url: string;
    params: string[];
  };
  params?: any;
  loading: boolean;
  chartData: any;
  chartOptions: any;
}

ChartJS.register(ArcElement, Tooltip, Legend);

const properties = withDefaults(defineProps<IAnalyticsNoParamsProperties>(), {
  endpoints: () => {
    return [
      { url: 'api/Category/Servicos', params: ['description'] },
      { url: "api/Category/date", params: ["dateInitial", "dateEnd"] }
    ];
  }
});

const data = reactive<IAnalyticsNoParamsData>({
  selectedEndpoint: properties.endpoints[0],
  params: [],
  loading: false,
  chartData: {
    labels: [
      'teste1',
      'teste2',
      'teste3'
    ],
    datasets: [
      {
        backgroundColor: ['red', 'green', 'blue'],
        data: [10, 20, 30]
      }
    ]
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});

const chartStyle = computed(() => {
  return {
    height: '400px',
    position: 'relative'
  };
});

function search() {
  data.loading = true;
  data.chartData.labels = ['data1', 'data2', 'data3', 'data4'];
  data.chartData.datasets = [
    {
      backgroundColor: ['yellow', 'purple', 'gray', 'brown'],
      data: [455, 322, 26, 98]
    }
  ];
  setTimeout(() => {
    data.loading = false;
  }, 1);
}
</script>
