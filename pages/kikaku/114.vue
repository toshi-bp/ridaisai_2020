<template>
  <!-- 野田数学研究会 -->
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
            {{ KikakuList.description }}
            <div class="kikaku-info__pdf">
              <div class="kikaku-info__pdf__body">
                <iframe
                  src="kikaku/114/flat.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body">
                <iframe
                  src="kikaku/114/noda_suken_基礎数学ゼミ.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body">
                <iframe
                  src="kikaku/114/noda_suken_圏論ゼミ.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body">
                <iframe
                  src="kikaku/114/線形代数学ゼミ.pdf"
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
      default: 114
    }
  },
  computed: {
    Kikaku () {
      const id = 114 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '数学研究会',
      '野田数学研究会',
      require('~/assets/kikaku/LOJl7pO3UgRBkADyHwyTBCVMW3EUad8oltaW3Nwy.jpeg')
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
  &__pdf {
    &__body {
      height: 750px;
      width: 100%;
      margin-bottom: 1.5rem;
    }
    &__link {

    }
  }
}
</style>
