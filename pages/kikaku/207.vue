<template>
  <!-- イラスト研究会 -->
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
            <!-- <h4>
              コンテンツはこちら(クリックすると全画面表示ができます)
            </h4>
            <TheRow>
              <TheColumn
                v-for="item in Illust"
                :key="item.id"
                :pcsize="6"
                :spsize="12"
              >
                <ImageFullScreen
                  :src="`kikaku/207/${item.imageUrl}`"
                />
              </TheColumn>
            </TheRow>
            <div class="kikaku-info__pdf">
              <a href="kikaku/207/部内誌『Queue!』 2020夏.pdf">部内誌『Queue!』 2020夏</a>
              <div class="kikaku-info__pdf__body-pc">
                <iframe
                  src="kikaku/207/部内誌『Queue!』 2020夏.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-sm">
                <iframe
                  src="kikaku/207/部内誌『Queue!』 2020夏.pdf#zoom=20"
                  width="100%"
                  height="100%"
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
import Illust from '~/kikaku/Illust.json'
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
      default: 207
    }
  },
  computed: {
    Kikaku () {
      const id = 207 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    },
    Illust () {
      return Illust
    }
  },
  head () {
    return makeHead(
      'イラスト研究会',
      'イラスト研究会',
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
  &__description {
    white-space: pre-line;
    margin-top: -1.5rem;
  }
}
</style>
