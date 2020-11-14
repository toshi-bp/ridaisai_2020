<template>
  <div
    v-html="markdownHtml"
    class="markdown-preview"
    :class="{'markdown-preview--no-strong-hightlight': noStrongHighLight}"
  />
</template>

<script>
export default {
  props: {
    markdownHtml: {
      type: String
    },
    noStrongHighLight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.markdown-preview {
  line-height: 1.7;
  font-feature-settings: normal;
  padding-top: 1px;

  &:not(&--no-strong-highlight) {
    /deep/ strong,
    /deep/ b {
      $mark-color: rgba($yellow, 0.5);
      background: linear-gradient(to bottom, #fff, #fff 70%, $mark-color 70%, $mark-color);
    }

    /deep/ h2,
    /deep/ h3 {
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    /deep/ h2 {
      font-family: $sub-font;
      padding-top: #{$global-header-height + 1rem};
      font-feature-settings: "palt";
      font-size: 1.5rem;
    }

    /deep/ h3 {
      font-size: 1.1rem;
      margin: 1.5rem 0 0.75rem;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
