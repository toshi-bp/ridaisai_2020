<template>
  <div class="search">
    <div class="search__box">
      <input
      type="text"
      valuename="keyword"
      placeholder="検索キーワード"
      class="search__text"
      >
    </div>
    <button class="search__button">検索</button>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 1rem;
  &__box {
    display: inline-flex;
    align-items: center;
    padding: 3px 5px;
    background: #fff;
    width: 80%;
  }
  &__text {
    width: 100%;
    border: none;
    background: transparent;
  }
  &__button {
    color: #fff;
    margin-left: 10px;
    display: inline-block;
    outline: none;
    background: $theme-color;
    border: none;
    font-family: $sub-font;
    height: 2rem;
    width: 4rem;
  }
}
</style>
