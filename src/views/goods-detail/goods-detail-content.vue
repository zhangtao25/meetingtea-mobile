<style>
  #goods-detail-content{
    padding-left: .4rem;
  }
  #goods-detail-content .price{
    margin-top: .1rem;
  }
  #goods-detail-content .price>span:nth-child(1){
    color: #B4282D;
    font-family: PingFang-SC-Bold;
    font-size: .72rem;
    font-weight: 700;
  }
  #goods-detail-content .price>span:nth-child(2){
    color: #999;
    margin-left: .10667rem;
    font-size: .37333rem;
    text-decoration:line-through
  }
  #goods-detail-content .tag{
    border: 1px solid #B4282D;
    color: #B4282D;
    display: inline-block;
    margin: .1rem 0 .1rem 0;
  }
  #goods-detail-content>.b{
    display: flex;
    justify-content: space-between;
  }
  #goods-detail-content>.b .name{
    font-size: .42667rem;
    margin-bottom: .02667rem;
    font-family: PingFangSC-Regular;
  }
  #goods-detail-content>.b .simple-desc{
    font-size: .32rem;
    line-height: .48rem;
    color: #7f7f7f;
  }
  #goods-detail-content>.b .comment{
    border-left: 1px dashed #919191;
    padding: 0 .4rem;
  }
  #goods-detail-content>.b .comment>p{
    display: flex;
    flex-direction: column;
  }
  #goods-detail-content>.b .comment>p>span:nth-child(1){
    font-weight: 700;
    font-size: .42667rem;
    line-height: .6rem;
    color: #B4282D;
    text-align: center;
  }
  #goods-detail-content>.b .comment>p>span:nth-child(2){
    line-height: .48rem;
    font-size: .32rem;
    color: #7F7F7F;
  }
</style>
<template>
  <div id="goods-detail-content">
    <p class="price">
      <span>￥{{detailData.retailPrice}}</span>
      <span>￥{{detailData.primarySkuPreSellPrice}}</span>
    </p>
    <p class="tag" v-if="detailData.itemTagList.length>0">{{detailData.itemTagList[0].name}}</p>
    <div class="b">
      <div>
        <p class="name">{{detailData.name}}</p>
        <p class="simple-desc">{{detailData.simpleDesc}}</p>
      </div>
      <div class="comment">
        <p>
          <span>{{detailData.commentCount}}</span>
          <span>用户评论</span>

        </p>
        <i></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['detailData']
  }
</script>