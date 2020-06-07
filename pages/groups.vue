<template>
  <div class="background">
    <TheContainer>
      <div class="groups">
        <SubHeader>
          <template #title>団体向け情報</template>
        </SubHeader>
        <TheSection>
          <div>
            <h2>東京理科大学  野田キャンパスに在学中の皆様へ</h2>
            <p>2020年度野田地区理大祭は、11月21日(土),22日(日)の2日間での実施を予定しております。</p>
            <p>もちろん、新型コロナウイルス感染拡大防止のための影響を受けて、大規模イベントが自粛や延期となっているのは周知の事実です。そのため今後の状況によっては開催規模の縮小等の可能性もありますが、現時点では例年通り実施する予定です。</p>
            <p>現状、ほとんどの部活やサークルで先の見えない状況が続いていると思います。</p>
            <p>しかし、この苦しい期間が明けた先の学園祭は、全ての学生にとって大きな光となるはずです。</p>
            <p>今は理大祭の開催に向けて、実行委員会と部活・サークルとともに一丸となって取り組んでいきましょう。</p>
            <p>理大祭への積極的なご参加をよろしくお願いいたします。</p>
            <h3>2020年度野田地区理大祭実行委員 委員長<br />村上岳</h3>
          </div>
          <div>
            <h2>参加団体向け資料</h2>
            <a href="test.pdf" target="_blank">議案書よん(PDF版)</a>
            <h2>理大祭ウェブポータルのURLはこちら</h2>
            <a href="https://portal.nodaridaisai.com" target="_blank">https://portal.nodaridaisai.com/</a>
          </div>
        </TheSection>
        <div class="linkbutton">
          <LinkButton to="/">topページへ</LinkButton>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheSection from '~/components/atoms/TheSection.vue'
import TheContainer from '~/components/atoms/TheContainer.vue'
import LinkButton from '~/components/atoms/LinkButton.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'

export default {
  components: {
    TheSection,
    TheContainer,
    LinkButton,
    SubHeader
  }
}
</script>

<style lang="scss" scoped>
.background{
  background-color: rgba(#fff,0.9);
  background-image: linear-gradient(180deg, $theme-color 0%, #ffffff 99%, #c9e7ff 100%);
}

.groups {
  padding-top: $global-header-height;
}

.linkbutton{
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
}
</style>
