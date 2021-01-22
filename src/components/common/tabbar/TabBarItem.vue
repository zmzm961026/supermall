<template>
  <div class="tabbar_item" @click="goTo">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style=activeStyle><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    props:{
      path: String,
      activeColor:{
        type:String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? { color: this.activeColor } : {};
      }
    },
    methods:{
      goTo(){
        console.log(this.path)
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tabbar_item{
    flex: 1;
    text-align: center;
  }
  .tabbar_item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;  /*清除三像素边框*/
    margin-bottom: 2px;
  }
</style>
