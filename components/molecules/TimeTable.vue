<template>
  <!-- ライブ配信のタイムテーブルを作成する(作ってもらった画像を埋め込むかこちらで作成するかは未定) -->
  <!-- こちらで作成する場合でもそうでなくてもTabを利用して日時毎に表示できるようにしたい -->
  <div class="time-table">
    <TheContainer>
      <div>
        <TheSection>
          <button
            v-for="day in days"
            :key="day.id"
            @click="dayTab = day.id"
          >
            {{ day.day }}
          </button>
          <div
            v-show="dayTab === 1"
            class="time-table__body"
          >
            <h1 class="time-table__body__title">
              21日(土)
            </h1>
            <p>ああああああ</p>
          </div>
          <div
            v-show="dayTab === 2"
            class="time-table__body"
          >
            <h1 class="time-table__body__title">
              22日(日)
            </h1>
            <p>いいいいい</p>
          </div>
        </TheSection>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheSection from '~/components/atoms/TheSection'
import TheContainer from '~/components/atoms/TheContainer'

export default {
  components: {
    TheSection,
    TheContainer
  },
  data () {
    return {
      dayTab: 1,
      days: [
        {
          id: 1,
          day: 'Saturday'
        },
        {
          id: 2,
          day: 'Sunday'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.time-table {

}
</style>
