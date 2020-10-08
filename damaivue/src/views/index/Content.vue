<template>
  <div class="index-page-wrapper" ref="container">
    <div class="index-scroll">
  <!-- 轮播 -->
      
      <Swiper></Swiper>
  <!--中部导航  -->
      <Nav></Nav>
  <!--中部广告  -->
      <AD></AD>
  <!-- 近期演出 -->
      <Calender></Calender>
  <!-- 更多演出 -->
      <Moreshow></Moreshow>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Calender from "views/index/Calender.vue";
import Moreshow from "views/index/Moreshow.vue";
import Swiper from "views/index/Swiper.vue";
import Nav from "views/index/Nav.vue";
import AD from "views/index/AD.vue";
export default {
  data() {
    return {
      pageSize:10,
      bScroll:''
    }
  },
  components: {
    Swiper,
    Nav,
    AD,
    Calender,
    Moreshow
  },
  
  mounted() {
    let width=window.innerWidth
     if(this.$refs.container){
        this.bScroll =  new BScroll('.index-page-wrapper',{
          pullUpLoad:true,
          click:true,
          probeType:2
        })
       this.bScroll.on('pullingUp',function (){
    
          this.$store.commit('setPageSize')
          this.$nextTick(()=>{
            this.bScroll.refresh()
          })
         this.bScroll.finishPullUp()
        }.bind(this))
      this.bScroll.on('scroll', (scrollsY) => {

          this.$store.commit('setisShow',{y:scrollsY.y,width})
    
      })
      this.$store.commit('setSCROLL',this.bScroll)
     }
  
  },
};
 
</script>
<style lang="stylus">
.index-page-wrapper 
  overflow scroll
  position relative
  height calc(100% - .5rem)


</style>
