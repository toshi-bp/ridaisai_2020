<template>
  <div class="default">
    <GlobalHeader />
    <div>
      <div class="default__main">
        <nuxt />
        <SideBar class="default__side-bar"/>
      </div>
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
  $main-width: calc(100% - #{$side-bar-width});
  &__main {
    @include media-breakpoint-up(md) {
      display: grid;
      grid-template-columns: $main-width 1fr;
    }
    @include media-breakpoint-down(md) {
      width: 100%;
    }
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
