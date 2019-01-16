<style>
</style>
<template>
  <div id="home">
    <header>
      <top-search></top-search>
      <slide-nav-bar
        :nav-bar-options="cateList"
        @onClickNavBar="onClickNavBar"></slide-nav-bar>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
  import TopSearch from './../../components/top-search'
  import SlideNavBar from './../../components/slide-nav-bar'
  import Goods from './../../service/goods'

  export default {
    components:{
      'top-search': TopSearch,
      'slide-nav-bar': SlideNavBar
    },
    data(){
      return{
        cateList: [],
        HomepageData:{}
      }
    },
    mounted(){
      this.initCateList();
    },
    methods:{
      onClickNavBar(val){
        let jump_url = val.data.jump_url
        let id = jump_url.slice(jump_url.length-2,jump_url.length)
        if (val.floor_id==0){
          this.$router.push({path:'/main/home/recommend'})
        } else {
          this.$router.push({path:'/main/home/lv1-category',query:{id}})
        }
      },
      initCateList(){
        Goods.getHomepage().then(res=>{
          this.HomepageData = res.data
          for (let i = 0; i < this.HomepageData.data.homepage.floors.length; i++) {
            if (this.HomepageData.data.homepage.floors[i]['module_key'] =='product_category'){
              this.cateList.push(this.HomepageData.data.homepage.floors[i])
            }
          }
        })
      }
    }
  }
</script>