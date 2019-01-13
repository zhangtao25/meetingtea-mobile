<style>
  #lv1-cate-list ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
  }

  #lv1-cate-list ul.list li:nth-child(2n+1) {
    width: 50%;
    padding: 5px 5px 5px 10px;
    box-sizing: border-box;
  }

  #lv1-cate-list ul.list li:nth-child(2n) {
    width: 50%;
    height: 100px;
    padding: 5px 10px 5px 5px;
    box-sizing: border-box;
  }

  #lv1-cate-list ul.list li > div {
    width: 100%;
    height: 100%;
    background-color: white;
  }

</style>
<template>
  <div id="lv1-cate-list">
    <img :src="currentCategory.bannerUrl" width="100%" alt="">
    <div class="container">
      <div class="header"></div>
      <ul class="list" v-if="isRender">
        <li v-for="(item,index) of itemList" :key="index" @click="goToGoodDetail(item)">
          <goods-introduction :item="item"></goods-introduction>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Goods from './../service/goods'
  import GoodsIntroduction from './../components/goods-introduction'
  import {Indicator} from 'mint-ui'

  export default {
    components: {
      'goods-introduction': GoodsIntroduction
    },
    data(){
      return{
        itemList: [],
        isRender: false,
        currentCategory:{}
      }
    },
    mounted() {
      this.init(this.$route.query.categoryId);
    },
    methods:{
      goToGoodDetail(item){
        console.log(item.id)
        this.$router.push({path:'/goods-detail',query:{id:item.id}})
      },
      init(val){
        Indicator.open('加载中...');
        Goods.getLv1CateList(val).then(res => {
          Indicator.close();
          this.isRender=true
          // let arr = [];
          // let categoryItemList = res.data.categoryItemList
          // for (let index in categoryItemList){
          //   for (let i in categoryItemList[index].itemList){
          //     arr.push(categoryItemList[index].itemList[i])
          //   }
          // }
          this.itemList=res.data.categoryItemList[0].itemList
          this.currentCategory = res.data.currentCategory
        })
      }
    },
    watch:{
      '$route.query':function(val) {
        this.init(val.categoryId);
      }
    }
  }
</script>