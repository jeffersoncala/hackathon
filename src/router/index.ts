// Composables
import { RouteLocationNormalized, createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'teste',
        name: 'Teste',
        component: () => import('@/views/Teste.vue'),
      },
      {
        path: 'analytics/:input',
        name: 'analytics/:input',
        component: () => import('@/views/Analytics.vue'),
        props: (routeWithParams: RouteLocationNormalized) => {
          const { params, ...routeWithoutParams } = routeWithParams;
          return {
            ...params, routeWithoutParams
          };
        },
      },
      {
        path: 'analytics/:input/:selectInput',
        name: 'analytics/:input/:selectInput',
        component: () => import('@/views/Analytics.vue'),
        props: (routeWithParams: RouteLocationNormalized) => {
          const { params, ...routeWithoutParams } = routeWithParams;
          return {
            ...params, routeWithoutParams
          };
        },
      },
      {
        path: 'analyticsNoParams',
        name: 'analyticsNoParams',
        component: () => import('@/views/AnalyticsNoParams.vue')
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
