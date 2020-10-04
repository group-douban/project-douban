<template>
    <div>
        这是热映
         <van-tabbar 
       v-model="active"
       :safe-area-inset-bottom='true'
       :fixed='true'
        active-color="#42bd56" 
        inactive-color="#000"
       >
        <van-tabbar-item to="/home"  >
            <span>首页</span>
            <template #icon="props"> 
               <!--  <img :src="props.active ? icon.active : icon.inactive" /> -->
                <i class="yo-ico">
                        &#xe629;
                </i>
            </template>
        </van-tabbar-item>
       <van-tabbar-item   to="/movieList" >
            <span>榜单</span>
            <template #icon="props"> 
                <i class="yo-ico">
                        &#xe610;
                </i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item  to="/cinemaHot" >
            <span>我的</span>
            <template #icon="props"> 
               <i class="yo-ico">
                        &#xe503;
                </i>
            </template>
        </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default{
    data(){
        return {
            active:2,
           /*  icon: {
                active: 'https://img.yzcdn.cn/vant/user-active.png',
                inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
            }, */
        }
    }
}
</script>

<style lang="stylus"></style>