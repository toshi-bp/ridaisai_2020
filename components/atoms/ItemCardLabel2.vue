<template>
  <!-- 企画の形態によってラベルを変えるように設定するよ -->
  <span
    class="form-label"
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
    form: {
      form: String
    }
  },
  computed: {
    labelColor () {
      const typesColorDict = {
        live: '#665990',
        youtube: '#f8acac',
        website: '#37ab9d'
      }
      return typesColorDict[this.form]
    }
  }
}
</script>

<style lang="scss" scoped>
.form-label {
  display: inline-block;
  color: #fff;
  font-size: 0.8rem;
  line-height: 2;
  padding: 0 0.5rem;
  border-radius: 5px;
  // background-color: $theme-color;

}
</style>
