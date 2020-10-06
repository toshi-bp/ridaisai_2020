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
            <div class="sample__image" v-for="i in 3" :key="i">
              <ImageFullScreen
               :src="require(`~/assets/image/symbol.png`)"
               title="感謝の正拳突き"
               description="己の肉体と武術に限界を感じ悩みに悩み抜いた結果辿り着いたもの"
              ></ImageFullScreen>
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

import TheSection from '~/components/atoms/TheSection.vue'
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
import LinkButton from '~/components/atoms/LinkButton.vue'
import ImageFullScreen from '~/components/atoms/ImageFullScreen.vue'

export default {
  components: {
    TheSection,
    TheContainer,
    SubHeader,
    LinkButton,
    ImageFullScreen
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
