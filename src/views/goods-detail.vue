<template>
  <div id="goods-detail">
    <div v-if="test">
      <img :src="detailData.listPicUrl" alt="">
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        test:false,
        detailData:{}
      }
    },
    mounted(){
      console.log(this.$route.query)
      axios.get('http://localhost:3030/mobile-goods/detail',{params:{id:this.$route.query.id}}).then(res=>{
        this.test=true
        this.detailData=res.data
        // console.log(res)
      })
    }
  }
</script>