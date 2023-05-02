import { createRouter, createWebHistory } from 'vue-router'
import Twid from '../components/Twid.vue'
import GuiNumber from '../components/GuiNumber.vue'
import OldRc from '../components/OldRc.vue'
import NewRc from '../components/NewRc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/twid",
    },
    {
      path: '/twid',
      name: 'twid',
      component: Twid,
      root: true
    },
    {
      path: '/guiNumber',
      name: 'guiNumber',
      component: GuiNumber
    },
    {
      path: '/oldRc',
      name: 'oldRc',
      component: OldRc
    },
    {
      path: '/newRc',
      name: 'newRc',
      component: NewRc
    }

  ]
})

export default router
