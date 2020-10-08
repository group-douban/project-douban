import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from 'views/index/Layout.vue'
import Search from 'views/search/Search.vue'
import Detail from 'views/detail/Detail.vue'
import Category from 'views/category/Category.vue'
import ShowItem from 'components/ShowItem.vue'
import CityChange from 'components/chooseCity.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/index'
  },
  {
    path: '/city',
    name: 'city',
    component: CityChange
  },
  {
    path: '/index',
    name: 'index',
    component: Layout,

  },

  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    redirect:'/category/全部',
    children:[
      {
        path:'全部',
        name:'全部',
        component: ShowItem,
      },
      {
        path:'音乐会',
        name:'音乐会',
        component: ShowItem,
      },
      {
        path:'话剧歌剧',
        name:'话剧歌剧',
        component: ShowItem,
      },
      {
        path:'演唱会',
        name:'演唱会',
        component: ShowItem,
   
      },
      {
        path:'曲苑杂坛',
        name:'曲苑杂坛',
        component: ShowItem,
      },
      {
        path:'展览休闲',
        name:'展览休闲',
        component: ShowItem,
      },
      {
        path:'舞蹈芭蕾',
        name:'舞蹈芭蕾',
        component: ShowItem,
      },
      {
        path:'体育',
        name:'体育',
        component: ShowItem,
      },
      {
        path:'儿童亲子',
        name:'儿童亲子',
        component: ShowItem,
      },
      {
        path:'旅游演艺',
        name:'旅游演艺',
        component: ShowItem,
      }
  
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
