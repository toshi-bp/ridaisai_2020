<template>
  <div LoadFavorite>
    <TheRow>
      <TheColumn v-for="item in favoriteKikaku" :key="item.kikaku_id">
        <ItemCard
          :id="item.id"
          :to="`/kikaku/${item.kikaku_id}`"
          :title="item.kikaku_title"
          :name="item.name"
          :image-url="require(`~/assets/kikaku/${item.image_filename}`)"
        />
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
      for (let k = 0; k < favoriteKikaku.length; k++) {
        favoriteKikakuId.replace('', favoriteKikaku[k])
        if (k != favoriteKikaku.length - 1) {
          favoriteKikakuId += ','
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
