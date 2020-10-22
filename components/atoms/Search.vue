<template>
  <div class="search">
    <div class="search__box">
      <input
        v-model="keyword"
        type="text"
        valuename="keyword"
        placeholder="検索キーワード"
        class="search__text"
      >
    </div>
    <button class="search__button" @click="Searching">
      検索
    </button>
  </div>
</template>

<script>
import KikakuList from '~/kikaku/KikakuList.json'

export default {
  computed: {
    Searching () {
      const keyword = this.keyword
      return KikakuList.filter(item => item.kikaku_title.includes(keyword) !== -1)
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 2rem;
  display: flex;
  @include media-breakpoint-down(sm) {
    margin-right: 0rem;
  }
  &__box {
    display: inline-flex;
    align-items: center;
    padding: 3px 5px;
    background: #fff;
    width: 90%;
    @include media-breakpoint-down(sm) {
      // width: 70%;
    }
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
    height: 35px;
    width: 4rem;
  }
}
</style>
