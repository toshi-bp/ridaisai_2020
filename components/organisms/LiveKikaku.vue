<template>
  <div class="live">
    <TheContainer>
      <SubHeader>
        <template #title>
          ライブ配信
        </template>
      </SubHeader>
      <div>
        <TheSection>
          <!-- ここにライブ配信する動画を埋め込むよ(チャットを載せるか否かは要相談) -->
        </TheSection>
      </div>
      <div>
        <LinkButton
          to="/kikaku/"
        >
          企画一覧
        </LinkButton>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheSection from '~/components/atoms/TheSection.vue'
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
import LinkButton from '~/components/atoms/LinkButton.vue'

export default {
  components: {
    TheSection,
    TheContainer,
    SubHeader,
    LinkButton
  },
  data () {
    return {
      videoId: '1111111' // YouTubeの動画IDを入力してね
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
