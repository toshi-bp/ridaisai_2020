<template>
  <div class="talent">
    <div
      v-for="(KikakuList, id) in Kikaku"
      :key="id"
    >
      <KikakuInfoHeader
        :id="KikakuList.kikaku_id"
        :kikaku_name="KikakuList.kikaku_title"
        :circle_name="KikakuList.name"
        :type="KikakuList.type"
        :live="KikakuList.live"
        :youtube="KikakuList.youtube"
        :website="KikakuList.website"
      />
    </div>
    <TheContainer>
      <TheSection>
        <div>
          <div>
            <img src="~@/assets/events/commedians.jpg" class="talent__img">
          </div>
          <div>
            <h3>企画紹介</h3>
            <p>GO！皆川と8.6秒バズーカーの2組のネタが炸裂!<br>コロナで退屈な生活をお笑いで吹っ飛ばそう!</p>
          </div>
          <div>
            <h3>開催概要</h3>
            <h4>日時</h4>
            <p>11月22日(日) 15:30〜16:00</p>
            <h4>会場</h4>
            <p>オンライン 薬学ステージ(野田地区理大祭公式YouTube)</p>
          </div>
          <div>
            <h3>注意事項</h3>
            <ul>
              <li>
                配信される動画の撮影及びスクリーンショットはお控えください。
              </li>
              <li>
                アーカイブは残りませんので必ず指定の時間で観覧ください。
              </li>
              <!-- <li>
                コメント欄における暴言などは慎みましょう。
              </li> -->
            </ul>
          </div>
          <div
            v-for="(StageList, id) in Stage"
            :key="id"
          >
            <LinkToContents
              :live1311="true"
              :day="StageList.day"
              :start-time="StageList.startTime"
              :end-time="StageList.endTime"
            />
          </div>
        </div>
      </TheSection>
      <div class="button">
        <LinkButton to="/">
          topページへ戻る
        </LinkButton>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import KikakuInfoHeader from '~/components/molecules/KikakuInfoHeader'
import TheContainer from '~/components/atoms/TheContainer'
import TheSection from '~/components/atoms/TheSection'
import LinkButton from '~/components/atoms/LinkButton'
import LinkToContents from '~/components/atoms/LinkToContents'

import KikakuList from '~/kikaku/KikakuList.json'
import StageList from '~/kikaku/StageList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    TheContainer,
    TheSection,
    LinkButton,
    LinkToContents
  },
  computed: {
    Stage () {
      return StageList.filter(item => item.kikaku_id === 404)
    },
    Kikaku () {
      return KikakuList.filter(item => item.kikaku_id === 404)
    }
  },
  head () {
    return makeHead(
      'コロナを笑い飛ばせ！オンラインお笑いライブ',
      'GO！皆川と8.6秒バズーカーの2組のネタが炸裂!コロナで退屈な生活をお笑いで吹っ飛ばそう!',
      require('~/assets/events/commedians_twitter_5.png')
    )
  }
}
</script>

<style lang="scss" scoped>
.talent {
  padding-top: $global-header-height;
  padding-bottom: 2rem;
  background-image: url('~@/assets/image/bg.svg');
  background-size: repeat;
  &__img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 2rem;
  }
}
.button {
  text-align: center;
}
</style>
