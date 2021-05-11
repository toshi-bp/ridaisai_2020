<template>
  <div class="sub-header">
    <TheContainer>
      <div class="sub-header__body">
        <img src="~/assets/image/airship.svg" class="sub-header__airship">
        <h1 class="sub-header__title">
          <slot name="title" />
        </h1>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'

export default {
  components: {
    TheContainer
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
.sub-header {
  margin: 3rem 0 2rem 0;

  @include media-breakpoint-down(sm) {
    margin: 1.7rem 0;
  }

  @include media-breakpoint-down(xs) {
    margin: 1.4rem 0;
  }

  &__body {
    display: flex;
    align-items: center;
  }

  &__airship {
    // background-color: $accent-color;
    position: relative;
    width: 4rem;
    height: 4rem;
  }

  &__title {
    position: relative;
    text-align: left;
    font-size: 2rem;
    font-family: $sub-font;
    // color: #fff;
    margin-left: 0.5rem;
    font-weight: normal;

    @include media-breakpoint-down(sm) {
      font-size: 1.8rem;
    }

    @include media-breakpoint-down(xs) {
      font-size: 1.5rem;
    }
  }

}
</style>
