<template>
  <!-- ここにはタイトルとコンテンツのテンプレートを作成 -->
  <div>
    <TheContainer>
      <SubHeader>
        <template #title>
          {{ kikaku_name }}
        </template>
      </SubHeader>
      <KikakuLabel
       :type="type"
      >
      {{
        {
          academic: '学術系',
          musical: '音楽系',
          cultual: '文化系',
          exhibition: '展示系'
        }[type]
      }}
      </KikakuLabel>
    </TheContainer>
  </div>
</template>

<script>
import SubHeader from '~/components/organisms/SubHeader'
import TheContainer from '~/components/atoms/TheContainer'
import KikakuLabel from '~/components/atoms/KikakuLabel'
// import TheSection from '~/components/atoms/TheSection'

export default {
  components: {
    SubHeader,
    TheContainer,
    KikakuLabel
    // TheSection
  },
  props: {
    kikaku_name: {
      type: String
    },
    type: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
