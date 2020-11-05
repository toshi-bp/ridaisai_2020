<template>
  <div class="kikaku">
    <KikakuIndex />
  </div>
</template>

<script>
/* eslint-disabel-line no-alert, no-console */
import KikakuIndex from '~/components/organisms/KikakuIndex'

import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuIndex
  },
  computed: {
  },
  head () {
    return makeHead('企画一覧', '理大祭に出展している企画を見ることができます。')
  }
}
</script>

<style lang="scss" scoped>

</style>
