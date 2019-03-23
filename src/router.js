import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Home from './views/home.vue'
import Artists from './views/artists.vue'
import ListCate from './views/listcate.vue'
import Search from './views/search.vue'
import Ucenter from './views/ucenter.vue'
import HotList from './views/musiclist/hot_list.vue'
import KingList from './views/musiclist/king_list.vue'
import NewsList from './views/musiclist/news_list.vue'
import MoreList from './views/morelist.vue'
import MusicPlay from './views/musicplay.vue'
import ArtistsDetails from './views/artistsdetails/artistsdetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/musicplay',
      name: 'MusicPlay',  
      component: MusicPlay
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect:"/home",
      children: [
        {
          path: 'home',
          component: Home,
          redirect: '/home/hot',
          children: [
            {
              path: 'hot',
              component: HotList
            },
            {
              path: 'king',
              component: KingList
            },
            {
              path: 'news',
              component: NewsList
            }
          ]
        },
        {
          path: 'more',
          component: MoreList,
          name: 'MoreList'
        },
        {
          path: 'artists',
          component: Artists
        },
        {
          path: 'artistsdetails',
          component: ArtistsDetails,
          name: 'ArtistsDetails'
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
