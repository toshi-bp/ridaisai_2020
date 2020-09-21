<template>
  <div class="kikaku">
    <TheContainer>
      <SubHeader>
        <template #title>
          企画一覧
        </template>
      </SubHeader>
      <Search />
      <KikakuCard
        KikakuName="トムキャットレッドビートル"
        GroupName="カブトボーグを愛でる会"
      >
      </KikakuCard>
      <ItemCard
        to="/kikaku/sample/"
        title="金村の会"
        name="キムタクFC"
        :imageUrl="require(`~/assets/image/symbol.png`)"
      >
      </ItemCard>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
import Search from '~/components/atoms/Search.vue'
import KikakuCard from '~/components/molecules/Kikakucard.vue'
import ItemCard from '~/components/molecules/ItemCard'

export default {
  components: {
    TheContainer,
    SubHeader,
    KikakuCard,
    Search,
    ItemCard
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
