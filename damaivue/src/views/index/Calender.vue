<template>
  <div class="calender-wrapper">
      
      <div class="calender">
        <div class="calender-title">
            <h4>近期演出</h4> 
            <router-link tag="span" to="/category/全部" @click.native="ShowCalender">演出日历 <svg t="1573889257567" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2203" width="2.5vw" height="2.5vw"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" p-id="2204" fill="#999999"></path></svg></router-link>
        </div>
        <div class="calender-day">
            <div v-for="(today,index) in theDay" :key="index"  @click="handelClick(index)" class="day-wrapper">
                    <span  v-if="currenDay==index" class="active">{{today}}</span>
                    <span v-else >{{today}}</span>
            </div>
        </div>
        <div class="calender-scroll" ref="calenderScroll"> 
            <div class="calender-card">
                     <router-link  tag="div" to="/detail" class="card-wrapper" v-for="(item,index) in Todaygoods" :key="Todaygoods[index].projectid" @click.native="handelDetail(item)" >
                        <div class="img">                          
                            <img v-lazy="item.verticalPic">
                        </div>
                        <div>
                            <p class="item-name">{{item.name}}</p>
                            <div class="price">￥{{item.price}} 起</div>
                        </div>
                    </router-link>
            </div>
        </div>
      </div> 
  </div>
</template>

<script>
import {get} from 'untils/http.js'
import BScroll from 'better-scroll'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import { Skeleton } from 'vant';


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('public/loding.png'),   //请求失败后显示的图片
  loading: require('public/loding.png'),   //加载的loading过渡图片
  attempt: 1     // 加载图片数量
}).use(Skeleton);
export default {
    data() {
        return {
            Todaygoods:[],
            theDay:[],
            lastNum:0,
            currenDay:0,
            isCurren:'',
            loading: true
        }
    },
    methods: {
            // 传递详情的对象
        handelDetail(item){

            this.$store.commit('setTheDetail',item) 
        },
        ShowCalender(){
            this.$store.commit('setCalenderShow')
        },
        async handelClick(num){
            this.currenDay = num
             if(num!=this.lastNum)
             {
                this.lastNum = num
                let result = await get({
                    url:'ajax/searchajax.html',
                    params:{
                    keyword:'',
                    cty:'',
                    ctl:'',
                    sctl:'',
                    tsg:num+1,
                    st:'',
                    et:'',
                    order: 2,
                    pageSize:10,
                    currPage:1,
                    tn:''
                    }
                })

                if(!result.data.ids){
                       result = await get({
                        url:'ajax/searchajax.html',
                        params:{
                        keyword:'',
                        cty:'',
                        ctl:'',
                        sctl:'',
                        tsg:num,
                        st:'',
                        et:'',
                        order: 2,
                        pageSize:10,
                        currPage:2,
                        tn:''
                        }
                })
                }
                this.Todaygoods=result.data.pageData.resultData
            }  

        },
        
    },
    async mounted() {
        let date = new Date()
        let today = date.getDay()
        this.loading = false;
        // console.log(today);
        
        switch(today)
            {
            case 1:
                this.theDay=['今天','明天','周三','周四','周五','周六','周日']           
            break;
            case 2:
                this.theDay=['今天','明天','周四','周五','周六','周日','周一']           
            break;
            case 3:
                this.theDay=['今天','明天','周五','周六','周日','周一','周二']           
            break;
            case 4:
                this.theDay=['今天','明天','周六','周日','周一','周二','周三']            
            break;
            case 5:
                this.theDay=['今天','明天','周日','周一','周二','周三','周四']
            break;
            case 6:
                this.theDay=['今天','明天','周一','周二','周三','周四','周五']
            break;
            case 0:
                this.theDay=['今天','明天','周二','周三','周四','周五','周六']
            break;
            default:
         
            }
            // console.log(this.theDay);
            
        let result = await get({
            url:'ajax/searchajax.html',
            params:{
                keyword:'',
                cty:'',
                ctl:'',
                sctl:'',
                tsg:1,
                st:'',
                et:'',
                order: 1,
                pageSize:10,
                currPage:1,
                tn:''
            }
        })
        // console.log(result);
        this.Todaygoods=result.data.pageData.resultData
        if(this.$refs.calenderScroll){
            let bScroll = new BScroll('.calender-scroll',{
                scrollX:true,
                click:true,
                scrollY: false,
            })
        }
      
        // 今日 全部类型
        /* https://search.damai.cn/searchajax.html?keyword=&cty=&ctl=&sctl=&tsg=1&st=&et=&order=1&pageSize=30&currPage=1&tn= */
       /*  https://search.damai.cn/searchajax.html?keyword=&cty=&ctl=&sctl=&tsg=2&st=&et=&order=1&pageSize=30&currPage=1&tn= */
    },
}
</script>

<style lang='stylus'>
.calender-wrapper
    background #fff
    .calender
        .calender-title
            display flex
            justify-content space-between
            padding  6.4vw 4.8vw 4.8vw
            h4
                font-size 4.8vw
            span 
                font-size 3.7333vw
                color: #999;
                line-height 6.9333vw
        .calender-day
            display flex
            font-size 3.7333vw
            padding  0 1.6vw 6.4vw 4.8vw
            .day-wrapper
                flex 1
                span 
                    flex 1
                    text-align center
                    color: #999;
                    &.active
                        color: #000;
        .calender-scroll
            overflow hidden
            margin 0 0 0 4.8vw
            .calender-card
                display flex
                width max-content
                .card-wrapper
                    width 40vw
                    height 69.52vw
                    margin-right 4vw
                    .img
                        border-radius 1.3333vw
                        overflow hidden
                        img
                            width 100%
                            height 53.88vw
                    p
                        overflow hidden
                        margin-top 4vw
                        text-overflow:ellipsis
                        white-space: nowrap
                        font-weight: 700
                    .price
                        font-size 4vw
            
</style>