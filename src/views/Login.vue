<template>
  <div id="login-view">
    <clw-header height="50" logo-src="/img/logo.png">
      <template v-slot:right>
        <div>功能项</div>
      </template>
    </clw-header>
    <div class="login-main">
      欢迎来到登录页
    </div>
  </div>
</template>

<script>
import ClwHeader from '@/components/ClwHeader'
export default {
  name: 'Login',
  components: {
    ClwHeader
  }
}
</script>

<style scoped lang="less">
#login-view {
  height: 100vh;
  min-height: 860px;
  .login-main {
    height: 100%;
    font-size: 20px;
  }
}
</style>
