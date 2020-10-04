<template>
    <div>
        这是榜单
    </div>
   
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 2,
    };
  },
};
</script>

<style lang="stylus">

</style>