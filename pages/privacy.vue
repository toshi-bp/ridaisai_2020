<template>
  <div>
    <TheContainer>
      <div class="privacy">
        <SubHeader>
          <template #title>
            プライバシーポリシー
          </template>
        </SubHeader>
        <TheSection>
          <div class="privacy__text">
            <p class="privacy__description">
              2020年度野田地区理大祭実行委員会(以下「委員会」)は、野田地区理大祭の運営における個人情報の取り扱いについて、以下の通りプライバシーポリシーを定め、以下の事項を遵守します。
            </p>
            <h3 class="privacy__title">
              適用範囲
            </h3>
            <p class="privacy__description">
              当プライバシーポリシーは、委員会の業務全てに適用されます。本部企画等において、個別のプライバシーポリシーにより個人情報の取り扱いを規定する場合には、個別規約も適用されます。本プライバシーポリシーと個別規約において矛盾が発生する場合には、個別規約が優先されます。
            </p>
            <h3 class="privacy__title">
              取得方法
            </h3>
            <p class="privacy__description">
              委員会は、参加団体・団体担当者等の個人情報を、参加登録等の各種申請、または個人情報を所持する御本人の同意を得たうえで直接もしくは通話・メール等を介しての取得、といった正当な手段によって取得し、偽りその他不正の手段によって取得しません。
            </p>
            <h3 class="privacy__title">
              利用目的
            </h3>
            <p class="privacy__description">
              委員会は、個人情報を以下の目的で利用します。
              <ol>
                <li>参加登録等の各種登録、及び各種申請に係る業務</li>
                <li>各種受付の際の本人確認</li>
                <li>理大祭参加団体向けウェブポータル・電話・メールによる「お問い合わせ」への返信</li>
                <li>委員会から各団体担当者への連絡</li>
                <li>その他、理大祭に関わる案内の提供</li>
              </ol>
              上記に記載されていない目的で個人情報の利用が必要となった場合は、必ず本人の承諾を受けてから利用することとします。
            </p>
            <h3 class="privacy__title">
              保護・管理体制
            </h3>
            <p class="privacy__description">
              委員会は、収集した個人情報の保護のため、セキュリティシステムの維持管理体制の整備、委員の教育等、必要な措置を講じ、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止する適切な措置を取ります。
            </p>
            <h3 class="privacy__title">
              第三者への提供
            </h3>
            <p class="privacy__description">
              委員会は、個人情報保護法等の法令に定めのある場合を除き、予めご本人の同意を得ることなしに、個人情報を第三者に提供いたしません。
            </p>
            <h3 class="privacy__title">
              照会・訂正・削除等
            </h3>
            <p class="privacy__description">
              委員会は、ご本人から自己の個人情報についての照会・訂正・削除等の請求がある場合、速やかに対応をいたします。理大祭ウェブポータルのお問い合わせフォームもしくは、理大祭実行委員会メールアドレス宛にお問い合わせください。
            </p>
            <h3 class="privacy__title">
              Cookieについて
            </h3>
            <p class="privacy__description">
              ウェブサイト、理大祭ウェブポータルのアクセス時に、Cookieと呼ばれる仕組みを使用して、ブラウザにデータを保存します。Cookieは、以下の目的で使用します。
              <ol>
                <li>ユーザーの設定内容の保存等お客様の利便性向上のため</li>
                <li>セッションの維持及び保護等セキュリティのため</li>
                <li>ウェブサイト、理大祭ウェブポータルの訪問回数及び利用形態の把握により、より良いサービスを提供するため</li>
              </ol>
              また、ウェブサイト、理大祭ウェブポータルにおいて、GoogleAnalytics を利用することがあります。GoogleAnalytics とは、Google が開発・提供している、ウェブサイトのアクセス解析サービスです。GoogleAnalytics では、Cookie を使用しています。また、GoogleAnalytics によるアクセス解析は、Google 社提供のオプトアウトツールを使用することで、これを拒否することができます。Cookie の使用可否については、ブラウザで設定することができます。詳細な設定方法については、お使いのブラウザベンダーにお問い合わせください。ただし、Cookie の保存拒否設定をされると、ログインが必要なサービスなど、野田地区理大祭が提供する一部サービスがご利用いただけない場合があります。
            </p>
            <h3 class="privacy__title">
              プライバシーポリシーの継続的改善
            </h3>
            <p class="privacy__description">
              委員会は、新規システムの導入、個人情報保護体制の強化、法令等の変更により、プライバシーポリシーを改定する場合があります。改定の際には、理大祭参加団体説明会、理大祭ウェブポータルなどで公表します。
            </p>
            <p class="privacy__description">
              令和ニ年5月1日制定
            </p>
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
import TheContainer from '~/components/atoms/TheContainer.vue'
import TheSection from '~/components/atoms/TheSection.vue'
import LinkButton from '~/components/atoms/LinkButton.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'

export default {
  components: {
    TheContainer,
    TheSection,
    LinkButton,
    SubHeader
  },
  head () {
    return makeHead('プライバシーポリシー', 'プライバシーポリシー')
  }
}
</script>

<style lang="scss" scoped>
.privacy {
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
