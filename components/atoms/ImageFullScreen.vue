<template>
  <div class="full-screen">
    <div>
      <img :src="src" class="full-screen__img" @click="ImageFullScreen">
      <div>
        <p class="full-screen__title">
          作品名：{{ title }}
        </p>
        <p class="full-screen__description">
          説明：{{ description }}
        </p>
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
export default {
  props: {
    src: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
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
  padding: 2rem 0 5rem;
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
}
</style>
