import { createRouter, createWebHistory } from 'vue-router';
import AutosView from '../views/AutosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/autos',
      name: 'autos',
      component: AutosView
    }
  ]
});

export default router;
