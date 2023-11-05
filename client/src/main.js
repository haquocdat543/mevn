import { createApp } from 'vue'
import App from './App.vue'
// import router from './routes'

const app = createApp(App)

// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import winners from '@/components/winners.vue'
import NewWinner from '@/components/NewWinner.vue'
import EditWinner from '@/components/EditWinner.vue'

// Vue.use(Router)

const router = createRouter({
history: createWebHistory(),
  routes: [
    {
      path: '/winners',
      name: 'winners',
      component: winners
    },
    {
      path: '/winners/new',
      name: 'NewWinner',
      component: NewWinner
    },
    {
      path: '/winners/update/:id',
      name: 'EditWinner',
      component: EditWinner
    }
  ]
})

app.use(router)
app.mount('#app')
