<template>
  
        <ul class="citywrapper">
            <!-- 选择城市 -->
            <li>
                <span class="citys"> 

                   <div v-show="chooseCity" class="city-scroll" ref="cityScroll">
                        <ul>
                            <li>定位城市</li>
                            <li style="padding-left:12vw">定位失败</li>
                            <li>热门城市/区域</li>
                           
                                <ol style="width:100vw;height:55.01vw;padding:0;">
                                  
                                    <li style="width:28%;height:9.52vw;float:left;padding:0;display:flex;justify-content:center;margin:8px 0 8px 15px" v-for=" (item,index) in hotCityList" :key="index"  :ctyIds="item.key" >
                                        <router-link to="/index" tag="span" @click.native="handelCilick(item.name)" style="width:100%;height:100%;text-align:center;border:solid 1px #ff1268;border-radius: 0.8vw;line-height:10vw" v-if="item.name==currCity">
                                            {{item.name}}
                                        </router-link>
                                        <router-link to="/index" tag="span" :name="item.name"  style="width:100%;height:100%;text-align:center;line-height:10vw;border:1px solid #e7e7e7;border-radius: 0.8vw;" @click.native="handelCilick(item.name)" v-else>
                                            {{item.name}}
                                        </router-link>
                                        

                                    </li>
                                </ol>                     
                         
                            <router-link to="/index" tag="li" :name="city.name" @click.native="handelCilick(city.name)"  v-for="(city ,index ) in cityList" :key="index" :ctyIds="index"><span>{{city.name}}</span> </router-link>
                           
                        </ul>
                    </div> 
                </span>
                    
                  
            </li>
        </ul>

 
</template>

<script>
import BScroll from 'better-scroll'
import {get} from 'untils/http.js'
export default {
    data() {
        return {
            show: false,
            calender:false,
            currCity:'全国',
            chooseCity:true,
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
       this.chooseCity=true
    },
    async mounted() {
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
            if(this.$refs.cityScroll){

                let cityScroll = new BScroll('.city-scroll',{
                   
                   click:true,
               })
         
               
               
               this.cityList = result.data.pageData.factMap.cityname
            }

    
    },
    methods: {
          changeCity(){
            this.chooseCity= !this.chooseCity
            if(this.show){
                this.show = !this.show;
            }
            if(this.calender){
                this.calender = !this.calender;
            }
            },
            handelCilick(city){
       
                
                this.$store.commit('setcurrCity',city)
                
            }
    },
  
}

</script>
<style lang='stylus'>

        .citywrapper
            height 100%
            height 12vw
            z-index 1000000
            flex 1
            display flex
            position relative
            li
                height 100%
                flex 1
                z-index 1000000
                display flex
                align-items center
                justify-content center
                .citys
                    
                    position absolute
                    top 0
                    left 0
                    div
                        
                        position absolute
                        
                        background #fff
                        width 100vw
                        
                        height 100vh
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
</style>