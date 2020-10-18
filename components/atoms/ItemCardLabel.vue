<template>
  <!-- 企画のジャンルによってラベルを変えるように設定するよ -->
  <div
    class="label"
    :style="{
      backgroundcolor: labelColor
    }"
  >
    <slot />
  </div>
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

      if (this.type in typesColorDict) {
        return typesColorDict[this.type]
      }
      return typesColorDict[this.type] // これは多分使わないだろう
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 2;
  padding: 0 0.5rem;
  border-radius: 999px;
}
</style>
