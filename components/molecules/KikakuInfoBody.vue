<template>
  <!-- ここにはコンテンツの下に掲載する団体紹介と企画トップページへのリンクを貼る(できればおすすめ企画とか載せたいよね) -->
  <div>
    <ComingSoon />
    <TheContainer>
      <h2 class="kikaku-info__title">
        団体情報
      </h2>
      <TheSection>
        <div>
          <figure
            :style="{backgroundImage: imageUrl ? `url(${imageUrl})` : ''
            }"
            class="kikaku-info__img"
          />
          <h3 class="kikaku-info__name">
            団体名
          </h3>
          <p>
            {{ name }} <!-- 団体名をここに入れる -->
          </p>
          <h3
            v-if="introduce"
            class="kikaku-info__name"
          >
            団体紹介
          </h3>
          <p class="kikaku-info__intro">
            {{ introduce }} <!-- 団体紹介をここに入れる -->
          </p>
          <h3
            v-if="url"
            class="kikaku-info__name"
          >
            ホームページ
          </h3>
          <a
            :href="url"
            target="_blank"
          >
            {{ url }} <!-- urlをここに入れる -->
          </a>
          <h3 v-if="twitter" class="kikaku-info__name">
            Twitter
          </h3>
          <a
            :href="`https://twitter.com/${twitter}`"
            target="_blank"
          >
            {{ twitter }} <!-- twitterのidをここに入れる -->
          </a>
        </div>
      </TheSection>
      <div class="kikaku-info__button">
        <p class="kikaku-info__ad">
          他の企画も見てみよう
        </p>
        <LinkButton to="/kikaku/">
          企画一覧へ
        </LinkButton>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer'
import TheSection from '~/components/atoms/TheSection'
import LinkButton from '~/components/atoms/LinkButton'
import ComingSoon from '~/components/molecules/ComingSoon'

export default {
  components: {
    TheContainer,
    TheSection,
    LinkButton,
    ComingSoon
  },
  props: {
    imageUrl: {
      type: String
    },
    name: {
      type: String
    },
    introduce: {
      type: String
    },
    url: {
      type: String
    },
    twitter: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.kikaku-info {
  &__title {
    font-family: $sub-font;
  }
  &__name {
    font-family: $sub-font;
    margin-top: 1rem;
  }
  &__img {
    width: 15rem;
    height: 15rem;
    background: center center / contain no-repeat;
    border: 1px solid $muted;
    margin-bottom: 1rem;
    @include media-breakpoint-down(sm) {
      margin: 0 auto 1rem;
    }
  }
  &__button {
    text-align: center
  }
  &__ad {
    font-family: $sub-font;
    font-weight: bold;
    font-size: 1.2rem;
  }
  &__intro {
    margin-top: -1rem;
    white-space: pre-line;
  }
}
</style>
