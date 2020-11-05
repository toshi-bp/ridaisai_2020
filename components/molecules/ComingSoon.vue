<template>
  <!-- とりあえずコンテンツの掲載が終わっていないところはこれを掲載する -->
  <div class="coming-soon">
    <TheContainer>
      <TheSection>
        <div class="coming-soon__text">
          <h1 class="coming-soon__title">
            Coming Soon!
          </h1>
          <p>このコンテンツは21日(土)に公開されます。お楽しみに！</p>
        </div>
      </TheSection>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer'
import TheSection from '~/components/atoms/TheSection'

export default {
  components: {
    TheContainer,
    TheSection
  }
}
</script>

<style lang="scss" scoped>
.coming-soon {
  width: 100%;
  padding: 1rem 0 1rem 0;
  &__text {
    text-align: center;
  }
  &__title {
    font-family: $sub-font;
    font-size: 2rem;
  }
}
</style>
