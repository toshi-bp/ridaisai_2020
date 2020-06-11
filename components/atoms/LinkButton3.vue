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
</style>

.link-button{

}
