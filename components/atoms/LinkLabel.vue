<template>
  <div class="label">
    <nuxt-link
      class="label__body"
      :style="{
        backgroundColor: labelColor
      }"
      :to="to"
    >
      <slot />
      <fa icon="angle-right" fixed-width class="label__icon"/>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'theme'
    },
    to: {
      type: String
    }
  },
  computed: {
    labelColor () {
      const typesDict = {
        theme: '#2ca9e1',
        sub: '#11a9b1',
        eat: '#ffcc44'
      }
      if (this.type in typesDict) {
        return typesDict[this.type]
      }
      return typesDict.theme
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;

  &__body {
    color: #fff;
    font-size: 1.5rem;
    line-height: 3;
    padding: 0.3rem 0.5rem 0.8rem;
    font-family: $sub-font;
    text-decoration: none;
    box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.1);

    &:hover {
      opacity: 0.8;
    }
  }

  &__icon {
    &:hover {
      transform: translateX(0.5rem);
      transition: 0.15s ease all;
    }
  }
}
</style>
