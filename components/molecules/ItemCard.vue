<template>
  <div class="item-card">
    <component
      :is="linkComponentIs"
      :to="to || undefined"
      :href="href || undefined"
      class="item-card__main"
      :target="linkTarget"
    >
      <figure
        class="item-card__img"
        :style="{ backgroundImage: imageUrl ? `url(${imageUrl})` : '',
                  backgroundSize: isImageContain ? 'contain' : 'cover'
        }"
      />
      <div class="item-card__body">
        <h3 class="item-card__title">
          {{ title }}
        </h3>
        <h3 class="item-card__title">
          {{ name }}
        </h3>
        <h3 class="item-card__title">
          {{ id }}
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
      default: '企画名'
    },
    linkTarget: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: '団体名'
    },
    id: {
      type: String
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
  // border: $accent-color 1px solid;
  transition: 0.15s ease all;
  box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.1);
  // border-radius: 1rem;
  // padding: 1rem;
  background-color: #fff;
  margin-bottom: 2rem;
  &__img {
    background: center center / cover no-repeat;
    background-color: rgba($theme-color , $alpha: 0.8);
    width: 100%;
    margin-bottom: 1rem;
    position: relative;
    // border-radius: 1rem;
    &::before {
      content: "";
      display: block;
      padding-top: calc(100% * (2 / 3));
    }
  }
  &__title {
    font-size: 1.25rem;
    font-family: $sub-font;
    margin-bottom: 0;
    color: #000;
    padding: 0 0 1rem 1rem;
    text-decoration: none;
  }
}
</style>
