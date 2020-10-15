<!--企画の閲覧履歴を作成する-->
<template>
  <div PushHistory></div>
</template>

<script>
export default {
  methods: {
    PushHistory () {
      let KikakuHistory = []
      KikakuHistory.push(this.id)
      localStorage.setItem('KikakuHistory', JSON.stringify(KikakuHistory))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
