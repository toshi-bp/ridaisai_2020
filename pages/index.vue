<template>
  <div>
    <HomeHead />
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead.js'
import HomeHead from '~/components/organisms/HomeHead.vue'

export default {
  components: {
    HomeHead
  },
  head () {
    return makeHead()
  }
}
</script>

<style>
</style>
