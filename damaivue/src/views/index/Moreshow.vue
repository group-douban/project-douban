<template>
  <div class="moreShow">
      <div class="moreShow-title">
          <h4>更多演出</h4>
      </div>
<!--   
            <van-sticky :container="container">
                <van-button type="warning" >指定容器</van-button>
            </van-sticky> -->
        
      <div class="moreShow-nav" v-show="!isToNone">
          <span class="moreShow-nav-item"  @click="handleShow">全部分类
              <svg t="1573889462518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="3390" fill="#999999"></path></svg>
          </span>
          <span class="moreShow-nav-item" @click="handleShow2">全部时间
              <svg t="1573889462518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="3390" fill="#999999"></path></svg>
          </span>
          <span class="moreShow-nav-item active">推荐排序</span>
          <span class="moreShow-nav-item">距离最近</span>
      </div>
      <showItem :city="currCity">

      </showItem>
  </div>
</template>

<script>
import showItem from 'components/ShowItem.vue'
// import Vue from 'vue';
// import { Sticky ,Button} from 'vant';

// Vue.use(Sticky).use(Button);

export default {
    data() {
        return {
            currCity:'',
           
        }
    },
    methods: {
        handleShow(){
            let height=1.9664*window.innerWidth
            
                
            this.$store.state.bScroll.scrollTo(0,-height , 200 ,'easing')
            this.$store.state.bScroll.on('scrollEnd',()=>{
               this.$store.commit('setEveryShow',true)
               this.$store.commit('setMsker',true)
               this.$store.state.bScroll.off('scrollEnd')
            })
        },
        handleShow2(){
            let height=1.9664*window.innerWidth
            this.$store.state.bScroll.scrollTo(0,-height , 200 ,'easing')
            this.$store.state.bScroll.on('scrollEnd',()=>{
               this.$store.commit('setTimeShow',true)
               this.$store.commit('setMsker',true)
               this.$store.state.bScroll.off('scrollEnd')
            })
        }
    },
    computed: {
         isToNone(){
             return this.$store.state.isShow
         }
    },
 
    components:{
        showItem,
    },
    data() {
        return {
        container: null
        };
    },
    beforeMount() {
        
        
      this.currCity= this.$store.state.currCity

    },
    mounted() {
    
        // setTimeout(function () {
        //     this.container = this.$store.state.container;
        //     console.log('moreshow');
        //     console.log(this.container);
        // }.bind(this),2000)
       
 
    }

}

</script>
<style lang='stylus'>
.moreShow
    background #fff
    .moreShow-title
        padding  9.6vw 4.8vw 0
        h4
            font-size 4.8vw
    .moreShow-nav
    
        display flex
        background #fff
        .moreShow-nav-item
            flex 1
            line-height 13.86vw
            text-align center
            font-size 3.733vw
            &.active
                color: #ff1268
</style>