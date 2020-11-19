<template>
  <!-- 理系グッズ販売＆何でも相談所(高校生向け) -->
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
            <div class="kikaku-info__body">
              <LinkToContents
                :live="true"
                day="Sunday"
                startTime="15:00"
                endTime="16:30"
              >
              </LinkToContents>
            </div>
            <div class="kikaku-info__youtube">
              <youtube
                ref="youtube"
                :video-id="videoId"
                :fit-parent="true"
                :resize="true"
              />
            </div>
            <div class="kikaku-info__pdf">
              <a href="kikaku/106/野田コミュニティハウス.pdf">野田コミュニティハウス.pdf</a>
              <iframe
                src="kikaku/106/野田コミュニティハウス.pdf"
                width="100%"
                height="100%"
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
          :instagram="KikakuList.Instagram"
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
      videoId: 'OyTaWr3NU7o'
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
      default: 106
    }
  },
  computed: {
    Kikaku () {
      const id = 106 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '①あつまれ理系！～実用的な理系グッズ～②高校生何でも相談所',
      '野田国際コミュニティハウス',
      require('~/assets/kikaku/uGMskxmnkO7v2Gs06yxo9e1jdH3Ml6swu8inJUSx.jpeg')
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
  &__body {
    margin-top: 1.5rem;
  }
  &__description {
    white-space: pre-line;
  }
  &__youtube {
    margin-bottom: 1.5rem;
  }
  &__pdf {
    width: 100%;
    height: 750px;
    margin-bottom: 1.5rem;
    @include media-breakpoint-down(md) {
      height: 500px;
    }
  }
}
</style>
