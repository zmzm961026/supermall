<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <div slot="item-icon"><i class="iconfont icon-shouye"></i></div>
      <div slot="item-icon-active"><i class="iconfont icon-shouyeActive"></i></div>
      <div slot="item-text">首页</div>
      <!-- <template #>
          <div></div>
        </template>
        <template #item-text>
          <div>首页</div>
        </template> -->
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <div slot="item-icon"><i class="iconfont icon-guanli"></i></div>
      <div slot="item-icon-active"><i class="iconfont icon-guanli-active"></i></div>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <div slot="item-icon"><i class="iconfont icon-gouwuche"></i></div>
      <div slot="item-icon-active"><i class="iconfont icon-gouwuche-active"></i></div>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <div slot="item-icon"><i class="iconfont icon-me_line"></i></div>
      <div slot="item-icon-active"><i class="iconfont icon-me_line-active"></i></div>
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
