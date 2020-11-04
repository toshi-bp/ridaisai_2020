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
      <div class="home-body__kikaku">
        <div class="home-body__kikaku__label">
          <KikakuLabel type="academic">
            企画を楽しむ
          </KikakuLabel>
        </div>
        <TheRow>
          <TheColumn
            v-for="item in KikakuList"
            :key="item.kikaku_id"
            :spsize="6"
            :pcsize="4"
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
        <div class="home-body__button">
          <LinkButton2
            to="/kikaku/"
          >
            企画一覧はこちら
          </LinkButton2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheColumn from '~/components/atoms/TheColumn'
import TheRow from '~/components/atoms/TheRow'
import KikakuLabel from '~/components/atoms/KikakuLabel'
import ItemCard from '~/components/molecules/ItemCard'
import LinkButton2 from '~/components/atoms/LinkButton2'

import KikakuList from '~/kikaku/KikakuList.json'

export default {
  components: {
    TheColumn,
    TheRow,
    LinkButton2,
    KikakuLabel,
    ItemCard
  },
  computed: {
    KikakuList () {
      return KikakuList.slice(0, 6)
    },
    SelectedKikaku () {
      // 乱数を用いて企画をランダム表示しようとした。これはその跡である
      // let count = 0
      // const max = 211
      // const min = 103
      const Selected = []
      // return KikakuList.filter(item => item.kikaku_id === Math.floor(Math.random() * (max + 1 - min)) + min)
      // while (count < 6) {
      //   const Selecting = Math.floor(Math.random() * (max + 1 - min)) + min
      //   if ((KikakuList.filter(item => item.kikaku_id === Selecting) !== null) && !Selected.some(Selecting)) {
      //     Selected.push = Selecting
      //     count++
      //   } else {
      //   }
      // }
      // console.log(Selected)
      return KikakuList.filter(item => item.kikaku_id === Selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-body {
  padding-top: 3rem;
  &__kikaku {
    background-color: #fff;
    padding: 1rem 1rem 1.5rem;
    border-radius: 5px;
    &__label {
      margin-bottom: 1rem;
    }
  }
  &__button {
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
