<template>
  <div class="welcome__bg">
    <TheContainer class="welcome__container">
      <div>
        <Ticket class="welcome__ticket" />
        <div class="welcome__article">
          <div class="welcome__article__youtube">
            <div class="welcome__article__main">
              <WelcomeHeader>
                <template #title>
                  Live配信で理大祭を楽しむ
                </template>
              </WelcomeHeader>
              <div class="welcome__article__right">
                <div class="welcome__article__button">
                  <KikakuLabel
                    type="live"
                    href="/2020//kikaku/#live"
                  >
                    Live配信の企画はこちら
                  </KikakuLabel>
                </div>
                <div class="welcome__article__section">
                  <p class="welcome__article__text">
                    参加団体が理大祭のために日々培ってきた練習の成果をYouTubeLiveなどを通して生放送で披露します。
                  </p>
                </div>
              </div>
            </div>
            <div class="welcome__img1">
              <div class="welcome__img1__left">
                <img src="~@/assets/kikaku/FDpCNsRfJvy3oYNBawGZPJI9xkxhahoxosiHVnKG.jpeg" class="welcome__img1__left">
                <p class="welcome__img1__left__title">
                  「英語研究会」より
                </p>
              </div>
              <div class="welcome__img1__right">
                <img src="~@/assets/kikaku/SpMn1UMEEqkp0If1En6LmiNHiuqmPvGxH9JqjrpX.png" class="welcome__img1__right">
                <p class="welcome__img1__right__title">
                  「リモートロボット操縦体験プロジェクトチーム」より
                </p>
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
              <div class="welcome__article__right">
                <div class="welcome__article__button">
                  <KikakuLabel type="youtube" href="/2020/kikaku/#youtube">
                    動画企画はこちら
                  </KikakuLabel>
                </div>
                <div class="welcome__article__section">
                  <p class="welcome__article__text">
                    参加団体が理大祭のために練習、制作した様々なパフォーマンスを動画で楽しむことができます。
                  </p>
                </div>
              </div>
            </div>
            <div class="welcome__img2">
              <div class="welcome__img2__left">
                <img src="~@/assets/welcome/mq1-1.jpg" class="welcome__img2__left">
                <p class="welcome__img2__left__title">
                  「東京理科大学野田文化会天文研究会」より
                </p>
              </div>
              <div class="welcome__img2__right">
                <img src="~@/assets/welcome/mq1.jpg" class="welcome__img2__right">
                <p class="welcome__img2__right__title">
                  「メディアアートサークルC4's」より
                </p>
              </div>
            </div>
            <div class="welcome__article__main">
              <WelcomeHeader>
                <template #title>
                  Webサイトで理大祭を楽しむ
                </template>
              </WelcomeHeader>
              <div class="welcome__article__right">
                <div class="welcome__article__button">
                  <KikakuLabel
                    type="website"
                    href="/2020/kikaku/#website"
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
            <div class="welcome__img3">
              <div class="welcome__img3__left">
                <img src="~@/assets/welcome/B09賀正・富嶽.jpg" class="welcome__img3__left">
                <p class="welcome__img__left__title">
                  「東京理科大学野田文化会書道部」より
                </p>
              </div>
              <div class="welcome__img3__right">
                <img src="~@/assets/welcome/remi2.jpg" class="welcome__img3__right">
                <p class="welcome__img3__right__title">
                  「情報技術クラブ」より
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <LinkButton to="/">
          topページに戻る
        </LinkButton>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer'
import Ticket from '~/components/atoms/Ticket'
import WelcomeHeader from '~/components/organisms/WelcomeHeader'
import KikakuLabel from '~/components/atoms/KikakuLabel'
import LinkButton from '~/components/atoms/LinkButton'

import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    TheContainer,
    Ticket,
    WelcomeHeader,
    KikakuLabel,
    LinkButton
  },
  head () {
    return makeHead('オンライン理大祭の歩き方', 'オンライン理大祭の回り方について書かれています。まず初めにお読みください')
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
    background-color: rgba(#fff,0.8);
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
      margin-bottom: 7rem;
      background-color: rgba(#fff, 0.4);
      @include media-breakpoint-down(sm) {
        display: flex;
        flex-direction: column;
      }
    }
    &__title {
      font-size: 2rem;
      @include media-breakpoint-down(md) {
        font-size: 1.5rem;
      }
    }
    &__image {
      position: relative;
      width: calc(100% / 3);
      z-index: 1;
      @include media-breakpoint-down(sm) {
        width: 100%;
      }
    }
    &__text {
      font-size: 1.3rem;
      @include media-breakpoint-down(md) {
        font-size: 1.1rem;
      }
      padding: 1rem;
      text-align: left;
      @include media-breakpoint-down(sm) {
        text-align: center;
      }
    }
    &__right {
      display: flex;
      flex-direction: row;
      @include media-breakpoint-down(sm) {
        flex-direction: column-reverse;
        width: 100%;
        background-color: rgba(#fff,0.1);
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
        background-color: rgba(#fff,0.1);
      }
    }
    &__button {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      vertical-align: middle;

      @include media-breakpoint-down(sm) {
        margin-right: 0;
        margin: 0.5rem 0;
        display: block;
        text-align: center;
      }
    }
  }

  &__imgbox {
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
  &__img1 {
    display: flex;
    flex-direction: row;
    padding-bottom: 15rem;
    @include media-breakpoint-down(md) {
      padding-bottom: 10rem;
    }
    &__left {
      width: 90%;
      position: relative;
      left: 0;
      border-radius: 10px;
      &__title{
        @include media-breakpoint-down(md) {
          font-size: 0.8rem;
      }
      }
    }
    &__right {
      width: 90%;
      position: relative;
      top: 7rem;
      right: 0;
      border-radius: 10px;
      @include media-breakpoint-down(md) {
        top: 3rem;
      }
      &__title {
        position: relative;
        top: 7rem;
        @include media-breakpoint-down(md) {
          top: 3rem;
          font-size: 0.8rem;
        }
      }
    }
  }

  &__img2 {
    display: flex;
    flex-direction: row;
    padding-bottom: 20rem;
    @include media-breakpoint-down(md) {
      padding-bottom: 10rem;
    }
    &__left {
      width: 120%;
      position: relative;
      left: 0;
      border-radius: 10px;
      @include media-breakpoint-down(md) {
        width: 90%;
      }
      &__title{
        @include media-breakpoint-down(md) {
          font-size: 0.8rem;
        }
      }
    }
    &__right {
      width: 120%;
      position: relative;
      top: 9.5rem;
      right: 0;
      border-radius: 10px;
      @include media-breakpoint-down(md) {
        top: 3rem;
        width: 90%;
      }
      &__title {
        position: relative;
        top: 9.5rem;
        @include media-breakpoint-down(md) {
          top: 3rem;
        }
        @include media-breakpoint-down(md) {
          font-size: 0.8rem;
        }
      }
    }
  }

  &__img3 {
    display: flex;
    flex-direction: row;
    padding-bottom: 20rem;
    @include media-breakpoint-down(sm) {
      padding-bottom: 10rem;
    }
    &__left {
      width: 100%;
      position: relative;
      left: 0;
      border-radius: 10px;
      &__title{
        @include media-breakpoint-down(md) {
          font-size: 0.8rem;
        }
      }
    }
    &__right {
      width: 80%;
      position: relative;
      top: 9rem;
      right: 0;
      border-radius: 10px;
      @include media-breakpoint-down(sm) {
        top: 3rem;
      }
      &__title {
        position: relative;
        top: 9rem;
        @include media-breakpoint-down(md) {
          font-size: 0.8rem;
        }
        @include media-breakpoint-down(sm){
          top: 3rem;
        }
      }
    }
  }
}
.button {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
