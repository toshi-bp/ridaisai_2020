<template>
  <div class="scroll-button">
    <div class="scroll-button__inner">
      <fa icon="chevron-up" class="scroll-button__icon" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.scroll-button {
  border-radius: 5px;
  background-color: $theme-color;
  &__inner {
    padding: 1rem;
  }
  &__icon {
    font-size: 2rem;
    color: #fff;
  }
}
</style>
