<template>
  <div class="home-body">
    <div class="home-body__welcome">
      <TheContainer>
        <div class="home-body__welcome__link">
          オンライン理大祭の歩き方
        </div>
        <p class="home-body__welcome__text">
          2020年度野田地区理大祭はこのWebサイト上でのオンライン開催です。理大祭の楽しみ方について説明しています。はじめにお読みください。
        </p>
      </TheContainer>
    </div>
    <div>
      <div class="home-body__kikaku">
        <TheContainer class="home-body__kikaku__container">
            <div class="home-body__kikaku__label">
              <nuxt-link to="/kikaku/">
                <KikakuLabel
                  type="special"
                >
                  企画を楽しむ
                </KikakuLabel>
              </nuxt-link>
              <p class="home-body__kikaku__text">
                各参加団体が理大祭のために準備をしたコンテンツはこちら
              </p>
            </div>
            <div>
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
            </div>
          <div class="home-body__button">
            <LinkButton2
              to="/kikaku/"
            >
              企画一覧はこちら
            </LinkButton2>
          </div>
        </TheContainer>
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
import TheContainer from '~/components/atoms/TheContainer'

import KikakuList from '~/kikaku/KikakuList.json'

export default {
  components: {
    TheColumn,
    TheRow,
    LinkButton2,
    KikakuLabel,
    ItemCard,
    TheContainer
  },
  computed: {
    KikakuList () {
      // const max = 0
      // const min = 35
      // let FilteredKikaku = []
      // let random = min
      // for (let i = 0; i < KikakuList.length; i++) {
      //   random = Math.floor(Math.random() * (max + 1 - min)) + min
      //   if (KikakuList.filter(item => item.kikaku_id === random)) {
      //     FilteredKikaku = KikakuList.filter(item => item.kikaku_id === random)
      //   }
      // }
      return KikakuList.slice(0, 6)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-body {
  // padding-top: 3rem;
  &__welcome {
    padding: 2rem 0;
    background-color: rgba($theme-color, $alpha: 0.2);
    border-radius: 5px;
    &__link {
      border-radius: 5px;
      padding: 2rem 1rem;
      width: 100%;
      text-align: center;
      font-family: $sub-font;
      font-size: 1.5rem;
      background-color: $theme-color;
      color: #fff;
      box-shadow: 0 0.2rem 1rem rgba($color: #000000, $alpha: 0.1);
      margin-bottom: 1rem;
      transition: 0.2s ease all;
      &:hover {
        transform: scale(1.05);
      }
    }
    &__text {
      @include media-breakpoint-down(sm) {
        font-size: 0.9rem;
      }
    }
  }
  &__kikaku {
    background-color: rgba($sub-color, $alpha: 0.3);
    padding: 0 1rem;
    margin-bottom: 2rem;
    &__label {
      margin-bottom: 2rem;
    }
    &__text {
      margin-top: 1rem;
    }
    &__container {
      border-radius: 5px;
      background-color: #fff;
      padding: 1rem 1rem;
    }
  }
  &__button {
    margin: 1rem 0;
    text-align: center;
  }
}
</style>
