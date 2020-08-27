<template>
  <div class="background">
    <TheContainer>
      <div class="groups">
        <SubHeader type="orange">
          <template #title>
            参加団体向け情報
          </template>
        </SubHeader>
        <TheSection>
          <div class="groups__text">
            <h2 class="groups__title">
              東京理科大学  野田キャンパスに在学中の皆様へ(2020年8月27日更新)
            </h2>
            <!-- <p class="groups__description">
              2020年度野田地区理大祭は、11月21日(土),22日(日)の2日間での実施を予定しております。
            </p>
            <p class="groups__description">
              もちろん、新型コロナウイルス感染拡大防止の影響を受けて、大規模イベントが自粛や延期となっているのは周知の事実です。そのため今後の状況によっては開催規模の縮小等の可能性もありますが、現時点では例年通り実施する予定です。
            </p>
            <p class="groups__description">
              現状、ほとんどの部活やサークルで先の見えない状況が続いていると思います。
            </p>
            <p class="groups__description">
              しかし、この苦しい期間が明けた先の学園祭は、全ての学生にとって大きな光となるはずです。
            </p>
            <p class="groups__description">
              今は理大祭の開催に向けて、実行委員会と部活・サークルとともに一丸となって取り組んでいきましょう。
            </p>
            <p class="groups__description">
              理大祭への積極的なご参加をよろしくお願いいたします。
            </p> -->
            <p class="groups__description">
              今般の新型コロナウイルス感染症拡大を受けて、野田地区理大祭の対面での開催は断念せざるを得なくなりました。
            </p>
            <p class="groups__description">
              多くの部活やサークル、全学生にとって、受け入れ難い結果であることは間違いないと思います。<br />実行委員会も同様に、対面開催に向けて進めてきた準備の跡を見ると、やりきれない気持ちが湧き起こります。
            </p>
            <p class="groups__description">
              実行委員会にとって、昨年まで開催されてきた理大祭を守り、そして来年以降につなげるためにも、何かしらの形で2020年度野田地区理大祭をオンラインにて開催する決定をしました。
            </p>
            <p class="groups__description">
              これまでにない挑戦となるオンラインでの理大祭。<br />現時点で予想がつかないからこそ、そこに秘められた無限の可能性に、私たちは刺激を覚えます。
            </p>
            <p class="groups__description">
              想像を凌駕する、最高の学園祭を創り上げましょう。<br /><!--詳細が決まり次第、参加募集などの発信を行いますので、これからも理大祭に向けた積極的な参加をよろしくお願いします。-->
            </p>
            <p class="groups__description">
              理大祭への積極的なご参加をよろしくお願いいたします。
            </p>
            <h3>2020年度野田地区理大祭実行委員会 委員長<br>村上 岳</h3>
          </div>
          <div class="groups__document">
            <h2 class="groups__title">
              参加団体向け資料<!--small>（6月15日更新）(7月20日更新)</small-->
              <small>(8月27日更新)</small>
            </h2>
            <ul>
              <!-- <li> <a href="2020前期配布資料.pdf" target="_blank">2020年度前期配布資料(PDF版)</a><br>(6/24追記：P.28に記載されている『理大祭期間中に使用できない特殊場所』について変更を行いました。)</li>
              <li> <a href="2020規約書.pdf" target="_blank">2020年度規約書(PDF版)</a></li>
              <li><a href="場所希望申請.pdf" target="_blank">場所希望申請における新型コロナウイルス感染症対策について(PDF版)</a><br>(新型コロナウイルス感染症対策のため、各ブースの収容人数の上限を規定します。)</li> -->
              <li><a href="対面中止とオンライン告知.pdf" target="_blank">対面での開催中止のお知らせ及びオンライン開催の告知</a></li>
              <li><a href="参加団体募集要項.pdf" target="_blank">参加団体募集要項</a></li>
            </ul>
            <h2 class="groups__title">
              理大祭ウェブポータルのURLはこちら
            </h2>
            <a href="https://portal.nodaridaisai.com" target="_blank">https://portal.nodaridaisai.com/</a>
            <p>(※注意：PCのブラウザの動作環境によっては、正常に動作しないことがあります。あらかじめご了承ください。なお、Google Chrome及びSafariでの動作は確認しているので、PCで動作しない方はこれらのブラウザで上記URLから再度アクセスをよろしくお願いいたします。)</p>
            <h2 class="groups__title" />
          </div>
        </TheSection>
        <div class="linkbutton">
          <LinkButton to="/">
            topページへ →
          </LinkButton>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead.js'
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
  },
  head () {
    return makeHead('参加団体向け情報', '団体向け情報はこちら')
  }
}
</script>

<style lang="scss" scoped>
.background{
  background-color: rgba(#fff,0.8);
  // background-image: linear-gradient(180deg, $theme-color 0%, #ffffff 99%, #c9e7ff 100%);
}

.groups {
  padding-top: $global-header-height;
  &__text {
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 1.5rem;
    font-family: $sub-font;
    margin-bottom: 1rem;
    @include media-breakpoint-down(sm) {
      font-size: 1.2rem;
      }
    @include media-breakpoint-down(xs) {
      font-size: 1.1rem;
      }
  }

  &__description {
    line-height: 1.5;
  }
}

.linkbutton{
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
}
</style>
