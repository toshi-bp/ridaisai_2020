<template>
  <div class="welcome__bg">
    <TheContainer>
      <div class="welcome__ticket">
        <!-- <img src="~@/assets/image/ticket.svg"  class="welcome__ticket__body"/> -->
        <Ticket />
        <div class="welcome__article">
          <div class="welcome__article__youtube">
            <div class="welcome__article__title">
              <WelcomeHeader>
                <template #title>
                  Youtubeで理大祭を楽しむ
                </template>
              </WelcomeHeader>
            </div>
            <div class="welcome__article__main">
              <img src="~@/assets/image/symbol.svg" class="welcome__article__image">
              <div class="welcome__article__right">
                <div class="welcome__article__section">
                  <p class="welcome__article__text">
                    参加団体が理大祭のために作成した様々なパフォーマンスを動画で楽しむことができます。
                  </p>
                </div>
                <div class="welcome__article__button">
                  <LinkButton to="/">Youtubeの企画はこちら</LinkButton>
                </div>
              </div>
            </div>
            <div class="welcome__article__title">
              Live配信で理大祭を楽しむ
            </div>
            <div class="welcome__article__main">
              <img src="~@/assets/image/symbol.svg" class="welcome__article__image">
              <div class="welcome__article__right">
                <div class="welcome__article__section">
                  <p class="welcome__article__text">
                    参加団体が理大祭のために日々培ってきた練習の成果をYouTubeLiveを通して生放送で披露します。
                  </p>
                </div>
                <div class="welcome__article__button">
                  <LinkButton to="/">Live配信の企画はこちら</LinkButton>
                </div>
              </div>
            </div>
            <div class="welcome__article__title">
              Webサイトで理大祭を楽しむ
            </div>
            <div class="welcome__article__main">
              <img src="~@/assets/image/symbol.svg" class="welcome__article__image">
              <div class="welcome__article__right">
                <div class="welcome__article__section">
                  <p class="welcome__article__text">
                    参加団体が理大祭のために作成した様々な作品(画像系)をこの理大祭Webサイト上で楽しむことができます。
                  </p>
                </div>
                <div class="welcome__article__button">
                  <LinkButton to="/">Webサイトの企画はこちら</LinkButton>
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
import LinkButton from '~/components/atoms/LinkButton'
import WelcomeHeader from '~/components/organisms/WelcomeHeader'

export default {
  components: {
    TheContainer,
    Ticket,
    LinkButton,
    WelcomeHeader
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
    background-image: url('~@/assets/image/bg.svg');
    background-size: repeat;
  }
  &__ticket {
    padding-top: 2rem;
    width: 100%;
    &__body {
      user-select: none;
    }
  }
  &__article {
    &__main {
      margin-bottom: 5rem;
    }
    &__title {
      font-size: 2rem;
    }
    &__image {
      width: 50%;
      z-index: 1;
    }
    &__right {
      display: inline-block;
      width: 40%;
    }
    &__section {
      display: inline-block;
      margin-bottom: 1rem;
      padding: 1rem;
      text-align: center;
      background-color: rgba(#fff, 0.8);
      border-radius: 5px;
    }
    &__button {
      display: inline-block;
      text-align: right;
      vertical-align: middle;
    }
  }
}
</style>
