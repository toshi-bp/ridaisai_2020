<template>
  <div class="kikaku">
    <TheContainer>
      <SubHeader>
        <template #title>
          企画一覧
        </template>
      </SubHeader>
      <Search />
      <div>
        <TheRow>
          <TheColumn v-for="item in KikakuList" :key="item.Kikaku_id">
            <ItemCard
              to="/kikaku/sample_youtube/"
              :labelType="item.type"
              :labelText="item.type"
              :title="item.kikaku_title"
              :name="item.name"
              :image-url="require(`~/assets/image/symbol.png`)"
            />
          </TheColumn>
        </TheRow>
      </div>
    </TheContainer>
  </div>
</template>

<script>
/* eslint-disabel-line no-alert, no-console */
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
import Search from '~/components/atoms/Search.vue'
import ItemCard from '~/components/molecules/ItemCard'
import TheRow from '~/components/atoms/TheRow.vue'
import TheColumn from '~/components/atoms/TheColumn.vue'

import KikakuList from '~/kikaku/KikakuList.json'

export default {
  components: {
    TheContainer,
    SubHeader,
    // KikakuCard,
    Search,
    ItemCard,
    TheRow,
    TheColumn
  },
  computed: {
    KikakuList () {
      return KikakuList
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
}
</style>
