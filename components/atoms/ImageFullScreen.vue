<template>
  <!-- 画像を全画面表示するためのコンポーネント -->
  <div class="full-screen">
    <div>
      <img :src="src" class="full-screen__img" @click="ImageFullScreen">
      <div>
        <p
          v-if="title"
          class="full-screen__title"
        >
          <span class="full-screen__index">作品名</span>
          <br>{{ title }}
        </p>
        <p
          v-if="name"
          class="full-screen__name"
        >
          <span class="full-screen__index">作成者</span>
          <br>{{ name }}
        </p>
        <p
          v-if="description"
          class="full-screen__description"
        >
          <span class="full-screen__index">説明</span>
          <br>{{ description }}
        </p>
        <div class="full-screen__download">
          <DownLoadButton
            is="a"
            v-if="download"
            :href="src"
            download
            class="download-button"
          >
            <div class="download-button__inner">
              <fa icon="download" fixed-width />
              ダウンロード
            </div>
          </DownLoadButton>
        </div>
      </div>
    </div>
    <div v-if="showFullScreen" class="full-screen__on">
      <img :src="src" class="full-screen__on__img">
      <button type="button" class="full-screen__button" @click="close">
        戻る
      </button>
    </div>
  </div>
</template>

<script>
import DownLoadButton from '~/components/atoms/DownLoadButton'

export default {
  components: {
    DownLoadButton
  },
  props: {
    src: {
      type: String
    },
    title: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    download: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    showFullScreen: false
  }),
  methods: {
    ImageFullScreen () {
      this.showFullScreen = true
    },
    close () {
      this.showFullScreen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.full-screen {
  padding: 2rem 0 3rem;
  &__on {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000;
    z-index: 9900;
    &__img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
  }
  &__download {
    text-align: center;
  }
  &__index {
    font-size: 1.2rem;
    font-weight:bold;
  }
  &__button {
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 10rem;
    height: 5rem;
    background: #fff;
    font-family: $sub-font;
    font-size: 1rem;
    color: #000;
  }
  &__img {
    width: 100%;
    margin-bottom: 1rem;
  }
}
.download-button {
  display:inline-block;
  position:relative;
  background: $website-color;
  // border: 2px solid rgba($website-color, 0.8);
  font-family: $sub-font;
  font-weight: bold;
  border-radius: 5px;
  color: #fff;
  transition: 0.2s ease all;
  overflow: hidden;
  box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.1);

  &__inner {
    position: relative;
    padding: 0.85rem 2.3rem 0.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
    z-index: 2;
    transform: translateX(0);
    transition: all 0.4s ease-in-out;
    @include media-breakpoint-down(sm) {
      font-size: 0.8rem;
    }
  }

  &:hover,&:focus {
    text-decoration: none;
    box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.3);
    transform: translateY(0.2rem);
  }
}
</style>
