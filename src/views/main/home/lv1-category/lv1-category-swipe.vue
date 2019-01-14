<style>
  .lv1-category-swipe {
    position: relative;
    width: 100%;
  }

  .lv1-category-swipe .wrap {
    height: 1rem;
  }

  .lv1-category-swipe img {
    display: block;
    width: 100%;
  }

  .lv1-category-swipe .swiper-container {
    width: 100%;
    background-color: white;
  }

  .lv1-category-swipe .swiper-slide {
    width: 100%;
    border-radius: .1rem;
    overflow: hidden;
  }

  .lv1-category-swipe .swiper-pagination-bullet {
    background-color: white;
    border-radius: 0;
    height: .07rem;
    width: .2rem;
  }

  .lv1-category-swipe .swiper-pagination-bullet-active {
    height: .2rem;
    transition: .4s;
  }
</style>
<template>
  <div class="lv1-category-swipe">
    <div class="wrap">
      <img :src="titleImgSrc" alt="">
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) of swipeImgSrcs" :key="index">
          <img :src="item.imgSrc" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'

  export default {
    mounted() {
      this.initSwiper();
    },
    props: ["titleImgSrc", "swipeImgSrcs"],
    methods: {
      initSwiper() {
        let mySwiper = new Swiper('.lv1-category-swipe .swiper-container', {
          autoplay: {
            disableOnInteraction: false,
          },
          effect: 'coverflow',
          slidesPerView: 1.1,
          centeredSlides: true,
          loop: true,
          coverflowEffect: {
            rotate: 0,
            stretch: -12,
            depth: 60,
            modifier: 2,
            slideShadows: false
          },
          pagination: {
            el: '.lv1-category-swipe .swiper-pagination',
          },
        })
      }
    }
  }
</script>