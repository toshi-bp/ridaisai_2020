<template>
  <div>
    <TheRow>
      <TheColumn v-for="item in KikakuHistory" :key="item.kikaku_id">
        <ItemCard
          :id="item.kikaku_id"
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
    LoadHistory () {
      let KikakuHistory = localStorage.getItem('KikakuHistory')
      KikakuHistory = JSON.parse(KikakuHistory)
      let KikakuHistoryId = ''
      for (let k = 0; k < KikakuHistory.length; k++) {
        KikakuHistoryId.replace('', KikakuHistory[k])
        if (k != KikakuHistory.length - 1) {
          KikakuHistoryId += ','
        }
      }
    }
  },
  computed: {
    KikakuHistory () {
      return this.KikakuHistory
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
