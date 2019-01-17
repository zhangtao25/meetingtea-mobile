<!--精做-->
<style>
  .category-nav {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    margin-top: .3rem;
    padding: .3rem 0;
  }

  .category-nav > li {
    width: 20%;
    text-align: center;
  }

  .category-nav > li > img {
    width: 60%;
  }

  .category-nav > li > p {
    text-align: center;
    font-size: .32rem;
  }
</style>
<template>
  <ul class="category-nav">
    <li v-for="(item,index) of navArr" :key="index">
      <img :src="item.pic_url" alt="">
      <p>{{item.title}}</p>
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ['navArr']
  }
</script>