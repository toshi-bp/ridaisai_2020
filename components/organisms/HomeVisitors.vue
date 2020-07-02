<template>
  <div class="background">
    <TheContainer class="container">
      <div class="visitor__itembox">
        <div class="visitor__itembox__item">
        </div>
        <div class="visitor__itembox__item">
        </div>
        <div class="visitor__itembox__item">
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
// import TheContainer from '~/components/atoms/TheContainer.vue'
// import LinkButton2 from '~/components/atoms/LinkButton2.vue'

// export default {
//   components: {
//     TheContainer,
//     LinkButton2
//   }
// }
</script>

<style lang="scss" scoped>
.background{
  background-color: $sub-color;
}

.visitor{
  &__itembox{
    display: flex;

      &__item{
        height: 15rem;
        width: 15rem;
        background-color: $theme-color;
      }
  }
}
</style>
