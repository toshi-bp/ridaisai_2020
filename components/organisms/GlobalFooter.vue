<template>
  <footer class="footer">
    <TheContainer>
      <div class="footer__row">
        <div class="footer__head">
          <img src="~/assets/image/symbol.svg" class="footer__logo">
          <p class="footer__copyright">
            2020年度 東京理科大学野田地区
            <br>理大祭実行委員会
          </p>
        </div>
        <div class="footer__ridaisai">
          <!-- <p class="footer__welcome">
            一緒に理大祭を作りませんか？
          </p> -->
          <div class="footer__list">
            <ul>
              <li class="footer__list__item">
                <a href="" target="blank" class="footer__list__link"><fa icon="desktop" />理大祭新歓ウェブサイト</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="https://twitter.com/noda_ridaisai"
                  target="blank"
                  class="footer__list__link"
                ><fa :icon="['fab', 'twitter']" />
                理大祭公式Twitter</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="mailto:festival@ed.tus.ac.jp"
                  class="footer__list__link"
                ><fa icon="envelope" />
                festival@ed.tus.ac.jp</a>
              </li>
            </ul>
            <ul>
              <li class="footer__list__item">
                <a href="" target="blank" class="footer__list__link">ホーム</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="https://twitter.com/noda_ridaisai"
                  target="blank"
                  class="footer__list__link"
                >実行委員会企画</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="mailto:festival@ed.tus.ac.jp"
                  class="footer__list__link"
                >模擬店・団体企画</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="mailto:festival@ed.tus.ac.jp"
                  class="footer__list__link"
                >ご来場の皆様へ</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="mailto:festival@ed.tus.ac.jp"
                  class="footer__list__link"
                >団体インタビュー</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="mailto:festival@ed.tus.ac.jp"
                  class="footer__list__link"
                >キャンパスマップ</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="mailto:festival@ed.tus.ac.jp"
                  class="footer__list__link"
                >プライバシーポリシー</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="mailto:festival@ed.tus.ac.jp"
                  class="footer__list__link"
                >リンク</a>
              </li>
              <li class="footer__list__item">
                <a
                  href="mailto:festival@ed.tus.ac.jp"
                  class="footer__list__link"
                >協賛企業一覧</a>
              </li>
            </ul>
            <ul>
              <li class="footer__list__item">
                <a href="" target="blank" class="footer__list__link">過去の理大祭公式サイト</a>
              </li>
            </ul>
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
  background: $color;
  padding: 2rem 0;
  @include media-breakpoint-down(sm) {
    text-align: center;
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
    &__item {
      display: inline-block;
      text-align:left;
      list-style: none;
      margin-bottom: 1rem;
    }
    &__item:last-child{
      margin: 0;
    }
    &__link{
      text-decoration: none;
      color: #fff;
    }
  }

  @include media-breakpoint-down(md) {
    &__list {
      &__item {
        list-style: none;
        color: #fff;
        font-size: 14px;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    &__list {
      margin: 0 auto 0 auto;
      padding-right: 2rem;
      position: static;
      display: block;
      text-align: center;

      &__item {
        list-style: none;
        color: #fff;
        display: block;
        text-align: center;
      }
    }
  }
}
</style>
