<template>
  <div class="box">
    <div class="box__inner">
      <h4 class="box__inner__title">{{ title }}</h4>
      <p class="box__inner__time">{{ startTime }} 〜 {{endTime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    boxStyle () {
      let box_height = (this.minutes) * 160 / 60
    }
  },
  props: {
    title: {
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
