<template>
  <div class="kikaku-card">
    <img class="kikaku-card__img" src="~/assets/image/symbol.png">
    <h3 class="kikakucard__title">
      {{ KikakuName }}
    </h3>
    <h3 class="kikakucard__title">
      {{ GroupName }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    KikakuName: {
      type: String
    },
    GroupName: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.kikakucard {
  border: 1px solid black;
  &__img {
    width: 100%;
  }
}
</style>
