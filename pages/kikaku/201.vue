<template>
  <!-- KOOLGEM -->
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
            <div>
              <LinkToContents
                :live="true"
                day="Sunday"
                start-time="17:30"
                end-time="18:30"
              />
            </div>
            <h4>ダンス動画はこちら</h4>
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
      default: 201
    }
  },
  data () {
    return {
      videoIds: [
        {
          id: 1,
          videoId: 'YUajA0M0wdM'
        },
        {
          id: 2,
          videoId: 'v25J2JminvM'
        },
        {
          id: 3,
          videoId: 'D-bllsSPozs'
        },
        {
          id: 4,
          videoId: 'GjValkysY64'
        },
        {
          id: 5,
          videoId: 'Qmq1HKQBYlY'
        },
        {
          id: 6,
          videoId: 'RsrafF20cDs'
        },
        {
          id: 7,
          videoId: 'DnPxNvOzkVQ'
        }
      ]
    }
  },
  computed: {
    Kikaku () {
      const id = 201 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'KOOLGEM',
      'KOOLGEM',
      require('~/assets/kikaku/koolgem.jpeg')
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
  }
  &__youtube {
    margin-bottom: 1.5rem;
  }
}
</style>
