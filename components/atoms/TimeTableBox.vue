<template>
  <div
    :style="boxStyle"
    class="box"
  >
    <nuxt-link :to="url">
      <div class="box__inner">
        <h4 class="box__inner__title">{{ title }}</h4>
        <!-- <h5 class="box__inner__name">{{ name }}</h5> -->
        <p class="box__inner__time">{{ startTime }} 〜 {{ endTime }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    boxStyle () {
      const BoxHeight = (this.minutes) * 5 // 1時間で300px(1分で5px)
      const BoxTop = (this.start_h - 8) * 300 + this.start_m * 300 / 60
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
  position: absolute;
  border: 2px solid $theme-color;
  border-radius: 5px;
  background-color: #fff;
  vertical-align: middle;
  transition: 0.15s ease all;
  &:hover {
    transform: scale(1.03)
  }
  &__inner {
    padding: 0.5rem 0.5rem;
    vertical-align: middle;
    text-align: center;
    &__title {
      color: $theme-color;
      margin: 0 auto 0.5rem;
      @include media-breakpoint-down(md) {
        font-size: 0.8rem;
        margin: 0 auto 0.1rem;
      }
    }
    &__time {
      color: $theme-color;
      margin: 0 auto 1rem;
      @include media-breakpoint-down(md) {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
