<style>
  .header-nav{
    height: 1.17333rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: #fafafa;
    padding: 0 0.2rem 0 0.2rem;
    border-bottom: 1px solid #ededed;
  }
  .header-nav i{
    background-image: url("./../assets/images/header-nav-icon.png");
    display: block;
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
  }
  .header-nav .icon-home{
    width: .64rem;
    height: .58667rem;
    background-position: 0 -.98667rem;
  }
  .header-nav .icon-search{
    width: .85333rem;
    height: .85333rem;
    background-position: 0 -4.74667rem
  }
  .header-nav .icon-bycar{
    width: .85333rem;
    height: .85333rem;
    background-position: 0 0;
  }
  .text{
    position: absolute;
    left: 50%;
    font-size: 0.5rem;
    transform: translateX(-50%);
  }
</style>
<template>
  <div class="header-nav">
    <i class="icon-home" @click="onClickGoHome"></i>
    <div style="display: flex;justify-content: center;align-items: center">
      <i class="icon-search"></i>
      <i class="icon-bycar" @click="onClickGoBycar"></i>
    </div>
    <span class="text">网易严选</span>
  </div>
</template>
<script>
  export default {
    methods:{
      onClickGoHome(){
        this.$router.push({path:'/main/home'})
      },
      onClickGoBycar(){
        this.$router.push({path:'/main/bycar'})
      }
    }
  }
</script>