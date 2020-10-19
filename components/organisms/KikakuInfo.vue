<template>
  <!-- 各企画の共通部分をここで設定する -->
  <div class="info">
    <KikakuInfoBody
     :name="name"
     :introduce="intro"
    ></KikakuInfoBody>
  </div>
</template>

<script>
import KikakuInfoBody from '~/components/molecules/KikakuInfoBody'

export default {
  components: {
    KikakuInfoBody
  }
}
</script>

<style lang="scss" scoped>

</style>
