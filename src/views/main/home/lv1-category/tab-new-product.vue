<style>
  .tab-new-product {
    margin-top: .3rem;
    padding: .3rem;
    background-color: white;
  }

  .tab-new-product > div.content0 {
    width: 100%;
    display: flex;
  }

  .tab-new-product > div.content0 > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.1rem;

  }

  .tab-new-product > div.content0 > .wrap {
    margin-left: .3rem;
  }

  .tab-new-product .name {
    font-size: .4rem;
  }

  .tab-new-product .summary {
    color: rgb(153, 153, 153);
    font-size: .3rem;
  }

  .tab-new-product .price_min {
    color: rgb(169, 33, 18);
    font-size: .5rem;
    margin-top: .3rem;
  }

  .tab-new-product > .content1 {
    display: flex;
    margin-top: .4rem;
  }

  .tab-new-product > .content1 > li {
    padding-right: .2rem;

  }

  .tab-new-product > .content1 > li > p {
    text-align: center;
  }

  .tab-new-product > .content1 > li:nth-child(3) {
    padding-right: 0;
  }

  .tab-new-product > .content1 > li > img {
    width: 100%;
    border-radius: 0.1rem;
  }
</style>
<template>
  <div class="tab-new-product">
    <common-title :title="newProductData.title"></common-title>
    <div class="content0">
      <img :src="newProductData.result.goods_list[0].img_square" alt="">
      <div class="wrap">
        <p class="name">{{newProductData.result.goods_list[0].name}}</p>
        <p class="summary">{{newProductData.result.goods_list[0].summary}}</p>
        <p class="price_min">￥{{newProductData.result.goods_list[0].price_min/100}}</p>
      </div>
    </div>
    <ul class="content1">
      <li v-for="(item,index) of newProductData.result.goods_list" :key="index" v-if="index ==1||index ==2||index ==3">
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
    components: {
      'common-title': CommonTitle
    },
    props: ['newProductData']
  }
</script>