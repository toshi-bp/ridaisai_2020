}<template>
  <div class="head">
    <div class ="backpanel">
      <TheContainer class="container">
        <div class="head__header" >
          <a href="https://line.me/R/ti/p/%40065bhskt" target="_blank"><img src="~/assets/icons/Line.png" class="head__header__logo"></a>
          <a href="https://twitter.com/noda_ridaisai" target="_blank" ><img src="~/assets/icons/Twitter.svg" alt="twitter" class="head__header__logo"></a>
          <a href="https://instagram.com/noda_ridaisai"><img src="~/assets/icons/Instagram.svg" class="head__header__logo"></a>
        </div>
        <div class="head__flex">
          <img src="~/assets/image/symbol.svg" class="head__logo">
          <div class="head__main">
            <p class="head__main__lead">
              <span>2020年度東京理科大学</span>
              <span>野田地区理大祭</span>
            </p>
            <p class="head__main__lead">
              11月 21日11:00 〜 16:00
            </p>
          </div>
          <div class="button">
            <LinkButton to="/">参加団体向け情報</LinkButton>
          </div>
        </div>
        <span class="head__tooltip">下にスクロール</span>
        <HomeUpdate />
      </TheContainer>
    </div>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
import LinkButton from '~/components/atoms/LinkButton.vue'
import HomeUpdate from '~/components/molecules/HomeUpdate.vue'

export default {
  components: {
    TheContainer,
    LinkButton,
    HomeUpdate
  }
}
</script>

<style lang="scss" scoped>
.head {
  $logo-width: 45rem;
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
      &:last-child{
        // margin: 0;
      }
    }
  }

  &__flex {
    display: flex;
    height: calc(100vh - #{$header-height});
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 0 15rem;
    @include media-breakpoint-down(sm) {
      padding: 5rem 0 12rem;
    }
  }

  &__logo {
    // flex-basisはflew-direction方向のアイテムの長さ
    max-width: $logo-width;
    display: block;
    width: 100%;
    height: auto;
    margin: 0 0 auto;
    @include media-breakpoint-down(sm) {
      flex: none;
      max-width: 25rem;
    }
  }

  &__main {
    max-width: $logo-width;
    @include media-breakpoint-down(sm) {
      flex: none;
      padding: 0;
      max-width: 100%;
    }
    &__lead {
      font-family: $sub-font;
      font-size: 1.5rem;
      margin: 0 0 0.5rem;
      @include media-breakpoint-down(sm) {
        font-size: 0.9rem;
    }
      &__text {
        display: inline-block;
      }
    }
  }
  &__tooltip {
    $font-size: 0.9rem;
    $translate-x: translate(-50%);
    position: absolute;
    line-height: 1;
    font-size: $font-size;
    top: calc(-#{$font-size} - 1.5rem);
    left: 50%;
    white-space: nowrap;
    color: $color;
    background: #fff;
    padding: 0.25rem 0.75rem;
    border-radius: 18px;
    border: 1px solid #{$theme-color};
  }
}

.backpanel{
 background-color: $theme-color;
background-image: linear-gradient(180deg, $theme-color 0%, #ffffff 99%, #c9e7ff 100%);
}

.container{
  background-color: rgba(#fff,0.9);
}

.button {
  text-align: center;
  margin-top: 2rem;
}
</style>
