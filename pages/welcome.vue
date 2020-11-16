<template>
  <div class="welcome__bg">
    <TheContainer class="welcome__container">
      <div>
        <Ticket class="welcome__ticket"/>
        <div class="welcome__article">
          <div class="welcome__article__youtube">
            <div class="welcome__article__main">
              <WelcomeHeader>
                <template #title>
                  Live配信で理大祭を楽しむ
                </template>
              </WelcomeHeader>
              <!-- <img src="~@/assets/image/symbol.svg" class="welcome__article__image"> -->
              <div class="welcome__article__right">
                <div class="welcome__article__button">
                  <KikakuLabel
                    type="live"
                    href="/kikaku/#live"
                  >
                    Live配信の企画はこちら
                  </KikakuLabel>
                </div>
                <div class="welcome__article__section">
                  <p class="welcome__article__text">
                    参加団体が理大祭のために日々培ってきた練習の成果をYouTubeLiveを通して生放送で披露します。
                  </p>
                </div>
              </div>
            </div>
            <div class="welcome__article__main">
              <div class="welcome__article__title">
                <WelcomeHeader>
                  <template #title>
                    動画で理大祭を楽しむ
                  </template>
                </WelcomeHeader>
              </div>
              <!-- <img src="~@/assets/image/symbol.svg" class="welcome__article__image"> -->
              <div class="welcome__article__right">
                <div class="welcome__article__button">
                  <KikakuLabel type="youtube" href="/kikaku/#youtube">
                    動画企画はこちら
                  </KikakuLabel>
                </div>
                <div class="welcome__article__section">
                  <p class="welcome__article__text">
                    参加団体が理大祭のために練習、制作した様々なパフォーマンスを動画で楽しむことができます。
                  </p>
                </div>
              </div>
              <!-- <div
                class="welcome__imgbox"
              >
                <div>
                  <img src="~@/assets/kikaku/SpMn1UMEEqkp0If1En6LmiNHiuqmPvGxH9JqjrpX.png" class="welcome__imgbox__1" />
                </div>
              </div> -->
            </div>
            <!-- <div class="welcome__article__title">
              Webサイトで理大祭を楽しむ
            </div> -->
            <div class="welcome__article__main">
              <WelcomeHeader>
                <template #title>
                  Webサイトで理大祭を楽しむ
                </template>
              </WelcomeHeader>
              <!-- <img src="~@/assets/welcome/website_1.jpg" class="welcome__article__image"> -->
              <div class="welcome__article__right">
                <div class="welcome__article__button">
                  <KikakuLabel
                    type="website"
                    href="/kikaku/#website"
                    class="welcome__label"
                  >
                    Webサイトで楽しむ企画はこちら
                  </KikakuLabel>
                </div>
                <div class="welcome__article__section">
                  <p class="welcome__article__text">
                    参加団体が理大祭のために作成した様々なコンテンツをこの理大祭Webサイト上で楽しむことができます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
// import LinkButton2 from '~/components/atoms/LinkButton2.vue'
// import LinkButton3 from '~/components/atoms/LinkButton3.vue'
import TheContainer from '~/components/atoms/TheContainer'
import Ticket from '~/components/atoms/Ticket'
import WelcomeHeader from '~/components/organisms/WelcomeHeader'
import KikakuLabel from '~/components/atoms/KikakuLabel'

export default {
  components: {
    TheContainer,
    Ticket,
    WelcomeHeader,
    KikakuLabel
    // LinkButton2,
    // LinkButton3
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  &__bg {
    padding-top: $global-header-height;
    padding-bottom: 2rem;
    background-image: url('~@/assets/image/footprint.svg');
    background-size: repeat;
    // background-color: #BCEDF7;
    background-color: rgba(#fff,0.8);
  }
  &__container {
    // background-color: rgba(#fff,0.5);
  }
  &__ticket {
    width: 100%;
    margin-bottom: 10rem;
    &__body {
      user-select: none;
    }
  }
  &__article {
    &__main {
      margin-bottom: 10rem;
      background-color: rgba(#fff, 0.8);
      // padding-bottom: 1rem;
      @include media-breakpoint-down(sm) {
        display: flex;
        flex-direction: column;
      };
    }
    &__title {
      font-size: 2rem;
    }
    &__image {
      position: relative;
      width: 50%;
      z-index: 1;
      @include media-breakpoint-down(sm) {
        width: 100%;
      }
    }
    &__text {
      font-size: 1.3rem;
      padding: 1rem;
      text-align: left;
      @include media-breakpoint-down(sm) {
        text-align: center;
      }
    }
    &__right {
      display: flex;
      flex-direction: row;
      // margin-left: 1.5rem;
      @include media-breakpoint-down(sm) {
        flex-direction: column-reverse;
        width: 100%;
      }

      &__imagebox {
        width: 100%;
        height: 500px;
        &__item {
          // display: flex;
          // flex-direction: row;
          max-width: 25%;
        }
      }
    }
    &__section {
      display: flex;
      width: 70%;
      margin: 0 1rem 1rem 1rem;
      padding: 1rem 0;
      text-align: center;
      background-color: rgba(#fff, 0.8);
      border-radius: 5px;
      @include media-breakpoint-down(sm) {
        width: 100%;
        margin: 0 0 1rem 0;
      }
    }
    &__button {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      margin-left: 1rem;

      @include media-breakpoint-down(sm) {
        margin-right: 0;
        margin: 0.5rem 0;
        display: block;
        text-align: center;
      }
    }
  }

  &__imgbox {
    // display: flex;
    width: 100%;
    height: 500px;
    &__item {
      display: flex;
      width: calc(100% / 3);
      flex-direction: row;
      position: relative;
    }
    &__1 {
      border-radius: 100%;
      height: 200px;
      width: auto;
      position: relative;
      top: 3rem;
      left: 1rem;
      @include media-breakpoint-down(sm) {
        width: 100%;
        height: auto;
      }
    }
  }
  &__label {
    text-align: center;
  }

}
</style>
