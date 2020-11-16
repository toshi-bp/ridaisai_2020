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
          <div class="talent__img">
            <img src="" />
          </div>
          <div>
            <h3>企画紹介</h3>
            <p>8.6秒バズーカーとGO！皆川の2組のギャグが炸裂!<br />コロナで退屈な生活をお笑いで吹っ飛ばそう!</p>
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
            <p></p>
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
}
</style>
