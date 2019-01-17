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
    background-color: rgb(213, 94, 70);
    text-align: center;
    font-size: .37333rem;

    line-height: .8rem;
    color: white;
    width: 50px;
    border-bottom: .08rem solid rgb(213, 94, 70);
  }

  .slide-nav-bar .swiper-slide.active {
    border-bottom: .08rem solid white;
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
    props: ['navBarOptions'],
    mounted() {
      // this.initSwiper();
    },
    methods: {
      initSwiper() {
        let swiper = new Swiper('.slide-nav-bar-swiper', {
          slidesPerView: 6,
          freeMode: true,
          freeModeMomentumBounce: false
        });
      },
      onClickNavBar(item) {
        if (item.floor_id != 36) {
          this.activeId = item.floor_id
          this.$emit('onClickNavBar', item)
        } else {
          console.log('手机分类不可用')
        }
      }
    },
    watch: {
      navBarOptions: function (val) {
        setTimeout(() => {
          this.initSwiper()
        }, 100)
      }
    }
  }
</script>