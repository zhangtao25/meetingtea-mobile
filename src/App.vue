<style>
  html{
    font-size: 37.5px;
  }
  :root{
    --main-color: #b4282d;
    --main-bg: rgb(255, 255, 255);
    --logo-border-color: rebeccapurple;

    --header-height: 68px;
    --content-padding: 10px 20px;

    --base-line-height: 1.428571429;
    --transition-duration: .35s;
    --external-link: "external link";
    --margin-top: calc(2vh + 20px);
  }
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    mounted(){
      this.setHtmlFontSize()
      window.onresize=()=>this.setHtmlFontSize()
    },
    methods:{
      setHtmlFontSize(){
        document.getElementsByTagName("html")[0].style.fontSize = document.body.clientWidth/10+"px"
      }
    }
  }
</script>