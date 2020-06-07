<template>
  <div class="sub-header">
    <TheContainer>
      <div class="sub-header__body">
        <div class="sub-header__dodecagon__rect">
          <!-- <div class="sub-header__dodecagon__rect"></div> -->
        </div>
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
  }
}
</script>

<style lang="scss" scoped>
.sub-header {

  &__body {
    display: flex;
    align-items: center;
  }

  &__dodecagon {
    background-color: $theme-color;
    position: relative;
    // width: 2rem;
    // height: 2rem;
    &__rect {
      width: 26.794919243%;// 2-√3 円に外接する正多角形
      height: 100%;
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
  }

}
</style>
