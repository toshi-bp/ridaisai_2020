<template>
  <div LoadHistory>
    <TheRow>
      <TheColumn v-for="item in KikakuHistory" :key="item.id">
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
    LoadHistory () {
      let KikakuHistory = localStorage.getItem('KikakuHistory')
      KikakuHistory = JSON.parse(KikakuHistory)
      let KikakuHistoryId = ''
      for (let k = 0; k < KikakuHistory.length;k++) {
        KikakuHistoryId.replace('', KikakuHistory[k])
        if(k != KikakuHistory.length - 1) {
          KikakuHistoryId += ','
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
