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
          <dt class="update__list__date">
            2020/07/20
          </dt>
          <dd class="update__list__content">
            <nuxt-link to="/groups/">
              参加団体向け情報
            </nuxt-link>と<nuxt-link to="/companies/">
              企業協賛に関して
            </nuxt-link>を更新しました。
          </dd>
          <dt class="update__list__date">
            2020/08/27
          </dt>
          <dd class="update__list__content">
            <nuxt-link to="/groups/">
              参加団体向け情報
            </nuxt-link>に参加団体募集要項を掲載しました。
          </dd>
          <dt class="update__list__date">
            2020/09/29
          </dt>
          <dd class="update__list__content">
            <nuxt-link to="/groups/">
              参加団体向け情報
            </nuxt-link>に後期配布資料を掲載しました。
          </dd>
          <dt class="update__list__date">
            2020/11/05
          </dt>
          <dd class="update__list__content">
            <nuxt-link to="/kikaku/">
              企画一覧
            </nuxt-link>を公開しました。
          </dd>
          <dt class="update__list__date">
            2020/11/15
          </dt>
          <dd class="update__list__content">
            <nuxt-link to="/live/">
              Live配信
            </nuxt-link>を公開しました。
          </dd>
          <dt class="update__list__date">
            2020/11/16
          </dt>
          <dd class="update__list__content">
            <nuxt-link to="/welcome/">
              理大祭の歩き方
            </nuxt-link>を公開しました。
          </dd>
          <dt class="update__list__date">
            2020/11/21
          </dt>
          <dd class="update__list__content">
            <nuxt-link to="/kikaku/">
              各コンテンツ
            </nuxt-link>を公開しました。
          </dd>
          <dt class="update__list__date">
            2020/12/20
          </dt>
          <dd class="update__list__content">
            <nuxt-link to="/kikaku/">
              各コンテンツ
            </nuxt-link>の公開を終了しました。
          </dd>
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
