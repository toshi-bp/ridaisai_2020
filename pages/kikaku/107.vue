<template>
  <!-- 電気工学研究会 -->
  <div class="kikaku-info">
    <KikakuInfoHeader
     kikaku_name="電気工学研究会展示"
    ></KikakuInfoHeader>
    <!-- ここにコンテンツを掲載するよ -->
    <KikakuInfoBody
     name="電気工学研究会"
     introduce="週に一回現在はzoomで部会を行っています。"
    ></KikakuInfoBody>
  </div>
</template>

<script>
import KikakuInfoHeader from '~/components/molecules/KikakuInfoHeader'
import KikakuInfoBody from '~/components/molecules/KikakuInfoBody'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody
  }
}
</script>

<style lang="scss" scoped>
.kikaku-info {
  padding-top: $global-header-height;
  padding-bottom: 2rem;
  background-image: url('~@/assets/image/bg.svg');
  background-size: repeat;
}
</style>
