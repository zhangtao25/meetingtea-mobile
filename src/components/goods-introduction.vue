<style>
  .goods-introduction .img-wrap {
    background-color: rgb(242, 242, 242);
  }

  .goods-introduction img {
    width: 100%;
  }

  .goods-introduction > .desc {
    background: #F1ECE2;
    border-radius: 0 0 .05333rem .05333rem;
    font-size: .32rem;
    color: #9F8A60;
    line-height: .48rem;
    padding: .08rem .13333rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .goods-introduction > .good-name {
    margin-top: .21333rem;
    line-height: .53333rem;
    font-size: .37333rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
  }

  .goods-introduction > .price > span:nth-child(1) {
    font-size: .42667rem;
    line-height: .64rem;
    color: #b4282d;
  }

  .goods-introduction > .price > span:nth-child(2) {
    margin-left: .10667rem;
    font-size: .32rem;
    color: #999;
    line-height: .48rem;
    text-decoration: line-through;
    font-family: PingFangSC-Light;
  }

  .goods-introduction > .promotional-labels {
    margin-bottom: .06667rem;
    padding: 0 .10667rem;
    line-height: .37333rem;
    color: #B4282D;
    background: rgba(255, 255, 255, .9);
    border: 1px solid #B4282D;
    border-radius: .02667rem;
    height: 1rem;
  }
</style>
<template>
  <div class="goods-introduction">
      <div class="img-wrap">
        <img
          :src="item.listPicUrl"
          alt="">
      </div>
      <p class="desc">{{item.simpleDesc}}</p>
      <p class="good-name">{{item.name}}</p>
      <p class="price">
        <span>￥{{item.retailPrice}}</span>
      </p>
      <span class="promotional-labels" v-for="(item1,index) of item.itemTagList" :key="index">{{item1.name}}</span>
      <span class="promotional-labels" style="opacity: 0"></span>
  </div>
</template>
<script>
  export default {
    props:['item']
  }
</script>