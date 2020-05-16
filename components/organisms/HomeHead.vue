}<template>
  <div class="head">
    <TheContainer>
      <div class="head__header" >
        <img src="~/assets/icons/Line.png" class="head__header__logo">
        <img src="~/assets/icons/Twitter.svg" class="head__header__logo">
        <img src="~/assets/icons/Instagram.svg" class="head__header__logo">
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
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'

export default {
  components: {
    TheContainer
  }
}
</script>

<style lang="scss" scoped>
.head {
  $logo-width: 45rem;
  $header-height: 10rem;
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
        margin: 0;
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
      padding: 3rem 0 17rem;
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
      max-width: 20rem;
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
        font-size: 0.8rem;
    }
      &__text {
        display: inline-block;
      }
    }
  }
}
</style>
