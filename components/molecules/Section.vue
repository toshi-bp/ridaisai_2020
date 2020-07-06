<template>
    <div>
        <TheContainer class="containerClass">
            <div class="section__main">
                <h2 class="section__title">
                    <slot name="title" />
                </h2>
                <h2 class="section__text">
                    <slot name="text" />
                </h2>
            </div>
        </TheContainer>
    </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
export default {
  props: {
  },
  components: {
    TheContainer
  }
}

</script>

<style lang="scss" scoped>
.section{
    position: relative;
    height: 3rem;
    background: blue;
    &__main{
        padding: 2rem;
    }
}
</style>
