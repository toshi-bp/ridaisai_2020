<template>
  <!-- 東京理科大学Ⅰ部漫画研究同好会 -->
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
            <p>{{ KikakuList.description }}</p>
            <div>
              <h4>コンテンツはこちら(画像をクリックすると全画面表示ができます。)↓</h4>
              <TheRow>
                <TheColumn
                  v-for="item in Manga"
                  :key="item.id"
                  :spsize="12"
                  :pcsize="6"
                >
                  <ImageFullScreen
                    :src="`kikaku/122/${item.imageUrl}`"
                  >
                  </ImageFullScreen>
                </TheColumn>
              </TheRow>
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
import ImageFullScreen from '~/components/atoms/ImageFullScreen'
import TheRow from '~/components/atoms/TheRow'
import TheColumn from '~/components/atoms/TheColumn'

import KikakuList from '~/kikaku/KikakuList.json'
import Manga from '~/kikaku/1manga.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer,
    ImageFullScreen,
    TheRow,
    TheColumn
  },
  props: {
    id: {
      type: Number,
      default: 122
    }
  },
  computed: {
    Kikaku () {
      const id = 122 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    },
    Manga () {
      return Manga
    }
  },
  head () {
    return makeHead(
      '東京理科大学Ⅰ部漫画研究同好会のイラスト展示',
      '東京理科大学Ⅰ部漫画研究同好会',
      require('~/assets/kikaku/keSegI10JeYR4zeY9JzoCgkLrdWYltVRGzijuwHA.jpeg')
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
}
</style>
