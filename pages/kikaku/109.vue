<template>
  <!-- DOC×錦江町 再リノベコンペ -->
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
            <!-- <div
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
            </div> -->
            <div>
              <LinkToContents
                :link="true"
                url="https://www.youtube.com/playlist?list=PLl3dtZKrEFdZeDpsstL1F8BNoNoQ4D8E5"
              >
                コンテンツはこちら<br>https://www.youtube.com/playlist?list=PLl3dtZKrEFdZeDpsstL1F8BNoNoQ4D8E5
              </LinkToContents>
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
      default: 109
    }
  },
  data () {
    return {
      videoIds: [
        {
          id: 1,
          videoId: 'OkgWT3Ypscw'
        },
        {
          id: 2,
          videoId: 'iuOEnfdfvWw'
        },
        {
          id: 3,
          videoId: 'NVVJWG3xGc0'
        }
      ]
    }
  },
  computed: {
    Kikaku () {
      const id = 109 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'Space Delivery',
      '建築サークルDOC',
      require('~/assets/kikaku/FZUusVOewVwcAJ3hGikjP7WH7oiL2l63iUVuRa1G.jpeg')
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
