<template>
  <div id="base-tem">
    <clw-header height="50" logo-src="/img/logo.png">
      <template v-slot:h-menu>
        <div>菜单项</div>
      </template>
      <template v-slot:right>
        <div>功能项</div>
      </template>
    </clw-header>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import ClwHeader from '@/components/ClwHeader'
export default {
  name: 'BaseLayout',
  components: {
    ClwHeader
  }
}
</script>

<style scoped lang="less">
#base-tem {
  height: 100vh;
  min-height: 860px;
}
</style>
