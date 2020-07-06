<template>
  <div class="index">
    <div class="index__bg">
      <HomeHeadTrue />
      <HomeVisitors />
      <HomeEventsEat />
      <HomeUpdateTrue />
    </div>
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead.js'
import HomeHeadTrue from '~/components/organisms/HomeHeadTrue.vue'
import HomeVisitors from '~/components/organisms/HomeVisitors.vue'
import HomeEventsEat from '~/components/organisms/HomeEventsEat.vue'
import HomeUpdateTrue from '~/components/molecules/HomeUpdateTrue.vue'

export default {
  components: {
    HomeHeadTrue,
    HomeVisitors,
    HomeEventsEat,
    HomeUpdateTrue
  },
  head () {
    return makeHead()
  }
}
</script>

<style lang="scss" scoped>
.index {
  // &__bg {
  //   background-color: $theme-color;
  //   background-image: linear-gradient(180deg, $theme-color 0%, #ffffff 99%, #c9e7ff 100%);
  // }
}
</style>
