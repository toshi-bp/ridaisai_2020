<template>
  <!-- 企画の形態によってラベルを変えるように設定するよ -->
  <div>
    <span
      v-if="live"
      class="form-label--is-live"
    >
      <slot />
    </span>
    <span
      v-if="youtube"
      class="form-label--is-youtube"
    >
      <slot />
    </span>
    <span
      v-if="website"
      class="form-label--is-website"
    >
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    live: {
      type: Boolean,
      default: false
    },
    youtube: {
      type: Boolean,
      default: false
    },
    website: {
      type: Boolean,
      default: false
    }
  },
  computed: {
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

  &--is-live {
    display: inline-block;
    color: #fff;
    font-size: 0.8rem;
    line-height: 2;
    padding: 0 0.5rem;
    border-radius: 5px;
    background-color: $live-color;
  }
  &--is-youtube {
    display: inline-block;
    color: #fff;
    font-size: 0.8rem;
    line-height: 2;
    padding: 0 0.5rem;
    border-radius: 5px;
    background-color: $youtube-color;
  }
  &--is-website {
    display: inline-block;
    color: #fff;
    font-size: 0.8rem;
    line-height: 2;
    padding: 0 0.5rem;
    border-radius: 5px;
    background-color: $website-color;
  }
}
</style>
