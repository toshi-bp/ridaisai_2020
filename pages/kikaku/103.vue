<template>
  <!-- 東京理科大学野田同好会ジャグリング部DOMINUS SOMNI -->
  <div class="kikaku-info">
    <div
    >
      <div>
        <KikakuInfoHeader
          :id="KikakuList.kikaku_id"
          :kikaku_name="KikakuList.kikaku_title"
          :circle_name="KikakuList.name"
          :type="KikakuList.type"
          :live="KikakuList.live"
          :youtube="KikakuList.youtube"
          :website="KikakuList.website"
        />

        <TheContainer>
          <TheSection>
            <h3>企画紹介</h3>
            <p class="kikaku-info__description">
              {{ KikakuList.description }}
            </p>
            <div>
              <LinkToContents
                :live1311="true"
                day="Saturday"
                start-time="13:30"
                end-time="13:45"
              />
            </div>
          </TheSection>
        </TheContainer>

        <KikakuInfoBody
          :image-url="require(`@/assets/kikaku/${KikakuList.image_filename}`)"
          :name="KikakuList.name"
          :introduce="KikakuList.introduction"
          :url="KikakuList.url"
          :twitter="KikakuList.twitter_ids"
        />
      </div>
    </div>
  </div>
</template>

<script>
import KikakuInfoHeader from '~/components/molecules/KikakuInfoHeader'
import KikakuInfoBody from '~/components/molecules/KikakuInfoBody'
import TheSection from '~/components/atoms/TheSection'
import TheContainer from '~/components/atoms/TheContainer'
import LinkToContents from '~/components/atoms/LinkToContents'

import makeHead from '~/utils/makeHead.js'

import KikakuList from '~/kikaku/KikakuList.json'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer,
    LinkToContents
  },
  props: {
    id: {
      type: Number,
      default: 103
    }
  },
  computed: {
    Kikaku: () => {
      const id = 103 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'ジャグリングパフォーマンス',
      '東京理科大学野田同好会ジャグリング部DOMINUS SOMNI',
      require('~/assets/kikaku/airship.png')
    )
  }
}
</script>

<style lang="scss" scoped>
.kikaku-info {
  padding-top: $global-header-height;
  padding-bottom: 2rem;
  background-image: url('~@/assets/image/bg.svg');
  background-size: repeat;
  &__description {
    white-space: pre-line;
    margin-top: -1.5rem;
  }
}
</style>
