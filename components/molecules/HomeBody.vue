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
        <nuxt-link to="/live/">
          <div>
            <h4>ライブ配信</h4>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
