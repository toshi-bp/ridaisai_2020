<template>
  <div class="live">
    <TimeTable />
  </div>
</template>

<script>
import TimeTable from '~/components/molecules/TimeTable'

export default {
  components: {
    TimeTable
  }
}
</script>

<style lang="scss" scoped>
.live {
  padding-top: $global-header-height;
  padding-bottom: 2rem;
  background-image: url('~@/assets/image/bg.svg');
  background-size: repeat;
}
</style>
