<template>
  <div class="update">
    <TheSection>
      <div>
        <h1 class="update__title">
          更新情報
        </h1>
        <dl class="update__list">
          <dt class="update__list__date">
            2020/06/15
          </dt>
          <dd class="update__list__content">
            ウェブサイトを公開しました。
          </dd>
          <!-- <dt class="update__list__date">
            2020/11/26
          </dt>
          <dd class="update__list__content">
            団体情報ページを公開しました。
          </dd> -->
        </dl>
      </div>
    </TheSection>
  </div>
</template>

<script>
import TheSection from '~/components/atoms/TheSection.vue'

export default {
  components: {
    TheSection
  }
}
</script>

<style lang="scss" scoped>
.update {
  margin-top: 8rem;
  @include media-breakpoint-down(sm) {
    margin-top: 0rem;;
  }
  padding-bottom: 5rem;
  &__title {
    padding: 0 1rem 0;
    font-family: $sub-font;
    font-size: 1.5rem;
    @include media-breakpoint-down(sm) {
      font-size: 1rem;
    }
  }
  &__list {
    padding: 0.5rem 1rem;
    &__date {
      margin-top: 1rem;
      margin-bottom: 0.25rem;
    }
    &__content {
      margin-bottom: 0.25rem;
      @include media-breakpoint-down(sm) {
      font-size: 0.7rem;
    }
    }
  }
}
</style>
