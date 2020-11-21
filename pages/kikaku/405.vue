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
                :markdownHtml="PaperCraft1"
              ></MarkdownPreview>
              <div class="kikaku-info__youtube">
                <youtube
                  ref="youtube"
                  :video-id="videoId1"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
              <MarkdownPreview
                :markdownHtml="PaperCraft2"
              ></MarkdownPreview>
              <div class="kikaku-info__youtube">
                <youtube
                  ref="youtube"
                  :video-id="videoId2"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
              <p>また、実際に作成した飛行船は野田キャンパス・講義棟前に展示していますので、ステージに出演したサークル・団体の皆様はぜひ立ち寄って記念撮影をしたら青春の思い出になること間違いなし！</p>
            </div>
            <div class="kikaku-info__button">
            <LinkButton2
              href="https://twitter.com/intent/tweet?text=%23%E9%87%8E%E7%94%B0%E7%90%86%E5%A4%A7%E7%A5%AD%E9%A3%9B%E8%A1%8C%E8%88%B92020%0A%40noda_ridaisai"
              target="_blank"
            >
              <fa :icon="['fab', 'twitter']" fixed-width />Twitterに投稿する
            </LinkButton2>
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
import PaperCraft1 from '~/assets/markdown/405_1.md'
import PaperCraft2 from '~/assets/markdown/405_2.md'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'
import LinkButton2 from '~/components/atoms/LinkButton2'

export default {
  data () {
    return {
      videoId1: 'WTeUiDiXuC0',
      videoId2: 'cCimybxVMiI'
    }
  },
  components: {
    KikakuInfoHeader,
    // KikakuInfoBody,
    TheSection,
    TheContainer,
    MarkdownPreview,
    LinkButton,
    LinkButton2
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
    PaperCraft1 () {
      return PaperCraft1
    },
    PaperCraft2 () {
      return PaperCraft2
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
