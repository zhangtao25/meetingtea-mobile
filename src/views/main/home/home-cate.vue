<style>
  #goods-list ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
  }

  #goods-list ul.list li:nth-child(2n+1) {
    width: 50%;
    padding: 5px 5px 5px 10px;
    box-sizing: border-box;
  }

  #goods-list ul.list li:nth-child(2n) {
    width: 50%;
    height: 100px;
    padding: 5px 10px 5px 5px;
    box-sizing: border-box;
  }

  #goods-list ul.list li > div {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  #goods-list ul.list li > div.wrap .img-wrap {
    background-color: rgb(242, 242, 242);
  }

  #goods-list ul.list li > div.wrap img {
    width: 100%;
  }

  #goods-list ul.list li > div.wrap > .desc {
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

  #goods-list ul.list li > div.wrap > .good-name {
    margin-top: .21333rem;
    line-height: .53333rem;
    font-size: .37333rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
  }

  #goods-list ul.list li > div.wrap > .price > span:nth-child(1) {
    font-size: .42667rem;
    line-height: .64rem;
    color: #b4282d;
  }

  #goods-list ul.list li > div.wrap > .price > span:nth-child(2) {
    margin-left: .10667rem;
    font-size: .32rem;
    color: #999;
    line-height: .48rem;
    text-decoration: line-through;
    font-family: PingFangSC-Light;
  }

  #goods-list ul.list li > div.wrap > .promotional-labels {
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
  <div id="goods-list">
    <!--<header-nav></header-nav>-->
    <img :src="currentCategory.bannerUrl" width="100%" alt="">
    <div class="container">
      <div class="header"></div>
      <ul class="list" v-if="test">
        <li v-for="(item,index) of itemList" :key="index" @click="fn(item)">
          <div class="wrap">
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
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import HeaderNav from './../../../components/header-nav'
  import axios from 'axios'

  export default {
    components: {
      'header-nav': HeaderNav
    },
    data(){
      return{
        itemList: [],
        test: false,
        currentCategory:{}
      }
    },
    mounted() {
    },
    methods:{
      fn(item){
        console.log(item.id)
        this.$router.push({path:'/goods-detail',query:{id:item.id}})
      }
    },
    watch:{
      '$route.query':function (val) {
        axios.get('http://101.132.46.146:3030/mobile-goods/list-test', {
          params: {
            categoryId: val.categoryId
          }
        }).then(res => {
          this.test=true
          this.itemList=res.data.categoryItemList[0].itemList
          this.currentCategory = res.data.currentCategory
        })
      }
    }
  }
</script>