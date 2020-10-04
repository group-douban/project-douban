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
               {{this.mainList.title}}
            </div>
         </header>

        <div class="box">
            <div class="movie">
                <div class="movie_photo">
                    <img :src="this.mainList.pic.normal">
                </div>
                <div class="movie_info">
                    <div class="movie_title">
                         {{this.mainList.title}}
                         （{{this.mainList.year}}）
                    </div>
                    <div class="movie_story">
                        {{this.mainList.genres[0]}}&nbsp;{{this.mainList.genres[1]}}&nbsp;{{this.mainList.genres[2]}}/{{this.mainList.countries[0]}}&nbsp;{{this.mainList.countries[1]}}/片长{{this.mainList.durations[0]}}
                    </div>
                    <div class="movie_button">
                        <div class="button">
                            <div>
                                <img src="../../public/images/icon_03.jpg" alt="">
                            </div>
                            <div>
                                想看
                            </div>
                        </div>
                        <div class="button">
                            <div>
                                <img src="../../public/images/icon_05.jpg" alt="">
                            </div>
                            <div>
                                看过
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grade">
                <div>
                    <div>豆瓣评分<span>TM</span></div>
                    <div>
                        <img src="../../public/images/go.jpg" alt="">
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                           {{this.mainList.rating.value}}
                        </div>
                        <div>
                            <van-rate
                            v-model="this.mainList.rating.value"
                            :size="10"
                            color="#ffd21e"
                           allow-half void-icon="star"
                            void-color="#eee"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="../../public/images/pingfen.jpg" alt="">
                        </div>
                        <div class="pingfen">
                           {{this.mainList.rating.count}}人评分
                        </div>
                    </div>
                </div>
            </div>
            <div class="summary">
                <div>
                    简介
                </div>
                <div v-if = 'canShow' class = 'yangshi1'>
                    {{this.mainList.intro}}
                    
                </div>
                <p v-if = 'canShow' @click = handleClick>展开</p>

                <div v-if = '!canShow' class = 'yangshi2'>
                    {{this.mainList.intro}}
                </div>
                <p v-if = '!canShow'  @click = handleClick>收起</p>
            </div>
            <div class="actor">
                <div>影人</div>
                <ul>
                    <li>
                        <div>
                            <img :src="this.mainList.directors[0].avatar.normal">
                        </div>
                        <div class="name">{{this.mainList.directors[0].name}}</div>
                        <div class="position">导演</div>
                    </li>
                    <li 
                    v-for = 'actor in actorsList' 
                    :key = 'actor.id'
                    >
                        <div>
                            <img :src="actor.avatar.normal" alt="">
                        </div>
                        <div class="name">{{actor.name}}</div>
                        <div class="position">演员</div>
                    </li>
                    
                </ul>
            </div>
            <div class="photo">
                <div>
                    <div>预告片/剧照</div>
                    <div>全部{{this.juzhaoAllList.total}}&nbsp;></div>
                </div>
                <ul>
                    <li 
                    v-for='photo in juzhaoList'
                    :key = photo.id
                    >
                        <img :src="photo.image.small.url" alt="">
                    </li>
                </ul>
            </div>
            <div class="leaderette">
                <div>
                    <div>短评</div>
                    <div>全部{{this.mainList3.total}}&nbsp;></div>
                </div>
                <ul>
                    <li
                    v-for = 'duanping in duanpingList'
                    :key = duanping.id
                    >
                        <div>
                            <div class="avator" >
                                <a href="">
                                    <img :src="duanping.user.avatar" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    {{duanping.user.name}}
                                </a>
                                <div>
                                    <van-rate
                                    v-model="duanping.rating.star_count"
                                    :size="10"
                                    color="#ffd21e"
                                    allow-half void-icon="star"
                                    void-color="#eee"
                                    />
                                    <span>
                                        {{duanping.create_time.split(" ")[0].split('-')[0]}}年{{duanping.create_time.split(" ")[0].split('-')[1]}}月{{duanping.create_time.split(" ")[0].split('-')[2]}}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p>
                            {{duanping.comment}}
                        </p>
                        <div>
                            <i></i>
                            <span>{{duanping.vote_count}}</span>
                        </div>
                    </li>
                    
                </ul>
                <div>
                    <div>查看全部短评</div>
                    <a href="">
                        <p> > </p>
                    </a>
                </div>
            </div>
            <div class="love">
                <div>喜欢这部电影的人也喜欢</div>
                <ul>    
                    <li 
                    v-for = 'love in loveList'
                    :key =love.id
                    >
                        <div>
                            <img :src="love.pic.normal" alt="">
                        </div>
                        <div>{{love.title}}</div>
                        <div>
                            <div>
                                <van-rate
                                    v-model="love.rating.star_count"
                                    :size="8"
                                    color="#ffd21e"
                                    allow-half void-icon="star"
                                    void-color="#eee"
                                    />
                            </div>
                            <span>{{love.rating.value}}</span>
                        </div>
                    </li>
                     
                </ul>

            </div>
            <div class="review">
                <div>
                    影评
                    <span>{{this.yingpingList.total}}</span>
                </div>
               <van-list
               v-model = "loading"
               @load = "onLoad"
               :finished = 'finished'
               finished-text="我也是有底线的"
               > 
                    <ul>
                        <li
                        v-for = 'yingping in yingpingList'
                        :key = yingping.id
                        >
                            <div>
                                <div class="avator" >
                                    <a href="">
                                        <img :src="yingping.user.avatar" alt="">
                                    </a>
                                </div>
                                <div>
                                    {{yingping.user.name}}
                                </div>
                                <div>看过</div>
                                <div>
                                     <van-rate
                                    v-model="yingping.rating.value"
                                    :size="10"
                                    color="#ffd21e"
                                    allow-half void-icon="star"
                                    void-color="#eee"
                                    />
                                </div>
                            </div>
                            <div>{{yingping.title}}</div>
                            <div>
                            {{yingping.abstract}}
                            </div>
                            <div>
                                <div>
                                    <span>{{yingping.comments_count}}</span>回复&nbsp;·&nbsp;
                                    <span>{{yingping.useful_count}}</span>有用&nbsp;·&nbsp;
                                    <span>{{yingping.reshares_count}}</span>转发
                                </div> 
                            </div>
                        </li>
                    </ul>
                </van-list>
            </div>
        </div>
   </div>
</template>

<script >
import Vue from 'vue';
import  http from '@u/http'

import { List , Rate } from 'vant';

Vue.use(List);
Vue.use(Rate);

export default {
   // props:['id'],
   props:{
       hello:{
           type:String
       }
   },
   data(){
      return{
         mainList:[],
         mainList3:[],
         actorsList:[],
         juzhaoList:[],
         juzhaoAllList:[],
         duanpingList:[],
         loveList:[],
         yingpingList:[],
         canShow:true,
         loading: false,
         finished:false,
         refreshing:false,
         id:1
      }
   },
   created(){
      //初始化翻页数据
      this.count = 20
      this.start = 0,
      this.page = 0
      this.apiKey = '054022eaeae0b00e0fc068c0c0a2102a'
   },
    async mounted(){
        console.log(this.$route.params.id)
        this.id = this.$route.params.id
        //接收路由中定义的要传过来的东西
        //console.log(this.id)
        //console.log(this.hello)


        //综述数据
        let result = await http.get('/apia/api/v2/movie/' + this.id + '?',{
            apiKey : this.apiKey
        })
        this.mainList = result
        this.actorsList = result.actors
        //console.log(this.mainList)
        //console.log(this.mainList.directors[0].avatar.normal)
        //console.log(this.mainList.actors)

        let result2 = await http.get('/apia/api/v2/movie/' + this.id + '/photos?',{
            start : this.start,
            count : 18,
            apiKey : this.apiKey
        })
        //console.log(result2)
        //console.log(result2.photos)
        this.juzhaoAllList = result2
        this.juzhaoList = result2.photos
        //console.log(this.juzhaoAllList)

        let result3 = await http.get('/apia/api/v2/movie/' + this.id + '/interests?',{
            start : this.start,
            count : 4,
            status : 'done',
            apiKey : this.apiKey
        
        })
        //console.log(result3)
        this.mainList3 = result3
        //console.log(this.mainList3.total)
       //const date = this.mainList3.interests[2].  create_time
        //const date1 = date.split(" ")[0].split('-')
        //this.date = result3.interests[index].create_time.split(" ")[0].split('-')
        this.duanpingList = result3.interests
        //console.log(this.duanpingList)
        
        let result4 = await http.get('/apia/api/v2/movie/' + this.id + '/recommendations?',{
            start : this.start,
            count : 18,
            apiKey : this.apiKey
        })
        //console.log(result4)
        this.loveList = result4
        //console.log(this.loveList)

       /*   let result5 = await http.get('/apia/api/v2/movie/1291546/reviews?',{
            count : this.conut,
            start : this.start,
            apiKey : this.apiKey
        })
        console.log(result5)
        this.yingpingList = result5.reviews
        console.log(this.yingpingList) */
      
      },


    methods: {
        handleClick(){
            this.canShow = !this.canShow
        },

      async loadData(){
         let result5 = await http.get('/apia/api/v2/movie/' + this.id + '/reviews?',{
            count : this.count, //每一页多少条
            start : this.page * this.count, //分页的起始点
            apiKey : this.apiKey
         })
         this.yingpingList = [
            ...this. yingpingList,
            ...result5.reviews
         ],
         console.log(this.yingpingList[1].rating)
         this.page++,
         this.loading = false

         if(this.page >= Math.ceil(result5.total / this.count)){
            this.finished = true
         }
      },
      onLoad(){
        this.loadData()
      },
     
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
    //background-color #f8c262
    background-color #f9f8f6

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
        .movie
            display flex
            margin-left .15rem
            margin-right .15rem
            margin-top .22rem
            margin-bottom .22rem
            //background-color green
            height 1.56rem
            .movie_photo
                width 1.12rem
                height 1.56rem
                margin-right .15rem
                img 
                    display block
                    //width 100%
                    height 100%
            .movie_info
                flex 1
                display flex
                flex-direction column
                .movie_title
                    font-size .23rem
                    line-height .26rem
                    font-weight bold
                    margin-bottom .06rem
                .movie_story
                    font-size .13rem
                    line-height .17rem
                    color #9e9d9b
                    margin-bottom .22rem
                .movie_button 
                    display flex
                    width 100%
                    justify-content space-around
                    //background red
                    .button
                        display flex
                        align-items center
                        justify-content center
                        width 45%
                        height .39rem
                        background #ffffff
                        border-radius .05rem
                        //text-align center
                        line-height .39rem
                        >div:first-child
                            img 
                                display block
                                width 100%
                        >div:last-child
                            margin-left .06rem 
        .grade
            display flex
            flex-direction column
            height 1.17rem
            margin-right .15rem
            margin-left .15rem
            background   #ffffff       
            >div:first-child
                display flex
                justify-content space-between
                align-items center
                padding-left .1rem
                padding-right .1rem
                height .32rem
                >div:first-child
                    line-height .14rem
            >div:last-child
                
                display flex
                >div:first-child
                    display flex
                    flex-direction column
                   
                    padding-top .14rem
                    padding-right .2rem
                    >div:first-child
                        padding-left .73rem
                        font-size .24rem
                        height .26rem
                        text-align center
                        line-height .26rem
                        font-weight bold
                    >div:last-child
                        padding-left .4rem
                        display flex
                        width .66rem
                        height .13rem
                        align-items center
                        img 
                            //width 100%
                            height 100%
                >div:last-child
                    
                    flex-direction column
                    >div:first-child
                        width 1.54rem
                        height .4rem
                        img
                            display block
                            height 100%
                    .pingfen
                        margin-left .2rem
                        text-align right
                        font-size .1rem
                        height .2rem
                        line-height  .2rem
                        color #c1c1c1

        .summary
            display flex
            flex-direction column
            margin-top .32rem
            margin-left .15rem
            margin-right .15rem
           
            >div:first-child
                line-height .29rem
                height .29rem
                font-weight bold
                font-size .17rem
                margin-bottom .07rem
            .yangshi1
                line-height .26rem
                height 1.06rem
                overflow hidden
                ellipsis(,4)
            .yangshi2
                line-height .26rem
            p
                text-align right
                color #b9b9b7
                //background #dd4c35
            
                
        .actor
            display flex
            margin-top .24rem
            margin-left .14rem
            flex-direction column
            >div:first-child
                font-size .17rem
                height .45rem
                line-height .45rem
                font-weight bold
            ul
                overflow-x scroll
                display flex
                margin-bottom .25rem
                li
                    margin-right .14rem
                    >div:first-child
                        width .9rem
                        height 1.27rem
                        img
                            width 100%
                    .name
                        margin-top .15rem
                        font-size .13rem
                        color #151410
                    .position
                        margin-top .09rem 
                        font-size .13rem
                        color #81807c
        .photo 
            margin-left .15rem        
            >div:first-child
                display flex
                margin-right .15rem
                justify-content space-between
                >div:first-child
                    height .45rem
                    line-height .45rem
                    font-size .16rem
                    font-weight bold
                >div:last-child
                    font-size .14rem
                    line-height .48rem
                    color #9b999a
                    font-weight bold
            ul
                display flex
                overflow-x scroll
                li
                    margin-right .03rem
                    height 1.76rem
                    img
                        display block
                        height 100%
        .leaderette
            margin-top .5rem
            margin-left .15rem
            margin-right .15rem
            padding-top .15rem
            padding-left .16rem
            padding-right .16rem
            background #ffffff
            border-radius .05rem
            >div:first-child
                display flex
                justify-content space-between
                >div:first-child
                    height .22rem
                    line-height .22rem
                    font-size .16rem
                    font-weight bold
                    color #131313
                >div:last-child
                    line-height .27rem
                    font-size .13rem
                    font-weight bold
                    color #7e7e7e
            ul
                li
                    display flex
                    flex-direction column
                    border_1px(0 0 1px 0)
                    >div:first-child
                        display flex
                        padding-top .16rem
                        .avator
                            width .36rem
                            height .36rem
                            border-radius 50%
                            //background #daf
                            cursor pointer
                            a
                                display block
                                outline none
                                text-decoration none
                                img 
                                    display block
                                    width .36rem  
                                    border-radius 50% 
                        >div:nth-child(2)
                            display flex
                            flex-direction column
                            margin-left .2rem
                            a
                                display block
                                outline none
                                text-decoration none
                                color #000
                                font-size .16rem
                                line-height .24rem
                                font-weight bold
                            >div:last-child
                                display flex
                                height .17rem
                                align-items center
                                img
                                    display block
                                    width .68rem
                                    height .12rem
                                span 
                                    padding-left .05rem
                                    color #c2c2c2
                    p
                        margin-top .06rem
                        margin-bottom .08rem
                        line-height .23rem
                        //background #41b883
                    >div:last-child
                        display flex
                        align-items center
                        margin-bottom .17rem
                        
                        i
                            display inline-block
                            width  .14rem
                            height  .14rem
                            vertical-align  text-top
                            margin-right  .04rem
                            background url('../../public/images/jingling.png') no-repeat
                            background-position -153px -25px
                            &:hover
                                background url('../../public/images/jingling.png') no-repeat
                                background-position: -218px -25px
                           /*  &:visited
                                background url('../../../public/images/jingling.png') no-repeat
                                background-position:-154px -89px */
                        span    
                            color #8a8a8a
                            font-size .1rem
            >div:last-child
                display flex
                justify-content space-between
                align-items center
                >div:first-child
                    height .53rem
                    line-height .53rem
                    font-size .16rem
                    font-weight bold
                    color #131313
                p
                    height .53rem
                    line-height .53rem
                    font-size .13rem
                    font-weight bold
                    color #7e7e7e

        .love
            margin-top .34rem
            margin-left .16rem
            margin-bottom .23rem
            //background #dcb67a
            >div:first-child
                font-size .18rem
                height .46rem
                line-height .46rem
                font-weight bold
            ul
                display flex
                overflow-x scroll
                li
                    margin-right .14rem
                    >div:first-child
                        width .92rem
                        height 1.23rem
                        img
                            //width 100%
                            height 100%
                    >div:nth-child(2)
                        margin-top .1rem
                        line-height .13rem
                        font-size .13rem
                        ellipsis()
                    >div:last-child
                        display flex
                        margin-top .04rem
                        align-items center
                        >div:first-child
                            width .63rem
                            height .12rem
                            line-height .12rem
                            height .12rem
                            img
                                width 100%
                        span
                            color #949688
                            font-size .12rem
        .review
            >div:first-child
                padding-left .16rem
                height .49rem
                line-height .49rem
                font-size .18rem
                font-weight bold
                color #1a1915
                span
                    color #7b7a78
                    font-size .14rem
            ul
                li
                    padding-left .16rem
                    padding-right .16rem
                    background #fff
                    padding-top .12rem
                    margin-bottom .11rem
                    >div:first-child
                        display flex
                        .avator
                            width .23rem
                            height .23rem
                            border-radius 50%
                            //background #daf812
                            cursor pointer
                            a
                                display block
                                outline none
                                text-decoration none
                                img 
                                    display block
                                    width .23rem  
                                    border-radius 50% 
                        >div:nth-child(2)
                            margin-left .05rem
                            line-height .22rem
                            color #8b898a
                        >div:nth-child(3)
                            margin-left .05rem
                            line-height .22rem
                            color #8b898a
                        >div:last-child
                            margin-left .08rem
                            line-height .22rem
                            width .63rem
                            height .12rem
                            img 
                                width 100%
                    >div:nth-child(2)
                        
                        line-height .4rem
                        font-size .18rem 
                        color #191919
                        font-weight bold          
                    >div:nth-child(3)
                        margin-bottom .07rem
                        line-height .2rem
                        font-size .14rem
                        color #494949
                    >div:last-child
                        padding-bottom .18rem
                        display flex
                        font-size .14rem
                        line-height .14rem
                        color #929292

</style>
