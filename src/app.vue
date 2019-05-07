<template>
  <div>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch("getData")
  }
}
</script>
<style lang="less" scoped>
</style>
