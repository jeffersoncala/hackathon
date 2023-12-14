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
        path: 'analytics/:input/:selectInput',
        name: 'analytics/:input/:selectInput',
        component: () => import('@/views/Analytics.vue'),
        props: (routeWithParams: RouteLocationNormalized) => {
          const { params, ...routeWithoutParams } = routeWithParams;
          return {
            ...params, routeWithoutParams
          };
        },
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
