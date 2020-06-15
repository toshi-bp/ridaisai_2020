<template>
  <div class="backpanel">
    <TheContainer class="container">
      <div class="head">
        <div class="head__header">
          <a href="https://line.me/R/ti/p/%40065bhskt" target="_blank"><img src="~/assets/icons/LINE.png" class="head__header__logo"></a>
          <a href="https://twitter.com/noda_ridaisai" target="_blank"><img src="~/assets/icons/Twitter.svg" alt="twitter" class="head__header__logo"></a>
          <a href="https://instagram.com/noda_ridaisai" target="_blank"><img src="~/assets/icons/Instagram.svg" class="head__header__logo__insta"></a>
        </div>
        <div class="head__box">
          <img src="~/assets/image/symbol.svg" class="head__logo">
          <div class="head__main">
            <p class="head__main__lead">
              <span>Tokyo University of Science</span><br />
              <span>TUS festival @ Noda</span><br />
              <span>2020 November 21st,22nd 10:00～17:00</span>
            </p>
          </div>
          <div class="button__group">
            <LinkButton2 to="/groups/">
              参加団体向け情報
            </LinkButton2>
          </div>
          <div class="button__company">
            <LinkButton2 to="/companies/">
              企業協賛に関して
            </LinkButton2>
          </div>
           <span class="head__tooltip"><fa :icon="['fas', 'angle-down']" fixed-width />下にスクロール</span>
        </div>
      </div>
        <div>
          <HomeUpdate />
        </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
import LinkButton2 from '~/components/atoms/LinkButton2.vue'
import HomeUpdate from '~/components/molecules/HomeUpdate.vue'

export default {
  components: {
    TheContainer,
    LinkButton2,
    HomeUpdate
  }
}
</script>

<style lang="scss" scoped>
.head {
  height: 100vh;
  $header-height: 5rem;
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
    width: 45rem;
    display: block;
    margin: 5rem auto 0;
    @include media-breakpoint-down(md) {
      width: 38rem;
      margin: 5rem auto 0;
    }
    @include media-breakpoint-down(sm) {
      width: 20rem;
      margin: 3rem auto 0;
    }
    @include media-breakpoint-down(xs) {
      width: 18rem;
      margin: 2rem auto 0;
    }
  }

  &__main {
    margin: 0 auto;
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
        font-size: 0.9rem;
       }
       @include media-breakpoint-down(xs) {
        font-size: 0.8rem;
       }
      &__text {
        display: inline-block;
      }
    }
  }

  &__tooltip {
    $font-size: 0.9rem;
    $translate-x: translate(-50%);
    margin-top: 2rem;
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

    animation: 10s ease tooltip both;
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
        opacity: 0;
        visibility: visible;
      }
    }
  }
}

.backpanel{
  background-color: $theme-color;
  background-image: linear-gradient(180deg, $theme-color 0%, #ffffff 99%, #c9e7ff 100%);
}

.container{
  background-color: rgba(#fff,0.9);
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
