<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:"Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:3,  //只要是滚动，都侦测
        click:true,  //可以点击范围内的按钮
        pullUpLoad:true  //下拉加载更多
      });
    },
  }
</script>

<style scoped>
</style>
