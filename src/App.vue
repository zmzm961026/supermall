<template>
  <div id="app">
    <router-view/>
    <main-tab-bar>
    </main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from 'components/content/MainTabBar/MainTabBar'
  export default {
    components: {
      MainTabBar
    },
  }
</script>
<style>
  @import url(assets/css/reset.css);
</style>
