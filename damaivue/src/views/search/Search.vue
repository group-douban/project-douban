<template>
  <div class="search-page-wrapper">
        <div class="search-header-wrapper">
            <div class="input-search">
               <span>
                   <svg
                        t="1573703958260"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1896"
                        width="4.2vw"
                        height="4.2vw"
                        >
                        <path
                        d="M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z"
                        p-id="1897"
                        fill="#bfbfbf"
                        />
                    </svg>
                </span> 
                  <input placeholder="搜索明星、演出比赛、场馆" tag="span" class="search" v-model="unShake" >
                    <i @click="cleanInput">
                        <svg t="1574166047339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2136" width="4.8vw" height="4.7vw"><path d="M512 896c212.1 0 384-171.9 384-384S724.1 128 512 128 128 299.9 128 512s171.9 384 384 384z m-0.8-427.3l150.3-150.3 45.2 45.2L556.5 514l147.3 147.3-45.2 45.2-147.4-147.3-146 146L320 660l146-146-149.6-149.6 45.2-45.2 149.6 149.5z" p-id="2137" fill="#cccccc"></path></svg>
                    </i>
            </div>   
            <div class="serach-cancel">
                <a href="javascript:history.back(1)">取消</a>
            </div>
        </div>
        <div class="search-history" v-if="history&&!keywords">
            <p>搜索历史
                <svg @click="handelDelete" t="1573887582789" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1752" width="4.2vw" height="4.2vw">
                    <path d="M96 320a32 32 0 1 1 0-64h832a32 32 0 0 1 0 64H96z m736 0h64v448a160 160 0 0 1-160 160H288a160 160 0 0 1-160-160V320h64v96H128v-96h64v448a96 96 0 0 0 96 96h448a96 96 0 0 0 96-96V320z m-512 112a32 32 0 0 1 64 0v320a32 32 0 0 1-64 0v-320z m320 0a32 32 0 0 1 64 0v320a32 32 0 0 1-64 0v-320zM288 256H224V192a96 96 0 0 1 96-96h384a96 96 0 0 1 96 96v64h-64V224h64v32h-64V192a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v64z" p-id="1753" fill="#515151"></path>
                </svg>
            </p>
            <ul  class="keyword_list">
             <li  class="keyword_list_item" v-for="(text,index) in history" :key="history[index]" v-text="text" @click="handelClick(text)">  
            </li>
            </ul>
        </div>
        <div class="hot-search" v-if="!keywords" >
            <p>热搜</p>
            <ul class="keyword_list">
                <li  class="keyword_list_item" v-for="(text,index) in hotSearch" :key="hotSearch[index]" v-text="text" @click="handelClick(text)">  
                </li>
            </ul>
        </div>
       
        <div class="search-result-wrapper"  v-if="keywords" ref="searchResult">
                <div class="scroll-result">
      
                    <div class="searchResult" >
                        <showItem :keywords="keywords" :changeKey="changeKey">
                            <span  class="search_projects_suggest_header_text" slot="slot2">只能搜到这么多啦~</span>
                            <div  class="search_projects_suggest_header_text" slot="slot3">没找到近期开演的“<span style="color: rgb(255, 18, 104);">{{keywords}}</span>”</div>
                        </showItem>
                    </div>
                    <div class="suggestResult" >
                        
                        <showItem> 
                             <div class="search_projects_suggest_header_nav"  slot="slot1">
                            <span>喜欢“<span style="color: rgb(255, 18, 104);">{{keywords}}</span>”的人也喜欢这些演出</span></div>
                        </showItem>
                    </div>
                </div>
               
        </div>
   
  </div>
</template>

<script>
import {get} from 'untils/http.js'
import showItem from 'components/ShowItem.vue'
import BScroll from 'better-scroll'
import Vue from 'vue';
import { Notify } from 'vant';

Vue.use(Notify);


export default {
    
    data() {
        return {
            keywords:'',
            hotSearch:['王力宏','莫文蔚','李荣浩','吴青峰','张信哲','李健','任贤齐','张韶涵','蔡健雅','杨千嬅'],
            history:['林俊杰','王力宏'],
            serachResult:'',
            changeKey:0,
            unShake:'',
            isReload:true,
            theScroll:''
        }
    },
    components:{
        showItem
    },
    methods: {
        cleanInput(){
            this.unShake =''
        },
        async handelClick(keywords){
            this.unShake = keywords
        },
        handelDelete(){
            this.history=''
        }
    },
    watch: {
        keywords(){
            let timer
            if(timer){
                clearTimeout(timer)
            }
            timer =  setTimeout(function(){
              
            
                 if(this.keywords&&!this.theScroll&&this.$refs.searchResult){
                    if(this.theScroll){
                        return
                    }

                     this.theScroll = new BScroll('.search-result-wrapper',{
                        click:true,
                        pullDownRefresh:true
                    })
                    this.theScroll.on('pullingDown',function(){
                    this.$notify({
                        message:'正在刷新~',
                        duration:1500,
                        color:'#aaa',
                        background:'#fff',
                    }); 
                    this.changeKey++
             
                    this.theScroll.finishPullDown()
                    }.bind(this))
                }
            }.bind(this),800)
        },
        unShake(){
            let timer
            if(timer){
                clearTimeout(timer)
            }
            timer =  setTimeout(function(){
                this.keywords = this.unShake 
            }.bind(this),300)
        }
    },
    // computed: {
    //     listenKeyword(){
    //         return this.keywords
    //     }
    // },
    // watch: {
    //     listenKeyword(){

    //     }
    // },
}

</script>
<style lang='stylus'>
.search-page-wrapper
    background #fff
    width 100%
    .search-header-wrapper
        margin-bottom: 5.3333vw;
        height 11.73vw
        position relative
        z-index 20080
        display flex
        padding  .09rem .18rem 0
        align-items center
        justify-content space-between
        .input-search
            flex 1
            display flex
            position relative 
            span 
                position absolute
                left 4vw
                top 1.2vw
            i 
                position absolute
                right  2.4vw
                top 1.2vw
            input 
                background: #f2f3f4!important;
                outline none 
                border none
                height 7.2vw
                border-radius 8.666vw
                display inline-block
                flex 1
                font-size 2.43vw
                text-indent 9.5vw
        .serach-cancel   
            margin-left 4vw   
            a
                color: #222
                font-size 3.43vw
    .search-history
    .hot-search
        overflow hidden
        margin: 4.8vw;
        margin-top: 2.4vw;
        margin-bottom: 5.3333vw;
        p
            font-size: 3.2vw;
            color: #999;
            svg 
                float right 
                position relative
                top .48vw
        .keyword_list
            background red
            margin-top: 4vw;
            zoom: 1;
            .keyword_list_item
                float: left;
                font-size 3vw
                border-radius: 6.8vw;
                border: 1px solid #e7e7e7;
                padding: 1.3667vw 4vw;
                margin-right: 2.666vw;
                margin-bottom: 2.4vw;
                color: #222
    .search-result-wrapper
        height calc(100% - 11.73vw - 10.3333vw)
        overflow-y hidden 
        .scroll-result
            .suggestResult
                background: #eee
                .search_projects_suggest_header_nav
                    font-size: 3.7333vw;
                    margin-left: 6vw;
                    margin-bottom: 2.6667vw;
                    line-height: 13.3333vw;
                    height: 13.3333vw;
                    color: #000;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap
                    background: #eee
                .showItem-wrapper
                    background: #eee !important 
                    div
                        background: #eee !important 
                    .showItem_info_price 
                        span
                            color: #000;
            .searchResult
                
                .search_projects_suggest_header_text
                    text-align: center;
                    width: 100%;
                    padding-top: 5.3333vw;
                    color: #aaa;
                    padding-bottom: 6.6667vw;
                    font-size: 3.4667vw;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    background: #eee
.van-popup
    position absolute
    top 11.73vw
    height  7.3333vw           

</style>