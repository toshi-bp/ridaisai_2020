<template>
  <div class="background">
    <TheContainer>
      <div class="companies">
        <SubHeader type="orange">
          <template #title>
            企業協賛に関して
          </template>
        </SubHeader>
        <TheSection>
          <div class="companies__text">
            <h2 class="companies__title">
              協賛のお願い
            </h2>
            <p class="companies__description">
              今年度、東京理科大学野田キャンパスでは11月21日(土),22日(日)に理大祭を開催いたします。
            </p>
            <p class="companies__description">
              我々東京理科大学野田地区理大祭実行委員会は、理大祭開催にあたり、協賛のお願いを行っております。協賛方法につきましては下記の二つがございます。
            </p>
            <ul class="companies__list">
              <li>実行委員会作成の理大祭公式パンフレット・ウェブサイトへの広告協賛</li>
              <li>イベント時に配布する玩具や飲食物、チケット等の物品協賛</li>
            </ul>
            <p class="companies__description">
              詳しくは以下の資料をご確認下さい。
            </p>
            <ul class="companies__list">
              <li><a href="kikakusho.pdf" target="_blank">2020年度野田地区理大祭企画書</a></li>
              <li><a href="brochure.pdf" target="_blank">2019年度野田地区理大祭パンフレット</a></li>
            </ul>
            <p class="companies__description">
              また、上記以外の協賛形式のご提案を承っております。下記お問い合わせアドレスにご連絡下さい。
            </p>
            <h2 class="companies__title">
              お問い合わせ
            </h2>
            <p class="companies__description">
              協賛にご協力いただける方や何かご不明な点がある際には下記の連絡先にご連絡下さい。
            </p>
            <ul>
              <li><a href="tel:04-7124-9880">Tel/Fax：04-7124-9880(実行委員会本部/野田学生会本部)</a></li>
              <li>
                <a
                  href="mailto:syougaibu@nodaridaisai.com"
                  @click="$ga.event('link', 'click', 'email', 1)"
                >
                  syougaibu@nodaridaisai.com</a>
              </li>
            </ul>
            <h2 class="companies__title">
              2020年7月20日追記
            </h2>
            <p class="companies__description">
              今年度の野田地区理大祭は新型コロナウイルス感染拡大防止のため、対面での開催が困難であると判断いたしました。<br />
              そのため現在、新規協賛企業の募集を一時停止しています。協賛企業の募集はオンライン開催の概要が決定次第再開いたします。<br />
              何卒ご理解とご協力をよろしくお願いいたします。
            </p>
          </div>
          <div class="companies__text" />
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
    return makeHead('企業協賛に関して', '企業協賛に関する情報はこちら')
  }
}
</script>

<style lang="scss" scoped>
.background{
  // background-color: rgba(#fff,0.9);
  // background-image: linear-gradient(180deg, $theme-color 0%, #ffffff 99%, #c9e7ff 100%);
}

.companies {
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
    @include media-breakpoint-down(sm) {
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
