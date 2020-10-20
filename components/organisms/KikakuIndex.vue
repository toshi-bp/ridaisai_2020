<template>
  <div class="kikaku">
    <TheContainer>
      <SubHeader>
        <template #title>
          企画一覧
        </template>
      </SubHeader>
      <!-- <div class="kikaku__search">
        <div class="kikaku__search__box">
          <input
            type="text"
            valuename="keyword"
            placeholder="検索キーワード"
            class="kikaku__search__text"
            v-model="keyword"
          >
        </div>
        <button class="kikaku__search__button" @click="Searching">
          検索
        </button>
      </div> -->
      <div>
        <TheSection>
          <div>
            ジャンルで探す
          </div>
          <TheRow>
            <TheColumn v-for="item in KikakuList" :key="item.kikaku_id" :spsize="12">
              <ItemCard
                :to="`/kikaku/${item.kikaku_id}/`"
                :labelType="item.type"
                :labelText="item.type"
                :title="item.kikaku_title"
                :name="item.name"
                :image-url="item.image_filename ? require(`~/assets/kikaku/${item.image_filename}`) : ''"
              />
            </TheColumn>
          </TheRow>
        </TheSection>
      </div>
      <div class="kikaku__button">
        <LinkButton to="/">
          topページに戻る
        </LinkButton>
      </div>
    </TheContainer>
  </div>
</template>

<script>
/* eslint-disabel-line no-alert, no-console */
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
// import Search from '~/components/atoms/Search.vue'
import ItemCard from '~/components/molecules/ItemCard'
import TheRow from '~/components/atoms/TheRow.vue'
import TheColumn from '~/components/atoms/TheColumn.vue'
import TheSection from '~/components/atoms/TheSection'
import LinkButton from '~/components/atoms/LinkButton'

import KikakuList from '~/kikaku/KikakuList.json'

export default {
  data () {
    return {
      keyword: ''
    }
  },
  components: {
    TheContainer,
    SubHeader,
    // Search,
    ItemCard,
    TheRow,
    TheColumn,
    TheSection,
    LinkButton
  },
  computed: {
    KikakuList () {
      return KikakuList
    },
    Searching () {
      const SearchedKikaku = []
      const keyword = this.keyword
      for (const i in this.KikakuList) {
        const item = this.KikakuList[i]
        if (item.kikaku_title.includes(keyword) !== -1 || item.name.includes(keyword) !== -1) {
          SearchedKikaku.push(item)
        }
      }
      return SearchedKikaku
    }
  }
}
</script>

<style lang="scss" scoped>
.kikaku {
  padding-top: $global-header-height;
  padding-bottom: 2rem;
  background-image: url('~@/assets/image/bg.svg');
  background-size: repeat;
  &__button {
    text-align: center;
  }
  &__search {
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
}
</style>
