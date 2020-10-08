<template>
  <div class="detail-main-wrapper">
      <DetailItem></DetailItem>
      <div class="detail-footer">
          <router-link to="/index" tag="div" class="detail-footer-item1"> 
            <svg t="1573997505770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1732" width="5.3vw" height="5.3vw"><path d="M362.666667 895.914667V639.850667c0-36.266667 33.109333-63.850667 72.533333-63.850667h153.6c39.253333 0 72.533333 27.648 72.533333 63.850667v256.064h59.904c61.269333 0 110.762667-47.957333 110.762667-106.730667V414.165333L557.162667 139.328a63.808 63.808 0 0 0-90.325334 0L192 414.165333v375.018667c0 58.88 49.386667 106.730667 110.762667 106.730667H362.666667z m42.666666 0h213.333334V639.850667c0-10.709333-12.586667-21.184-29.866667-21.184h-153.6c-17.408 0-29.866667 10.389333-29.866667 21.184v256.064z m469.333334-439.082667v332.352c0 82.645333-68.885333 149.397333-153.429334 149.397333H302.762667C218.133333 938.581333 149.333333 871.936 149.333333 789.184V456.832l-27.584 27.584a21.333333 21.333333 0 1 1-30.165333-30.165333L436.672 109.162667a106.474667 106.474667 0 0 1 150.656 0l345.088 345.088a21.333333 21.333333 0 0 1-30.165333 30.165333L874.666667 456.832z" p-id="1733"></path>
            </svg>
           <p> 大麦首页</p>
          </router-link >
          <div class="detail-footer-item2"> 
<svg t="1573997610477" class="icon" viewBox="0 0 1179 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1865" width="5.3vw" height="5.3vw"><path d="M142.31918 540.267127l350.13559 373.653781c54.296613 63.852817 139.806023 63.883844 195.033436-1.054906l362.204951-388.670672c42.661625-48.866952 65.466202-112.130263 65.466203-182.902021a279.239726 279.239726 0 0 0-501.018122-169.653647 30.99561 30.99561 0 0 1-25.534922 12.131415 30.99561 30.99561 0 0 1-25.503895-12.131415A279.239726 279.239726 0 0 0 62.053272 341.293309c0 72.850542 28.792718 144.242832 77.411458 195.498835 1.054906 1.116959 1.985705 2.264944 2.85445 3.474983z m-54.606879 31.926409A349.732244 349.732244 0 0 1 0 341.293309C0 152.806494 152.806184 0.00031 341.292999 0.00031c95.065613 0 183.708713 39.155615 247.313317 106.111096A340.486306 340.486306 0 0 1 835.95066 0.00031c188.486815 0 341.292999 152.806184 341.292999 341.292999 0 80.793361-25.069522 154.636755-72.198982 213.463257-1.147986 1.923651-2.482131 3.754223-4.095516 5.491715l-5.181449 5.553768c-2.699317 3.071637-5.491715 6.112247-8.315138 9.090804-0.620533 0.620533-1.210039 1.241065-1.861598 1.799545L733.810974 954.069375c-79.055869 93.048882-209.553901 93.017855-287.616918 1.147985L90.783938 576.040839a31.243823 31.243823 0 0 1-3.102664-3.847303z" p-id="1866"></path></svg>
           <p> 想看</p>
          </div>
          <div class="detail-footer-item3"> 
<svg t="1573997646595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2132" width="5.3vw" height="5.3vw"><path d="M704 192a106.666667 106.666667 0 0 1 106.666667 106.666667v469.333333a106.666667 106.666667 0 0 1-106.666667 106.666667H320a106.666667 106.666667 0 0 1-106.666667-106.666667V298.666667a106.666667 106.666667 0 0 1 106.666667-106.666667 21.333333 21.333333 0 1 0 0-42.666667 149.333333 149.333333 0 0 0-149.333333 149.333334v469.333333a149.333333 149.333333 0 0 0 149.333333 149.333333h384a149.333333 149.333333 0 0 0 149.333333-149.333333V298.666667a149.333333 149.333333 0 0 0-149.333333-149.333334 21.333333 21.333333 0 0 0 0 42.666667z" p-id="2133"></path><path d="M320 554.666667a21.333333 21.333333 0 0 1 0-42.666667h384a21.333333 21.333333 0 0 1 0 42.666667H320z m0-128a21.333333 21.333333 0 0 1 0-42.666667h384a21.333333 21.333333 0 0 1 0 42.666667H320z m0 256a21.333333 21.333333 0 0 1 0-42.666667h384a21.333333 21.333333 0 0 1 0 42.666667H320zM405.333333 192h213.333334a21.333333 21.333333 0 0 0 0-42.666667H405.333333a21.333333 21.333333 0 0 0 0 42.666667z" p-id="2134"></path></svg>
           <p> 我的订单</p>
          </div>
          <div class="detail-footer-item4">
              <div class="unbuy__button">
              </div>
           <p class="buy-button"> 立即购买 </p>
          </div>
      </div>
  </div>
</template>

<script>

import DetailItem from 'views/detail/Detail-item.vue'
export default {
  components:{
    DetailItem
  }

};
</script>
<style lang='stylus'>
.detail-main-wrapper
  display flex
  flex-direction column
  .wai-detail
    flex 1
  .detail-footer
    background #fff
    display flex
    height 16vw
    div
      text-align center
    .detail-footer-item1
      display flex
      flex-direction column
      justify-content center
      align-items center
      flex 101
      font-size: 2.4vw;
    .detail-footer-item2
      display flex
      flex-direction column
      justify-content center
      align-items center
      flex 101
      font-size: 2.4vw;
    .detail-footer-item3
      display flex
      flex-direction column
      justify-content center
      align-items center
      flex 101
      font-size: 2.4vw;
    .detail-footer-item4
      flex 407
      display flex
      justify-content center
      align-items center
      .buy-button
        width 90%
        height 11.6vw
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
        color: #fff;
        font-size: 4vw;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        border-radius: 5.8667vw 5.8667vw 5.8667vw 0.5333vw;
        background-image: -webkit-linear-gradient(left,#ff3299 1%,#ff4a72);
        background-image: linear-gradient(90deg,#ff3299 1%,#ff4a72)

</style>