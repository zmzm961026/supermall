<template>
  <div class="recommend-list">
    <a :href="item.link" v-for="(item, index) in recommend" :key="index">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </a>
  </div>
</template>

<script>
  export default {
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .recommend-list{
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-list a{
    flex: 1;
    text-align: center;
  }
  .recommend-list a img{
    width:80%;
    margin-bottom: 10px;
  }
</style>
