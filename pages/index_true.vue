<template>
  <div>
    <HomeHeadTrue />
    <HomeVisitors />
    <HomeEventsEat />
    <HomeUpdateTrue />
    <Section />
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead.js'
import HomeHeadTrue from '~/components/organisms/HomeHeadTrue.vue'
import HomeVisitors from '~/components/organisms/HomeVisitors.vue'
import HomeEventsEat from '~/components/organisms/HomeEventsEat.vue'
import HomeUpdateTrue from '~/components/molecules/HomeUpdateTrue.vue'
import Section from '~/components/molecules/Section.vue'

export default {
  components: {
    HomeHeadTrue,
    HomeVisitors,
    HomeEventsEat,
    HomeUpdateTrue,
    Section
  },
  head () {
    return makeHead()
  }
}
</script>

<style>
</style>
