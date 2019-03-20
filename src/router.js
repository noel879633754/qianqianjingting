import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Home from './views/home.vue'
import Artists from './views/artists.vue'
import ListCate from './views/listcate.vue'
import Search from './views/search.vue'
import Ucenter from './views/ucenter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect:"/home",
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'artists',
          component: Artists
        },
        {
          path: 'listcate',
          component: ListCate
        },
        {
          path: 'search',
          component: Search
        },
        {
          path: 'ucenter',
          component: Ucenter
        }
      ]
    }
  ]
})
