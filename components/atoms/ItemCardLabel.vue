<template>
  <!-- 企画のジャンルによってラベルを変えるように設定するよ -->
  <span
    class="label"
    :style="{
      backgroundColor: labelColor
    }"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'musical'
    }
  },
  computed: {
    labelColor () {
      const typesColorDict = {
        academic: '#f28c8e',
        musical: '#56a1bf',
        cultual: '#6fc880',
        exhibition: '#fdb06f'
      }
      return typesColorDict[this.type]
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;
  color: #fff;
  font-weight: bold;
  font-size: 0.7rem;
  line-height: 2;
  padding: 0 0.5rem;
  border-radius: 999px;
  // background-color: $theme-color;
}
</style>
