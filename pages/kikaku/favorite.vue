<template>
  <div class="favorite">
    <SubHeader>
      <template #title>
        お気に入り企画
      </template>
    </SubHeader>
    <!-- <LoadFavorite></LoadFavorite> -->
  </div>
</template>

<script>
import SubHeader from '~/components/organisms/SubHeader.vue'
// import LoadFavorite from '~/components/molecules/LoadFavorite'

export default {
  components: {
    SubHeader
    // LoadFavorite
  }
}
</script>

<style lang="scss" scoped>

</style>
