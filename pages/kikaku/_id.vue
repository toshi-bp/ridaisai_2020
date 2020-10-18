<template>
  <div>
    <KikakuInfo></KikakuInfo>
  </div>
</template>

<script>
import KikakuInfo from '~/components/organisms/KikakuInfo'

export default {
  components: {
    KikakuInfo
  },
  computed: {
    kikaku: function () {
      return kikakuList.find(kikaku => parseInt(this.$route.params.id, 10) === parseInt(kikaku.kikaku_id, 10))
    }
  },
  // validate {{params}} {
  //   return /^\d+$/.test(params.id)
  // }
}
</script>

<style lang="scss" scoped>

</style>
