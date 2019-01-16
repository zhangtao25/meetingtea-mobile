<style>
  .common-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: .4rem;
  }
  .common-title .title{
    font-size: .45rem;
    font-weight: bolder;
  }
  .common-title .more{
    font-size: .37rem;
    color: rgb(153, 153, 153)
  }
</style>
<template>
  <div class="common-title">
    <div class="title">{{title}}</div>
    <div class="more">more</div>
  </div>
</template>
<script>
  export default {
    props:['title']
  }
</script>