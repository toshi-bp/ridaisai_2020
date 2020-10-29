<template>
  <!-- ここにはタイトルとコンテンツのテンプレートを作成 -->
  <div>
    <TheContainer>
      <SubHeader>
        <template #title>
          {{ kikaku_name }}
        </template>
      </SubHeader>
      <h3 class="kikaku-info__name">
        {{ circle_name }}
      </h3>
      <div class="kikaku-info__label">
        <KikakuLabel
          class="kikaku-info__label__main"
          :type="type"
          linkComponentIs='a'
          :href="`/2020/kikaku/#${type}`"
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
          v-if="live"
          :live="live"
          class="kikaku-info__label__main"
          type="live"
          linkComponentIs='a'
          href="kikaku/#live"
        >
          Live配信
        </KikakuLabel>
        <KikakuLabel
          v-if="youtube"
          :youtube="youtube"
          class="kikaku-info__label__main"
          type="youtube"
          linkComponentIs='a'
          href="kikaku/#youtube"
        >
          動画
        </KikakuLabel>
        <KikakuLabel
          v-if="website"
          :website="website"
          class="kikaku-info__label__main"
          type="website"
          linkComponentIs='a'
          href="kikaku/#website"
        >
          Webサイト
        </KikakuLabel>
      </div>
      <PushHistory
        :id="id"
      />
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
    circle_name: {
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
    },
    youtube: {
      type: Boolean,
      default: false
    },
    website: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.kikaku-info {
  &__name {
    font-family: $sub-font;
    margin-bottom: 1rem;
  }
  &__label {
    margin-bottom: 1rem;
    @include media-breakpoint-down(sm) {
        margin-bottom: 0.5rem;
      }
    &__main {
      margin-right: 0.5rem;
      @include media-breakpoint-down(sm) {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
