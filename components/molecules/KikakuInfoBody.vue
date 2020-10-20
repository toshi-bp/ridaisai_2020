<template>
  <!-- ここにはコンテンツの下に掲載する団体紹介と企画トップページへのリンクを貼る(できればおすすめ企画とか載せたいよね) -->
  <div>
    <TheContainer>
      <TheSection>
        <div>
          <h3 class="kikaku-info__name">
            団体名
          </h3>
          <h4>
            {{ name }} <!-- 団体名をここに入れる -->
          </h4>
          <h3 class="kikaku-info__name">
            団体紹介
          </h3>
          <p class="kikaku-info__intro">
            {{ introduce }} <!-- 団体紹介をここに入れる -->
          </p>
        </div>
      </TheSection>
      <div class="kikaku-info__button">
        <LinkButton to='/kikaku/'>
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

export default {
  components: {
    TheContainer,
    TheSection,
    LinkButton
  },
  props: {
    name: {
      type: String
    },
    introduce: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.kikaku-info {
  &__button {
    text-align: center
  }
}
</style>
