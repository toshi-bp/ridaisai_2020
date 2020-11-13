<template>
  <!-- ライブ配信のタイムテーブルを作成する(作ってもらった画像を埋め込むかこちらで作成するかは未定)とりあえずこちらで作成 -->
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
            <div class="time-table__saturday">
              <div
                 v-for="time in times"
                  :key="time.id"
                class="time-table__time"
              >
                <div class="time-table__time__line"></div>
                <div
                  class="time-table__time__child"
                >
                  {{ time.time }}
                </div>
                <div></div>
              </div>
              <div
                v-for="stage in Saturday1311"
                :key="stage.id"
                class="time-table__saturday__1311"
              >
              <div></div>
              </div>
              <div
                v-for="stage in SaturdayLB"
                :key="stage.id"
              ></div>
            </div>
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

import StageList from '~/kikaku/StageList.json'

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
      ],
      times: [
        {
          id: 1,
          time: '10:00'
        },
        {
          id: 2,
          time: '11:00'
        },
        {
          id: 3,
          time: '12:00'
        },
        {
          id: 4,
          time: '13:00'
        },
        {
          id: 5,
          time: '14:00'
        },
        {
          id: 6,
          time: '15:00'
        },
        {
          id: 7,
          time: '16:00'
        },
        {
          id: 8,
          time: '17:00'
        },
        {
          id: 9,
          time: '18:00'
        }
      ]
    }
  },
  computed: {
    Saturday1311 () {
      return StageList.filter(item => item.id < 7)
    },
    SaturdayLB () {
      // LBは講義棟を表しています(Lecture Building)
      return StageList.filter(item => item.id > 6 && item.id < 11)
    },
    Sunday1311 () {
      return StageList.filter(item => item.id > 10 && item.id < 14)
    },
    SundayLB () {
      return StageList.filter(item => item.id > 13)
    }
  }
}
</script>

<style lang="scss" scoped>
.time-table {
  &__time {
    position: relative;
    &__child {
      margin-bottom: 5rem;
      text-align: center;
      width: 60px;
    }
    &__line {
      border-top: 1px $theme-color dashed;
      opacity: 0.7;
      height: 0;
      width: 100%;
    }
  }
}
</style>
