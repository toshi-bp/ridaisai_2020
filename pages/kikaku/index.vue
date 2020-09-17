<template>
  <div class="kikaku">
    <!-- <Background> -->
    <TheContainer>
      <SubHeader>
        <template #title>
          企画一覧
        </template>
      </SubHeader>
      <KikakuCard
        KikakuName="トムキャットレッドビートル"
        GroupName="カブトボーグを愛でる会"
      >
      </KikakuCard>
    </TheContainer>
    <!-- </Background> -->
  </div>
</template>

<script>
// import Background from '~/components/atoms/Background.vue'
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
import KikakuCard from '~/components/molecules/Kikakucard.vue'

export default {
  components: {
    // Background,
    TheContainer,
    SubHeader,
    KikakuCard
  }
}
</script>

<style lang="scss" scoped>

</style>
