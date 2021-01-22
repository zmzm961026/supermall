<template>
  <div id="mainTabbar">
    <slot></slot>
  </div>
</template>

<script>
</script>

<style scoped>
  #mainTabbar{
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    width: 100%;
    height: 50px;
    display: flex;
    box-shadow: 0 -1px 3px rgb(105, 105, 105,0.2);
  }
</style>
