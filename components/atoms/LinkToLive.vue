<template>
  <div class="link">
    <div class="link__card">
      <nuxt-link to="/live/">
        <p>ライブ配信会場はこちら</p>
        <!-- 開始時間と終了時間を入れる部分 -->
        {{ startTime }} 〜 {{ endTime }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startTime: {
      type: String
    },
    endTime: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  display: block;
  margin-bottom: 1rem;
  box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.1);
  &__card {
    width: 100%;
    text-align: center;
  }
}
</style>
