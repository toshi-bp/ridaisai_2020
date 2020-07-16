<template>
  <div class="eat">
    <TheContainer class="container">
      <div>
        <LinkLabel type="eat" to="/events/eat/">
          <template>
            理大祭を食べて楽しむ
          </template>
        </LinkLabel>
        <ul class="horizontal-list">
          <li class="item">
            <ItemCard
              to="/"
              :image-url="require(`~/assets/image/broccolitime.png`)"
              title="金村の会"
            />
          </li>
          <li class="item">
            <ItemCard
              to="/"
              :image-url="require(`~/assets/image/symbol.png`)"
              title="金村の会"
            />
          </li>
          <li class="item">
            <ItemCard
              to="/"
              :image-url="require(`~/assets/image/symbol.png`)"
              title="キムタククラブ"
            />
          </li>
          <li class="item">
            <ItemCard
              to="/"
              :image-url="require(`~/assets/image/symbol.png`)"
              title="霊波の光のタピオカバーガー"
            />
          </li>
          <li class="item">
            <ItemCard
              to="/"
              :image-url="require(`~/assets/image/symbol.png`)"
              title="フル単よろしく"
            />
          </li>
        </ul>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
import ItemCard from '~/components/molecules/ItemCard.vue'
import LinkLabel from '~/components/atoms/LinkLabel.vue'

export default {
  components: {
    TheContainer,
    ItemCard,
    LinkLabel
  }
}
</script>

<style lang="scss" scoped>
  .eat {
    margin-bottom: 5rem;
  }
  .title{
    text-align: center;
    font-family: $sub-font;
    margin: 0;
    font-size: 2rem;
      @include media-breakpoint-down(sm) {
        font-size: 1.7rem;
      }
  }

 .horizontal-list {
      margin: 0 0 7rem;
      padding: 0;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }

    .item {
      /* 横スクロール用 */
      display: inline-block;
      width: 40%;
        @include media-breakpoint-down(sm) {
        width: 35%;
      }
      /* 見た目調整 */
      margin: 16px;
      font-size: 20px;
      // background: rgba($theme-color, 0.5);
    }

  .horizontal-list::-webkit-scrollbar {
    height: 7px;;
}

.horizontal-list::-webkit-scrollbar-track {
  background: #eee;
}
/*スクロールバーの動く部分*/
.horizontal-list::-webkit-scrollbar-thumb {
  background-color: rgba($sub-color,10%);;
  border: none;
}
/*スクロールバーの動く部分のホバー（マウスオーバー）*/
.horizontal-list::-webkit-scrollbar-thumb:hover {
  background: rgba($theme-color,10%);;
}

.container{
  background-color: rgba(#fff,0.9);
}
</style>
