<template>

    <div class="all-wrapper" >
        <nav>
            <div>
                <router-link to="/city" tag="span">
                <svg
                    t="1573703927504"
                    class="icon icon_city"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1767"
                    width="4.2vw"
                    height="4.2vw"
                    >
                    <path
                    d="M511.449009 213.858462a179.278769 179.278769 0 1 1 0 358.557538 179.278769 179.278769 0 0 1 0-358.557538z m393.294769 179.357538A393.294769 393.294769 0 1 0 182.036086 608.098462l294.203077 392.270769a39.384615 39.384615 0 0 0 70.498462 0l294.754461-392.270769c39.699692-61.912615 63.251692-135.483077 63.251692-214.882462z"
                    p-id="1768"
                    />
                </svg>
       
              {{currCity}}
                </router-link>
            </div>
            <div>
                <router-link to="/search" tag="span" class="search">
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
                搜索明星、演出比赛、场馆
                </router-link>
            </div>
            <div>
                <span>
                <svg
                    t="1573704097634"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2157"
                    width="6.4vw"
                    height="6.4vw"
                    >
                    <path
                    d="M512 563.2c-127.9744 0-230.4-115.2512-230.4-256s102.4256-256 230.4-256 230.4 115.2512 230.4 256-102.4256 256-230.4 256z m0-51.2c98.2528 0 179.2-91.0592 179.2-204.8s-80.9472-204.8-179.2-204.8-179.2 91.0592-179.2 204.8 80.9472 204.8 179.2 204.8zM128 793.6a179.2 179.2 0 0 1 179.3792-179.2h409.2416C815.6416 614.4 896 694.7328 896 793.6a179.2 179.2 0 0 1-179.3792 179.2H307.3792C208.3584 972.8 128 892.4672 128 793.6z m51.2 0c0 70.5792 57.4464 128 128.1792 128h409.2416A128 128 0 0 0 844.8 793.6c0-70.5792-57.4464-128-128.1792-128H307.3792A128 128 0 0 0 179.2 793.6z"
                    p-id="2158"
                    />
                </svg>
                </span>
            </div>
        </nav>
        <Msker></Msker>
        <ActiveNav></ActiveNav>
         <Content></Content>

       
    </div>
    
</template>

<script>

import Content from 'views/index/Content.vue'
import ActiveNav from 'views/index/ActiveNav.vue'
import Msker from 'components/Masker.vue'
export default {
    data() {
        return {
            currCity:''
        }
    },
    beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  this.$store.commit('setcurrDate','全部时间')
    this.$store.commit('setcurrEvery','全部分类')


    next()
    },
    components:{
        Content,
        ActiveNav,
        Msker
    },
    mounted() {
        this.currCity=this.$store.state.currCity
    },
}

</script>
<style lang='stylus'>
.all-wrapper
  height 100%
  overflow hidden
  nav 
    display: flex;
    font-size: 4.266vw;
    height: 13.3vw;
    align-items: center;
    background-color: #f5f5f5;
    >div 
      text-align: center;
      .icon 
        position: relative;
        top: .533vw;
    >div:first-child 
      flex: 177;
    >div:nth-child(2) 
      text-align: left;
      flex: 465;
      font-size: 3.7333vw;
      svg 
        margin-right: 0.05rem;
      .search 
        padding-left: 4vw;
        display: block;
        height:7.4666vw;
        line-height: 7.4666vw;
        border-radius: 3.666vw;
        background: #fff;
        color: #999;
    >div:last-child 
      flex: 108

</style>