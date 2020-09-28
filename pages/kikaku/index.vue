<template>
  <div class="kikaku">
    <TheContainer>
      <SubHeader>
        <template #title>
          企画一覧
        </template>
      </SubHeader>
      <Search />
      <!-- <KikakuCard
        KikakuName="トムキャットレッドビートル"
        GroupName="カブトボーグを愛でる会"
      >
      </KikakuCard> -->
      <div>
        <TheRow>
          <TheColumn v-for="i in 20 " :key="i">
            <ItemCard
              to="/kikaku/sample_youtube/"
              title="企画名"
              name="団体名"
              :imageUrl="require(`~/assets/image/symbol.png`)"
              :id="i"
            >
            </ItemCard>
          </TheColumn>
        </TheRow>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
import Search from '~/components/atoms/Search.vue'
// import KikakuCard from '~/components/molecules/Kikakucard.vue'
import ItemCard from '~/components/molecules/ItemCard'
import TheRow from '~/components/atoms/TheRow.vue'
import TheColumn from '~/components/atoms/TheColumn.vue'

export default {
  components: {
    TheContainer,
    SubHeader,
    // KikakuCard,
    Search,
    ItemCard,
    TheRow,
    TheColumn
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
