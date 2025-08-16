import { createRouter, createWebHistory } from 'vue-router'
import SimulateurPage from '@/pages/SimulateurPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [ { path: '/', name: 'simulateur', component: SimulateurPage } ]
})
