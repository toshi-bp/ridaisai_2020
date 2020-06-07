<template>
  <div class="background">
    <TheContainer>
      <div class="groups">
        あなた方
        <TheSection>
          <div>
            団体の方々へ
            <p>今年も理大祭やるよ～</p>
            <p>ポータルのリンクはこれだよ～</p>
            <p>参加団体向け資料はこっちだよ～</p>
          </div>
        </TheSection>
        <div class="linkbutton">
          <LinkButton to="/">topページへ →</LinkButton>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheSection from '~/components/atoms/TheSection.vue'
import TheContainer from '~/components/atoms/TheContainer.vue'
import LinkButton from '~/components/atoms/LinkButton.vue'

export default {
  components: {
    TheSection,
    TheContainer,
    LinkButton
  }
}
</script>

<style lang="scss" scoped>
.background{
  background-color: rgba(#fff,0.9);
  background-image: linear-gradient(180deg, $theme-color 0%, #ffffff 99%, #c9e7ff 100%);
}

.groups {
  padding-top: $global-header-height;
}

.linkbutton{
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;

}
</style>
