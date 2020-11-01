<template>
  <div>
    <div class="side-bar">
      <img src="~@/assets/image/symbol.png" />
      <ul class="side-bar__list">
        <li class="side-bar__list__item">
          <nuxt-link to="/">
            <fa icon="home" />
            Home
          </nuxt-link>
        </li>
        <li class="side-bar__list__item">
          <nuxt-link to="/kikaku/">
            <fa icon="star" />
            企画一覧
          </nuxt-link>
        </li>
        <li class="side-bar__list__item">
          <nuxt-link to="/kikaku/">
            <fa icon="video" />
            Live配信
          </nuxt-link>
        </li>
        <li class="side-bar__list__item">
          <a href="https://twitter.com/noda_ridaisai" >
            <fa :icon="['fab', 'twitter']" fixed-width />
            @noda_ridaisai
          </a>
        </li>
      </ul>
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
  background-color: linear-gradient(180deg, $sub-color, $theme-color);
  color: #fff;
  position: fixed;
  right: 0;
  @include media-breakpoint-down(md) {
    display: none;
  }
  &__list {
    &__item {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      transition: 0.2s ease all;
      &:hover {
        background-color: $theme-color;
      }
    }
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
