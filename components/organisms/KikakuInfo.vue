<template>
  <!-- 各企画の共通部分をここで設定する -->
  <div class="info">
    <KikakuInfoBody
     :name="name"
     :introduce="introduce"
    ></KikakuInfoBody>
  </div>
</template>

<script>
import KikakuInfoBody from '~/components/molecules/KikakuInfoBody'

export default {
  components: {
    KikakuInfoBody
  },
  props: {
    name: {
      type: String
    },
    introduce: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
