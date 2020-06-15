<template>
  <div>
    <HomeHead />
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead.js'
import HomeHead from '~/components/organisms/HomeHead.vue'

export default {
  head () {
    return makeHead()
  },
  components: {
    HomeHead
  }
}
</script>

<style>
</style>
