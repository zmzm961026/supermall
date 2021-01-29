<template>
  <div class="goods">
    <good-list-item v-for="(item,index) in goods" :key="index" :good-item="item">
      {{ item }}
    </good-list-item>
  </div>
</template>

<script>
  import GoodListItem from './GoodListItem'

  export default {
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      },
    },
  }
</script>

<style scoped>

</style>
