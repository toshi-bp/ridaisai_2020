<template>
  <div class="favorite">
    <SubHeader>
      <template #title>
        お気に入り企画
      </template>
    </SubHeader>
    <!-- <LoadFavorite></LoadFavorite> -->
    <LoadHistory />
  </div>
</template>

<script>
import SubHeader from '~/components/organisms/SubHeader.vue'
import LoadHistory from '~/components/molecules/LoadHistory'
// import LoadFavorite from '~/components/molecules/LoadFavorite'

export default {
  components: {
    SubHeader,
    LoadHistory
    // LoadFavorite
  }
}
</script>

<style lang="scss" scoped>

</style>
