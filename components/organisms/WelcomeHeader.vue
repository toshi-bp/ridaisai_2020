<template>
  <div class="welcome-header">
    <div class="welcome-header__body">
      <h1 class="welcome-header__title">
        <slot name="title" />
      </h1>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    type: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-header {
  margin: 3rem 0 2rem 0;

  @include media-breakpoint-down(sm) {
    margin: 1.7rem 0;
  }

  @include media-breakpoint-down(xs) {
    margin: 1.4rem 0;
  }

  &__body {
    display: inline-block;
    background-color: $theme-color;
  }

  &__title {
    position: relative;
    display: inline-block;
    font-size: 2rem;
    font-family: $sub-font;
    color: #fff;
    padding: 0 1rem;
    margin-right: 1rem;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 0;
      right: -1rem;
      // margin: 0 1rem;
      height: 3rem;
      width: 0.5rem;
      background-color: #fff;
    }
  }

}
</style>
