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
            <p class="kikaku-info__description">
              {{ KikakuList.description }}
            </p>
            <div class="kikaku-info__body">
              <LinkToContents
                :live-l-b="true"
                day="Sunday"
                start-time="15:00"
                end-time="16:30"
              />
            </div>
            <ClosedContents></ClosedContents>
            <!-- <div class="kikaku-info__youtube">
              <youtube
                ref="youtube"
                :video-id="videoId"
                :fit-parent="true"
                :resize="true"
              />
            </div>
            <div class="kikaku-info__pdf">
              <a href="kikaku/106/野田コミュニティハウス.pdf">野田コミュニティハウス.pdf</a>
              <div class="kikaku-info__pdf__body-pc">
                <iframe
                  src="kikaku/106/野田コミュニティハウス.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-sm">
                <iframe
                  src="kikaku/106/野田コミュニティハウス.pdf#zoom=20"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div>
              <LinkToContents
                :link="true"
                url="https://tus-ac-jp.zoom.us/j/93123439777?pwd=a0lzWlRobmF0bFNEb0xiaysvME1FZz09"
              >
                Zoomはこちら
              </LinkToContents>
            </div> -->
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
import ClosedContents from '~/components/atoms/ClosedContents'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer,
    LinkToContents,
    ClosedContents
  },
  props: {
    id: {
      type: Number,
      default: 106
    }
  },
  data () {
    return {
      videoId: 'OyTaWr3NU7o'
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
    margin-top: -1.5rem;
  }
  &__youtube {
    margin-bottom: 1.5rem;
  }
  &__pdf {
    margin-bottom: 3rem;
    &__body-pc {
        width: 100%;
        height: 750px;
        @include media-breakpoint-down(sm) {
          display: none;
        }
      }
    &__body-sm {
      width: 100%;
      height: 500px;
      @include media-breakpoint-up(sm) {
        display: none;
      }
    }
  }
}
</style>
