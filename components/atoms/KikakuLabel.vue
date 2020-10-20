<template>
  <div
   class="label"
   :class="{
     'label--is-red': type === 'red',
     'label--is-blue': type === 'blue',
     'label--is-green': type === 'green',
     'label--is-orange': type === 'orange'
   }"
  >
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.label {

}
</style>
