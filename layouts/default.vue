<template>
  <div>
    <GlobalHeader />
    <div class="default">
      <SideBar class="default__side-bar" />
      <nuxt />
      <!-- <GlobalNav /> -->
    </div>
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from '~/components/organisms/GlobalHeader.vue'
import GlobalFooter from '~/components/organisms/GlobalFooter.vue'
import SideBar from '~/components/organisms/SideBar'
// import GlobalNav from '~/components/organisms/GlobalNav.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    SideBar
    // GlobalNav
  }
}
</script>

<style lang="scss" scoped>
.default {
  $side-bar-width: 240px;
  @include media-breakpoint-up(md) {
    display: grid;
    grid-template-columns: calc(100% - #{$side-bar-width}, 1fr);
  }
  &__side-bar {
    @include media-breakpoint-up(md) {
      width: $side-bar-width;
      height: 100vh;
      z-index: 9998;
    }
  }
}
</style>
