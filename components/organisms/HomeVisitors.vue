<template>
  <div class="visitor">
    <TheContainer class="container">
      <div class="visitor__itembox">
        <h2 class="visitor__title">
          ご来場者の皆様へ(別になくてもよさそう？)
        </h2>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
// import LinkButton2 from '~/components/atoms/LinkButton2.vue'

export default {
  components: {
    TheContainer
  }
}

</script>

<style lang="scss" scoped>
.background{
  // background-color: rgba($sub-color, $alpha: 0.1);
}

.visitor{
  margin-top: 5rem;
  background-color: rgba($sub-color, $alpha: 0.15);
  &__itembox{
    display: flex;

      &__item{
        height: 20rem;
        width: 100%;
        background-color: rgba($sub-color, $alpha: 0.15);
      }
  }

  &__title {

  }
}

</style>
