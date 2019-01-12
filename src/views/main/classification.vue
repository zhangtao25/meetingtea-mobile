<style>
  #classification{
    background-color: white;
    padding-top: 1.2rem;
    padding-bottom: 1.3rem;
  }

  #classification .search{
    padding:.2rem 0rem;
    border-bottom: 1px solid #ededed;
    text-align: center;
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
    border-top: 1px solid #ededed;
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
  #classification>.container .side>ul{
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*justify-content: space-around;*/
  }
  #classification>.container .side>ul>li{
    width: 33%;
    float: left;
  }
</style>
<template>
  <div id="classification">
    <search></search>
    <div class="container" v-if="isShow">
      <ul>
        <li v-for="(item,index) of navArr" :class="{'active':navArr[index].isActive}" :key="index" @click="onClickNav(index)">{{item.label}}</li>
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
  import Search from './../../components/search'
  export default {
    components:{
      'search': Search
    },
    data(){
      return{
        navArr:[
          {
            label: '居家',
            isActive: true
          },
          {
            label: '鞋包配饰',
            isActive: false
          },
          {
            label: '服装',
            isActive: false
          },
          {
            label: '电器',
            isActive: false
          },
          {
            label: '婴童',
            isActive: false
          },
          {
            label: '饮食',
            isActive: false
          },
          {
            label: '洗护',
            isActive: false
          },
          {
            label: '餐厨',
            isActive: false
          },
          {
            label: '文体',
            isActive: false
          },
          {
            label: '特色区',
            isActive: false
          },
        ],
        isShow:false,
        classificationData:[],
        activeIndex: 0
      }
    },
    mounted(){
      axios.get('/test.json').then(res=>{
        this.classificationData = res.data.data
        this.isShow=true
      })
    },
    methods:{
      onClickNav(index){
        for (let i in this.navArr){
          this.navArr[i].isActive = false
        }
        this.navArr[index].isActive=true
        this.activeIndex= index
      },
      onClickLv2(item){
        console.log(item)
        this.$router.push({path:'/goods-list',query:{subCategoryId:item.id,categoryId:item.superCategoryId}})
      }
    }
  }
</script>