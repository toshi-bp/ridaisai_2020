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
            <p class="groups__description">
              先日発表した通り、新型コロナウイルス感染症拡大の影響により、2020年度野田地区理大祭の対面での開催を中止とさせていただきました。
            </p>
            <p class="groups__description">
              現在、部活動・サークルをはじめとする課外活動についても不透明な状況が続いていると思います。<br>そのような中で、「課外活動をはじめとした、大学生活の再起に努めたい」「大学生活において、貴重な発信の場を何とかして設けたい」といった思いのもと、2020年度野田地区理大祭をオンライン上にて開催する決定をいたしました。
            </p>
            <p class="groups__description">
              例年とは大きく異なる、模索しながらの活動とはなりますが、課外活動やその先の学生生活の発展に向けて、理大祭が少しでもお役に立てればと思います。<br>どうか、多くの団体様にご協力いただけますと幸いです。よろしくお願いします。
            </p>
            <h3>2020年度野田地区理大祭実行委員会 委員長<br>村上 岳</h3>
          </div>
          <div class="groups__document">
            <h2 class="groups__title">
              参加団体向け資料<!--small>（6月15日更新）(7月20日更新)</small-->
              <small>(9月29日更新)</small>
            </h2>
            <ul>
              <!-- <li> <a href="2020前期配布資料.pdf" target="_blank">2020年度前期配布資料(PDF版)</a><br>(6/24追記：P.28に記載されている『理大祭期間中に使用できない特殊場所』について変更を行いました。)</li>
              <li> <a href="2020規約書.pdf" target="_blank">2020年度規約書(PDF版)</a></li>
              <li><a href="場所希望申請.pdf" target="_blank">場所希望申請における新型コロナウイルス感染症対策について(PDF版)</a><br>(新型コロナウイルス感染症対策のため、各ブースの収容人数の上限を規定します。)</li> -->
              <li><a href="対面中止とオンライン告知.pdf" target="_blank">対面での開催中止のお知らせ及びオンライン開催の告知</a></li>
              <li><a href="参加団体募集要項.pdf" target="_blank">参加団体募集要項</a></li>
              <li><a href="後期配布資料その１.pdf" target="_blank">後期配布資料</a></li>
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
