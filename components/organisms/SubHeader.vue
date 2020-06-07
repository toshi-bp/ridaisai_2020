<template>
  <div class="sub-header">
    <TheContainer>
      <div class="sub-header__body">
        <img src="~/assets/image/dodecagon_orange.svg" class="sub-header__dodecagon"/>
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

  &__body {
    display: flex;
    align-items: center;
  }

  &__dodecagon {
    // background-color: $accent-color;
    position: relative;
    width: 3rem;
    height: 3rem;
    &__rect {
      width: 26.794919243%;// 2-√3 円に外接する正多角形
      height: 100%;
      background-color: $accent-color;
      border: 1px solid $accent-color;
      @for $i from 0 through 5 {
        &:nth-of-type(#{$i + 1}) {
          transform: rotate(30deg * $i);
        }
      }
    }
  }

  &__title {
    position: relative;
    text-align: left;
    font-size: 2rem;
    font-family: $sub-font;
    color: #fff;
    margin-left: 0.5rem;
  }

}
</style>
