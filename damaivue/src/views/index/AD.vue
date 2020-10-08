<template>
  <div class="AD-wrapper" v-if="adAddress.length > 0 ">
      <div class="AD-item">
          <img :src="adAddress[0]" alt="">
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            adAddress:[
            //    "//img.alicdn.com/tps/i4/TB1SUyCmpT7gK0jSZFpwu1TkpXa.png_q60.jpg_.webp"
            ]
        }
    },
}

</script>
<style lang='stylus'>
.AD-item
    width 100vw
    background #fff
    img 
        width 100%
    
</style>