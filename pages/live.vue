<template>
  <div>
    <LiveKikaku />
  </div>
</template>

<script>
import LiveKikaku from '~/components/organisms/LiveKikaku'
import makeHead from '~/utils/makeHead'

export default {
  components: {
    LiveKikaku
  },
  head () {
    return makeHead('Live配信', '参加団体によるパフォーマンスをLive配信でお届け!')
  }
}
</script>

<style lang="scss" scoped>

</style>
