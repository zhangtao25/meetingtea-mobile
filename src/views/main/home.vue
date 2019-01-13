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
  import axios from 'axios'

  export default {
    components:{
      'top-search': TopSearch,
      'slide-nav-bar': SlideNavBar
    },
    data(){
      return{
        cateList: []
      }
    },
    mounted(){
      this.initCateList();
    },
    methods:{
      onClickNavBar(val){
        if (val.id==0){
          this.$router.push({path:'/main/home/home-recommend'})
        } else {
          this.$router.push({path:'/main/home/lv1-cate-list',query:{categoryId:val.id}})
        }
      },
      initCateList(){
        axios.get('/cateList.json').then(res=>{
          this.cateList = res.data.data
          this.cateList.unshift({
            name:'推荐',
            id:0
          })
        })
      }
    }
  }
</script>