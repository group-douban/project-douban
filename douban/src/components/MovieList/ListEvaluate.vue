<template>
    <div>
        {{movie.rating.count}}人评价
    </div>
</template>

<script type="text/ecmascript-6">

export default {
   props:{ 
        movie:Object,
        required:true
    },
    /* mounted() {
        console.log(this.movie)
    }, */
   
}
</script>

<style scoped lang="stylus">
@import '~@a/stylus/ellipsis.styl'

div
    //margin-right .16rem
    margin-bottom .23rem
    padding-left .10rem
    //height .43rem
    line-height .43rem
    background-color #f7f7f7
    color #9c9c9c
    font-size .14rem
    //ellipsis()
</style>
