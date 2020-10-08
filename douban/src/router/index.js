import Vue from "vue";
import VueRouter from "vue-router";

Vue.use (VueRouter);
//导入组件
import Home from "@v/index/Home.vue";
import index from "@v/index/Index.vue";

const routes = [
  {
    path:"/",
    name:'index',
    component:index,
    redirect:'/home',
    children:[
      {
        path: "home",
        name:'home',
        component: Home,
      },
      {
        path:"movieList",
        name:'movieList',
        component:()=>import(/* webpackChunkName: "movieList" */ '@v/index/MovieList.vue'),
      },
      {
        path:"profile",
        name:'profile',
        component:()=>import(/* webpackChunkName: "profile" */ '@v/index/Profile.vue'),
      },
      {
        path:'/hot',
        name:'hot',
        component:()=>import(/*webpackChunkName: "hot"*/ '@v/hot/Hot.vue'),
        children:[
          {
            path:'cinemaHot',
            name:'cinemaHot',
            component:()=>import(/* webpackChunkName: "cinemaHot" */ '@v/hot/CinemaHot.vue'),
          },{
            path:'dbHot',
            name:'dbHot',
            component:()=>import(/* webpackChunkName: "dbHot" */ '@v/hot/DbHot.vue'),
          },{
            path:'recentHotSeries',
            name:'recentHotSeries',
            component:()=>import(/* webpackChunkName: "recentHotSeries" */ '@v/hot/RecentHotSeries.vue'),
          },{
            path:'recentHotVariety',
            name:'recentHotVariety',
            component:()=>import(/* webpackChunkName: "recentHotVariety" */ '@v/hot/RecentHotVariety.vue'),
          },{
            path:'bestSellingBook',
            name:'bestSellingBook',
            component:()=>import(/* webpackChunkName: "bestSellingBook" */ '@v/hot/BestSellingBook.vue'),
          },{
            path:'hotMusic',
            name:'hotMusic',
            component:()=>import(/* webpackChunkName: "hotMusic" */ '@v/hot/HotMusic.vue'),
          },
        ]
      },
    ]
  },
  
];
const router =new VueRouter({
  mode:'history',
  routes,
})
export default router;
