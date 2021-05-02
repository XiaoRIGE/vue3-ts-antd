<template>
  <div class="flex-box">
    <!-- <div class="logo" /> -->
    <span class="a f24">强基高校</span>
    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .a {
    color: @error-color;
    color: #fff;
    .h-center();
    .flex-center();
  }
}
</style>
