<template>
  <div class="sample">
    <div class="sample__bg">
      <TheContainer>
        <SubHeader>
          <template #title>
            企画名
          </template>
        </SubHeader>
        <TheSection>
          <div class="sample__information">
            <p class="sample__information__title">
              企画概要
            </p>
            <p class="sample__information__text">
              企画説明
            </p>
            <div class="sample__pdf">
              <iframe src="2020前期配布資料.pdf" class="sample__pdf__body"></iframe>
              <!-- <vuePdf src="./static/2020前期配布資料.pdf"></vuePdf> -->
              <pdf src="./static/2020前期配布資料.pdf"></pdf>
            </div>
          </div>
        </TheSection>
        <TheSection>
          <div class="sample__information">
            <p class="sample__information__title">
              団体名
            </p>
            <p class="sample__information__text">
              団体説明
            </p>
          </div>
        </TheSection>
        <div class="sample__button">
          <LinkButton to="/kikaku/">企画一覧に戻る</LinkButton>
        </div>
      </TheContainer>
    </div>
  </div>
</template>

<script>
// import vuePdf from 'vue-pdf'

import TheSection from '~/components/atoms/TheSection.vue'
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
import LinkButton from '~/components/atoms/LinkButton.vue'

export default {
  components: {
    // vuePdf,
    TheSection,
    TheContainer,
    SubHeader,
    LinkButton
  }
}
</script>

<style lang="scss" scoped>
.sample {
  // padding-top: $global-header-height;
  &__bg {
    padding-top: $global-header-height;
    padding-bottom: 2rem;
    background-image: url('~@/assets/image/bg.svg');
    background-size: repeat;
  }
  &__img {
    display: block;
    margin : 1.5rem auto 0;
    text-align : center;
    padding: 2rem 4rem;
    background-color: $theme-color;
    width: 100%;
    max-width: 640px;
    height: 360px;
    font-size: 5rem;
    @include media-breakpoint-down(sm) {
      font-size: 1.2rem;
      background-color: $sub-color;
      }
  }
  &__pdf {
    width: 100%;
    &__body {
      height: 50rem;
      @include media-breakpoint-down(md) {
        height: 40rem;
      }
      @include media-breakpoint-down(sm) {
        height: 30rem;
      }
    }
  }
  &__button {
    text-align: center;
  }
  &__text {
    position: absolute;
    top: 5rem;
  }
  &__information{
    &__title{
      font-size: 1.5rem;
      font-family: $sub-font;
    }
    &__text{
      font-size: 1rem;
    }
  }
}
iframe {
  $movie-width: 100%;
  width: 100%;
  height: calc($movie-width * 9 / 16);
}
</style>
