<template>
  <div class="welcome__bg">
    <TheContainer>
      <div class="welcome__ticket">
        <img src="~@/assets/image/ticket.svg"  class="welcome__ticket__body"/>
        <Ticket />
        <div>
          <LinkButton to="/">Webサイトの企画はこちら</LinkButton>
        </div>
        <div>
          <LinkButton2 to="/">Live配信の企画はこちら</LinkButton2>
        </div>
        <div>
          <LinkButton3 to="/">Webサイトの企画はこちら</LinkButton3>
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
import Ticket from '~/components/atoms/Ticket.vue'
import LinkButton from '~/components/atoms/LinkButton.vue'
import LinkButton2 from '~/components/atoms/LinkButton2.vue'
import LinkButton3 from '~/components/atoms/LinkButton3.vue'

export default {
  components: {
    TheContainer,
    Ticket,
    LinkButton,
    LinkButton2,
    LinkButton3
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  &__bg {
    padding-top: $global-header-height;
    padding-bottom: 2rem;
    background-image: url('~@/assets/image/bg.svg');
    background-size: repeat;
  }
  &__ticket {
    padding-top: 2rem;
    width: 100%;
    &__body {
      user-select: none;
    }
  }
}
</style>
