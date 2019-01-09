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
    <div style="width: 100%;height: 4.93333rem">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) of swipeArr" :key="index">
          <img :src="item.imgSrc" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <ul class="service-policy">
      <li>
        <i></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <div class="nav" @click="fn">
      <ul>
        <li v-for="(item,index) of navArr" :key="index">
          <img :src="item.imgSrc" alt="">
          <span>{{item.label}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        swipeArr:[
          {imgSrc:'https://yanxuan.nosdn.127.net/45e2a2c3cf3e6881fbbcdf0b4f1a54e8.jpg?imageView&quality=75&thumbnail=750x0'},
          {imgSrc:'https://yanxuan.nosdn.127.net/3d076fce701f9457280293fbfa469a58.jpg?imageView&quality=75&thumbnail=750x0'},
          {imgSrc:'https://yanxuan.nosdn.127.net/f24bce5d403c5119b9b9902c80365244.JPG?imageView&quality=75&thumbnail=750x0'},
          {imgSrc:'https://yanxuan.nosdn.127.net/df6d04118fb06870b7d01b868dac7829.jpg?imageView&quality=75&thumbnail=750x0'}
        ],
        navArr:[
          {
            label: '居家',
            imgSrc: 'http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png'
          },
          {
            label: '鞋包配饰',
            imgSrc: 'http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png'
          },
          {
            label: '服装',
            imgSrc: 'http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png'
          },
          {
            label: '电器',
            imgSrc: 'http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png'
          },
          {
            label: '婴童',
            imgSrc: 'http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png'
          },
          {
            label: '饮食',
            imgSrc: 'http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png'
          },
          {
            label: '洗护',
            imgSrc: 'http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png'
          },
          {
            label: '餐厨',
            imgSrc: 'http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png'
          },
          {
            label: '文体',
            imgSrc: 'http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png'
          },
          {
            label: '特色区',
            imgSrc: 'http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png'
          },
        ]
      }
    },
    methods:{
      fn(){
        
      }
    }
  }
</script>