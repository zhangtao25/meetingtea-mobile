<style>
  #lv1-category{
    background-color: rgb(244,244,244);
  }
</style>
<template>
  <div id="lv1-category">
    <lv1-category-swipe :title-img-src="titleImgSrc" :swipe-img-srcs="swipeImgSrcs"></lv1-category-swipe>
    <category-nav></category-nav>
  </div>
</template>
<script>
  import Lv1CategorySwipe from './lv1-category/lv1-category-swipe'
  import CategoryNav from './lv1-category/category-nav'
  export default {
    components:{
      'lv1-category-swipe': Lv1CategorySwipe,
      'category-nav': CategoryNav
    },
    data(){
      return{
        titleImgSrc:'https://img.youpin.mi-img.com/jianyu/b8484df5dd41304923dfbf052d5e3a02.png@base@tag=imgScale&F=webp',
        swipeImgSrcs:[
          {imgSrc:'https://img.youpin.mi-img.com/jianyu/7419a562ec5f151e643ff1d157d04c73.jpg@base@tag=imgScale&F=webp'},
          {imgSrc:'https://img.youpin.mi-img.com/jianyu/82eb8119ad5457ed457f5d9edbe251d9.jpg@base@tag=imgScale&F=webp'},
          {imgSrc:'https://img.youpin.mi-img.com/jianyu/cac32011c1b6b4be57a413c5258952b9.jpg@base@tag=imgScale&F=webp'},
          {imgSrc:'https://img.youpin.mi-img.com/jianyu/d807084f78df18498f8aea2fda9a968d.jpg@base@tag=imgScale&F=webp'},
          {imgSrc:'https://img.youpin.mi-img.com/jianyu/f81230fed7d9f59927610a50e3e908dd.jpg@base@tag=imgScale&F=webp'},
        ]
      }
    }
  }
</script>