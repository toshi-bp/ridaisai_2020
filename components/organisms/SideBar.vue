<template>
  <div>
    <div class="side-bar">
      <nuxt-link to="/">
        <img src="~@/assets/image/symbol_white.svg" class="side-bar__img">
      </nuxt-link>
      <h2 class="side-bar__title">
        <span>野田地区理大祭2020</span><br>メニュー
      </h2>
      <ul class="side-bar__list">
        <li class="side-bar__list__item">
          <nuxt-link to="/">
            <fa icon="home" class="side-bar__list__item__icon" />
            <span class="side-bar__list__item__text">Home</span>
          </nuxt-link>
        </li>
        <li class="side-bar__list__item">
          <nuxt-link to="/kikaku/">
            <fa icon="star" class="side-bar__list__item__icon" />
            <span class="side-bar__list__item__text">企画一覧</span>
          </nuxt-link>
        </li>
        <!-- <li class="side-bar__list__item">
          <nuxt-link to="/kikaku/">
            <fa icon="video" class="side-bar__list__item__icon" />
            <span class="side-bar__list__item__text">Live配信</span>
          </nuxt-link>
        </li> -->
        <!-- <li class="side-bar__list__item">
          <a href="https://twitter.com/noda_ridaisai" >
            <fa :icon="['fab', 'twitter']" fixed-width class="side-bar__list__item__icon" />
            <span class="side-bar__list__item__text">@noda_ridaisai</span>
          </a>
        </li> -->
      </ul>
      <img src="~@/assets/image/symbol_white.svg" class="side-bar__img">
    </div>
    <div class="footer-nav">
      <ul class="footer-nav__list">
        <li class="footer-nav__list__item">
          <nuxt-link to="/">
            <fa icon="home" class="footer-nav__list__item__icon" />
            <span class="footer-nav__list__item__text">Home</span>
          </nuxt-link>
        </li>
        <li class="footer-nav__list__item">
          <nuxt-link to="/kikaku/">
            <fa icon="star" class="footer-nav__list__item__icon" />
            <span class="footer-nav__list__item__text">企画一覧</span>
          </nuxt-link>
        </li>
        <!-- <li class="footer-nav__list__item">
          <nuxt-link to="/kikaku/">
            <fa icon="video" class="footer-nav__list__item__icon"/>
            <span class="footer-nav__list__item__text">Live配信</span>
          </nuxt-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.side-bar {
  width: 100%;
  height: 100%;
  // background-image: linear-gradient(180deg, $theme-color, $sub-color);
  // background-image: linear-gradient(180deg, $theme-color 0%, #ffffff 99%, #c9e7ff 100%);
  background-color: rgba($sub-color, 1.0);
  color: #fff;
  &__title {
    padding-top: calc(#{$global-header-height} + 1rem + 5rem);
    font-size: 1.5rem;
    color: #fff;
    font-family: $sub-font;
    margin-left: 2.5rem;

  }
  &__img {
    width: 180px;
    margin-left: 2rem;
    // padding-top: $global-header-height;
    user-select: none;
    position: fixed;
    top: 5rem;
  }
  &__list {
    list-style: none;
    // padding-top: calc(#{$global-header-height} + 1rem);
    &__item {
      color: #fff;
      text-decoration: none;
      transition: 0.2s ease all;
      &__icon {
        color: #fff;
        font-size: 1.25rem;
        text-decoration: none;
      }
      &__text {
        color: #fff;
        font-size: 1.25rem;
        text-decoration: none;
        font-family: $sub-font;
      }
      &:hover {
        background-color: $theme-color;
      }
    }
  }
  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.footer-nav {
  @include media-breakpoint-up(md) {
    display: none;
  }
    width: 100%;
    display: block;
    position: fixed;
    bottom: 0;
    padding-top: 1rem;
    z-index: 9800;
    background-color: #fff;
    box-shadow: 0 -5px 8px rgba($color, 0.1);
    &__list {
      display: flex;
      flex-direction: row;
      margin-left: -2rem;
      &__item {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        transition: 0.2s ease all;
        text-decoration: none;
        width: calc(100% / 2);
        &__icon {
          display: flex;
          font-size: 1.3rem;
          margin: 0 auto;
          color: $theme-color;
        }
        &__text {
          display: flex;
          font-size: 0.7rem;
          color: $theme-color;
          font-family: $sub-font;
        }
        &:hover,&:focus {
          // background-color: $theme-color;
          // color: #fff;
          // text-decoration: none;
        }
      }
    }
}
</style>
