<template>
  <div LoadFavorite>
    <TheRow>
      <TheColumn v-for="item in favoriteKikaku" :key="item.id">
        <ItemCard
          :to="`/kikaku/${item.id}`"
          :title="item.kikaku_name"
          :name="item.circle_name"
          :imageUrl="require(`~/assets/kikaku/${item.imageUrl}`)"
          :id="item.id"
        >
        </ItemCard>
      </TheColumn>
    </TheRow>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
import TheRow from '~components/atoms/TheRow.vue'
import TheColumn from '~/components/atoms/TheColumn.vue'
import ItemCard from '~/components/molucules/ItemCard.vue'

export default {
  components: {
    TheContainer,
    TheRow,
    TheColumn,
    ItemCard
  },
  methods: {
    LoadFavorite () {
      let favoriteKikaku = localStorage.getItem('favoriteKikaku')
      favoriteKikaku = JSON.parse(favoriteKikaku)
      let favoriteKikakuId = ''
      for (let k = 0; k < favoriteKikaku.length;k++) {
        favoriteKikakuId.replace('', favoriteKikaku[k])
        if(k != favoriteKikaku.length - 1) {
          favoriteKikakuId += ','
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
