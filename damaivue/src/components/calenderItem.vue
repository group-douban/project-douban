<template>
  <div class="date-wrapper">
      <div class="date-nav">
          <span v-for="(item,index) in lists" :key="index">
                <div v-if="item==theTime"  class="date-item date-item-active" >{{item}}  </div>
                <div v-else class="date-item">{{item}}</div>
        
      </span>

      </div>
      <Calendar 
        :sundayStart="true"
         v-on:choseDay="clickDay"
        :agoDayHide="time"
        ></Calendar>
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component';
 

export default {
props:['currDate'],
 components: {
    Calendar,
    
   
 },
 data() {
     return {
         time:'0',
        lists:['全部时间','本周','本月','周末'],
        theTime:'全部时间'
     }
 },
 watch: {
     currDate(){
        this.theTime =  this.currDate

     }
 },
 methods: {
     clickDay(data) {
        let re = /\//g
   
        let date =  data.replace(re,'-')
        this.$store.commit('setcurrDate',date)
       
        
        
        
    },
 },
updated() {
      this.theTime = this.currDate
},
 mounted() {
    let time =  new Date().getTime()
   this.theTime =  this.$store.state.currDate

    
    this.time = time.toString().substr(0,10)
 },
}

</script>
<style lang='css'>
.date-wrapper{

    position: absolute!important;
    width: 100%!important;
    height: 100vw!important;
    top: 4vw!important;
    left: 0!important;
}
.date-nav{
    display: flex!important;
    background: #fff!important;
    width: 100%!important;
  

}
.date-nav div {
    flex:1!important;
    width: 20.1333vw!important;
    height: 9.6vw!important;
    border-radius: 0.8vw!important;
    line-height: 9.6vw!important;
    text-align: center!important;
    margin-top: 4.2667vw!important;
    font-size: 3.4667vw!important;
    color: #3d3d3d!important;
    border: 1px solid #e7e7e7!important;
    background: #fff!important;
    margin: 0 1.9vw!important;
}

.card div:nth-child(1){
    background-color:#BDC0BA!important;
    padding-bottom:0!important;
}
.card div:nth-child(3) div ,.card div:nth-child(2) div{
    height: 35px!important;
    width: 35px!important;
}

.wh_content_all[data-v-2ebcbc83]{
 background: #fff!important;

}
.wh_content_item[data-v-2ebcbc83]{
color :#000!important;
}
/*今天*/
.wh_content_item .wh_isToday[data-v-2ebcbc83]{
    background-color:rgba(255,18,104,.2)!important;
    color: #ff1268!important;
}
/*日历点击*/
.wh_content_item .wh_chose_day[data-v-2ebcbc83]{
     background-color:transparent!important; 
}
/*日历划过*/
.wh_item_date[data-v-2ebcbc83]:hover{
    background-color:rgba(255,18,104,.2)!important;
    color: #ff1268!important;

     /* color :#000
} */
}
.wh_top_changge li[data-v-2ebcbc83]{
    color: #000!important;
}
.wh_jiantou1[data-v-2ebcbc83] {

    border-top: 2px solid #ccc!important;
    border-left: 2px solid #ccc!important;
    width: 6px!important;
    height: 6px!important;
}
.wh_jiantou2[data-v-2ebcbc83] {

    border-top: 2px solid #444!important;
    border-right: 2px solid #444!important;
    width: 6px!important;
    height: 6px!important;
}
.date-nav .date-item-active{
    border: 1px solid #ff1268!important;
}
</style>