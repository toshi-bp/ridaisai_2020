<template>
  <!-- ライブ配信用のリンクにしようと思ったけどZoomとかの他のコンテンツでも使えそうだから一応LinkToContentsという名前にした。 -->
  <div class="link">
    <nuxt-link to="/Live/">
      <div
        v-if="live"
        class="link__live"
      >
        <div class="link__live__inner">
          <p>Live配信会場はこちら
            <!-- 開始時間と終了時間を入れる部分 -->
            {{ startTime }} 〜 {{ endTime }}
          </p>
        </div>
      </div>
    </nuxt-link>
    <div
      v-if="link"
      class="link__web"
    >
      <div class="link__web__inner">
        <a
          :href="url"
          target="_blank"
          class="link__web__inner"
        >
          <slot />
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
    link: {
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
  box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.3);
  &__live {
    width: 100%;
    text-align: center;
    background-color: $live-color;
    border-radius: 5px;
    :hover {
      width: 105%;
      height: auto;
      transition: 0.15s ease all;
    }
    &__inner {
      padding: 1rem 0;
      font-size: 1.2rem;
      font-family: $sub-font;
      text-align: center;
      color: #fff;
      @include media-breakpoint-down(sm) {
        font-size: 1rem;
      }
    }
  }
  &__web {
    width: 100%;
    text-align: center;
    background-color: $website-color;
    border-radius: 5px;
    :hover {
      width: 105%;
      height: auto;
      transition: 0.15s ease all;
    }
    &__inner {
      padding: 1.5rem 0;
      font-size: 1.2rem;
      font-family: $sub-font;
      text-align: center;
      color: #fff;
      @include media-breakpoint-down(sm) {
        font-size: 1rem;
      }
    }
  }
}
</style>
