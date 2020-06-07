<template>
  <component
    :is="linkcomponentIs"
    :to="to"
    :href="href"
    class="link-button"
    tabindex="0"
    @click="onClick"
  >
    <div class="link-button__inner">
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
      default: 'nuxt-link'
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
.link-button{
    display:inline-block;
    position:relative;
    background: #fff;
    border: 2px solid $theme-color;
    font-family: $sub-font;
    font-weight: bold;
    border-radius: 18px;
    color: $theme-color;

    &__inner {
        padding: 0.85rem 2.3rem 1rem;
        text-align: center;
        font-size: 1.2rem;
        @include media-breakpoint-down(sm) {
            font-size: 0.8rem;
        }
        &:hover {
          transform: translateX(100%);
          opacity: 0;
          transition: 3s ease all;
        }
    }

    &:hover {
      text-decoration: none;
      color: #fff;
      background: $theme-color;
      transition: 0.5s ease all;
    }
    &:focus{
      text-decoration: none;
      color: #fff;
      background: $theme-color;
    }

}
</style>
