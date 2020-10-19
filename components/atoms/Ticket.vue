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
          <LinkButton to="/" class="ticket__button">YouTubeで楽しむ</LinkButton>
          <LinkButton to="/" class="ticket__button">Webサイトで楽しむ</LinkButton>
          <LinkButton to="/" class="ticket__button">Live配信で楽しむ</LinkButton>
        </div>
      </div>
      <div class="ticket__main__right">
        <img src="~@/assets/image/stamp.svg" class="ticket__main__right__stamp"/>
      </div>
    </div>
    <div class="ticket__bottomline">
    </div>
  </div>
</template>

<script>
import LinkButton from '~/components/atoms/LinkButton.vue'

export default {
  components: {
    LinkButton
  }

}
</script>

<style lang="scss" scoped>
.ticket {
  width: 100%;
  margin: 4rem auto;
  background-color: #fff;

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
      grid-template-columns: 85% 1fr;
      padding: 2rem 1rem;
      background-color: #fff;
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
  }
  &__description{
      font-size: 1.2rem;
      margin-bottom: 1rem;
  }
  &__button{

  }
  &__bottomline{
      height: 1rem;
      background-color: $theme-color;
  }
}
</style>
