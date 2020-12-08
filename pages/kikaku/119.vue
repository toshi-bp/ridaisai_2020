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
            <p class="kikaku-info__description">
              {{ KikakuList.description }}
            </p>
            <div>
              <h3 class="kikaku-info__title">
                【デジタル×書道】
              </h3>
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
                  />
                </TheColumn>
              </TheRow>
              <div
                v-for="video in videos"
                :key="video.id"
                class="kikaku-info__youtube"
              >
                <div>
                  <youtube
                    ref="youtube"
                    :video-id="video.videoId"
                    :fit-parent="true"
                    :resize="true"
                  />
                </div>
                <div>
                  <p
                    class="kikaku-info__youtube__title"
                  >
                    <span class="kikaku-info__youtube__index">作品名</span>
                    <br>{{ video.title }}
                  </p>
                  <p
                    class="kikaku-info__youtube__name"
                  >
                    <span class="kikaku-info__youtube__index">作成者</span>
                    <br>{{ video.name }}
                  </p>
                  <p
                    class="kikaku-info__youtube__description"
                  >
                    <span class="kikaku-info__youtube__index">説明</span>
                    <br>{{ video.description }}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 class="kikaku-info__title">
                【年賀状デザイン】
              </h3>
              <TheRow>
                <TheColumn
                  v-for="item in Shodo2"
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
                  />
                </TheColumn>
              </TheRow>
            </div>
            <div>
              <h3 class="kikaku-info__title">
                【クラシック】
              </h3>
              <TheRow>
                <TheColumn
                  v-for="item in Shodo3"
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
                  />
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
          :instagram="KikakuList.Instagram"
          :mail="KikakuList.mail"
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
  data () {
    return {
      videos: [
        {
          id: 1,
          videoId: 'B3uJF-Qemlg',
          title: '秋',
          name: 'N.N. 薬学部生命創薬科学科 2 年',
          description: '少しでも秋を感じていただけたらいいなと思います。'
        },
        {
          id: 2,
          videoId: '5pb6dCV3uxs',
          title: '秋',
          name: 'S.Y. 理工学部建築学科 3 年',
          description: '足早に過ぎゆく秋を、涼しく舞う風とともに'
        }
      ]
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
    },
    Shodo3 () {
      return Shodo.filter(item => item.id > 27)
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
    white-space: pre-line;
    margin-top: -1.5rem;
  }
  &__title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: -1rem;
  }
  &__button {
    text-align: center;
  }
  &__youtube {
    margin-bottom: 3rem;
    &__index {
      font-size: 1.2rem;
      font-weight:bold;
    }
  }
}
</style>
