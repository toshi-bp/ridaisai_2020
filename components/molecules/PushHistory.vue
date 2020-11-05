<!--企画の閲覧履歴を作成する-->
<template>
  <div KikakuList />
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    }
  },
  methods: {
    PushHistory () {
      const KikakuHistory = []
      KikakuHistory.push(this.id)
      localStorage.setItem('KikakuHistory', JSON.stringify(KikakuHistory))
      return KikakuHistory
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
