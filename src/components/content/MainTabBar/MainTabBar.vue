<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <div slot="item-icon"><img src="~assets/img/tabbar/home.svg" /></div>
      <div slot="item-icon-active"><img src="~assets/img/tabbar/home_active.svg" /></div>
      <div slot="item-text">首页</div>
      <!-- <template #>
          <div></div>
        </template>
        <template #item-text>
          <div>首页</div>
        </template> -->
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <div slot="item-icon"><img src="~assets/img/tabbar/category.svg" /></div>
      <div slot="item-icon-active"><img src="~assets/img/tabbar/home_active.svg" /></div>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <div slot="item-icon"><img src="~assets/img/tabbar/shopcart.svg" /></div>
      <div slot="item-icon-active"><img src="~assets/img/tabbar/home_active.svg" /></div>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <div slot="item-icon"><img src="~assets/img/tabbar/profile.svg" /></div>
      <div slot="item-icon-active"><img src="~assets/img/tabbar/home_active.svg" /></div>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    components: {
      TabBar,
      TabBarItem
    },
  }
</script>

<style scoped>

</style>
