<template>
  <div class="wai-detail">
        <div class="detail-wrapper">
      <div  class="detail-top">
          <div class="imageBlur" :style="`background-image:url(${detail.verticalPic})`"> </div>
          <div class="container">
            <div class="img-ifram">
            <img :src="detail.verticalPic" alt="">
            <div class="agent-tag">总票代</div>
            </div>
            <div class="img-right">
              <p class="detail-title" >
                【{{detail.venuecity}}】{{detail.nameNoHtml}}
              </p>
              <span class="detail-price">
                ¥{{detail.price}} - ¥{{detail.pricehigh}}
              </span>
            </div>
          </div>

      </div>
      <div class="service-bar">
        <div  class="service-item">
          <div  class="service-lable">服务</div> 
          <div  class="service-content">不支持退 · 不支持选座 · 电子票 · 纸质发票</div> 
          <i> <svg t="1574035649476" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1732" width="2.933vw" height="2.933vw"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" p-id="1733"></path></svg></i>
        </div>
      </div>
      <div class="detail-time-info">
        <div class="left">
     
            <div class="time">
              <span class="time-str">{{detail.showtime}}<i>
                <svg t="1574035649476" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1732" width="2.933vw" height="2.933vw"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" p-id="1733"></path></svg>
                </i></span> 
              <i class="iconfont icon-jiantouyou icon-arrow"></i>
            </div>
            <div class="time-desc single-line">
             活动时长逢周一闭馆（节假日除外），周二-周日10:00-22:00（21:00停止验票）
            </div>
          </div>  
     

      </div>
      <div class="detail-time-info">
        <div class="left">
          <div>
            <div class="time">
              <span class="time-str">{{detail.venuecity}} | {{detail.venue}}</span> 
              <i class="iconfont icon-jiantouyou icon-arrow"></i>
            </div>
            <div class="time-desc single-line2">
             上海市普陀区中山北路3300号
            </div>
          </div>
        </div> 
              <i><svg t="1574036599799" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1865" width="3.933vw" height="3.933vw"><path d="M511.449009 213.858462a179.278769 179.278769 0 1 1 0 358.557538 179.278769 179.278769 0 0 1 0-358.557538z m393.294769 179.357538A393.294769 393.294769 0 1 0 182.036086 608.098462l294.203077 392.270769a39.384615 39.384615 0 0 0 70.498462 0l294.754461-392.270769c39.699692-61.912615 63.251692-135.483077 63.251692-214.882462z" p-id="1866"></path></svg></i>
      </div>
      </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
        detail:{}
    }
  },
  beforeMount() {
    this.detail = this.$store.state.TheDetail
  }
}

</script>
<style lang='stylus'>
.detail-wrapper
  width 100vw
  .detail-top    
    display flex
    box-sizing border-box
    padding 4.8vw 3.5vw 
    width 100vw
    height 52.2vw
    background-color #ccc
    background-size 100%
    position relative
    .imageBlur
      width 100vw
      height calc(52.2vw - 4.8vw)
      filter blur(25px)
    .container
      position absolute
      z-index 100
      width  calc(100% - 7vw)
      display flex
      .img-ifram
        position relative
        .agent-tag
          position: absolute;
          right: 0.8vw;
          top: 0.8vw;
          padding: 0 0.5333vw;
          display: inline-block;
          border-radius: 1.0667vw;
          font-size: 2.6667vw;
          line-height: 4.2667vw;
          height: 4.2667vw;
          color: #fff;
          opacity: .8;
          background-image: linear-gradient(90deg,#333,#000 80%);
        img 
          width 31.6vw
          height 42.666vw
      .img-right
        display flex
        margin-left 3.5vw
        flex 1
        position relative
        p
        color #fff
        font-size: 4.2667vw;
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-height: 5.3333vw;
        span 
          position absolute
          bottom 0
          left  0
  .service-bar
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    position: relative;
    z-index: 1;
    height: 9.8667vw;
    background-color: #f8f8f8;
    border-top-left-radius: 1.3333vw;
    border-top-right-radius: 1.3333vw;
    margin-top: -1.0667vw;
    .service-item
      padding-left: 4vw;
      padding-right: 4vw;
      width 100%
      display flex
      box-sizing border-box
      flex 1
      justify-content space-between
      .service-lable
        display inline
        color: #ff2d79;
        padding-right: 1.3333vw
        font-size: 3.4667vw
      .service-content
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        margin-right: 1.3333vw;
        font-size: 3.4667vw;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        i 
          font-family '宋体'
  .detail-time-info
    display: flex;
    -webkit-box-direction: normal;
    min-height: 1.73333vw;
    position: relative;
    -webkit-box-orient: horizontal;
    background-color: #fff;
    padding-left: 4vw;
    padding-right: 4vw;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    .left
      display: flex;
      flex-direction column
      .time
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
        font-size: 4.2667vw;
        line-height: 4.2667vw;
        color: #000;
        font-weight: 700;
        margin-top: 4.8vw;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        i 
          margin-left 1.933vw
      .single-line
        overflow: hidden;
        height: 3.4667vw;
        font-size: 3.4667vw;
        color: #999;
        width 92vw
        margin-top: 2.4vw;
        margin-bottom: 4.8vw;
        line-height: 3.4667vw
        text-overflow: ellipsis
        white-space: nowrap
      .single-line2
        overflow: hidden;
        height: 3.4667vw;
        font-size: 3.4667vw;
        color: #999;
        width 82vw
        margin-top: 2.4vw;
        margin-bottom: 4.8vw;
        line-height: 3.4667vw
        text-overflow: ellipsis
        white-space: nowrap
</style>