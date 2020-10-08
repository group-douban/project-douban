<template>
       <div class="moreShow-nav activeNav" v-if="isShow">
          <span class="moreShow-nav-item active" v-if="everyShow" @click="showMasker($event)" >{{currEvery}}
              <svg t="1573889462518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="3390" fill="#999999"></path></svg>
               <div class="chooseWindow" v-show="makser">
                  <EveryShow :currEvery="currEvery"></EveryShow>
              </div> 
          </span>
          <span class="moreShow-nav-item" @click="showMasker2($event)" v-else>{{currEvery}}
              <svg t="1573889462518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="3390" fill="#999999"></path></svg>
         
          </span>
          
         
          <span class="moreShow-nav-item active" v-if="timeShow" @click="showMasker($event)" >{{currDate}}
              <svg t="1573889462518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="3390" fill="#999999"></path></svg>
              <div class="chooseWindow"  v-show="makser">
                  <TimeShow :currDate="currDate"></TimeShow>
              </div>
          </span>
           <span class="moreShow-nav-item" @click="showMasker3($event)" v-else>{{currDate}}
              <svg t="1573889462518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="2.2vw" height="2.2vw"><path d="M104.2 338.3L468.8 737a57.377 57.377 0 0 0 43.1 19.5c16.5 0 32.2-7.1 43.1-19.5l364.6-398.7c17.8-18.8 23.3-46.2 14.1-70.4s-31.4-41.1-57.2-43.4H147.6c-25.9 2.2-48.2 19-57.4 43.3-9.3 24.3-3.8 51.7 14 70.5z" p-id="3390" fill="#999999"></path></svg>
             </span>
          <span class="moreShow-nav-item active"  @click="showMasker4($event)">推荐排序</span>
          <span class="moreShow-nav-item">距离最近</span>
      </div>
</template>

<script>
 
import EveryShow from 'components/everyShow.vue'
import TimeShow from 'components/tiemShow.vue'
export default {

    data() {
        return {
            isShow:false,
            makser:false,
            everyShow:false,
            timeShow:false,
            currDate:'全部时间',
            currEvery:'全部分类'
        }
    },
    components:{
        EveryShow,
        TimeShow
    },
    watch: {
        '$store.state.isShow'(){
            this.isShow = this.$store.state.isShow
        },
        '$store.state.showMasker'(){
            if(!this.$store.state.showMasker){
                this.everyShow=false,
                this.timeShow=false
                this.$store.commit('setTimeShow',false)
                this.$store.commit('setEveryShow',false)
            }
        },
        '$store.state.everyShow'(){

            if(this.$store.state.everyShow){
                this.makser =true
                this.everyShow=true,
                this.$store.commit('setTimeShow',false)
            }
        },
        '$store.state.timeShow'(){
            if(this.$store.state.timeShow){
                this.makser =true
                this.timeShow=true
                this.$store.commit('setEveryShow',false)
            }
        },
        '$store.state.currTime'(){
                this.currDate = this.$store.state.currTime

                
        },
        '$store.state.currEvery'(){
          
            
                this.currEvery = this.$store.state.currEvery

                
        }

    },
    methods: {
        
        showMasker(e){

            this.makser=!this.makser
            this.everyShow=false
            this.timeShow=false
            this.$store.commit('setMsker',this.makser)
        },
        showMasker2(){
            this.everyShow=!this.everyShow
             if(this.timeShow){
                 this.timeShow=false
            }
            this.makser=true
             this.$store.commit('setMsker',true)
            // this.timeShow=!this.timeShow
        },
        showMasker3(){
            // this.everyShow=!this.everyShow
            this.timeShow=!this.timeShow
            if(this.everyShow){
                 this.everyShow=false
            }
            this.makser=true
            this.$store.commit('setMsker',true)
        },
        showMasker4(){
            this.makser=false
            this.everyShow=false
            this.timeShow=false
            this.$store.commit('setMsker',this.makser)
        }
    
    },
}

</script>
<style lang='stylus'>
    .activeNav
        display flex
        background #fff
        position relative
        z-index 999999
        .moreShow-nav-item
            flex 1
            line-height 13.86vw
            text-align center
            font-size 3.733vw
            &.active
                color: #ff1268
                .chooseWindow
                    background #fff
                    position absolute
                    width 100vw
                    height 74.66vw
                    top 13.5vw
                    left 0
                    z-index 999999
                    

</style>