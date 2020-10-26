<template>
  <div>
    <GlobalHeader />
    <nuxt />
    <GlobalNav />
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from '~/components/organisms/GlobalHeader.vue'
import GlobalFooter from '~/components/organisms/GlobalFooter.vue'
import GlobalNav from '~/components/organisms/GlobalNav.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    GlobalNav
  }
}
</script>

<style>
</style>
