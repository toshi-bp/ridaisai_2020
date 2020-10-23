<template>
  <!-- ライブ配信のタイムテーブルを作成する(作ってもらった画像を埋め込むかこちらで作成するかは未定) -->
  <div class="time-table">
    <TheSection></TheSection>
  </div>
</template>

<script>
import TheSection from '~/components/atoms/TheSection'
import TheContainer from '~/components/atoms/TheContainer'

export default {
  components: {
    TheSection,
    TheContainer
  }
}
</script>

<style lang="scss" scoped>
.time-table {

}
</style>
