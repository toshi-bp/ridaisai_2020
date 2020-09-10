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
        </div>
      </TheSection>
      <TheSection>
        <div class="sample__information">
          <p class="sample__information__title">キムタクFC</p>
          <p class="sample__information__text">金村先輩はキムタクと言われたいそうです。</p>
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
  components: {
    TheSection,
    TheContainer,
    SubHeader
  }
}
</script>

<style lang="scss" scoped>
.sample {
  padding-top: $global-header-height;
  &__bg {
    background-image: url('~@/assets/image/bg.svg');
    background-size: repeat;
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
</style>
