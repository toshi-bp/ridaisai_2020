<template>
  <!-- 情報技術クラブ -->
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
            <ClosedContents>
            </ClosedContents>
            <!-- <div>
              <TheRow>
                <TheColumn
                  v-for="item in ITC"
                  :key="item.id"
                >
                  <ImageFullScreen
                    :src="`kikaku/210/${item.imageUrl}`"
                  />
                </TheColumn>
              </TheRow>
              <div class="kikaku-info__pdf">
                <div class="kikaku-info__pdf__body">
                  <iframe
                    src="kikaku/210/bacon1.pdf#zoom=27"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div class="kikaku-info__pdf__body">
                  <iframe
                    src="kikaku/210/bacon2.pdf#zoom=27"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div class="kikaku-info__pdf__body">
                  <iframe
                    src="kikaku/210/KS.pdf#zoom=27"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
              <div class="kikaku-info__youtube">
                <youtube
                  ref="youtube"
                  :video-id="videoId"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
            </div> -->
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
// import ImageFullScreen from '~/components/atoms/ImageFullScreen'
// import TheRow from '~/components/atoms/TheRow'
// import TheColumn from '~/components/atoms/TheColumn'
import ClosedContents from '~/components/atoms/ClosedContents'

import KikakuList from '~/kikaku/KikakuList.json'
import ITC from '~/kikaku/ITC.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer,
    // ImageFullScreen,
    // TheRow,
    // TheColumn
    ClosedContents
  },
  props: {
    id: {
      type: Number,
      default: 210
    }
  },
  data () {
    return {
      videoId: '2DpXeUbmjs0'
    }
  },
  computed: {
    Kikaku () {
      const id = 210 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    },
    ITC () {
      return ITC
    }
  },
  head () {
    return makeHead(
      '情報技術クラブ',
      '情報技術クラブ',
      require('~/assets/kikaku/itc.png')
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
  &__pdf {
    width: 100%;
    display: grid;
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
    @include media-breakpoint-down(md) {
      display: block;
    }
    &__body {
      display: inline-flex;
      flex-direction: column;
      height: 350px;
      margin-bottom: 1rem;
      @include media-breakpoint-down(md) {
        width: 100%;
      }
    }
  }
  &__description {
    white-space: pre-line;
    margin-top: -1.5rem;
  }
  &__youtube {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
