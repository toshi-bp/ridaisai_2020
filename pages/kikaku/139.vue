<template>
  <!-- C4's 制作展 ～風が吹けば桶屋が儲かる～ -->
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
            <LinkToContents
              :link="true"
              url="https://note.com/solt_sauna/m/m7b3993240b70"
            >
              C4's 理大祭展示会場<br>
              コンテンツはこちら
            </LinkToContents>
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
      default: 139
    }
  },
  data () {
    return {
      videoId: 'rrIk2dkPuI0'
    }
  },
  computed: {
    Kikaku () {
      const id = 139 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      "C4's 制作展 ～風が吹けば桶屋が儲かる～",
      "メディアアートサークル C4's",
      require('~/assets/kikaku/BgPExZWi3SncWOQRGwcjkE90V3ZbQM6Mo2NFRCmi.png')
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
    margin: 1.5rem 0 1.5rem;
  }
  &__description {
    white-space: pre-line;
  }
}
</style>
