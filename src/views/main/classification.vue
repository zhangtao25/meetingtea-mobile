<style>
  #classification{
    background-color: white;
    padding-top: 1.2rem;
    padding-bottom: 1.3rem;
  }

  #classification header{
    border-bottom: 1px solid #ededed;
    position: fixed;top: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
  }
  #classification>.container{
    display: flex;
  }
  #classification>.container>ul{
    width: 2.16rem;
    border-right: 1px solid #ededed;
    padding-top: .53333rem;
    position: fixed;
    z-index: 1000;
    background-color: white;
    height: 100%;
  }
  #classification>.container>ul>li{
    text-align: center;
    display: block;
    color: #333333;
    font-size: .37333rem;
    line-height: .66667rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: .53333rem;
    border-left: .08rem solid white;
  }
  #classification>.container>ul>li.active{
    border-left: .08rem solid var(--main-color);
  }
  #classification>.container .side{
    flex:1;/*这里设置为占比1，填充满剩余空间*/
    padding: .4rem;
    padding-left: 2.56rem;
  }
  #classification>.container .side .header{
    position: relative;
    width: 100%;
    height: 2.56rem;
    display: table;
    margin-bottom: .42667rem;
    background: center no-repeat #f4f4f4;
    background-size: cover;
    border-radius: 4px;
  }
  #classification>.container .side>ul>li{
    width: 33%;
    float: left;
  }
</style>
<template>
  <div id="classification">
    <header>
      <top-search></top-search>
    </header>
    <div class="container" v-if="isShow">
      <ul>
        <li v-for="(item,index) of classificationData" :class="{'active':index == activeIndex}" :key="index" @click="onClickNav(index)">{{item.name}}</li>
      </ul>
      <div class="side">
        <div class="header" :style="{'background-image': 'url(http:'+classificationData[activeIndex]['bannerUrl']+')'}"></div>
        <ul>
          <li @click="onClickLv2(item)" style="text-align: center" v-for="(item,index) of classificationData[activeIndex]['subCateList']" :key="index">
            <img style="width: 1.92rem;height: 1.92rem" :src="item.wapBannerUrl" alt="">
            <p style="text-align: center;font-size: .32rem;height: .96rem">{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import TopSearch from './../../components/top-search'
  export default {
    components:{
      'top-search': TopSearch
    },
    data(){
      return{
        isShow:false,
        classificationData:[],
        activeIndex: 0
      }
    },
    mounted(){
      axios.get('/cateList.json').then(res=>{
        this.classificationData = res.data.data
        this.isShow=true
      })
    },
    methods:{
      onClickNav(index){
        this.activeIndex= index
      },
      onClickLv2(item){
        console.log(item)
        this.$router.push({path:'/lv2-cate-list',query:{subCategoryId:item.id,categoryId:item.superCategoryId}})
      }
    }
  }
</script>