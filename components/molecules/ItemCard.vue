<template>
  <div class="item-card">
    <component
      :is="linkComponentIs"
      :to="to || undefined"
      :href='href || undefined'
      class="item-card__main"
      :target="linkTarget"
    >
      <figure
        class='item-card__img'
        :style="{ backgroundImage: imageUrl ? `url(${imageUrl})` : '',
                  backgroundSize: isImageContain ? 'contain' : 'cover'
                }"
      />
      <div class="item-card__body">
        <h3 class="item-card__title">
          {{ title }}
        </h3>
      </div>
    </component>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: '~/assets/image/symbol.png'
    },
    isImageContain: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '金村の会'
    },
    linkTarget: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    }
  },
  computed: {
    linkComponentIs () {
      switch (true) {
        case !!this.to:
          return 'nuxt-link'
        case !!this.href:
          return 'a'
        default:
          return 'div'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card {
  display: block;
  border: $accent-color 1px solid;
  margin-bottom: 2rem;
  text-decoration: none;
  transition: 0.15s ease all;
  z-index: 8900;

  &__img {
    background: center center / cover no-repeat;
    background-color: rgba($theme-color , $alpha: 0.8);
    width: 100%;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 1.25rem;
    font-family: $sub-font;
    margin-bottom: 0;
  }
}
</style>
