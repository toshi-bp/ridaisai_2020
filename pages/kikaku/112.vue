<template>
  <!-- 野田漫画研究会 -->
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
            <div class="kikaku-info__body">
              <div class="kikaku-info__pdf__pc">
                <a href="kikaku/112/RIM42 原稿.pdf">RIM42原稿</a>
                <iframe
                  src="kikaku/112/RIM42 原稿.pdf"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
              <div class="kikaku-info__pdf__sp">
                <a href="kikaku/112/RIM42 原稿.pdf">RIM42原稿</a>
              </div>
              <div class="kikaku-info__pdf__pc">
                <a href="kikaku/112/TONE2020 原稿.pdf">TONE2020原稿</a>
                <iframe
                  src="kikaku/112/TONE2020 原稿.pdf"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
              <div class="kikaku-info__pdf__sp">
                <a href="kikaku/112/TONE2020 原稿.pdf">TONE2020原稿</a>
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
      default: 112
    }
  },
  computed: {
    Kikaku () {
      const id = 112 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '漫画公開',
      '野田漫画研究会',
      require('~/assets/kikaku/uxaC8dci2QQuCRIxphFQnr20qLKi9QQe7HFSqnY6.jpeg')
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
  &__body {
    margin-top: 1.5rem;
  }
  &__pdf {
    &__pc {
      width: 100%;
      height: 750px;
      margin-bottom: 1.5rem;
      @include media-breakpoint-down(md) {
        display: none;
      }
    }
    &__sp {
      display: none;
      @include media-breakpoint-down(md) {
        display: block;
      }
    }
  }
  &__description {
    white-space: pre-line;
  }
}
</style>
