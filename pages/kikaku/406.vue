<template>
  <!-- 空から理科大を見てみよう -->
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
            <ClosedContents>
            </ClosedContents>
            <!-- <div class="kikaku-info__youtube">
              <youtube
                ref="youtube"
                :video-id="videoId"
                :fit-parent="true"
                :resize="true"
              />
            </div> -->
          </TheSection>
        </TheContainer>
        <div class="kikaku-info__button">
          <LinkButton to="/">
            topページに戻る
          </LinkButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KikakuInfoHeader from '~/components/molecules/KikakuInfoHeader'
// import KikakuInfoBody from '~/components/molecules/KikakuInfoBody'
import TheSection from '~/components/atoms/TheSection'
import TheContainer from '~/components/atoms/TheContainer'
import LinkButton from '~/components/atoms/LinkButton'
import ClosedContents from '~/components/atoms/ClosedContents'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    // KikakuInfoBody,
    TheSection,
    TheContainer,
    LinkButton,
    ClosedContents
  },
  props: {
    id: {
      type: Number,
      default: 406
    }
  },
  data () {
    return {
      videoId: '_scsCAVzSvM'
    }
  },
  computed: {
    Kikaku () {
      const id = 406 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '空から野田キャンパスを見てみよう！',
      '理大祭実行委員会',
      require('~/assets/kikaku/drone.png')
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
    margin-top: -1.5rem;
  }
  &__youtube {
    margin-bottom: 1.5rem;
  }
  &__button {
    text-align: center;
  }
}
</style>
