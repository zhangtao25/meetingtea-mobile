<style>
  #home{
    background-color: rgb(242,242,242);
  }
  #home .mint-swipe-item img{
    width: 100%;
  }
  #home .service-policy{
    display: flex;
    color: var(--main-color);
    justify-content: space-around;
    font-size: .32rem;
    padding: .2rem 0 .2rem 0;
    background-color:white;
  }
  #home .service-policy i{
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-index-288c7abfd1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .42667rem;
    height: .42667rem;
  }
  #home>.nav{
    background-color: white;
  }
  #home>.nav img{
    width: 1.46667rem;
    height: 1.46667rem;
  }
  #home>.nav ul{
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
  }
  #home>.nav ul>li{
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: center;
    align-items: center;
    font-size: .32rem;
    color: #333;
    line-height: 2;
  }
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
  export default {
    components:{
      'top-search': TopSearch,
      'slide-nav-bar': SlideNavBar
    },
    data(){
      return{
        cateList: this.GLOBAL.cateList
      }
    },
    methods:{
      onClickNavBar(val){
        console.log(val.id)
        this.$router.push({path:'/main/home/home-cate',query:{categoryId:val.id}})
      }
    }
  }
</script>