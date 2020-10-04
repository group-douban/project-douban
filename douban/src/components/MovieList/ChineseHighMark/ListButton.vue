<template>
    <div :class="button.cls">
    <!-- <div > -->
        NO.{{index+1}}
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{ 
        index:Number,
        required:true
    },
    prop:['index' /* , 'color' */],
     computed: {
        button() {
            switch(this.index) {
                case 0:
                    return {
                        cls: 'first'
                    }
                case 1: 
                    return {
                        cls: 'second'
                    }
                case 2: 
                    return {
                        cls: 'third'
                    }
                default:
                    return{
                        cls:'other'
                    }
            }
        }
    } 
}
</script>

<style scoped lang="stylus">
div
    //background-color #ffca7c
    width .44rem
    height .24rem
    margin-top .13rem
    margin-bottom  .12rem
    font-size .11rem
    border-radius .07rem
    text-align center
    line-height .24rem
    color #ffffff
    &.first
        background #ff6677
    &.second
        background #fa8c56
    &.third
        background #ffc260 
    &.other
        background #d1cfc9
</style>
