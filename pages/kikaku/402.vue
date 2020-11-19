<template>
  <!-- ご飯企画 -->
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
            <h3>企画紹介</h3>
            <p class="kikaku-info__description">{{ KikakuList.description }}</p>
            <div
              v-for="S in Food"
              :key="S.id"
              class="kikaku-info__contents"
            >
              <!-- <h2>{{ S.group }}</h2> -->
              <h3>{{ S.title }}</h3>
              <p v-html="S.description">{{ S.description }}</p>
              <div
                class="kikaku-info__youtube"
              >
                <youtube
                  ref="youtube"
                  :video-id="S.videoId"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
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
// // import MarkdownPreview from '~/components/atoms/MarkdownPreview'
import LinkButton from '~/components/atoms/LinkButton'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  data  () {
    return {
      Food: [
        {
          id: 1,
          title: '定食',
          description: '- YouTube「3キャンパスで比べる！理科大メシ　定食編」',
          videoId: 'B9lZXvz66Qo'
        },
        {
          id: 2,
          title: '丼もの',
          description: 'YouTube「3キャンパスで比べる！理科大メシ　丼もの編」',
          videoId: 'SyofNzrDoPs'
        },
        {
          id: 3,
          title: 'カレー',
          description: 'YouTube「3キャンパスで比べる！理科大メシ　カレー編」',
          videoId: '5eectGS-rQg'
        },
        {
          id: 4,
          title: '麺',
          description: 'YouTube「3キャンパスで比べる！理科大メシ　麺編」',
          videoId: '6ABjeA9r7SA'
        }
      ]
    }
  },
  components: {
    KikakuInfoHeader,
    // KikakuInfoBody,
    TheSection,
    TheContainer,
    // MarkdownPreview,
    LinkButton
  },
  props: {
    id: {
      type: Number,
      default: 402
    }
  },
  computed: {
    Kikaku () {
      const id = 402 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '3キャンパスで比べる！理科大メシ',
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
  &__contents {
    margin-bottom: 2rem;
  }
}
</style>
