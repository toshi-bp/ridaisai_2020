<template>
  <!-- ここにはタイトルとコンテンツのテンプレートを作成 -->
  <div>
    <TheContainer>
      <SubHeader>
        <template #title>
          {{ kikaku_name }}
        </template>
      </SubHeader>
    </TheContainer>
  </div>
</template>

<script>
import SubHeader from '~/components/organisms/SubHeader'
import TheContainer from '~/components/atoms/TheContainer'
// import TheSection from '~/components/atoms/TheSection'

export default {
  components: {
    SubHeader,
    TheContainer
    // TheSection
  },
  props: {
    kikaku_name: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
