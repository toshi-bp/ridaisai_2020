<template>
  <!-- 東京理科大学Ⅰ部体育局吹奏楽部 -->
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
            <div>
              <LinkToContents
                :live="true"
                startTime="17:30"
                endTime="18:00"
              ></LinkToContents>
            </div>
            <div class="kikaku-info__youtube">
              <youtube
                ref="youtube"
                :video-id="videoId"
                :fit-parent="true"
                :resize="true"
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

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  data () {
    return {
      videoId: 'a8_CWDB1mLQ'
    }
  },
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
      default: 151
    }
  },
  computed: {
    Kikaku () {
      const id = 151 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '吹奏楽部onステージ～音符と休符の化学反応～',
      '東京理科大学Ⅰ部体育局吹奏楽部',
      require('~/assets/kikaku/lP2zzhqPmakF0sBh8airwVogsL0RftO8XrIHcjJg.png')
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
  &__youtube {
    margin: 3rem 0 1.5rem;
  }
  &__description {
    white-space: pre-line;
  }
}
</style>
