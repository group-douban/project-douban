import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import scroll from './scroll.js'
export default new Vuex.Store({
  // 模块化
    modules:{
      scroll
    },
    state: {
      isSticky:0,
      container:null,
      currPage:1,
      isLoaded:true,
      currCity:'全国',
      TheDetail:{},
      CalenderShow:false,
      // 分类页的时间
      currDate:'全部时间',
      isShow:false,
      bScroll:'',
      showMasker:false,
      everyShow:false,
      timeShow:false,
      // 首页的时间
      currTime:'全部时间',
      // 首页的分类
      currEvery:'全部分类'
    },
    mutations: {
    setSticky(state,x){
        // 变更状态
        state.isSticky= x
    },
    setEveryShow(state,payload){
      state.everyShow = payload
    },
    setTimeShow(state,payload){
      state.timeShow = payload
    },
    setSCROLL(state,SCROLL){
      state.bScroll=SCROLL
    },
    setMsker(state,payload){
      state.showMasker = payload
    },
    setisShow(state,data){
     
      
      if(data.y<(-1.966354666666667*data.width)){
        state.isShow = true
      }else{
        state.isShow =false
      }
   
    },

    setcurrDate(state,date){
      
      state.currTime = date
      
    },
    setcurrEvery(state,data){
      
      state.currEvery = data
   
    },
    setCalenderShow(state){
      state.CalenderShow = true
    },
    setCalenderOff(state){
      state.CalenderShow = false
    },
    setTheDetail(state,item){
      state.TheDetail =item
    },
    setcurrCity(state,city){
    
      
      state.currCity=city

    },
    setContainer(state,y){
      state.container= y
    },
    setPageSize(state){
      if(state.isLoaded){
        state.isLoaded=false
        state.currPage=  state.currPage+1
      }

      
    },
    setIsLoaded(state){
      state.isLoaded=true
    }
    },
    actions: {
    },
    modules: {
    }
})
