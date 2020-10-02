<template>
  <div class="favorite">
    <SubHeader>
      <template #title>
        お気に入り企画
      </template>
    </SubHeader>
    <ImageFullScreen :src="require(`~/assets/image/airship.png`)"></ImageFullScreen>
  </div>
</template>

<script>
import SubHeader from '~/components/organisms/SubHeader.vue'
import ImageFullScreen from '~/components/atoms/ImageFullScreen.vue'

export default {
  components: {
    SubHeader,
    ImageFullScreen
  }
}
</script>

<style lang="scss" scoped>

</style>
