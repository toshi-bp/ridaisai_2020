<template>
  <!-- ピアノコンサート -->
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
              <h2>Live配信</h2>
              <a href="kikaku/104/ピアノコンサート(Live配信)program.pdf">ピアノコンサート(Live配信)program</a>
              <LinkToContents
                :live1311="true"
                day="Saturday"
                start-time="10:00"
                end-time="12:00"
              >
                Live配信会場はこちら
              </LinkToContents>
            </div>
            <a href="kikaku/104/ピアノコンサートprogram.pdf">ピアノコンサート(動画)program</a>
            <div class="kikaku-info__youtube">
              <h3 class="kikaku-info__youtube__title">
                ①宿命/藤原聡<br>
                <span class="kikaku-info__youtube__name">
                  理工学部応用生物科学科1年山本由珠
                </span>
              </h3>
              <p class="kikaku-info__youtube__text">
                宿命は2019年夏の高校野球「熱闘甲子園」のテーマソングだったのでご存じの方も多いかと思います。この曲を聴くととても元気がでるので大好きな曲です。
              </p>
              <ClosedContens>
              </ClosedContens>
              <!--
              <youtube
                ref="youtube"
                :video-id="videoId"
                :fit-parent="true"
                :resize="true"
              />-->
            </div>
            <div class="kikaku-info__youtube">
              <h3 class="kikaku-info__youtube__title">
                ②夜に駆ける/YOASOBI<br>
                <span class="kikaku-info__youtube__name">
                  理工学部電子電気情報工学科1年NaTsu@dw
                </span>
              </h3>
              <p class="kikaku-info__youtube__text">
                ある日友達とこの曲いいよねーって話をしてたら無性に弾きたくなったので弾いてみました！
              </p>
              <ClosedContens>
              </ClosedContens>
              <!--
              <youtube
                ref="youtube"
                :video-id="videoId2"
                :fit-parent="true"
                :resize="true"
              />
              -->
            </div>
            <div class="kikaku-info__youtube">
              <h3 class="kikaku-info__youtube__title">
                ③夜に駆ける/YOASOBI <br>
                <span class="kikaku-info__youtube__name">
                  基礎工学部材料工学科1年4040
                </span>
              </h3>
              <p class="kikaku-info__youtube__text">
                軽やかで格好良い曲だと思います夜に早歩きくらいのテンポになってしまいました
              </p>
              <ClosedContens>
              </ClosedContens>
              <!--
              <youtube
                ref="youtube"
                :video-id="videoId3"
                :fit-parent="true"
                :resize="true"
              />
              -->
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
import LinkToContents from '~/components/atoms/LinkToContents'

import KikakuList from '~/kikaku/KikakuList.json'

import makeHead from '~/utils/makeHead.js'
import ClosedContens from '~/components/atoms/ClosedContents'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer,
    LinkToContents,
    ClosedContens
  },
  props: {
    id: {
      type: Number,
      default: 104
    }
  },
  data () {
    return {
      videoId: '3K4UW0-J7CY',
      videoId2: 'pClAIG-QPSw',
      videoId3: '4rbk6XXw9dU'
    }
  },
  computed: {
    Kikaku () {
      const id = 104 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'ピアノ演奏動画',
      '東京理科大学ピアノの会',
      require('~/assets/kikaku/9JcqRQHBWJ0fld4j9fMsduKWDby8B9BWBfoaS8Oz.jpeg')
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
  &__youtube {
    width: 100%;
    margin-bottom: 1.5rem;
    &__title {
      font-size: 1.3rem;
    }
    &__name {
      font-size: 1.1rem;
    }
    &__text {
      font-size: 1rem;
    }
  }
  &__description {
    white-space: pre-line;
    margin-top: -1.5rem;
  }
}
</style>
