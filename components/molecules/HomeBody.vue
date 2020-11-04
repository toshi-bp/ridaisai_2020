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
            <h4>企画を楽しむ</h4>
          </div>
        </nuxt-link>
        <TheRow>
          <TheColumn
            v-for="item in KikakuList"
            :key="item.kikaku_id"
            :spsize="12"
            :pcsize="6"
          >
            <ItemCard
              :to="`/kikaku/${item.kikaku_id}/`"
              :label-type="item.type"
              :label-text="item.type"
              :title="item.kikaku_title"
              :name="item.name"
              :image-url="item.image_filename ? require(`~/assets/kikaku/${item.image_filename}`) : ''"
              :live="item.live"
              :youtube="item.youtube"
              :website="item.website"
            ></ItemCard>
          </TheColumn>
        </TheRow>
      </div>
    </div>
  </div>
</template>

<script>
import TheColumn from '~/components/atoms/TheColumn'
import TheRow from '~/components/atoms/TheRow'
import ItemCard from '~/components/molecules/ItemCard'

import KikakuList from '~/kikaku/KikakuList.json'

export default {
  components: {
    TheColumn,
    TheRow,
    ItemCard
  }
}
</script>

<style lang="scss" scoped>

</style>
