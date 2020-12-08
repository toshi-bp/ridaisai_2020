<template>
  <!-- 鉄道研究会 -->
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
            <!-- <div class="kikaku-info__pdf">
              <a href="kikaku/111/鉄研.pdf" class="kikaku-info__pdf__link">鉄研.pdf</a>
              <div class="kikaku-info__pdf__body-pc">
                <iframe
                  src="kikaku/111/鉄研.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-sm">
                <iframe
                  src="kikaku/111/鉄研.pdf#zoom=20"
                  width="100%"
                  height="100%"
                />
              </div>
            </div> -->
            <CloseContents></CloseContents>
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
import CloseContents from '~/components/atoms/ClosedContents'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer,
    CloseContents
  },
  props: {
    id: {
      type: Number,
      default: 111
    }
  },
  computed: {
    Kikaku () {
      const id = 111 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '鉄道研究会',
      '鉄道研究会',
      require('~/assets/kikaku/GD0DcS7jHCVS5fr7t9p83BGU4q3Wxfg7Wvjju40V.jpeg')
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
    &__link {
      margin: 1rem 0 1rem;
    }
  }
  &__description {
    white-space: pre-line;
    margin-top: -1.5rem;
  }
}
</style>
