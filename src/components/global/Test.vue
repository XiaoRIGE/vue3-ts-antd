<template>hello vue components</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  created() {
    console.log('6666组件created')
  }
})
</script>

<style lang="less">
.contain {
  width: 200px;
  height: 82px;
  text-align: center;
  background: chartreuse;
}
</style>
