<template>

  <div class="index_wraper">
         <!-- <keep-alive>
            <router-view></router-view>
         </keep-alive> -->
          <router-view></router-view>
  </div>
</template>

<script>
export default {
  updated() {
     this.$store.commit('setCalenderOff')
     
  }
}

</script>
<style lang='stylus'>
  .index_wraper
    height 100%
    display flex
</style>