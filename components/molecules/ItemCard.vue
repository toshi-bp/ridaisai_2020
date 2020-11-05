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
        <ItemCardLabel
          v-if="labelText"
          class="item-card__label"
          :type="labelType"
        >
          {{ labelTextChanged }}
        </ItemCardLabel>
        <h3 class="item-card__title">
          {{ title }}
        </h3>
        <h3 class="item-card__name">
          {{ name }}
        </h3>
        <div class="item-card__label2">
          <ItemCardLabel2
            v-if="live"
            :live="live"
            class="item-card__label2__main"
          >
            Live配信
          </ItemCardLabel2>
          <ItemCardLabel2
            v-if="youtube"
            :youtube="youtube"
            class="item-card__label2__main"
          >
            動画
          </ItemCardLabel2>
          <ItemCardLabel2
            v-if="website"
            :website="website"
            class="item-card__label2__main"
          >
            Webサイト
          </ItemCardLabel2>
        </div>
      </div>
    </component>
  </div>
</template>

<script>
import ItemCardLabel from '~/components/atoms/ItemCardLabel'
import ItemCardLabel2 from '~/components/atoms/ItemCardLabel2'

export default {
  components: {
    ItemCardLabel,
    ItemCardLabel2
  },
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
    labelText: {
      type: String,
      default: ''
    },
    labelType: {
      type: String,
      default: ''
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
    live: {
      type: Boolean,
      default: false
    },
    youtube: {
      type: Boolean,
      default: false
    },
    website: {
      type: Boolean,
      default: false
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
    },
    labelTextChanged () {
      const typeDict = {
        academic: '学術系',
        musical: '音楽系',
        cultual: '文化系',
        exhibition: '展示系'
      }
      return typeDict[this.labelType]
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
  border-radius: 1rem;
  // padding: 1rem;
  background-color: #fff;
  margin-bottom: 2rem;
  &:hover {
    transform: translateY(8px);
    box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.3);
  }
  &__img {
    background: center center / cover no-repeat;
    background-color: rgba($theme-color , $alpha: 0.8);
    width: 100%;
    margin-bottom: 1rem;
    position: relative;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    &::before {
      content: "";
      display: block;
      padding-top: calc(100% * (3 / 4));
    }
  }
  &__title {
    font-size: 1.25rem;
    font-family: $sub-font;
    margin: 0.5rem 0 0;
    color: $color;
    padding: 0 1rem 0.5rem 1rem;
    text-decoration: none;
    line-height: 1.2;
    @include media-breakpoint-down(md) {
      font-size: 1.1rem;
    }
    @include media-breakpoint-down(sm) {
      font-size: 1rem;
      line-height: 1;
    }
  }
  &__name {
    font-family: $sub-font;
    font-size: 1rem;
    text-decoration: none;
    color: $color;
    padding: 0 1rem 0.5rem 1rem;
    line-height: 1;
    @include media-breakpoint-down(md) {
      font-size: 0.9rem;
    }
    @include media-breakpoint-down(sm) {
      font-size: 0.9rem;
      line-height: 1;
    }
  }
  &__label {
    margin: 0 0 0.5rem 1rem;
  }
  &__label2 {
    display: flex;
    flex-direction: row;
    &__main {
      margin: 0 -0.5rem 1rem 1rem;
    }
  }
}
</style>
