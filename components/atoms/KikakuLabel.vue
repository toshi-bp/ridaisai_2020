<template>
  <div
   class="label"
   :class="{
     'label--is-academic': type === 'academic',
     'label--is-musical': type === 'musical',
     'label--is-cultual': type === 'cultual',
     'label--is-exhibition': type === 'exhibition',
     'label--is-live': type === 'live'
   }"
  >
    <div class="label__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.1);

  // 企画のジャンル毎に色が変わるように設定
  &--is-academic {
    background-color: $academic-color;
  }
  &--is-musical {
    background-color: $musical-color;
  }
  &--is-cultual {
    background-color: $cultual-color;
  }
  &--is-exhibition {
    background-color: $exhibition-color;
  }
  &--is-live {
    background-color: $sub-color;
  }

  &__inner {
    color: #fff;
    font-family: $sub-font;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.5rem 1.5rem;
  }
}
</style>
