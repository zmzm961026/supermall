<template>
  <div class="tabControl">
    <div v-for="(item, index) in title"
     :key="index"
     :class="{active: index===currentIndex}"
     @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"TabControl",
    props: {
      title: {
        type: Array,
        default(){
          return []
        }
      },
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex=index;
        this.$emit('tabClick', index)
      }
    },
  }
</script>

<style scoped>
  .tabControl{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
  }
  .tabControl div{
    flex:1;
  }
  .tabControl div span{
    padding:5px
  }
  .active{
    color: var(--color-height-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-height-text);

  }
</style>
