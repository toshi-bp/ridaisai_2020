<template>
  <!-- 古典ギター同好会 -->
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
            <p class="kikaku-info__description">
              {{ KikakuList.description }}
            </p>
            <ClosedContents>
            </ClosedContents>
            <!--
            <div class="kikaku-info__youtube">
              <youtube
                ref="youtube"
                :video-id="videoId"
                :fit-parent="true"
                :resize="true"
              />
            </div>
            <div class="kikaku-info__youtube">
              <youtube
                ref="youtube"
                :video-id="videoId2"
                :fit-parent="true"
                :resize="true"
              />
            </div>
            <div class="kikaku-info__youtube">
              <youtube
                ref="youtube"
                :video-id="videoId3"
                :fit-parent="true"
                :resize="true"
              />
            </div>
            -->
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
import ClosedContents from '~/components/atoms/ClosedContents'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer,
    ClosedContents
  },
  props: {
    id: {
      type: Number,
      default: 206
    }
  },
  data () {
    return {
      videoId: 'TOZU3x78kCg',
      videoId2: 'WDnLFD7-nZc',
      videoId3: 'npi8Vw7MnJ4'
    }
  },
  computed: {
    Kikaku () {
      const id = 206 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '古典ギター同好会',
      '古典ギター同好会',
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
  &__youtube {
    margin-bottom: 1.5rem;
  }
  &__description {
    white-space: pre-line;
    margin-top: -1.5rem;
  }
}
</style>
