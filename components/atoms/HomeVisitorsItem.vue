<template>
  <div>
    <TheContainer class="container">
      <h2 class="title">
        概要
      </h2>
      <ul class="list">
      </ul>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
export default {
  compornents: {
    TheContainer
  }

}
</script>

<style lang="scss" scoped>
.title{
  height: 2rem;
  font-size: 3rem;
}
.list{
  position: relative;
}
</style>
