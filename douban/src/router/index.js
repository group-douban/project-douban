import Vue from "vue";
import VueRouter from "vue-router";

Vue.use (VueRouter);
//导入组件
import home from "../components/Home.vue";
import cinemaHit from '../components/CinemaHit.vue';
import movieList from '../components/MovieList.vue';

const routes = [
  {
    path:"/",
    component:home,
  },
  {
    path: "/home",
    component: home,
  },
  {
    path:"/cinemaHit",
    component:cinemaHit
  },
  {
    path:"/movieList",
    component:movieList
  }
];
const router =new VueRouter({
  mode:'history',
  routes,
})
export default router;
