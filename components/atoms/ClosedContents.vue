<template>
  <div class="close">
    <p class="close__text">
      コンテンツの公開は終了しました。
    </p>
    <p class="close__text">
      ご来場ありがとうございました。
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.close {
  background-color: $theme-color;
  padding: 2rem 1rem;
  display: block;
  margin-bottom: 1rem;
  box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.3);
  transition: 0.15s ease all;
  border-radius: 5px;
  &__text {
    color: #fff;
    text-align: center;
    font-family: $sub-font;
    font-size: 1.2rem;
  }
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.5);
  }
}
</style>
