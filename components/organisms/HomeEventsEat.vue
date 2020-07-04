<template>
  <div>
    <TheContainer>
      <h2>理大祭を食べて楽しむ</h2>
       <ul class="horizontal-list">
        <li class="item">
          <ItemCard
            to="/"
            :imageUrl="require(`~/assets/image/broccolitime.png`)"
            title="金村の会"
          />
        </li>
        <li class="item">
          <ItemCard
            to="/"
            :imageUrl="require(`~/assets/image/symbol.png`)"
            title="金村の会"
          />
        </li>
        <li class="item">
          <ItemCard
            to="/"
            :imageUrl="require(`~/assets/image/symbol.png`)"
            title="キムタククラブ"
          />
        </li>
        <li class="item">
          <ItemCard
            to="/"
            :imageUrl="require(`~/assets/image/symbol.png`)"
            title="霊波の光のタピオカバーガー"
          />
        </li>
        <li class="item">
          <ItemCard
            to="/"
            :imageUrl="require(`~/assets/image/symbol.png`)"
            title="フル単よろしく"
          />
        </li>
      </ul>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
import ItemCard from '~/components/molecules/ItemCard.vue'

export default {
  components: {
    TheContainer,
    ItemCard
  }
}
</script>

<style lang="scss" scoped>
 .horizontal-list {
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }

    .item {
      /* 横スクロール用 */
      display: inline-block;
      width: 45%;

      /* 見た目調整 */
      height: 200px;
      margin: 16px;
      font-size: 20px;
      background: rgba($theme-color, 0.5);
    }
</style>
