<style>
  #lv1-category {
    background-color: rgb(244, 244, 244);
  }
</style>
<template>
  <div id="lv1-category">
    <div class="wrap" v-if="isRender">
      <lv1-category-swipe
        :title-img-src="lv1CategoryData.floors[0].data.bg_image"
        :swipe-arr="lv1CategoryData.floors[0].data.items">
      </lv1-category-swipe>
      <category-nav :nav-arr="lv1CategoryData.floors[1].data.items"></category-nav>
      <tab-new-product :new-product-data="lv1CategoryData.floors[2].data"></tab-new-product>
      <tab-rankings :rankings-data="lv1CategoryData.floors[3].data"></tab-rankings>
    </div>
  </div>
</template>

<script>
  import Lv1CategorySwipe from './lv1-category/lv1-category-swipe'
  import CategoryNav from './lv1-category/category-nav'
  import TabNewProduct from './lv1-category/tab-new-product'
  import TabRankings from './lv1-category/tab-rankings'
  import Good from './../../../service/goods'

  export default {
    components: {
      'lv1-category-swipe': Lv1CategorySwipe,
      'category-nav': CategoryNav,
      'tab-new-product': TabNewProduct,
      'tab-rankings': TabRankings
    },
    data() {
      return {
        isRender: false,
        lv1CategoryData: {}
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        Good.getLv1Category(this.$route.query.id).then(res => {
          this.lv1CategoryData = res.data
          this.isRender = true
          // this.
        })
      }
    },
    watch: {
      '$route.query.id': function () {
        this.init()
      }
    }
  }
</script>