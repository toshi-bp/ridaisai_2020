<template>
  <section class="section">
    <h2 class="section__title">
      <slot name="title" />
    </h2>
    <div class="section__box">
      <slot />
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.section {
    margin-bottom: 2rem;
    &__title {
      font-family: $theme-font;
      text-align: left;
      font-size: 1rem;
    }

    &__box {
      width: 100%;
      margin: 0 center;
      background-color: #fff;
      padding: 2rem;
      border: 3px solid $theme-color;
      border-radius: 18px;
      box-shadow: 0.25rem 0.25rem 0 rgba($theme-color, 0.5);
    }
}
</style>
