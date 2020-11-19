<template>
  <!-- ペーパークラフト企画 -->
  <div class="kikaku-info">
    <div
      v-for="(KikakuList, id) in Kikaku"
      :key="id"
    >
      <div>
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
            <!-- <h3>企画紹介</h3>
            <p class="kikaku-info__description">{{ KikakuList.description }}</p> -->
            <div>
              <MarkdownPreview
                :markdownHtml="PaperCraft"
              ></MarkdownPreview>
            </div>
          </TheSection>
        </TheContainer>
      </div>
      <div class="kikaku-info__button">
        <LinkButton to="/">topページに戻る</LinkButton>
      </div>
    </div>
  </div>
</template>

<script>
import KikakuInfoHeader from '~/components/molecules/KikakuInfoHeader'
// // import KikakuInfoBody from '~/components/molecules/KikakuInfoBody'
import TheSection from '~/components/atoms/TheSection'
import TheContainer from '~/components/atoms/TheContainer'
import MarkdownPreview from '~/components/atoms/MarkdownPreview'
import LinkButton from '~/components/atoms/LinkButton'
import PaperCraft from '~/assets/markdown/405.md'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    // KikakuInfoBody,
    TheSection,
    TheContainer,
    MarkdownPreview,
    LinkButton
  },
  props: {
    id: {
      type: Number,
      default: 405
    }
  },
  computed: {
    Kikaku () {
      const id = 405 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    },
    PaperCraft () {
      return PaperCraft
    }
  },
  head () {
    return makeHead(
      'ペーパークラフト',
      '理大祭実行委員会',
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
  &__description {
    white-space: pre-line;
  }
  &__button {
    text-align: center;
  }
}
</style>
