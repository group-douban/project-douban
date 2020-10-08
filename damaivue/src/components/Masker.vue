<template>
  <div class="Nav-Masker" v-if="showMasker" @click="handleClose">
    
  </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    computed: {
        showMasker(){
            return this.$store.state.showMasker
        }
    },
    methods: {
        handleClose(){
            this.$store.commit('setMsker',false)
        }
    },
}

</script>
<style lang='stylus'>
.Nav-Masker
    width 100vw
    height 100vh
    background rgba(0,0,0,.6)
    position absolute
    top 0
    left 0
    z-index 99999
</style>