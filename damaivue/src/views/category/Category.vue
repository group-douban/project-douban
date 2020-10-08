<template>
  <div class="category-wrapper">
      <div class="category-header-wrapper">
       
          <div class="category-header"  @click="handleClick($event)">
           
            <router-link to="/category/全部" tag="div" class="category-item" active-class="active" @click.native="CloseAllMasker">
                <span>全部</span>
            </router-link>
<!--          
            <van-tabs line-height=2px>
            <van-tab title="全部" to="/category/全部" class="category-item" active-class="active">
            </van-tab>
                <van-tab v-for="(item) in map" :key="item.count" :title="item.name" :to="`/category/${item.name}`" class="category-item" active-class="active" >
            
                </van-tab>
            </van-tabs> -->


            <router-link :to="`/category/${item.name}`" class="category-item" active-class="active"  @click.native="CloseAllMasker"  v-for="(item) in map" :key="item.count">
                <span >{{item.name}}</span>
            </router-link>
             
        </div>
      </div>
      <div class="category-nav-wrapper">
          <ul>
              
            <!-- 选择城市 -->
            <li @click="changeCity">
                <span class="citys" style="height:22px;" > 
                      <i v-if="chooseCity" class="active" style="width:55px;overflow:hidden;display:inline-block;height:21px;text-overflow:ellipsis;white-space: nowrap;text-align:right">{{currCity}}</i>
                      <i v-else style="width:55px;overflow:hidden;display:inline-block;height:21px;text-overflow:ellipsis;white-space: nowrap;text-align:right">{{currCity}}</i>
                   <div v-show="chooseCity" class="city-scroll" ref="cityScroll2">
                        <ul>
                            <li>定位城市</li>
                            <li style="padding-left:12vw;">定位失败</li>
                            <li>热门城市/区域</li>
                           
                                <ol style="width:100vw;height:55.01vw;padding:0;">
                                  
                                    <li style="width:28%;height:9.52vw;float:left;padding:0;display:flex;justify-content:center;margin:8px 0 8px 15px" v-for=" (item,index) in hotCityList" :key="index"  :ctyIds="item.key">
                                        <span style="width:100%;height:100%;text-align:center;border:solid 1px #ff1268;border-radius: 0.8vw;line-height:10vw" v-if="item.name==currCity" @click="handelClickCity(item.name,item.key)">
                                            {{item.name}}
                                        </span>
                                        <span style="width:100%;height:100%;text-align:center;line-height:10vw;border:1px solid #e7e7e7;border-radius: 0.8vw;" v-else @click="handelClickCity(item.name,item.key)">
                                            {{item.name}}
                                        </span>
                                        

                                    </li>
                                </ol>                     
                              <!-- <router-link to="/index" tag="span" :name="item.name"  style="width:100%;height:100%;text-align:center;line-height:10vw;border:1px solid #e7e7e7;border-radius: 0.8vw;" @click.native="handelCilick(item.name)" v-else>
                                            {{item.name}}
                                        </router-link> -->
                            <li   v-for="(city ,index ) in cityList" :key="index" :ctyIds="index" @click="handelClickCity(city.name,city.count)"> <span>{{city.name}}</span> </li>
                           
                        </ul>
                    </div> 
                </span>
                    
                    <svg v-if="chooseCity" t="1574060530960" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2421" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="2422" fill="#ff1268"></path></svg>
                    <svg v-else t="1573889462518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="3390" fill="#999999"></path>
                    </svg>
            </li>
            <!-- 选择日期 -->
            <li >
                <span class="calender"> 
                     <i v-if="calender" class="active" @click="showCalender">{{currDate}}</i>
                      <i v-else @click="showCalender">{{currDate}}</i> 
                   
                   <div v-show="calender">
                        <ul style="width:100vw;height:100vw;z-index:100000;position:relative" @click="changeDate($event)">
                           
                                <Calender :currDate="currDate"></Calender>
                          
                           
                        </ul>
                         <div class="masker" @click="showCalender" style="width:200vw;height:700px;background:#000;opacity:.7;position:absolute;top:40vw">

                        </div>
                    </div>
                </span>  
                     
                    <svg v-if="calender" t="1574060530960" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2421" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="2422" fill="#ff1268"></path></svg>
                    <svg v-else t="1573889462518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="3390" fill="#999999"></path>
                    </svg>
            </li>
            <li class="active" @click="showPopup" >
                <span class="sort">
                    {{sortText}}
                    <div v-show="show">
                        <ul>
                            <li> <span :class="order1" @click="changeActive($event)">推荐排序</span> 
                                <i v-if="order1">
                                    <svg t="1574075369289" class="icon" viewBox="0 0 1466 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1732" width="2.2vw" height="2.2vw"><path d="M535.770344 1017.621782c-51.025747 0-102.051494-19.134655-140.320804-63.782184L19.134655 539.255403C-6.378218 513.742529 0 475.473219 25.512874 449.960345s63.782184-19.134655 89.295057 6.378219l376.314885 414.584195c25.512874 25.512874 63.782184 25.512874 89.295057 6.378218l6.378218-6.378218L1326.669424 22.619714c25.512874-25.512874 63.782184-31.891092 89.295057-6.378219 25.512874 25.512874 31.891092 63.782184 6.378219 89.295058L676.091149 953.839598l-12.756437 12.756437c-38.26931 31.891092-82.916839 51.025747-127.564368 51.025747z" p-id="1733" fill="#ff1268"></path>
                                    </svg>
                                </i>
                            </li>
                            <li> <span :class="order3" @click="changeActive($event)">最新上架</span> 
                                <i v-if="order3">
                                    <svg t="1574075369289" class="icon" viewBox="0 0 1466 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1732" width="2.2vw" height="2.2vw"><path d="M535.770344 1017.621782c-51.025747 0-102.051494-19.134655-140.320804-63.782184L19.134655 539.255403C-6.378218 513.742529 0 475.473219 25.512874 449.960345s63.782184-19.134655 89.295057 6.378219l376.314885 414.584195c25.512874 25.512874 63.782184 25.512874 89.295057 6.378218l6.378218-6.378218L1326.669424 22.619714c25.512874-25.512874 63.782184-31.891092 89.295057-6.378219 25.512874 25.512874 31.891092 63.782184 6.378219 89.295058L676.091149 953.839598l-12.756437 12.756437c-38.26931 31.891092-82.916839 51.025747-127.564368 51.025747z" p-id="1733" fill="#ff1268"></path>
                                    </svg>
                                </i>
                            </li>
                            <li> <span :class="order2" @click="changeActive($event)">最近开场</span> 
                                <i v-if="order2">
                                    <svg t="1574075369289" class="icon" viewBox="0 0 1466 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1732" width="2.2vw" height="2.2vw"><path d="M535.770344 1017.621782c-51.025747 0-102.051494-19.134655-140.320804-63.782184L19.134655 539.255403C-6.378218 513.742529 0 475.473219 25.512874 449.960345s63.782184-19.134655 89.295057 6.378219l376.314885 414.584195c25.512874 25.512874 63.782184 25.512874 89.295057 6.378218l6.378218-6.378218L1326.669424 22.619714c25.512874-25.512874 63.782184-31.891092 89.295057-6.378219 25.512874 25.512874 31.891092 63.782184 6.378219 89.295058L676.091149 953.839598l-12.756437 12.756437c-38.26931 31.891092-82.916839 51.025747-127.564368 51.025747z" p-id="1733" fill="#ff1268"></path>
                                    </svg>
                                </i>
                            </li>
                           
                        </ul>
                         <div class="masker" style="width:200vw;height:1000px;background:#000;opacity:.7;position:absolute;top:40vw">

                        </div>
                    </div>
                 </span> 
                   <svg t="1574060530960" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2421" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="2422" fill="#ff1268"></path></svg>
            </li>
            <li><span style="color:#999">距离最近</span> </li>
          </ul>
      </div>
      <div class="category-list">
            <router-view :ctl="ctl" :order="order" :currCity="currCity" :currDate='currDate' :tsg="tsg"></router-view>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {get} from 'untils/http.js'
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import Calender from 'components/calenderItem.vue'



Vue.use(Tab).use(Tabs);
export default {
    components:{
        Calender
    },
    data() {
        return {
            map:[
                {count: 1315, name: "音乐会"},
                {count: 898, name: "话剧歌剧"},
                {count: 615, name: "演唱会"},
                {count: 497, name: "曲苑杂坛"},
                {count: 465, name: "展览休闲"},
                {count: 300, name: "舞蹈芭蕾"},
                {count: 87, name: "体育"},
                {count: 884, name: "儿童亲子"},
                {count: 1, name: "旅游演艺"}
                ],
            ctl:'',
            show: false,
            order1:'active',
            order2:'',
            order3:'',
            sortText:'推荐排序',
            order:1,
            calender:false,
            currTime:'全部时间',
            currCity:this.$store.state.currCity,
            chooseCity:false,
            currDate:'全部时间',
            tsg:0,
            cityList:[],
            hotCityList:[
                {key:0,name:'全国'},
                {key:2,name:'国际及港澳台'},
                {key:1,name:'北京'},
                {key:2,name:'上海'},
                {key:3,name:'深圳'},
                {key:4,name:'广州'},
                {key:5,name:'杭州'},
                {key:6,name:'天津'},
                {key:7,name:'重庆'},
                {key:8,name:'成都'},
                {key:11,name:'西安'},
                {key:9,name:'中国香港'}

            ]
        }
    },
    
    beforeMount() {
        this.currCity = this.$store.state.currCity
    },

   async mounted() {
       this.calender= this.$store.state.CalenderShow
         let bScroll = new BScroll('.category-header-wrapper',{
            scrollX:true,
            click:true,
            scrollY: false,
        })
         let theScroll = new BScroll('.category-list',{
            
            click:true,
        })
        let result = await get({
            url: "/ajax/searchajax.html",
            params: {
                keyword: '',
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
            // console.log(result.data.pageData.factMap.cityname);
        if(this.$refs.cityScroll2){   
         let cityScroll = new BScroll('.city-scroll',{
            
            click:true,
        })
        this.cityList = result.data.pageData.factMap.cityname
        }
        
        

            
    },
    methods: {
        changeDate(e){
           
            if(e.target.className=='date-item'||e.target.className=='wh_item_date wh_chose_day'){


                    if(e.target.innerHTML == '全部时间'){ 
                        this.currDate= '全部时间'
                        this.tsg=0
                    }
            
                    else if(e.target.innerHTML == '本周'){ 
                        this.currDate= '本周'
                        this.tsg=2
                    }
                
                    else if(e.target.innerHTML == '本月'){ 
                        this.currDate= '本月'
                        this.tsg=4
                    }
                    else if(e.target.innerHTML == '周末'){ 
                        this.currDate= '周末'
                        this.tsg=3
                    }else{
                        this.currDate=this.$store.state.currTime  
                        this.tsg=5      
                    }
                    
      
                    
                    this.calender =false

            }
          
            
        },
        CloseAllMasker(){
            this.show = false
            this.chooseCity=false
            this.calender=false
        },
        handelClickCity(item,ctyIds){
            // console.log(item,123);
            this.currCity=item
            // console.log(this.currCity);
            
            this.$store.commit('setcurrCity',item)
        },
        changeCity(){
            this.chooseCity= !this.chooseCity
            if(this.show){
                this.show = !this.show;
            }
            if(this.calender){
                this.calender = !this.calender;
            }
        },
        showCalender(){
            this.calender = !this.calender 
            if(this.show){
                this.show = !this.show;
            }
            if(this.chooseCity){
                this.chooseCity= !this.chooseCity
            }
        },
        changeActive(e){
            if(e.target.innerHTML=='推荐排序')
            {
                this.order1='active'
                this.order2=''
                this.order3='' 
                this.order=1
            }else if(e.target.innerHTML=='最近开场'){
                this.order1=''
                this.order2='active'
                this.order3='' 
                this.order=2
            }else if(e.target.innerHTML=='最新上架'){
                this.order1=''
                this.order2=''
                this.order3='active' 
                this.order=3
            }
            this.sortText= e.target.innerHTML
        },
        handleClick(e){

        
            
            let re = /[\u4e00-\u9fa5]+/

           this.ctl=e.target.innerHTML.match(re)[0]
            
            
        },
        showPopup() {
            this.show = !this.show;
             if(this.calender){
                this.calender = !this.calender;
            }
            if(this.chooseCity){
                this.chooseCity= !this.chooseCity
            }
        }
    },

 
}

</script>
<style lang='stylus' scoped>
.category-wrapper
    width 100%
    height 100%
    background #fff
    display flex
    flex-direction column
    .category-header-wrapper
        width 100%
        position relative
        z-index 1000000
        .category-header
            display flex
            width  max-content
            .category-item
                padding 0 4vw
                height 12vw
                display flex
                align-items center
                span 
                    font-size: 4.2667vw;
                    font-weight: 400;
                    line-height  12vw
                    color: #111
                &.active
                    position: relative;
                    &::after
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        width: 8vw;
                        -webkit-transform: translateX(-50%);
                        transform: translateX(-50%);
                        height: 0.5333vw;
                        background: #ff1268;
                        border-radius: 0.8vw
    .category-nav-wrapper 
        height 12vw
        z-index 1000000
        background #F5F5F5
        margin  4vw 0 1vw 0
        ul
            height 100%
            display flex
            li
                height 100%
                flex 1
                z-index 1000000
                display flex
                align-items center
                justify-content center
                .citys
                    position relative
                    div
                        top 9vw
                        position absolute
                        width 100%
                        background #fff
                        width 100vw
                        left -4vw
                        height calc(100vh - 28.1vw)
                        overflow hidden
                        ul
                            width 100%
                            height max-content
                            display flex
                            flex-direction column
                            li
                                box-sizing border-box
                                padding-left 4vw
                                width 100%
                                height: 12vw;
                                line-height: 12vw;
                                font-size: 3.4667vw;
                                color: #333;
                                display flex
                                justify-content flex-start
                                text-align left 
                .calender
                    position relative
                    i
                        width 19.8213vw

                        display inline-block
                        text-align center
                    div
                        top 9vw
                        position absolute
                        width 100%
                        background #fff
                        width 100vw
                        left -26.5vw
                        ul
                            width 100%
                            display flex
                            height 40vw
                            li
                                width 100%
                &.active
                    z-index 1000000
                    color #ff1268;
                   
                    .sort
                        background #F5F5F5
                        position relative
                        div
                            background #fff
                            width 100vw
                            left -54vw
                            top 9vw
                            position absolute
                            ul 
                                
                                width 100%
                                padding-top 4vw
                                flex-direction column
                                li
                                    color: #3d3d3d
                                    width 100%
                                    display  flex
                                    justify-content space-between
                                    box-sizing border-box
                                    padding-right 6vw
                                    padding-left 4vw
                                    line-height 12.26vw
                                    span 
                                        flex 1
                                        &.active
                                            color #ff1268
                              
    .category-list  
        flex 1    
        overflow hidden

.van-popup
    
    top -11.7vw
.active
    color #ff1268
.van-tab 
    font-size 4.2667vw
    flex-basis 21.3vw !important;       
.van-tabs__content
    display none
.van-tabs__line
    background-color #ff1268
    width: 8vw
</style>