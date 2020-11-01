<template>
  <div class="default">
    <GlobalHeader />
    <div>
      <SideBar class="default__side-bar"/>
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
    width: calc(100% - #{$side-bar-width});
  }
  &__side-bar {
    @include media-breakpoint-up(md) {
      color: #fff;
      position: fixed;
      right: 0;
      display: flex;
      width: $side-bar-width;
      height: 100vh;
      z-index: 9100;
    }
  }
}
</style>
