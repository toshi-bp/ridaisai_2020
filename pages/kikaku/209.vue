<template>
  <!-- RICORA MUSIC TEAM -->
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
          :website="KikakuList.website"
        />

        <!-- ここにコンテンツを掲載するよ -->
        <TheContainer>
          <TheSection>
            <h3>企画紹介</h3>
            <p>{{ KikakuList.description }}</p>
            <div
              v-for="videos in videoIds"
              :key="videos. id"
              class="kikaku-info__youtube"
            >
              <youtube
                ref="youtube"
                :video-id="videos.videoId"
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

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  data () {
    return {
      videoIds: [
        {
          id: 1,
          videoId: 'Qgb-nk58MPU'
        },
        {
          id: 2,
          videoId: 'BPr5ci1ShEI'
        },
        {
          id: 3,
          videoId: 'V3yx87gFZyU'
        },
        {
          id: 4,
          videoId: 'xsf9PhgsoVg'
        },
        {
          id: 5,
          videoId: 'dk0Tm8c4N6g'
        },
        {
          id: 6,
          videoId: 'biLO81jSE24'
        },
        {
          id: 7,
          videoId: '-L7VhxYGJ6M'
        },
        {
          id: 8,
          videoId: '88IYlBb07h0'
        },
        {
          id: 9,
          videoId: '4558Gr70FDY'
        },
        {
          id: 10,
          videoId: 'svBYKaPHKSs'
        },
        {
          id: 11,
          videoId: 'IM_hLR33ZYM'
        },
        {
          id: 12,
          videoId: '9Yiwe29CMIM'
        },
        {
          id: 13,
          videoId: 'uh7U_juljD0'
        },
        {
          id: 14,
          videoId: 'aAefwAwsEM4'
        },
        {
          id: 15,
          videoId: 'AHZwsCis2IQ'
        }
      ]
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
      default: 209
    }
  },
  computed: {
    Kikaku () {
      const id = 209 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'RICORA\'s MUSIC 2020',
      'RICORA MUSIC TEAM',
      require('~/assets/kikaku/ricora.png')
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
    margin-bottom: 1.5rem;
  }
  &__description {
    white-space: pre-line;
  }
}
</style>
