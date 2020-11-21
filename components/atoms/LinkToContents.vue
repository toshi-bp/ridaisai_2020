<template>
  <!-- ライブ配信用のリンクにしようと思ったけどZoomとかの他のコンテンツでも使えそうだから一応LinkToContentsという名前にした。 -->
  <div class="link">
      <div
        v-if="live"
        class="link__live"
      >
      <nuxt-link to="/live/">
        <div class="link__live__inner">
          <p class="link__live__text">
            Live配信会場はこちら
          </p>
          <!-- 開始時間と終了時間を入れる部分 -->
          <p class="link__live__text2">
            {{ TheDay }}：{{ startTime }} 〜 {{ endTime }}
          </p>
        </div>
      </nuxt-link>
      </div>
      <div
        v-if="live1311"
        class="link__live"
      >
        <a  target="_blank" href="https://www.youtube.com/watch?v=5Z5LGivixHY&feature=youtu.be">
          <div class="link__live__inner">
            <p class="link__live__text">Live配信会場はこちら(薬学ステージ)</p>
            <!-- 開始時間と終了時間を入れる部分 -->
            <p class="link__live__text2">{{ TheDay }}：{{ startTime }} 〜 {{ endTime }}</p>
          </div>
        </a>
      </div>
      <div
        v-if="liveLB"
        class="link__live"
      >
        <a target="_blank" href="https://www.youtube.com/watch?v=L_8VsWOuKw4&feature=youtu.be">
          <div class="link__live__inner">
            <p class="link__live__text">Live配信会場はこちら(理工<span class="link__live__text__span">学</span>ステージ)</p>
            <!-- 開始時間と終了時間を入れる部分 -->
            <p class="link__live__text2">{{ TheDay }}：{{ startTime }} 〜 {{ endTime }}</p>
          </div>
        </a>
      </div>
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
    <div
      v-if="livelink"
      class="link__toptolive"
    >
      <!-- 直前にLive配信のリンクに変えて下さい -->
      <div class="link__toptolive__inner">
        <div
          class="link__toptolive__inner"
        >
          <slot />
        </div>
      </div>
    </div>
    <div
      v-if="toptolive"
      class="link__toptolive"
    >
      <nuxt-link
        :to="url"
        class="link__toptolive__inner"
      >
        <div class="link__toptolive__inner">
          <slot />
        </div>
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
    },
    day: {
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
    },
    livelink: {
      type: Boolean,
      default: false
    },
    toptolive: {
      type: Boolean,
      default: false
    },
    live1311: {
      type: Boolean,
      default: false
    },
    liveLB: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    TheDay () {
      if (this.day === 'Sunday') {
        return '11月22日(日)'
      } else if (this.day === 'Saturday') {
        return '11月21日(土)'
      } else {
        return this.day
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  display: block;
  margin-bottom: 1rem;
  box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.3);
  transition: 0.15s ease all;
  border-radius: 5px;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.5);
  }
  &__live {
    // width: 100%;
    text-align: center;
    background-color: $live-color;
    border-radius: 5px;
    :hover {
      text-decoration: none;
    }
    &__text {
      padding: 1rem 0 0;
      text-decoration: none;
      &__span {
        @include media-breakpoint-down(sm){
          display: none;
        }
      }
    }
    &__text2 {
      padding: 0.5rem 0 0.5rem;
      text-decoration: none;
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
  &__toptolive {
    width: 100%;
    text-align: center;
    background-color: $live-color;
    border-radius: 5px;
    &__inner {
      padding: 3rem 0.5rem;
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
