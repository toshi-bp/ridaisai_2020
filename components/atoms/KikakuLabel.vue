<template>
  <component
    :is="linkComponentIs"
    :href="href"
    :to="to"
    class="label"
    :class="{
      'label--is-academic': type === 'academic',
      'label--is-musical': type === 'musical',
      'label--is-cultual': type === 'cultual',
      'label--is-exhibition': type === 'exhibition',
      'label--is-sports': type === 'sports',
      'label--is-live': type === 'live',
      'label--is-youtube': type === 'youtube',
      'label--is-website': type === 'website',
      'label--is-special': type === 'special'
    }"
  >
    <div class="label__inner">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    href: {
      type: String
    },
    to: {
      type: String
    }
  },
  computed: {
    linkComponentIs () {
      switch (true) {
        case !!this.href:
          return 'a'
        case !!this.to:
          return 'nuxt-link'
        default:
          return 'div'
      }
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
  transition: 0.2s ease all;
  &:hover {
    transform: scale(1.05);
  }

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
  &--is-sports {
    background-color: $sports-color;
  }
  &--is-youtube {
    background-color: $youtube-color;
  }
  &--is-live {
    background-color: $live-color;
  }
  &--is-website {
    background-color: $website-color;
  }
  &--is-special {
    background-color: $sub-color;
  }

  &__inner {
    color: #fff;
    font-family: $sub-font;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.3rem 1.5rem 0.5rem;
  }
}
</style>
