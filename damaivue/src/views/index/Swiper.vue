<template>
  <swiper :options="swiperOption">
  　　<swiper-slide v-for="items in images" :key="items">
  　　　　<img :src="items" alt="" >
  　　</swiper-slide>
  　　 <div class="swiper-pagination"  slot="pagination"></div> 
  </swiper>
</template>
<script>
import Vue from 'vue';
// import { Swipe, SwipeItem } from 'vant';
import Swiper from 'swiper';
import 'assets/swiper.min.css';
// Vue.use(Swipe).use(SwipeItem);
export default {
 data() {
    return {
      images: [
        'https://img.alicdn.com/tfs/TB1DQVikkL0gK0jSZFAXXcA9pXa-960-360.jpg_q60.jpg',
        'https://img.alicdn.com/tps/i4/TB1wKDCl.T1gK0jSZFhSuuAtVXa.jpg_q60.jpg',
        'https://img.alicdn.com/tfs/TB1z99kjYY1gK0jSZTEXXXDQVXa-960-360.jpg_q60.jpg',
        'https://img.alicdn.com/tps/i4/TB1kAbClYr1gK0jSZR0SuvP8XXa.jpg_q60.jpg',
      ],
      swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true, //允许分页点击跳转,
          },
          loop:true,
  　　    autoplay:{
          delay:3000
          },
      },
 
    }
  }

}

</script>
<style lang='stylus'>
.swiper-container 
    width: 100vw
    height: 37.6vw
    img 
      width 100vw
      height 37.6vw

.swiper-pagination-bullet
  width 1.3333vw
  height 1.3333vw
.swiper-pagination-bullet-active
  background-color #fff
//  .swiper
//   .swiper-container
//     height 37.6vw
//     .van-swipe-item
//       img 
//         width 100%!important
//         height 100%
//     .van-swipe__indicator
//       width .05rem
//       height .05rem
//     .van-swipe__indicator--active
//       background-color #fff
</style>