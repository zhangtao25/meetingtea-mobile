<style>
  .tab-rankings{
    margin-top: .3rem;
    padding: .3rem;
    background-color: white;
  }
  .tab-rankings>.content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .tab-rankings>.content>li{
    width: 32%;
  }
  .tab-rankings>.content>li:nth-child(3){
  }
  .tab-rankings>.content>li>img{
    width: 100%;
  }
  .tab-rankings .name{
    font-size: .4rem;
  }
  .tab-rankings .price_min{
    color: rgb(169, 33, 18);
    font-size: .5rem;
    margin-top: .3rem;
  }
</style>
<template>
  <div class="tab-rankings">
    <common-title :title="rankingsData.title">
    </common-title>
    <ul class="content">
      <li v-for="(item,index) of rankingsData.result.goods_list"
          :key="index"
          v-if="index ==0||index ==1||index ==2||index ==3||index ==4||index ==5">
        <img :src="item.img_square" alt="">
        <p class="name">{{item.name}}</p>
        <p class="price_min">￥{{item.price_min/100}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import CommonTitle from './../../../../components/common-title'
  export default {
    components:{
      'common-title': CommonTitle
    },
    props:['rankingsData']
  }
</script>