<template>
  <!-- ここにはタイトルとコンテンツのテンプレートを作成 -->
  <div>
    <TheContainer>
      <SubHeader>
        <template #title>
          {{ kikaku_name }}
        </template>
      </SubHeader>
      <div class="kikaku-info__label">
        <KikakuLabel
         class="kikaku-info__label__main"
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
        <KikakuLabel
         class="kikaku-info__label__main"
         v-if="live"
         type="live"
        >
        ライブ配信
        </KikakuLabel>
      </div>
      <PushHistory
       :id="id"
      ></PushHistory>
    </TheContainer>
  </div>
</template>

<script>
import SubHeader from '~/components/organisms/SubHeader'
import TheContainer from '~/components/atoms/TheContainer'
import KikakuLabel from '~/components/atoms/KikakuLabel'
import PushHistory from '~/components/molecules/PushHistory'
// import TheSection from '~/components/atoms/TheSection'

export default {
  components: {
    SubHeader,
    TheContainer,
    KikakuLabel,
    PushHistory
    // TheSection
  },
  props: {
    kikaku_name: {
      type: String
    },
    type: {
      type: String
    },
    id: {
      type: Number
    },
    live: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.kikaku-info {
  &__label {
    margin-bottom: 1rem;
    &__main {
      margin-right: 0.5rem;
    }
  }
}
</style>
