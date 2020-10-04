<template>
    <!-- <div :class="button.cls"> -->
    <div >
        NO.{{index+1}}
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{ 
        index:Number,
        required:true
    },
    //prop:['index' , 'color'],
    /* computed: {
        button() {
            switch(this.color) {
                case primary_color_dark:
                    return {
                        cls: 'bad-sale'
                    }
                case primary_color_light: 
                    return {
                        cls: 'primary-sale'
                    }
                case secondary_color: 
                    return {
                        cls: 'secondary-sale'
                    }
            }
        }
    } */
}
</script>

<style scoped lang="stylus">
div
    background-color #ffca7c
    width .44rem
    height .24rem
    margin-top .13rem
    margin-bottom  .12rem
    font-size .11rem
    border-radius .07rem
    text-align center
    line-height .24rem
    color #9e6102
   /*  &.bad-sale
        background #7f7f7e
    &.primary-sale 
        background #a5a5a4 
    &.secondary-sale
        background #f9f9f4 */
</style>
