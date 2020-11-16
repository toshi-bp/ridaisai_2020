<template>
  <div class="talent">
    <KikakuInfoHeader
      :id="404"
      kikaku_name="コロナを笑い飛ばせ！オンラインお笑いライブ"
      circle_name=""
      type="cultual"
      :live="true"
      :youtube="false"
      :website="false"
    >
    </KikakuInfoHeader>
    <TheContainer>
      <TheSection>
        <div>
          <div>
            <img src="~@/assets/events/commedians.jpg" class="talent__img" />
          </div>
          <div>
            <h3>企画紹介</h3>
            <p>GO！皆川と8.6秒バズーカーの2組のギャグが炸裂!<br />コロナで退屈な生活をお笑いで吹っ飛ばそう!</p>
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
                撮影禁止
              </li>
              <li>
                笑え
              </li>
              <li>
                ガッカリすな
              </li>
            </ul>
          </div>
        </div>
      </TheSection>
    </TheContainer>
  </div>
</template>

<script>
import KikakuInfoHeader from '~/components/molecules/KikakuInfoHeader'
import TheContainer from '~/components/atoms/TheContainer'
import TheSection from '~/components/atoms/TheSection'

export default {
  components: {
    KikakuInfoHeader,
    TheContainer,
    TheSection
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
    margin-bottom: 1rem;
  }
}
</style>
