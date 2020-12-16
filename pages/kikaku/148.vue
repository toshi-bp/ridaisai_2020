<template>
  <!-- 物理の世界 -->
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
            <!-- <div class="kikaku-info__pdf">
              <div class="kikaku-info__pdf__body-pc">
                <a href="kikaku/148/一階線形同次連立常微分方程式の解き方.pdf">一階線形同次連立常微分方程式の解き方</a>
                <iframe
                  src="kikaku/148/一階線形同次連立常微分方程式の解き方.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-sm">
                <a href="kikaku/148/一階線形同次連立常微分方程式の解き方.pdf">一階線形同次連立常微分方程式の解き方</a>
                <iframe
                  src="kikaku/148/一階線形同次連立常微分方程式の解き方.pdf#zoom=20"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-pc">
                <a href="kikaku/148/宇宙の起源と終わり.pdf">宇宙の起源と終わり</a>
                <iframe
                  src="kikaku/148/宇宙の起源と終わり.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-sm">
                <a href="kikaku/148/宇宙の起源と終わり.pdf">宇宙の起源と終わり</a>
                <iframe
                  src="kikaku/148/宇宙の起源と終わり.pdf#zoom=20"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-pc">
                <a href="kikaku/148/物理研究会ロボット班活動紹介.pdf">物理研究会ロボット班活動紹介</a>
                <iframe
                  src="kikaku/148/物理研究会ロボット班活動紹介.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-sm">
                <a href="kikaku/148/物理研究会ロボット班活動紹介.pdf">物理研究会ロボット班活動紹介</a>
                <iframe
                  src="kikaku/148/物理研究会ロボット班活動紹介.pdf#zoom=20"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-pc">
                <a href="kikaku/148/物理研究会Zoom質問受付のご案内.pdf">物理研究会Zoom質問受付のご案内</a>
                <iframe
                  src="kikaku/148/物理研究会Zoom質問受付のご案内.pdf"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="kikaku-info__pdf__body-sm">
                <a href="kikaku/148/物理研究会Zoom質問受付のご案内.pdf">物理研究会Zoom質問受付のご案内</a>
                <iframe
                  src="kikaku/148/物理研究会Zoom質問受付のご案内.pdf#zoom=20"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div>
              <LinkToContents
                :link="true"
                url="https://tus-ac-jp.zoom.us/j/99850846269?pwd=NTczNkJWcSs4VG5tRWR0ZTBnVWxkdz09"
              >
                <p class="kikaku-info__link">
                  Zoomのリンクはこちら<br>
                  11月21日(土)、11月22日(日) 10:00〜17:00
                </p>
              </LinkToContents>
            </div> -->
            <ClosedContents></ClosedContents>
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
import ClosedContents from '~/components/atoms/ClosedContents'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer,
    ClosedContents
  },
  props: {
    id: {
      type: Number,
      default: 148
    }
  },
  computed: {
    Kikaku () {
      const id = 148 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '物理の世界',
      '物理研究会',
      require('~/assets/kikaku/aFk1oE7Ss25DJdactVCwwOW1fLPCB0XjquEOQnr3.png')
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
    margin-bottom: 4rem;
      &__body-pc {
        width: 100%;
        height: 750px;
        margin-bottom: 1.5rem;
        @include media-breakpoint-down(sm) {
          display: none;
        }
      }
      &__body-sm {
        width: 100%;
        height: 500px;
        margin-bottom: 3rem;
        @include media-breakpoint-up(sm) {
          display: none;
        }
      }
    &__link {

    }
  }
  &__link {
    text-align: center;
  }
  &__description {
    white-space: pre-line;
    margin-top: -1.5rem;
  }
}
</style>
