<template>
   <div class="container">
        <header>
            榜单
        </header>
        <div class="main">
            <div>
                <img src="../../../public/images/bangdan.jpg" alt="">
            </div>
            <div>
                 <img src="../../../public/images/bangdan2.jpg" alt="">
            </div>
            <ul>              
               <!--  <router-link tag="li" :to="{path:'/movieTop250/55' , query:{id:654}}"> -->
                <!-- <router-link tag="li" :to="{path:'/movieTop250' , query:{id:654}}"> -->
                <!-- <router-link tag="li" :to="{path:'/movieTop250'}"> -->
                <li @click="handleClick1">
                    <p>
                        <img src="../../../public/images/bangdan_icon1.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.肖申克的救赎</span>
                            <span>9.7分</span> 
                        </p>
                        <p>
                            <span>2.霸王别姬</span>
                            <span>9.6分</span> 
                        </p>
                        <p>
                            <span>3.阿甘正传</span>
                            <span>9.5分</span> 
                        </p>                       
                    </div>
                </li>
                <!-- </router-link> -->
                
                <li @click="handleClick2">
                    <p>
                        <img src="../../../public/images/chinese.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.哪吒之魔童降世</span>
                            <span>8.5分</span> 
                        </p>
                        <p>
                            <span>2.少年的你</span>
                            <span>8.3分</span> 
                        </p>
                        <p>
                            <span>3.谁先爱上他</span>
                            <span>8.6分</span> 
                        </p>                       
                    </div>
                </li>
                <li @click="handleClick3">
                    <p>
                        <img src="../../../public/images/foreign.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.何以为家</span>
                            <span>9.1分</span> 
                        </p>
                        <p>
                            <span>2.绿皮书</span>
                            <span>8.9分</span> 
                        </p>
                        <p>
                            <span>3.小丑</span>
                            <span>8.7分</span> 
                        </p>                       
                    </div>
                </li>
                <li @click="handleClick4">
                    <p>
                        <img src="../../../public/images/cold.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.爱尔兰人</span>
                            <span>8.8分</span> 
                        </p>
                        <p>
                            <span>2.婚姻故事</span>
                            <span>8.6分</span> 
                        </p>
                        <p>
                            <span>3.死无对证</span>
                            <span>7.8分</span> 
                        </p>                       
                    </div>
                </li>
                <li @click="handleClick5">
                    <p>
                        <img src="../../../public/images/technology.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.星际穿越</span>
                            <span>8.8分</span> 
                        </p>
                        <p>
                            <span>2.黑客帝国</span>
                            <span>8.7分</span> 
                        </p>
                        <p>
                            <span>3.头号玩家</span>
                            <span>8.7分</span> 
                        </p>                       
                    </div>
                </li>
                <li @click="handleClick6">
                    <p>
                        <img src="../../../public/images/comedy.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.三傻大闹宝莱坞</span>
                            <span>9.2分</span> 
                        </p>
                        <p>
                            <span>2.大话西游之月光宝盒</span>
                            <span>9分</span> 
                        </p>
                        <p>
                            <span>3.两杆大烟枪</span>
                            <span>9.1分</span> 
                        </p>                       
                    </div>
                </li>
                 <li @click="handleClick7">
                    <p>
                        <img src="../../../public/images/action.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.蝙蝠侠:黑暗骑士崛起</span>
                            <span>8.5分</span> 
                        </p>
                        <p>
                            <span>2.谍影重重</span>
                            <span>8.8分</span> 
                        </p>
                        <p>
                            <span>3.复仇者联盟4:终局之战</span>
                            <span>8.5分</span> 
                        </p>                       
                    </div>
                </li>
                 <li @click="handleClick8">
                    <p>
                        <img src="../../../public/images/classic.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.泰坦尼克号</span>
                            <span>9.4分</span> 
                        </p>
                        <p>
                            <span>2.大话西游之大圣娶亲</span>
                            <span>9.2分</span> 
                        </p>
                        <p>
                            <span>3.乱世佳人</span>
                            <span>9.3分</span> 
                        </p>                       
                    </div>
                </li>
                 <li @click="handleClick9">
                    <p>
                        <img src="../../../public/images/fictitious.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.怪诞故事集</span>
                            <span>8.4分</span> 
                        </p>
                        <p>
                            <span>2.猴杯</span>
                            <span>8.7分</span> 
                        </p>
                        <p>
                            <span>3.两京十五日</span>
                            <span>8.4分</span> 
                        </p>                       
                    </div>
                </li>
                 <li @click="handleClick10">
                    <p>
                        <img src="../../../public/images/nonfiction.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.把自己作为方法</span>
                            <span>8.9分</span> 
                        </p>
                        <p>
                            <span>2.失落的卫星</span>
                            <span>9分</span> 
                        </p>
                        <p>
                            <span>3.回归故里</span>
                            <span>9.2分</span> 
                        </p>                       
                    </div>
                </li>
                 <li @click="handleClick11">
                    <p>
                        <img src="../../../public/images/bangdan_icon2.jpg" alt=""> 
                    </p>
                    <div>                        
                        <p>
                            <span>1.红楼梦</span>
                            <span>9.6分</span> 
                        </p>
                        <p>
                            <span>2.活着</span>
                            <span>9.4分</span> 
                        </p>
                        <p>
                            <span>3.百年孤独</span>
                            <span>9.2分</span> 
                        </p>                       
                    </div>
                </li>
            </ul>
        </div>
            
       <!--  <footer>
            <ul>
                <li>
                    <i class="yo-ico">
                        &#xe629;
                    </i>
                    <span>首页</span>
                </li>
                <li class="active">
                    <i class="yo-ico">
                        &#xe610;
                    </i>
                    <span>榜单</span>
                </li>
                <li>
                    <i class="yo-ico">
                        &#xe502;
                    </i>
                    <span>我的</span>
                </li>
            </ul>
        </footer> -->
       <van-tabbar 
       v-model="active"
       :safe-area-inset-bottom='false'
       :fixed='false'
        active-color="#42bd56" 
        inactive-color="#000"
        route
       >
        <van-tabbar-item to="/home"  >
            <span>首页</span>
            <template #icon="props"> 
               <!--  <img :src="props.active ? icon.active : icon.inactive" /> -->
                <i class="yo-ico">
                        &#xe629;
                </i>
            </template>
        </van-tabbar-item>
       <van-tabbar-item    to="/movieList">
            <span>榜单</span>
            <template #icon="props"> 
                <i class="yo-ico">
                        &#xe610;
                </i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item  to="/cinemaHot" >
            <span>我的</span>
            <template #icon="props"> 
               <i class="yo-ico">
                        &#xe503;
                </i>
            </template>
        </van-tabbar-item>
        </van-tabbar>
   </div>
</template>

<script >
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default{
    data(){
        return {
            active:1,
           /*  icon: {
                active: 'https://img.yzcdn.cn/vant/user-active.png',
                inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
            }, */
        }
    },
    methods:{
        handleClick1(){
            this.$router.push({path: '/movieTop250'})
        },
        handleClick2(){
            this.$router.push({path: '/chineseHighMark'})
        },
        handleClick3(){
            this.$router.push({path: '/foreignMovie'})
        },
        handleClick4(){
            this.$router.push({path: '/coldMovieList'})
        },
        handleClick5(){
            this.$router.push({path: '/technologyMovieList'})
        },
        handleClick6(){
            this.$router.push({path: '/comedyMovieList'})
        },
        handleClick7(){
            this.$router.push({path: '/actionMovieList'})
        },
         handleClick8(){
            this.$router.push({path: '/classicMovieList'})
        },
        handleClick9(){
            this.$router.push({path: '/fictitiousMovieList'})
        },
        handleClick10(){
            this.$router.push({path: '/nonfictionMovieList'})
        },
        handleClick11(){
            this.$router.push({path: '/bookTop250'})
        },

    }
}
</script>

<style scoped lang="stylus">
@import '~@a/stylus/border.styl'
@import '~@a/stylus/ellipsis.styl'

    .container
        height 100%
        display flex
        flex-direction column
        justify-content  space-between
        
        header 
            height .6rem
            background-color #ffffff
            font-size .16rem
            font-weight bold
            text-align center
            line-height .8rem
        .main
            flex 1
            overflow-y scroll
            padding-top .2rem
            padding-left .16rem 
            padding-right .16rem
            >div:first-child
                display flex
                flex 1
                height 1.74rem
                margin-bottom .16rem
                background-color  #987259
                img 
                    width 100%
                    height 1.74rem
                
            >div:nth-child(2)
                display flex
                flex 1
                height 1.74rem
                margin-bottom .16rem
                background-color  #987259
                img 
                    width 100%
                    height 1.74rem
            ul 
                li
                    display flex
                    justify-content: flex-start
                    align-items center
                    padding-bottom .15rem
                    p 
                        width 1.1rem
                        height 1.1rem
                        //background-color yellow
                        img 
                            width 100%
                            height 100%
                    div
                        flex 1
                        height .9rem
                        background-color #ffffff
                        //background-color #dd5042
                        border-radius .05rem 
                        border_1px(1px 1px 1px 0)
                        display flex
                        flex-direction column
                        padding-left .22rem
                        padding-top .1rem
                        p
                            width 100%
                            >span:first-child    
                                font-size .14rem
                                line-height .24rem
                                //ellipsis()
                            >span:last-child
                                padding-left .07rem
                                color #ffac2d
                                
       /*  footer 
            height .44rem
            background-color #fff
            ul
                display flex
                height 100%
                border_1px(1px 1px 1px 1px)
                border-color #000
                li
                    flex 1
                    color #ababab
                    flex-direction column
                    //text-align center
                    //line-height .44rem
                    display flex
                    justify-content center
                    align-items center
                    //ellipsis()
                    &.active
                        color #42bd56 */
</style>

