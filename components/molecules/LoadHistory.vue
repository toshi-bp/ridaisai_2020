<template>
  <div>
    <TheContainer>
      <div
        v-for="(KikakuList, kikaku_id) in KikakuHistory"
        ref="push"
        :key="kikaku_id"
      >
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
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
import TheRow from '~/components/atoms/TheRow.vue'
import TheColumn from '~/components/atoms/TheColumn.vue'
import ItemCard from '~/components/molecules/ItemCard.vue'
// import PushHistory from '~/components/molecules/PushHistory'

import KikakuList from '~/kikaku/KikakuList.json'

export default {
  components: {
    TheContainer,
    TheRow,
    TheColumn,
    ItemCard
  },
  computed: {
    KikakuHistory () {
      return KikakuList.filter(item => item.kikaku_id === this.LoadHistory())
    }
  },
  methods: {
    callLocalStorage () {
      this.$refs.push.PushHistory()
    },
    LoadHistory () {
      let KikakuHistory = localStorage.getItem('KikakuHistory')
      KikakuHistory = JSON.parse(KikakuHistory)
      let KikakuHistoryId = ''
      for (let k = 0; k < KikakuHistory.length; k++) {
        KikakuHistoryId.replace('', KikakuHistory[k])
        if (k !== KikakuHistory.length - 1) {
          KikakuHistoryId += ','
        }
      }
      return KikakuHistoryId
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
