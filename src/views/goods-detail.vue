<style>
  #goods-detail .characteristic-list{
    display: flex;justify-content: space-around;
    padding: .32rem .4rem;
    background-color: #F9F9F9;
  }
  #goods-detail .characteristic-list>li{
    display: flex;
    align-items: center;
  }
  #goods-detail .characteristic-list>li>img{
    width:0.96rem;height:0.96rem;border-radius: 50%;
    margin-right: .16rem;
  }

  #goods-detail .characteristic-list>li p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 1.52rem;
    font-size: .37333rem;
    line-height: .42667rem;
  }
  #goods-detail .characteristic-list>li p:nth-child(1){
    margin-bottom: .1rem;
    margin-top: .2rem;
  }
  #goods-detail .characteristic-list>li p:nth-child(2){
    margin-bottom: .2rem;
    margin-top: .1rem;
  }
  #goods-detail>ul.btn{
    display: flex;
    position: fixed;
    bottom: 0;
  }
  #goods-detail>ul.btn>li.kefu{
    width:2rem;
    height: 1.28rem;
    background-image: url("./../assets/images/kefu.png");
    background-repeat: no-repeat;
    background-position: center;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    /*opacity: .3;*/
  }
  #goods-detail>ul.btn>li.buy{
    width: 4rem;
    text-align: center;
    line-height: 1.28rem;
    font-size: .37333rem;
    height: 1.28rem;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
  #goods-detail>ul.btn>li.add-buycar{
    width: 4rem;
    text-align: center;
    line-height: 1.28rem;
    font-size: .37333rem;
    color: white;
    background-color: #b4282d;
    height: 1.28rem;
  }
</style>
<template>
  <div id="goods-detail">
    <header-nav></header-nav>
    <div v-if="test">
      <mt-swipe :auto="4000" style="height: 100vw;width: 100%">
        <mt-swipe-item v-for="(item, key, index) of detailData.itemDetail" :key="index" v-if="fn(key,item)">
          <img style="width: 100%" :src="fn(key,item)" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <ul class="characteristic-list">
        <li v-for="(item,index) of detailData.characteristicList">
          <img :src="item.picUrl" alt="">
          <div>
            <p>{{item.simpleDescList[0]}}</p>
            <p>{{item.simpleDescList[1]}}</p>
          </div>
        </li>
      </ul>
      <goods-detail-content :detail-data="detailData"></goods-detail-content>
    </div>
    <ul class="btn">
      <li class="kefu"></li>
      <li class="buy">立即购买</li>
      <li class="add-buycar">加入购物车</li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  import HeaderNav from './../components/header-nav'
  import GoodsDetailContent from './goods-detail/goods-detail-content'
  import Goods from './../service/goods'
  export default {
    components:{
      'header-nav': HeaderNav,
      'goods-detail-content': GoodsDetailContent
    },
    data(){
      return{
        test:false,
        detailData:{}
      }
    },
    mounted(){
      Goods.getGoodsDetail(this.$route.query.id).then(res=>{
        this.test=true
        this.detailData=res.data
      })
    },
    methods:{
      fn(val,item){
        if (val.slice(0,6) == 'picUrl'){
          return item
        }
      }
    }
  }
</script>