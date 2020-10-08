<template>
  <div class="time-wrapper">
      <ul>
            <li v-for="(item, index) in list" :key="index">
                <span   class="active" v-if="item==currTime">{{item}}</span>
                <span  @click.prevent="handleChanges(item)" v-else>{{item}}</span>
            </li>
      </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:['currDate'],
    data() {
        return {
            list:['全部时间','今天','明天','本周末','一周内','一月内'],
           
        }
    },   
    computed: {
        currTime(){
            return this.currDate?this.currDate:'全部时间'
        }
    }, 
    mounted() {
        let bScroll = new BScroll('.time-wrapper',{
            click:true
        })
      
    },
    methods: {
        handleChanges(text){
    
            
            this.$store.commit('setcurrDate',text)
        }
    },
}

</script>
<style lang='stylus'>
.time-wrapper
    height 100%
    overflow hidden
    ul
        li
            text-align left 
            text-indent 2.8vw
            font-size: 3.2vw
            color: #111;
            span 
                width 100%
                display flex
                &.active
                    color: #ff1268
</style>