<template>
  <component
    :is="linkComponentIs"
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
    border: 2px solid rgba($accent-color, 0.8);
    font-family: $sub-font;
    font-weight: bold;
    border-radius: 9px;
    color: $accent-color;
    transition: 0.5s ease all;
    overflow: hidden;

    &::before{
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 0;
      background-color: rgba($accent-color,0.7);
      transition: 0.15s ease all;
    }

     &::after{
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 0;
      background-color: $accent-color;
      transition: 0.45s ease all;
    }

    &__inner {
        position:relative;
        padding: 0.85rem 2.3rem 1rem;
        text-align: center;
        font-size: 1.2rem;
        z-index: 2;
        @include media-breakpoint-down(sm) {
            font-size: 0.8rem;
        }
    }

    &:hover,&:focus{
      text-decoration: none;
      color: #fff;
      &::before{
        width: 100%;
      }
      &::after{
        width: 100%;
      }
    }
}
</style>
