<template>
  <div class="home-body">
    <div class="home-body__welcome">
      <div class="home-body__welcome__link">
        オンライン理大祭の歩き方
      </div>
      <p>理大祭の楽しみ方について説明しています。はじめにお読みください。</p>
    </div>
    <div>
      <h3>
        楽しむ
      </h3>
      <!-- 企画一覧とライブ配信企画に飛ぶボタンのコンポーネントを作成するかもしれない -->
      <div>
        <nuxt-link to="/kikaku/">
          <div>
            <h4>企画一覧</h4>
          </div>
        </nuxt-link>
        <TheColumn></TheColumn>
      </div>
    </div>
  </div>
</template>

<script>
import TheColumn from '~/components/atoms/TheColumn'

export default {
  components: {
    TheColumn
  }
}
</script>

<style lang="scss" scoped>

</style>
