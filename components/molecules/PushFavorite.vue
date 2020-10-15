<template>
  <div>
    <LinkButton @click="PushFavorite">お気に入り</LinkButton>
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
