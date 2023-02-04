<template>
  <div id="clw-header" :style="{height: clwHeaderHeight, backgroundColor: backgroundColor}">
    <div class="clw-header-left">
      <img :width="clwLogoWidth" :height="clwLogoHeight" :src="logoSrc" alt="">
      <div>
        <slot name="h-menu"></slot>
      </div>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClwHeader',
  props: {
    height: {
      type: [String, Number],
      default: 50
    },
    backgroundColor: {
      type: String,
      default: 'black'
    },
    logoSrc: {
      type: String,
      default: ''
    },
    logoWidth: {
      type: [String, Number],
      default: 220
    },
    logoHeight: {
      type: [String, Number],
      default: 40
    }
  },
  computed: {
    clwHeaderHeight: function () {
      var height = this.height
      if (/^(\-|\+)?\d+(\.\d+)?$/.test(height)) {
        height += 'px'
      }
      return height
    },
    clwLogoWidth: function () {
      var width = this.logoWidth
      if (/^(\-|\+)?\d+(\.\d+)?$/.test(width)) {
        width += 'px'
      }
      return width
    },
    clwLogoHeight: function () {
      var height = this.logoHeight
      if (/^(\-|\+)?\d+(\.\d+)?$/.test(height)) {
        height += 'px'
      }
      return height
    }
  }
}
</script>

<style scoped lang="less">
#clw-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  color: #FFF;
  .clw-header-left {
    display: flex;
    align-items: center;
    div {
      margin-left: 10px;
    }
  }
}
</style>
