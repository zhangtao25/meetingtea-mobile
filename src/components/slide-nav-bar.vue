<style>
  .slide-nav-bar {
    width: 100%;
    position: relative;
  }

  .slide-nav-bar .swiper-container {
    width: 100%;
    height: 100%;
  }

  .slide-nav-bar .swiper-slide {
    text-align: center;
    font-size: .37333rem;
    background: #fff;
    line-height: .8rem;
    color: #333;
    width: 50px;
    border-bottom: .05333rem solid white;
  }

  .slide-nav-bar .swiper-slide.active {
    color: var(--main-color);
    border-bottom: 3px solid var(--main-color);
  }
</style>
<template>
  <div class="slide-nav-bar">
    <div class="swiper-container slide-nav-bar-swiper">
      <div class="swiper-wrapper">
        <div
          :class="{'swiper-slide':true, 'active': activeId == item.floor_id}"
          v-for="(item,index) of navBarOptions"
          :key="index"
          @click="onClickNavBar(item)">{{item.data.title}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default {
    data() {
      return {
        activeId: 37
      }
    },
    props:['navBarOptions'],
    mounted() {
      this.initSwiper();
    },
    methods: {
      initSwiper() {
        let swiper = new Swiper('.slide-nav-bar-swiper', {
          slidesPerView: 6,
          freeMode: true,
        });
      },
      onClickNavBar(item) {
        this.activeId = item.floor_id
        this.$emit('onClickNavBar',item)
      }
    },
    watch:{
      navBarOptions:function (val) {
        setTimeout(()=>{
          this.initSwiper()
        },100)
      }
    }
  }
</script>