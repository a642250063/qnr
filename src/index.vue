<template>
  <div>
    <div v-if="msg.iconList">
      <v-header ></v-header>
      <lunb :msg=msg></lunb>
      <daohang :msg=msg></daohang>
      <sect :msg=msg></sect>
    </div>
    <div v-else>
      <div class="loading"><img src="./assets/loading.gif" alt=""></div>
    </div>
  </div>
</template>
<script>
import vHeader from '@/components/heada.vue'
import lunb from '@/components/lunbo.vue'
import daohang from '@/components/daohang.vue'
import sect from '@/components/section/section.vue'
export default {
  name: 'index',
  components: {
    vHeader,
    lunb,
    daohang,
    sect
  },
  computed: {
    msg(){
      return this.$store.state.msg
    }
  }
}
</script>
<style lang="less" scoped>
  .loading>img{
    width: 100%;
    background: #0086b3;
  }
  .loading {
    height: 100vh;
    background: #00bcd4;
  }
</style>
