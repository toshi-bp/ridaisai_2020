<template>
  <div>
    <LinkButton @click="PushFavorite">お気に入りに登録</LinkButton>
  </div>
</template>

<script>
import LinkButton from '~/components/atoms/LinkButton.vue'

export default {
  components: {
    LinkButton
  },
  methods: {
    PushFavorite () {
      let favoriteKikaku = []
      favoriteKikaku.push(this.id)
      localStorage.setItem('favoriteKikaku', JSON.stringify(favoriteKikaku))
    },
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
