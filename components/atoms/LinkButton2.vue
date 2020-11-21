<template>
  <component
    :is="linkComponentIs"
    :to="to"
    :href="href"
    class="link-button"
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
    border-radius: 9px;
    color: $theme-color;
    transition: 0.4s ease all;
    overflow: hidden;

     &::before{
      content: "take off!!";
      display: block;
      position: absolute;
      top: 1rem;
      left: -100%;
      bottom: 0.5rem;
      width: 100%;
      background-color: transparent;
      color: $theme-color;
      text-transform: uppercase;
      transition: all 0.4s ease-in-out;
      @include media-breakpoint-down(md) {
        top: 0.85rem;
      }
      @include media-breakpoint-down(sm) {
        top: 0.6rem;
      }
    }

    &__inner {
        position: relative;
        padding: 0.85rem 2.3rem 1rem;
        text-align: center;
        font-size: 1.2rem;
        z-index: 2;
        transform: translateX(0);
        transition: all 0.4s ease-in-out;
        @include media-breakpoint-down(sm) {
            font-size: 0.8rem;
        }

        &:hover {
          transform: translateX(100%);
        }
    }

    &:hover,&:focus{
      text-decoration: none;
      color: transparent;
      transition: all 0s ease-in-out;
      &::before{
      left: 0;

      }
    }
}
</style>
