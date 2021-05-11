<template>
  <div class="backpanel">
    <div class="background">
      <div class="head">
        <TheContainer>
          <div class="head__header">
            <a href="https://lin.ee/UHWwtCc" target="_blank"><img src="~/assets/icons/LINE.png" class="head__header__logo"></a>
            <a href="https://twitter.com/noda_ridaisai" target="_blank"><img src="~/assets/icons/Twitter.svg" alt="twitter" class="head__header__logo"></a>
            <a href="https://instagram.com/noda_ridaisai" target="_blank"><img src="~/assets/icons/Instagram.svg" class="head__header__logo__insta"></a>
          </div>
          <div class="head__box">
            <img src="~/assets/image/symbol.svg" class="head__logo">
            <div class="head__main">
              <p class="head__main__lead">
                <span>Tokyo University of Science</span><br>
                <span>TUS festival @ Noda</span><br>
                <span>November 21st and 22nd, 2020 </span>
              </p>
            </div>
          </div>
        </TheContainer>
      </div>
      <div class="head__finish">
        <p class="head__finish__text">
          今年度の理大祭は終了しました。
        </p>
        <p class="head__finish__text">
          ご来場ありがとうございました。
        </p>
        <p class="head__finish__text__attention">
          (各コンテンツは12月20日(日)までの公開となります。)
        </p>
      </div>
      <div>
        <HomeBody />
      </div>
      <div>
        <TheContainer>
          <HomeUpdate />
        </TheContainer>
      </div>
    </div>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
// import LinkButton2 from '~/components/atoms/LinkButton2.vue'
import HomeBody from '~/components/molecules/HomeBody'
import HomeUpdate from '~/components/molecules/HomeUpdate.vue'

export default {
  components: {
    TheContainer,
    // LinkButton2,
    HomeBody,
    HomeUpdate
  }
}
</script>

<style lang="scss" scoped>
.head {
  height: 70vh;
  $header-height: 5rem;
  @include media-breakpoint-down(sm) {
    height: calc(60vh);
  }
  &__header{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    height: $header-height;

    &__logo{
      width: 3rem;
      margin-right: 2rem;
      @include media-breakpoint-down(sm) {
        width: 2rem;
        margin-right: 1rem;
      }

    &__insta {
      width: 4rem;
      @include media-breakpoint-down(sm) {
        width: 2.7rem;
      }
    }
    }
  }

  &__logo {
    width: 40rem;
    display: block;
    margin: 3rem auto 0;
    @include media-breakpoint-down(md) {
      width: 32rem;
      margin: 5rem auto 0;
    }
    @include media-breakpoint-down(sm) {
      width: 20rem;
      margin: 3rem auto 0;
    }
    @include media-breakpoint-down(xs) {
      width: 15rem;
      margin: 2rem auto 0;
    }
  }

  &__main {
    margin: 0 auto;
    @include media-breakpoint-up(lg) {
      display: none;
    }
    &__lead {
      font-family: $sub-font;
      font-size: 1.5rem;
      margin-top: 3rem;
      @include media-breakpoint-down(xs) {
        margin-top: 2rem;
       }
      margin-bottom: 0;
      text-align: center;
       @include media-breakpoint-down(sm) {
        font-size: 1.1rem;
       }
       @include media-breakpoint-down(xs) {
        font-size: 1.1rem;
       }
      &__text {
        display: inline-block;
      }
    }
  }

  &__tooltip {
    $font-size: 1.2rem;
    $translate-x: translate(-50%);
    margin-top: 5rem;
    display: block;
    line-height: 1;
    font-size: $font-size;
    white-space: nowrap;
    color: $color;
    padding: 0.25rem 0.75rem;
    // border-radius: 9px;
    // border: 1px solid #{$theme-color};
    position: relative;
    left: 50%;
    text-align: center;

    animation: 5s ease tooltip both;
    animation-iteration-count: infinite;
    @keyframes tooltip {
      from {
        transform: #{$translate-x} translateY(-0.5rem);
      }
      25% {
        transform: #{$translate-x} translateY(0);
      }
      50% {
        transform: #{$translate-x} translateY(-0.5rem);
      }
      75% {
        transform: #{$translate-x} translateY(0);
        opacity: 1;
        visibility: visible;
      }
      to {
        transform: #{$translate-x} translateY(-0.5rem);
        opacity: 1;
        visibility: visible;
      }
    }
    @include media-breakpoint-down(sm) {
      font-size: 1rem;
      margin-top: 7rem;
    }
  }
  &__finish {
    background-color: $sub-color;
    opacity: 0.6;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @include media-breakpoint-down(sm) {
      height: calc(40vh - 3rem);
    }
    &__text {
      font-size: 1.5rem ;
      font-family: $sub-font;
      font-weight: normal;
      text-align: center;
      color: #FFF;
      // padding: 2.1rem 0rem;
      @include media-breakpoint-down(xs) {
        font-size: 1rem;
        // padding: 1.5rem 0;
      }
      &__attention {
        font-size: 1.2rem;
        font-family: $sub-font;
        color: #fff;
        @include media-breakpoint-down(xs) {
          font-size: 0.8rem;
        }
      }
    }
  }
}

.backpanel{
  // background-color: $theme-color;
  background-image: linear-gradient(180deg, $theme-color 0%, #ffffff 99%, #c9e7ff 100%);
  background-color: rgba(#fff,0.9);
}

.background {
  width: 100%;
  background-color: rgba(#fff, 0.6);
}

.button__group {
  text-align: center;
  margin-top: 4rem;
  @include media-breakpoint-down(xs) {
    margin-top: 3rem;
    }
}

.button__company {
  text-align: center;
  margin-top: 1rem;
}
</style>
