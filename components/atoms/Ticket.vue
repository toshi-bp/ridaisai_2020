<template>
  <div class="ticket">
    <div class="ticket__upperline">
      ONLINE RIDAISAI
    </div>
    <div class="ticket__main">
      <div class="ticket__main__left">
        <h2 class="ticket__title">
          オンライン理大祭の歩き方
        </h2>
        <h2 class="ticket__description">
          オンライン理大祭には次の3つの楽しみ方があります。<br />それぞれについて知って理大祭を楽しもう!<br />このページを読んで気になる企画をCHECK!
        </h2>
        <p class="ticket__description">
          企画一覧はこちら
        </p>
        <div class="ticket__button">
          <KikakuLabel type="live" href="/2020/kikaku/#live" class="ticket__button__body">
            Live配信
          </KikakuLabel>
          <KikakuLabel type="youtube" href="/2020/kikaku/#youtube" class="ticket__button__body">
            動画
          </KikakuLabel>
          <KikakuLabel type="website" href="/2020/kikaku/#website" class="ticket__button__body">
            Webサイト
          </KikakuLabel>
        </div>
      </div>
      <!-- <div class="ticket__main__right">
        <img src="~@/assets/image/stamp.svg" class="ticket__main__right__stamp"/>
      </div> -->
    </div>
    <div class="ticket__bottomline">
    </div>
  </div>
</template>

<script>
import KikakuLabel from '~/components/atoms/KikakuLabel.vue'

export default {
  components: {
    KikakuLabel
  }

}
</script>

<style lang="scss" scoped>
.ticket {
  width: 100%;
  margin: 4rem auto;
  background-color: #FFFAEF;
  // background-color: #DFF1F7;

  &__upperline{
      height: 2rem;
      padding: 0.25rem 0.5rem 0.5rem;
      background-color: $theme-color;
      color: #fff;
      font-size: 1rem;
      font-family: $sub-font;
  }
  &__main{
      display: grid;
      grid-template-columns: 100% 1fr;
      padding: 2rem 1rem;
      background-color: #FFFAE6;
      @include media-breakpoint-down(sm) {
        grid-template-columns: 100% 1fr;
      }
    &__left{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 0;
    }
    &__right{
        display: flex;
        margin: 0;
        border-left: dashed 5px $muted;
        text-align: right;
        @include media-breakpoint-down(sm) {
          display: none;
        }
        &__stamp {
          width: 90%;
        }
    }
  }
  &__title{
      font-size: 2rem;
      @include media-breakpoint-down(md) {
        font-size: 1.5rem;
      }
      font-family: $sub-font;
  }
  &__description{
      font-size: 1.2rem;
      @include media-breakpoint-down(md) {
        font-size: 1rem;
      }
      margin-bottom: 1rem;
  }
  &__button{
    margin: 0 1rem 1rem;
    @include media-breakpoint-down(md) {
      display: flex;
      flex-direction: column;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &__body {
      width: calc(100% / 3 - 3rem);
      @include media-breakpoint-down(md) {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }
  &__bottomline{
    height: 1rem;
    background-color: $theme-color;
  }
}
</style>
