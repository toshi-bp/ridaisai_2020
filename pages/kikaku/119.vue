<template>
  <!-- 書道展2020 ー彩ー -->
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
            <p class="kikaku-info__description">{{ KikakuList.description }}</p>
            <div>
              <h3 class="kikaku-info__title">【デジタル×書道】</h3>
              <TheRow>
                <TheColumn
                  v-for="item in Shodo1"
                  :key="item.id"
                  :pcsize="12"
                  :spsize="12"
                >
                  <ImageFullScreen
                    :title="item.title"
                    :name="item.name"
                    :description="item.description"
                    :src="`kikaku/119/${item.imageUrl}`"
                    :download="true"
                  >
                  </ImageFullScreen>
                </TheColumn>
              </TheRow>
            </div>
            <div>
              <h3 class="kikaku-info__title">【年賀状デザイン】</h3>
              <TheRow>
                <TheColumn
                  v-for="item in Shodo2"
                  :key="item.id"
                  :pcsize="6"
                  :spsize="12"
                >
                  <ImageFullScreen
                    :title="item.title"
                    :name="item.name"
                    :description="item.description"
                    :src="`kikaku/119/${item.imageUrl}`"
                    :download="true"
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
import ImageFullScreen from '~/components/atoms/ImageFullScreen'
import TheSection from '~/components/atoms/TheSection'
import TheContainer from '~/components/atoms/TheContainer'
import TheColumn from '~/components/atoms/TheColumn'
import TheRow from '~/components/atoms/TheRow'

import KikakuList from '~/kikaku/KikakuList.json'
import Shodo from '~/kikaku/shodo.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    ImageFullScreen,
    TheSection,
    TheContainer,
    TheColumn,
    TheRow
  },
  props: {
    id: {
      type: Number,
      default: 119
    }
  },
  computed: {
    Kikaku () {
      const id = 119 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    },
    Shodo1 () {
      return Shodo.filter(item => item.id < 13)
    },
    Shodo2 () {
      return Shodo.filter(item => item.id > 12 && item.id < 28)
    }
  },
  head () {
    return makeHead(
      '書道展2020　ー彩ー',
      '東京理科大学野田文化会書道部',
      require('~/assets/kikaku/xEFqmJegXYkNfJCAqJTfDgO7j3DnuidcE5p1RHPs.jpeg')
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
    margin-bottom: 1rem;
  }
  &__title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: -1rem;
  }
  &__button {
    text-align: center;
  }
}
</style>
