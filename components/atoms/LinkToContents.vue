<template>
  <!-- ライブ配信用のリンクにしようと思ったけどZoomとかの他のコンテンツでも使えそうだから一応LinkToContentsという名前にした。 -->
  <div class="link">
    <div
      v-if="live"
      class="link__live"
    >
      <nuxt-link to="/Live/">
        <div class="link__live__inner">
          <p>ライブ配信会場はこちら</p>
          <!-- 開始時間と終了時間を入れる部分 -->
          {{ startTime }} 〜 {{ endTime }}
        </div>
      </nuxt-link>
    </div>
    <div
      v-if="zoom"
      class="link__zoom"
    >
      <div class="link__zoom__inner">
        <a
          :href="url"
          target="_blank"
        >
          Zoomのリンク
        </a>
      </div>
    </div>
    <div
      v-if="website"
      class="link__web"
    >
      <div class="link__web__inner">
        <a :href="url" target="_blank">
          Webコンテンツはこちら
        </a>
      </div>
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
    },
    live: {
      type: Boolean,
      default: false
    },
    zoom: {
      type: Boolean,
      default: false
    },
    web: {
      type: Boolean,
      default: false
    },
    url: {
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
  &__live {
    width: 100%;
    text-align: center;
    background-color: $live-color;
    opacity: 0.8;
    :hover {
      width: 105%;
      height: auto;
      transition: 0.15s ease all;
    }
  }
}
</style>
