<template>
  <div class="contain">
    hello list
    <!-- 全局注册组件 使用方式为使用小写 -->
    <test />
    <full-loading :show="show"></full-loading>
    <a-button @click="toogleState" type="primary">primary</a-button>
    <a-button @click="gopage" type="primary">详情</a-button>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
// import Test from '@/components/global/Test.vue'
import { reactive, toRefs, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const state = reactive({
      show: false
    })
    const router = useRouter()
    const toogleState = () => {
      state.show = !state.show
      console.log('切换后state', state.show)
    }
    const gopage = () => {
      router.push({ name: 'testDetail', query: { name: 'hah', age: '56' } })
    }
    watch(
      () => state.show,
      (newVal, oldVal) => {
        console.log('新', newVal)
        console.log('旧', oldVal)
      }
    )
    onMounted(() => {
      //   setInterval(() => {
      //     toogleState()
      //   }, 5000)
    })

    return {
      ...toRefs(state),
      toogleState,
      gopage
    }
  },
  data() {
    return {
      show2: true
    }
  },
  created() {
    console.log('页面created')
  },
  mounted() {
    console.log('页面mounted')
    console.log(this)
  }
  //   methods: {
  //     toogleState2(): void {
  //       console.log('this.show2', this.show2)
  //     }
  //   }
  //   components: { Test }
}
</script>
<style lang="less" scoped>
.contain {
  width: auto;
  height: 82px;
  text-align: center;
  background: gray;
}
</style>
