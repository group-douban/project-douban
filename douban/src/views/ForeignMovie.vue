<template>
   <div class="container">
         <header>
            <div class="back">
               <img src="../../public/images/back.jpg"  alt="">
            </div>
            <div class="home">
               <img src="../../public/images/home.jpg"  alt="">
            </div>
            <div>
               {{this.allList.subject_collection.medium_name}}
            </div>
         </header> 

         <div class="box">
            <van-pull-refresh 
            v-model="refreshing" 
           @refresh="onRefresh"
            >
               <van-list
               v-model = "loading"
               @load = "onLoad"
               :finished = 'finished'
               finished-text="我也是有底线的"
               > 
                  <div class="banner">
                     <img  :src="this.allList.subject_collection.header_bg_image"  alt="">
                  </div>
                  <nav>
                     <ul>
                        <li>看过0部</li>
                        <li>/</li>
                        <li>总共{{this.allList.subject_collection.total}}部</li>
                     </ul>
                     <div>
                        <span>生成海报</span>
                     </div>
                  </nav>
                  <ul class="mainList">
                     <li
                     v-for='(m,i) in foreignMoviekList'
                     :key = 'm.id'
                     >
                     <!--  <div>
                           NO.{{index+1}}
                        </div> -->
                     <!--  <movie-list-button :color='color' :index='i' ></movie-list-button> -->
                     <list-button :index='i' ></list-button>
                        
                          <!--  <router-link tag="div" to="/movieTop250Details/123456"> -->
                         <div @click="handleClick(m.id)"> 
                              <div class="imageList">
                                 <img :src="m.cover.url"  alt="">
                              </div>
                              <div>
                                 <p>{{m.title}}</p>
                                 <div class="evaluate">
                                    <van-rate v-model="m.rating.value" :size="15" color="#ffd21e" allow-half void-icon="star" void-color="#eee"/>
                                    <span>{{m.rating.value}}</span>
                                 </div>
                                 <div class="info">{{m.info}}</div>
                              </div>
                              <div>
                                 <div>
                                    <img src="../../public/images/star1.jpg" alt="">
                                 </div>
                                 <span>看过</span>
                              </div>
                          <!--  </router-link> -->
                           </div>
                      
                     <!-- <div>
                           {{m.description}}
                        </div> -->
                     <list-evaluate :movie='m'></list-evaluate>
                     </li>
                  </ul>
               </van-list>
            </van-pull-refresh>
         </div>
        
         <!-- <van-loading size="24px">加载中...</van-loading> -->
   </div>
</template>

<script >
import Vue from 'vue';
import  http from '@u/http'

import ListButton from '@c/MovieList/ListButton'
import ListEvaluate from '@c/MovieList/ListEvaluate'

import { Rate , List , PullRefresh } from 'vant';

Vue.use(Rate);
/* Vue.use(Loading); */
Vue.use(List);
Vue.use(PullRefresh);

export default {
   data(){
      return{
        foreignMoviekList:[],
         value:[],
         allList:[],
         loading: false,
         finished:false,
         refreshing:false
      }
   },
   components:{
      ListButton,
      ListEvaluate
   },
  /* https://frodo.douban.com/api/v2/subject_collection/3761/items?start=0&count=20&apiKey=054022eaeae0b00e0fc068c0c0a2102a */

   /* mounted(){
      console.log(this.$route)
   }, */
   created(){
      //初始化翻页数据
      this.count = 20
      this.page = 0
      this.apiKey = '054022eaeae0b00e0fc068c0c0a2102a'
   },
    async mounted() {
       let result = await http.get('/apia/api/v2/subject_collection/3761/items?',{
            count : this.count, //每一页多少条
            start : this.page * this.count, //分页的起始点
            apiKey : this.apiKey
         })
      this.allList = result
      //console.log( this.allList.subject_collection)
   }, 
   methods: {
      handleClick(ids){
         //console.log(ids)
         this.$router.push({name:'details' , params:{id : ids}})
      },
      async loadData(){
         // 表示用户下拉，需要将page的页码重置为0，清空list，不影响上拉加载
         if(this.refreshing){
            this.foreignMoviekList = []
            this.page = 0
         }

         let result = await http.get('/apia/api/v2/subject_collection/3761/items?',{
            count : this.count, //每一页多少条
            start : this.page * this.count, //分页的起始点
            apiKey : this.apiKey
         })
         this.foreignMoviekList = [
            ...this.foreignMoviekList,
            ...result.subject_collection_items
         ],
         //console.log(result)
         this.page++,
         this.loading = false
         this.refreshing = false

         if(this.page >= Math.ceil(result.total / this.count)){
            this.finished = true
         }
      },
      onLoad(){
        this.loadData()
      },
      onRefresh(){
         this.loadData()
         
      }
   },
} 
</script>

<style scoped lang="stylus">
@import '~@a/stylus/border.styl'
@import '~@a/stylus/ellipsis.styl'

.container
   height 100%
   display flex
   flex-direction column

   header 
      height .64rem
      background-color #ffffff
      display flex
      >div:first-child
         display flex
         width .24rem
         height .16rem
         margin-top .32rem
         justify-content flex-end
         img 
            display block
            height 100%
            //width 100%
      >div:nth-child(2)
         //padding-left .59rem 
         margin-top .32rem
         display flex
         width .54rem
         height .16rem
         justify-content flex-end
         img 
            display block
            height 100%
      >div:last-child
         flex 1
         font-weight bold
         margin-top .33rem
         padding-left .79rem

   .box
      overflow-y scroll 
      .banner
         height 2.06rem
         img 
            display block
            height 100%
            width 100%
      nav 
         height .48rem
         background-color #ffffff
         display flex
         padding-right .16rem
         ul
            flex 1
            display flex
            padding-left .16rem
            padding-top .21rem
            font-weight bold
            font-size 0.13rem
            justify-content flex-start
            >li:first-child
               color #191919
               position relative
            >li:first-child::after
               width .52rem
               height 100%
               position absolute
               left 50%
               transform translate(-50%, 0)
               bottom 0
               content ''
               border-bottom solid .04rem #ededed
            >li:nth-child(2)
            >li:nth-child(3)
               color #7f7f7f
         div
            width 1.11rem
            display flex
            padding-top .17rem
            padding-left .15rem
            span 
               justify-content flex-end
               display block
               width 1.11rem
               height .3rem
               font-size 0.13rem
               text-align center
               line-height .3rem
               border-radius .20rem
               background-color #fcbf66
      .mainList
         flex 1
         background-color #ededed
         li
            margin-bottom .23rem
            display flex
            padding-left .16rem
            padding-right .16rem
            flex-direction column
            background-color #ffffff
            /* >div:first-child
               background-color #ffca7c
               width .44rem
               height .24rem
               margin-top .13rem
               margin-bottom  .12rem
               font-size .11rem
               border-radius .07rem
               text-align center
               line-height .24rem
               color #9e6102 */
            >div:nth-child(2)
               display flex
               margin-bottom  .12rem
               >div:first-child
                  width .89rem
                  height 1.23rem
                  img 
                     //display block
                     width 100%
                     height 100%
               >div:nth-child(2)
                  flex 1
                  padding-left .15rem
                  padding-right .1rem
                  p
                     font-size .17rem
                     //height .21rem
                     font-weight bold
                     line-height .21rem
                     margin-bottom .09rem
                  .evaluate
                     display flex
                     justify-content flex-start
                     align-items center
                     margin-bottom .11rem
                     height .13rem
                     img 
                        height 100%
                     span 
                        color #818181
                        font-size .09rem
                        line-height .13rem
                  .info
                     color #9b9b9b
                     font-size .14rem
                     line-height .18rem
                     letter-spacing .02rem
               >div:last-child
                  width .75rem
                  color #ffac2d
                  border_1px(0 0 0 1px)
                  div
                     margin-top .42rem
                     margin-bottom .09rem
                     margin-left .38rem
                     width .14rem
                     height .14rem
                     img 
                        width 100%
                  span 
                     display block
                     margin-left .31rem
            /* >div:last-child
               margin-right .16rem
               margin-bottom .23rem
               padding-left .10rem
               height .43rem
               line-height .43rem
               background-color #f7f7f7
               color #9c9c9c
               font-size .14rem
               ellipsis() */
                  


</style>
