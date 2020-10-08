<template>
  <div class="showItem-wrapper">
        <slot name="slot1"></slot>
        
    <router-link to="/detail" tag="div" class="showItem" v-for="(item ,index) in showItems" :key="showItems[index].projectid" @click.native="handelDetail(item)"> 
            <div class="project-item">
                <div class="showItem_pic">
                    <img class="showItem_pic_poster" v-lazy="item.verticalPic"/>
                    <!-- <img class="showItem_pic_poster" src="./.public/loding.png"/> -->
                </div>
                <div class="showItem_info">
                    <div class="showItem_info_title">
                        <!-- <span >{{item.name}}</span> -->
                        <div  v-html="item.name">{{item.name}}</div>
                    </div>
                    <div class="showItem_info_time">
                      <span> {{item.cityname}} / {{item.showtime}} / {{item.venue}}</span> 
                    </div>
                    <div class="showItem_info_promotion">
                        <div class="perform-tag-seat" v-if="item.isxuanzuo==1">可选座</div>
                    </div>
                    <div  class="showItem_info_price">
                        <span class="showItem_info_price_str">￥{{item.price_str}}</span>
                    </div>
                </div>
            </div>
    </router-link >
    <div class="wrap_projects_empty" v-if="!showItems&&!keywords" style="">
        <img src="https://img.alicdn.com/tfs/TB1iCH.kwHqK1RjSZFPXXcwapXa-253-248.png" alt=""> 
        <p>没有找到符合条件的项目</p> <p>您可以减少筛选条件重新尝试</p>
    </div>
        <slot name="slot2" v-if="showItems"></slot>
        <slot name="slot3" v-else></slot>
  </div>
</template>

<script>
import { get } from "untils/http.js";
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('public/loding.png'),   //请求失败后显示的图片
  loading: require('public/loding.png'),   //加载的loading过渡图片
  attempt: 1     // 加载图片数量
})
export default {
    props:['keywords','changeKey','ctl','order','city','currCity','currDate','tsg'],
    data() {
        return {
            currPage:1,
            showItems:[],
            currCtl:'',
            currTn:'',
            cty:'全国'
        }
    },
    computed: {
        listencurrPage() {
            return this.$store.state.currPage;
        }
    },
    methods: {
        // 传递详情的对象
        handelDetail(item){
     
            this.$store.commit('setTheDetail',item) 
        },
        // 改变参数的请求
        async gogoChange(){
            let ctl = this.ctl?this.ctl:''
            let currDate = this.currDate?this.currDate:''
            let order = this.order
            let tsg = this.tsg
            let cty = this.currCity?this.currCity:''
            //  解决两个出现在tag-name 的属性
            let tn = ''
            if(currDate == '全部时间'){ 
                currDate= '全部时间'
                this.tsg=0
            }else if(currDate == '本周'){ 
                currDate= '本周'
                this.tsg=2
            }else if(currDate == '本月'){ 
                currDate= '本月'
                this.tsg=4
            } else if(currDate == '周末'){ 
                currDate= '周末'
                this.tsg=3
            }else if (currDate==''){
                his.tsg=0
            }
            else{
                this.tsg=5      
            }

            if(cty=='全国'){
                cty=''
            }else if(cty=='国际及港澳台'){
               cty='中国澳门'
            }


            if(ctl=='全部'){
                ctl=''
            }
            else if(ctl=='儿童亲子'){
                ctl=''
                tn='儿童亲子'
            }
            else if(ctl=='旅游演艺'){
                ctl=''
                tn='旅游演艺'
            }
            let result = await get({
            url: "/ajax/searchajax.html",
            params: {
                keyword:'',
                cty,
                ctyIdx:0,
                ctl,
                sctl: "",
                tsg,
                st: currDate,
                et: currDate,
                order,
                pageSize:30,
                currPage: 1,
                tn,
            }
            });
            this.showItems = result.data.pageData.resultData
            this.$store.commit('setIsLoaded') 
        },
        // 关键词搜索
        async GetKeywords(){
                let keyword = this.keywords?this.keywords:''
                let result = await get({
                url: "/ajax/searchajax.html",
                params: {
                    keyword: keyword,
                    cty: "",
                    ctl: "",
                    sctl: "",
                    tsg: 0,
                    st: "",
                    et: "",
                    order: 1,
                    pageSize:30,
                    currPage: 1,
                    tn: ""
                }
                });
                this.showItems = result.data.pageData.resultData
                this.$store.commit('setIsLoaded')
        }
    },
    watch:{
        listencurrPage:async function(newd,old){
            this.currPage = newd;
            let result = await get({
            url: "/ajax/searchajax.html",
            params: {
                keyword: "",
                cty: "",
                ctl: "",
                sctl: "",
                tsg: 0,
                st: "",
                et: "",
                order: 1,
                pageSize:30,
                currPage: this.currPage,
                tn: ""
            }
            });
 
            this.showItems = [...this.showItems,...result.data.pageData.resultData]
            this.$store.commit('setIsLoaded')
        },
       
       async keywords(){
            this.GetKeywords()
        },
        async changeKey(){
            this.GetKeywords()
        },
         async currCity(){
            this.gogoChange()
        },
        async ctl(){
            this.gogoChange()
        },
        async order(){
            this.gogoChange()
        },
        async currDate(){
            this.gogoChange()
        },
        async '$store.state.currTime'() {
              let ctl = this.$store.state.currEvery
              
            let tn = ''
            let currDate = this.$store.state.currTime
            console.log(currDate);
              
            let tsg = 0
            //  解决两个出现在tag-name 的属性
            if(currDate == '全部时间'){ 
                currDate= ''
                tsg=0
            }else if(currDate == '一周内'){ 
                currDate= '本周'
                tsg=3
            }else if(currDate == '今天'){ 
                currDate= '今天'
                tsg=1
            }
            else if(currDate == '一月内'){ 
                currDate= '本月'
                tsg=4
            } else if(currDate == '本周末'){ 
                currDate= '周末'
                tsg=3
            }else if (currDate=='明天'){
                currDate= '明天'
                tsg=2
            }else{
                tsg=5
            }
     

            if(ctl=='全部分类'){
                ctl=''
            }
            else if(ctl=='儿童亲子'){
                ctl=''
                tn='儿童亲子'
            }
            else if(ctl=='旅游演艺'){
                ctl=''
                tn='旅游演艺'
            }
            let result = await get({
            url: "/ajax/searchajax.html",
            params: {
                keyword:'',
                cty:'',
                ctyIdx:0,
                ctl,
                sctl: "",
                tsg,
                st: currDate,
                et: currDate,
                order:1,
                pageSize:30,
                currPage: 1,
                tn,
            }
            });
            this.showItems = result.data.pageData.resultData
            this.$store.commit('setIsLoaded') 
        },
        async '$store.state.currEvery'() {
            let ctl = this.$store.state.currEvery
            let tn = ''
            let currDate = this.$store.state.currTime
            let tsg = 0
           
            
            //  解决两个出现在tag-name 的属性
            if(currDate == '全部时间'){ 
                currDate= ''
                tsg=0
            }else if(currDate == '一周内'){ 
                currDate= '本周'
                tsg=3
            }else if(currDate == '今天'){ 
                currDate= '今天'
                tsg=1
            }
            else if(currDate == '一月内'){ 
                currDate= '本月'
                tsg=4
            } else if(currDate == '本周末'){ 
                currDate= '周末'
                tsg=3
            }else if (currDate=='明天'){
                currDate= '明天'
                tsg=2
            }

            
            if(ctl=='全部分类'){
                ctl=''
            }
            else if(ctl=='儿童亲子'){
                ctl=''
                tn='儿童亲子'
            }
            else if(ctl=='旅游演艺'){
                ctl=''
                tn='旅游演艺'
            }

            let result = await get({
            url: "/ajax/searchajax.html",
            params: {
                keyword:'',
                cty:'',
                ctyIdx:0,
                ctl,
                sctl: "",
                tsg,
                st: currDate,
                et: currDate,
                order:1,
                pageSize:30,
                currPage: 1,
                tn,
            }
            });
            this.showItems = result.data.pageData.resultData
            this.$store.commit('setIsLoaded') 
        },
        
       
    },
    beforeMount() {
        let re = /[\u4e00-\u9fa5]+/
        let str = this.$router.history.current.name
        if(re.test(str)){
            if(str=='儿童亲子'){
                this.currCtl=''
                this.currTn='儿童亲子'
            }else if(str=='旅游演艺'){
                this.currCtl=''
                this.currTn='旅游演艺'
            }else if(str=='全部'){
                this.currCtl=''
                this.currTn=''
            }else{

                this.currCtl=str
            }
            
        }
    },
    async mounted() {
        let keyword = this.keywords?this.keywords:''

        this.cty = this.city?this.city:this.$store.state.currCity
    
        let cty = this.cty
        if(cty=='全国'){
                cty=''
            }else if(cty=='国际及港澳台'){
               cty='中国澳门'
        }
        let result = await get({
        url: "/ajax/searchajax.html",
        params: {
            keyword: keyword,
            cty,
            ctyIdx:0,
            ctl: this.currCtl,
            sctl: "",
            tsg: 0,
            st: "",
            et: "",
            order: 1,
            pageSize:30,
            currPage: 1,
            tn: this.currTn
        }
        });
        
        this.showItems = result.data.pageData.resultData
        this.$store.commit('setIsLoaded')
    },


};
</script>
<style lang='stylus'>
.showItem-wrapper
    .showItem
        margin 6.4vw
        margin-bottom 8.5333vw
        .project-item
            display flex
            background #fff
            .showItem_pic
                width 24.3vw
                height 32.3vw
                margin-right 4.2666vw
                img 
                    height 100%
                    width 100%
            .showItem_info
                width 61vw
                position relative
                div 
                    display inline-block
                    width 60.5vw
                    color: #111;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    /*! autoprefixer: off */
                    -webkit-box-orient: vertical
                    font-size: 4.2666vw;
                    font-weight: 700;
                    background  #fff
                    .c4
                        color: #ff1268;
            .showItem_info_time
                span 
                    padding-top 1.6vw  
                    width 58vw
                    display inline-block
                    overflow hidden
                    text-overflow:ellipsis
                    white-space: nowrap
                    font-size: 3.2vw;
                    color: #aaa;
            .showItem_info_promotion 
                width 1.2vw
                display: flex;
                flex-direction: row;
                align-items: center;
                transform scale(.8)
                position relative
                left -5vw
                .perform-tag-seat 
                    width 12vw
                    font-size: 2.6vw;
                    text-align center
                    padding 0 .26vw
                    border-radius: .53vw;
                    color: #ff2d79;
                    border: .13333vw solid #ff2d79;
                    color: #7355ff;
                    border: .26vw solid #7355ff;
            .showItem_info_price 
                background  #fff
                position absolute
                bottom 0
                span 
                    color: #ff1268;
                    font-weight 500
                    font-size 4vw
.wrap_projects_empty
    display flex
    justify-content center
    flex-direction column
    align-items center
</style>