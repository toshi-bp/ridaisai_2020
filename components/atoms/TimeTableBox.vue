<template>
  <div
    :style="boxStyle()"
    class="box"
  >
    <nuxt-link :to="url">
      <div class="box__inner">
        <h4 class="box__inner__title">{{ title }}</h4>
        <h5 class="box__inner__name">{{ name }}</h5>
        <p class="box__inner__time">{{ startTime }} 〜 {{ endTime }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    boxStyle () {
      const BoxHeight = (this.minutes) * 160 / 60
      const BoxTop = (this.start_h - 10) * 160 + (this.start_m - 30) * 160 / 60
      return 'top:' + BoxTop + 'px;' + 'height:' + BoxHeight + 'px;'
    }
  },
  props: {
    title: {
      type: String
    },
    name: {
      type: String
    },
    startTime: {
      type: String
    },
    endTime: {
      type: String
    },
    minutes: {
      type: Number
    },
    start_h: {
      type: Number
    },
    start_m: {
      type: Number
    },
    url: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 2px solid $theme-color;
  &__inner {
    padding: 1rem 0.5rem;
    text-align: center;
    &__title {
      color: $theme-color;
      margin-bottom: 0.5rem;
    }
    &__time {
      color: $theme-color;
      margin-bottom: 1rem;
    }
  }
}
</style>
