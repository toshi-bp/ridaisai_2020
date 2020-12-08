<template>
  <!-- 理科大 LGBT ALLY WEEK -->
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
            <div class="kikaku-info__youtube">
              <youtube
                ref="youtube"
                :video-id="videoId"
                :fit-parent="true"
                :resize="true"
              />
            </div>
            <div class="kikaku-info__pdf">
              <a href="kikaku/142/受験生に向けて（Spectrum).pdf">受験生に向けて（Spectrum)</a>
              <div class="kikaku-info__pdf__body-pc">
                <iframe
                  src="kikaku/142/受験生に向けて（Spectrum).pdf#zoom=50"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-sm">
                <iframe
                  src="kikaku/142/受験生に向けて（Spectrum).pdf#zoom=20"
                  width="100%"
                  height="100%"
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
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer
  },
  props: {
    id: {
      type: Number,
      default: 142
    }
  },
  data () {
    return {
      videoId: '4lBLAmV6Bu4'
    }
  },
  computed: {
    Kikaku () {
      const id = 142 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'ALLY WEEK',
      'spectrum',
      require('~/assets/kikaku/XmRuq0X9DP0LdUCAryyaz1S4eDTbr0GEoDDW3Yci.jpeg')
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
  &__youtube {
    margin: 1.5rem 0 1rem;
  }
  &__pdf {
    margin-bottom: 3rem;
    &__body-pc {
        width: 100%;
        height: 800px;
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
