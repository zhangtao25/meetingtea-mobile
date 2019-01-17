<style>
  .home-recommend-nav {
    position: relative;
  }

  .home-recommend-nav .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #ffecdd;
  }

  .home-recommend-nav li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
  }

  .home-recommend-nav li img {
    width: 1.46667rem;
    height: 1.46667rem;
  }

  .home-recommend-nav li span {
    font-size: .32rem;
  }

  .home-recommend-nav .swiper-container {
    width: 100%;
    height: 4.93333rem;
  }

  .home-recommend-nav .swiper-container .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .home-recommend-nav .swiper-container img {
    width: 100%;
  }
</style>
<template>
  <div class="home-recommend-nav">
    <!-- Swiper -->
    <div class="swiper-container home-recommend-nav-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) of swiperData" :key="index">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <ul class="nav">
      <li v-for="(item,index) of navData.kingKongList" :key="index" @click="onClickNav(index)">
        <img :src="item.picUrl" alt="">
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import Swiper from 'swiper'

  export default {
    data() {
      return {
        swiperData: [],
        navData: []
      }
    },
    mounted() {
      axios.get('./home-recommend.json').then(res => {
        this.navData = res.data.kingKongModule
        this.swiperData = res.data.focusList

        setTimeout(() => {
          this.initSwiper()
        }, 100)
      })

    },
    methods: {
      initSwiper() {
        var swiper = new Swiper('.home-recommend-nav-swiper', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        });
      },
      onClickNav(index) {
        console.log(index)
      }
    }
  }
</script>