import Vue from 'vue'
import Router from 'vue-router'
import winners from '@/components/winners.vue'
import NewWinner from '@/components/NewWinner.vue'
import EditWinner from '@/components/EditWinner.vue'

Vue.use(Router)

export default new Router({
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
