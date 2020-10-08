<template>
  <div class="nav-wrapper">
      <div class="middle-nav">
          <router-link :to="`/category/${item.name}`" tag="div" class="nav-item" v-for="(item) in nav" :key="item.count">
              <!-- <div class="nav-item-child"> -->
              <span class="nav-item-icon"></span>
              <p>{{item.show}}</p>
              <!-- </div> -->
          </router-link>
          
          <div class="nav-item">
              <!-- <div class="nav-item-child"> -->
              <span class="nav-item-icon"></span>
              <p>境外</p>
              <!-- </div> -->
          </div>
      </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            nav:[
                {count: 615, name: "演唱会",show:'演唱会'},
                {count: 898, name: "话剧歌剧",show:'话剧歌剧'},
                {count: 1315, name: "音乐会",show:'音乐会'},
                {count: 87, name: "体育",show:'体育'},
                {count: 497, name: "曲苑杂坛",show:'曲苑杂坛'},
                {count: 884, name: "儿童亲子",show:'亲子'},
                {count: 465, name: "展览休闲",show:'展览休闲'},
                ]
        }
    },
}

</script>
<style lang='stylus' scoped>
.nav-wrapper
    padding .18rem .02rem  .09rem .02rem
    background: #fff;
    .middle-nav
        display flex
        flex-wrap wrap
        .nav-item
            width 25% 
            text-align center
            margin 0 0 .1rem
            .nav-item-icon
                display inline-block
                width 8.5vw
                height 8.5vw
                background-size cover
             p
                font-size 3.2vw
        .nav-item:first-child 
            .nav-item-icon
                background-image: url(//img.alicdn.com/tps/i4/TB1egGnRCzqK1RjSZFpwu1kSXXa.png_q80.jpg);
        .nav-item:nth-child(2)
            .nav-item-icon
                background-image: url("//img.alicdn.com/tps/i4/TB1XNKjRrvpK1RjSZPiwu2mwXXa.png_q80.jpg")
        .nav-item:nth-child(3)
            .nav-item-icon
                background-image: url("//img.alicdn.com/tps/i4/TB1LgakRxTpK1RjSZFKwu12wXXa.png_q80.jpg")
        .nav-item:nth-child(4)
            .nav-item-icon
                background-image: url("//img.alicdn.com/tps/i4/TB1iHqlRpYqK1RjSZLewu2XppXa.png_q80.jpg")
        .nav-item:nth-child(5)
            .nav-item-icon
                background-image: url("//img.alicdn.com/tps/i4/TB1gzigRrPpK1RjSZFFwu15PpXa.png_q80.jpg");
        .nav-item:nth-child(6)
            .nav-item-icon
                background-image: url("//img.alicdn.com/tps/i4/TB17wecRzDpK1RjSZFrwu178VXa.png_q80.jpg");
        .nav-item:nth-child(7)
            .nav-item-icon
                background-image: url("//img.alicdn.com/tps/i4/TB1Zw8MRCzqK1RjSZPcwu2TepXa.png_q80.jpg");
        .nav-item:last-child
            .nav-item-icon
                background-image: url("//img.alicdn.com/tps/i4/TB1pLiuRwHqK1RjSZFkwu0.WFXa.png_q80.jpg");
           
</style>