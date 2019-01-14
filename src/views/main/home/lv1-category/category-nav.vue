<style>
  .category-nav{
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    margin-top: .3rem;
  }
  .category-nav>li{
    width: 20%;
    text-align: center;
  }
  .category-nav>li>img{
    width: 60%;
  }
  .category-nav>li>p{
    text-align: center;
    font-size: .32rem;
  }
</style>
<template>
  <ul class="category-nav">
    <li v-for="(item,index) of testData">
      <img :src="item.wapBannerUrl" alt="">
      <p>{{item.name}}</p>
    </li>
  </ul>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        testData:[]
      }
    },
    mounted(){
      axios.get('/cateList.json').then(res=>{
        console.log(res.data.data[0]['subCateList'])
        this.testData = res.data.data[0]['subCateList']
        this.testData= this.testData.slice(0,10)
      })
    }
  }
</script>