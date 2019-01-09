<style>
  .tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
  }
  .tab-item i{
    display: inline-block;
    vertical-align: middle;
    background-image: url('./../assets/images/tabbar-icon.png');
    background-repeat: no-repeat;
    background-size: .53333rem 6.53333rem;
    width: .53333rem;
    height: .53333rem;
  }
  .tab-item span{
    margin-top: 0.1rem;
    line-height: 1;
    font-size: .32rem;
  }
  .mint-tab-item:nth-child(1) .tab-item i{
    background-position: 0 -3.33333rem;
  }
  .mint-tab-item:nth-child(2) .tab-item i{
    background-position: 0 -2rem;
  }
  .mint-tab-item:nth-child(3) .tab-item i{
    background-position: 0 -4.66667rem;
  }
  .mint-tab-item:nth-child(4) .tab-item i{
    background-position: 0 -.66667rem;
  }
  .mint-tab-item:nth-child(5) .tab-item i{
    background-position: 0 -6rem;
  }

  .mint-tab-item:nth-child(1) .tab-item.active i{
    background-position: 0 -2.66667rem;
  }
  .mint-tab-item:nth-child(2) .tab-item.active i{
    background-position: 0 -1.33333rem;
  }
  .mint-tab-item:nth-child(3) .tab-item.active i{
    background-position: 0 -4rem;
  }
  .mint-tab-item:nth-child(4) .tab-item.active i{
    background-position: 0 0;
  }
  .mint-tab-item:nth-child(5) .tab-item.active i{
    background-position: 0 -5.33333rem;
  }

  .active{
    color: var(--main-color)
  }
</style>
<template>
  <div id="main">
    <router-view></router-view>
    <mt-tabbar v-model="selected" :fixed="true" style="z-index: 1001;height: 1.3rem">
      <mt-tab-item id="home&0">
        <div :class="{'tab-item':true,'active': isActive[0]}">
          <i></i>
          <span>首页</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="classification&1">
        <div :class="{'tab-item':true,'active': isActive[1]}">
          <i></i>
          <span>分类</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="find&2">
        <div :class="{'tab-item':true,'active': isActive[2]}">
          <i></i>
          <span>识物</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="bycar&3">
        <div :class="{'tab-item':true,'active': isActive[3]}">
          <i></i>
          <span>购物车</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="personal&4">
        <div :class="{'tab-item':true,'active': isActive[4]}">
          <i></i>
          <span>个人</span>
        </div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        selected:'home&0',
        isActive: [true, false, false, false, false]
      }
    },
    methods:{
    },
    watch:{
      selected(val){
        let index = val.split('&')[1]
        let path = val.split('&')[0]

        this.isActive = [false, false, false, false, false]
        this.isActive[index] = true

        this.$router.push({path:'/main/' + path})
      }
    }
  }
</script>