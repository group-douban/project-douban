import Vue from "vue";
import VueRouter from "vue-router";

Vue.use (VueRouter);
//导入组件
import home from "@v/home/Home.vue";
import page404 from '@v/Page404.vue';

const routes = [
  {
    path:"/",
    name:'home',
    component:home,
    redirect:'/home',
  },
  {
    path: "/home",
    //name:"home",
    component:() => import(/* webpackChunkName:"home" */"@v/home/Home.vue")
  },
  {
    path:"/cinemaHot",
    name:'cinemaHot',
    component:() => import(/* webpackChunkName:"cinemaHot" */'@v/cinemaHot/CinemaHot.vue')
  },
  {
    path:"/movieList",
    name:'movieList',
    component:() => import(/* webpackChunkName:"movieList"*/'@v/movieList/MovieList.vue')
  },
 /*  {
    path:"/movieList/:id",
    component:movieList,
  }, */
  
  /* {
    path:"/movieTop250/:id",
    component:movieTop250,
    
  }, */

  {
    path:"/movieTop250Details/:id",
    //alias:"/mTD",
    //props:true,
    name:'movieTop250Details',
    //props:{hello : 'world'},
    component:() => import(/* webpackChunkName:"movieTop250Details"*/'@v/movieTop250Details/MovieTop250Details.vue')
  },

  {
    path:'/lists',
    name:'lists',
    component:() => import(/* webpackChunkName:"lists" */'@v/Lists')
  },




  //榜单页面上面的路由
  {
    path:"/movieTop250",
    name:'movieTop250',
    component:() => import(/*webpackChunkName:"movieTop250"*/'@v/MovieTop250.vue')
    
  },
  {
    path:'/chineseHighMark',
    name:'chineseHighMark',
    component:() => import(/* webpackChunkName:"chineseHighMark"*/'@v/ChineseHighMark.vue')
  },
  {
    path:'/foreignMovie',
    name:'foreignMovie',
    component:() => import(/* webpackChunkName:"foreignMovie"*/'@v/ForeignMovie.vue')
  },
  {
    path:'/coldMovieList',
    name:'coldMovieList',
    component:() => import(/* webpackChunkName:"coldMovieList"*/'@v/ColdMovieList.vue')
  },
  {
    path:'/technologyMovieList',
    name:'technologyMovieList',
    component:() => import(/* webpackChunkName:"technologyMovieList"*/'@v/TechnologyMovieList.vue')
  },
  {
    path:'/comedyMovieList',
    name:'comedyMovieList',
    component:() => import(/* webpackChunkName:"comedyMovieList"*/'@v/ComedyMovieList.vue')
  },
  //虚构的
  {
    path:'/fictitiousMovieList',
    name:'fictitiousMovieList',
    component:() => import(/* webpackChunkName:"fictitiousMovieList"*/'@v/FictitiousMovieList.vue')
  },
  //非小说
  {
    path:'/nonfictionMovieList',
    name:'nonfictionMovieList',
    component:() => import(/* webpackChunkName:"nonfictionMovieList"*/'@v/NonfictionMovieList.vue')
  },
  {
    path:'/classicMovieList',
    name:'classicMovieList',
    component:() => import(/* webpackChunkName:"classicMovieList"*/'@v/ClassicMovieList.vue')
  },
  {
    path:'/actionMovieList',
    name:'actionMovieList',
    component:() => import(/* webpackChunkName:"actionMovieList"*/'@v/ActionMovieList.vue')
  },
  {
    path:'/bookTop250',
    name:'bookTop250',
    component:() => import(/* webpackChunkName:"bookTop250"*/'@v/BookTop250.vue')
  },


//电影类详情页的路由
{
  path:'/details',
  name:'details',
  component:() =>import(/* webpackChunkName:"details" */'@v/Details.vue')
},
//书籍详情页的路由
{
  path:'/bookDetails',
  name:'bookDetails',
  component:() =>import(/* webpackChunkName:"bookDetails" */'@v/BookDetails.vue')
},

//纯图片路由
{
  path:'/picture',
  name:'picture',
  component:() =>import(/* webpackChunkName:"picture" */'@v/Picture.vue')
},


  {
    path:"*",
    component : page404,
  }
];
const router =new VueRouter({
  mode:'history',
  routes,
})
export default router;
