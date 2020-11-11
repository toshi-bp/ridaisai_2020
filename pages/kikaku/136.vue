<template>
  <!-- 東京理科大学野田文化会天文研究会 -->
  <div class="kikaku-info">
    <div
      v-for="(KikakuList, id) in Kikaku"
      :key="id"
    >
      <div KikakuList>
        <KikakuInfoHeader
          :id="KikakuList.kikaku_id"
          :kikaku_name="KikakuList.kikaku_title"
          :circle_name="KikakuList.name"
          :type="KikakuList.type"
          :live="KikakuList.live"
          :youtube="KikakuList.youtube"
          :website="KikakuList.website"
        />

        <!-- ここにコンテンツを掲載するよ -->
        <TheContainer>
          <TheSection>
            <h3>企画紹介</h3>
            <p class="kikaku-info__description">{{ KikakuList.description }}</p>
            <div class="kikaku-info__youtube">
              <div class="kikaku-info__youtube__body">
                <youtube
                  ref="youtube"
                  :video-id="videoId"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
              <div class="kikaku-info__youtube__body">
                <youtube
                  ref="youtube"
                  :video-id="videoId2"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
              <div class="kikaku-info__youtube__body">
                <youtube
                  ref="youtube"
                  :video-id="videoId3"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
              <div class="kikaku-info__youtube__body">
                <youtube
                  ref="youtube"
                  :video-id="videoId4"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
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

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  data () {
    return {
      videoId: 'prLY2nn6Spc',
      videoId2: 'a4s0eHACmMI',
      videoId3: 'ZUnjwPFdKXY',
      videoId4: '6BQQIL6KgHE'
    }
  },
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer
  },
  props: {
    id: {
      type: Number,
      default: 136
    }
  },
  computed: {
    Kikaku () {
      const id = 136 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'プラネタリウム講演',
      '東京理科大学野田文化会天文研究会',
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
  &__youtube{
    &__body {
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }
  &__description {
    white-space: pre-line;
  }
}
</style>
