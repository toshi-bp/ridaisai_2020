<template>
  <component
    :is="linkcomponentIs"
    :to="to"
    :href="href"
    class="download-button"
    tabindex="0"
    @click="onClick"
    download
  >
    <div class="download-button__inner">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String
    },
    href: {
      type: String
    },
    linkcomponentIs: {
      type: String,
      default: 'a'
    }
  },
  computed: {
    linkComponentIs () {
      switch (true) {
        case !!this.to:
          return 'nuxt-link'
        case !!this.href:
          return 'a'
        default:
          return 'div'
      }
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.download-button {
  display:inline-block;
  position:relative;
  background: $website-color;
  // border: 2px solid rgba($website-color, 0.8);
  font-family: $sub-font;
  font-weight: bold;
  border-radius: 5px;
  color: #fff;
  transition: 0.2s ease all;
  overflow: hidden;
  box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.1);

  &__inner {
    position: relative;
    padding: 0.85rem 2.3rem 0.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
    z-index: 2;
    transform: translateX(0);
    transition: all 0.4s ease-in-out;
    @include media-breakpoint-down(sm) {
      font-size: 0.8rem;
    }
  }

  &:hover,&:focus {
    text-decoration: none;
    box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.3);
    transform: translateY(0.2rem);
  }
}
</style>
