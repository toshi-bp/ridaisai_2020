<template>
  <footer class="footer">
    <TheContainer>
      <div class="footer__row">
        <div>
          <div class="footer__head">
            <img src="~/assets/image/symbol.svg" class="footer__logo">
            <p class="footer__copyright">
              2020年度 東京理科大学野田地区
              <br>理大祭実行委員会
            </p>
          </div>
          <div class="footer__ridaisai">
            <div class="footer__list">
              <ul class="footer__list__ul">
                <li class="footer__list__item">
                  <a href="https://join.nodaridaisai.com" target="_blank" class="footer__list__link">
                    <fa icon="desktop" fixed-width />理大祭新歓ウェブサイト</a>
                </li>
                <li class="footer__list__item">
                  <a
                    href="https://twitter.com/noda_ridaisai"
                    target="blank"
                    class="footer__list__link"
                  ><fa :icon="['fab', 'twitter']" fixed-width />
                    理大祭公式Twitter</a>
                </li>
                <li class="footer__list__item">
                  <a
                    href="mailto:festival@nodaridaisai.com"
                    class="footer__list__link"
                  ><fa icon="envelope" fixed-width />
                    festival@nodaridaisai.com</a>
                </li>
              </ul>
              <ul class="footer__list__ul">
                <li class="footer__list__item">
                  <nuxt-link to="/" target="blank" class="footer__list__link">
                    ホーム
                  </nuxt-link>
                </li>
                <!-- <li class="footer__list__item">
                  <nuxt-link
                    to="/"
                    target="blank"
                    class="footer__list__link"
                  >
                    実行委員会企画
                  </nuxt-link>
                </li>
                <li class="footer__list__item">
                  <nuxt-link
                    to="/"
                    class="footer__list__link"
                  >
                    模擬店・団体企画
                  </nuxt-link>
                </li>
                <li class="footer__list__item">
                  <nuxt-link
                    to="/"
                    class="footer__list__link"
                  >
                    ご来場の皆様へ
                  </nuxt-link>
                </li>
                <li class="footer__list__item">
                  <nuxt-link
                    to="/"
                    class="footer__list__link"
                  >
                    団体インタビュー
                  </nuxt-link>
                </li>
                <li class="footer__list__item">
                  <nuxt-link
                    to="/"
                    class="footer__list__link"
                  >
                    キャンパスマップ
                  </nuxt-link>
                </li> -->
                <li class="footer__list__item">
                  <nuxt-link
                    to="/privacy/"
                    class="footer__list__link"
                  >
                    プライバシーポリシー
                  </nuxt-link>
                </li>
                <li class="footer__list__item">
                  <nuxt-link
                    to="/kikaku/"
                    class="footer__list__link"
                  >
                    企画一覧
                  </nuxt-link>
                </li>
                <!-- <li class="footer__list__item">
                  <nuxt-link
                    to="/"
                    class="footer__list__link"
                  >
                    協賛企業一覧
                  </nuxt-link>
                </li> -->
              </ul>
              <ul class="footer__list__ul">
                <li class="footer__list__item">
                  <a href="https://nodaridaisai.com/archives/" target="_blank" class="footer__list__link">
                    <fa icon="external-link-alt" fixed-width />過去の理大祭公式サイト</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TheContainer>
  </footer>
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
.footer {
  position: relative;
  bottom: 0;
  background: $color;
  padding: 3rem 0;
  @include media-breakpoint-down(md) {
    text-align: center;
  }
  @include media-breakpoint-up(md) {
    width: calc(100% - 240px);
  }
  &__row {
    display: flex;
    text-align: left;
    justify-content: center;
    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__head {
    flex: 0 0 8rem;
    display: flex;
    flex-direction: column;
  }

  &__logo {
    display: block;
    height: 8rem;
    margin: 0 auto 1rem;
    @include media-breakpoint-down(xs) {
      width: 15rem;
      }
  }

  &__copyright {
    color: #fff;
    font-family: $theme-font;
    display: block;
    font-size: 0.75rem;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    &__ul {
      margin-bottom: 1.5rem;
      &:last-child{
        margin: 0;
      }
    }
    &__item {
      display: inline-block;
      text-align:left;
      list-style: none;
      margin: 0 0.4rem 0.5rem 0;
    }
    &__item:last-child{
      margin: 0;
    }
    &__link{
      text-decoration: none;
      color: #fff;
      &:hover{
        color: $theme-color;
      }
      &:active{
        font-weight: bold;
      }
    }
  }

  @include media-breakpoint-down(md) {
    &__list {
      margin: 0 auto 0 auto;
      padding-right: 2rem;
      position: static;
      display: block;
      text-align: center;

      &__item {
        list-style: none;
        display: block;
        text-align: center;
        font-size: 14px;
        margin: 0 0 0.5rem;
      }
    }
  }
}
</style>
