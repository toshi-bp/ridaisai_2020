<template>
  <div class="kikaku">
    <KikakuIndex />
  </div>
</template>

<script>
/* eslint-disabel-line no-alert, no-console */
import KikakuIndex from '~/components/organisms/KikakuIndex'
export default {
  components: {
    KikakuIndex
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.kikaku {
  // padding-top: $global-header-height;
  // padding-bottom: 2rem;
  // background-image: url('~@/assets/image/bg.svg');
  // background-size: repeat;
  // &__button {
  //   text-align: center;
  // }
}
</style>
