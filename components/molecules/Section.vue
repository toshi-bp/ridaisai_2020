<template>
  <div class="section">
    <TheContainer class="containerClass">
      <div class="section__main">
        <h2 class="section__title">
          <slot name="title" />
        </h2>
        <h2 class="section__text">
          <slot name="text" />
        </h2>
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
  }
}

</script>

<style lang="scss" scoped>
.section{
    position: relative;
    margin: 0 auto;
    &__main{
      background: rgba(255,255,255, 0.85);
      background-image: url("~@/assets/image/broccolitime.png");
      background-Size: auto;
      background-blend-mode: lighten;
    }
    &__title{
      font-size: 2rem;
    }
    &__text{
      font-size: 1rem;
    }
}
</style>
