<template>
  <div>
    <TheRow>
      <TheColumn v-for="item in KikakuList" :key="item.kikaku_id">
        <ItemCard
          :to="`/kikaku/${item.kikaku_id}`"
          :image-url="item.image_filename ? require(`~/assets/kikaku/${item.image_filename}`) : ''"
          :item="item"
        />
      </TheColumn>
    </TheRow>
  </div>
</template>

<script>
// import TheContainer from '~/components/atoms/TheContainer.vue'
import TheRow from '~/components/atoms/TheRow.vue'
import TheColumn from '~/components/atoms/TheColumn.vue'
import ItemCard from '~/components/molecules/ItemCard.vue'

import KikakuList from '~/kikaku/KikakuList.json'

export default {
  components: {
    // TheContainer,
    TheRow,
    TheColumn,
    ItemCard
  },
  computed: {
    favoriteKikaku () {
      return KikakuList.filter(item => item.kikaku_id === this.favoriteKikaku)
    }
  },
  methods: {
    LoadFavorite () {
      let favoriteKikaku = localStorage.getItem('favoriteKikaku')
      favoriteKikaku = JSON.parse(favoriteKikaku)
      let favoriteKikakuId = ''
      for (let k = 0; k < favoriteKikaku.length; k++) {
        favoriteKikakuId.replace('', favoriteKikaku[k])
        if (k !== favoriteKikaku.length - 1) {
          favoriteKikakuId += ','
        }
      }
      console.log(favoriteKikaku)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
