<template>
  <div class="every-wrapper">
      <ul>
          <li v-for="(item, index) in map" :key="index">
              <span class="active" v-if="item.name==currEverys">{{item.name}}</span>
              <span @click.prevent="handleChanges1(item.name)" v-else>{{item.name}}</span>
            </li>
      </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:['currEvery'],
    data() {
        return {
            map:[
                {count: 0,name: "全部分类"},
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
        }
    },
    computed: {
        currEverys(){
            return this.currEvery?this.currEvery:'全部分类'
        }
    }, 
    mounted() {
        let bScroll = new BScroll('.every-wrapper',{
            click:true,
            bounce: false
        })
    },
    methods: {
        handleChanges1(text){
          
            this.$store.commit('setcurrEvery',text)
        }
    },
}

</script>
<style lang='stylus'>
.every-wrapper
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