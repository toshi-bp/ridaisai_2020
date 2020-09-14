<template>
  <div class="sample">
    <div class="sample__bg">
      <TheContainer>
        <SubHeader>
          <template #title>
            金村の会
          </template>
        </SubHeader>
      <TheSection>
        <div class="sample__information">
          <p class="sample__information__title">キムタク先輩</p>
          <p class="sample__information__text">20生は見たことないのでイケメンかすら知りません.</p>
          <youtube
            ref="youtube"
            :video-id="videoId"
            width="100%"
          />
          <div class="sample__img">
            <p class="sample__img__text">ここに動画を埋め込みたい人生だった</p>
          </div>
        </div>
      </TheSection>
      <TheSection>
        <div class="sample__information">
          <p class="sample__information__title">キムタクFC</p>
          <p class="sample__information__text">金村先輩はキムタクと言われたいそうです。</p>
        </div>
      </TheSection>
      <TheSection>
        <div class="sample__information">
          <p class="sample__information__title">キムタク先輩</p>
          <p class="sample__information__text">20生は見たことないのでイケメンかすら知りません.</p>
        </div>
      </TheSection>
      <TheSection>
        <div class="sample__information">
          <p class="sample__information__title">キムタク先輩</p>
          <p class="sample__information__text">20生は見たことないのでイケメンかすら知りません.</p>
        </div>
      </TheSection>
      <TheSection>
        <div class="sample__information">
          <p class="sample__information__title">キムタク先輩</p>
          <p class="sample__information__text">20生は見たことないのでイケメンかすら知りません.</p>
        </div>
      </TheSection>
      <TheSection>
        <div class="sample__information">
          <p class="sample__information__title">キムタク先輩</p>
          <p class="sample__information__text">20生は見たことないのでイケメンかすら知りません.</p>
        </div>
      </TheSection>
      <TheSection>
        <div class="sample__information">
          <p class="sample__information__title">キムタク先輩</p>
          <p class="sample__information__text">20生は見たことないのでイケメンかすら知りません.</p>
        </div>
      </TheSection>
      </TheContainer>
    </div>
  </div>
</template>

<script>
import TheSection from '~/components/atoms/TheSection.vue'
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'

export default {
  data () {
    return {
      videoId: '29nSdJtFiCo'
    }
  },
  components: {
    TheSection,
    TheContainer,
    SubHeader
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
