<template>
  <!-- ライブ配信のタイムテーブルを作成する(作ってもらった画像を埋め込むかこちらで作成するかは未定)とりあえずこちらで作成 -->
  <!-- こちらで作成する場合でもそうでなくてもTabを利用して日時毎に表示できるようにしたい -->
  <div class="time-table">
    <!-- <TheContainer> -->
      <div>
        <TheSection>
          <button
            v-for="day in days"
            :key="day.id"
            @click="dayTab = day.id"
            class="time-table__button"
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
              <div class="time-table__title">
                <div class="time-table__title__child">薬学ステージ</div>
                <div class="time-table__title__child__2">理工ステージ</div>
              </div>
              <div
                 v-for="time in times"
                  :key="time.id"
                class="time-table__time"
              >
                <div
                  class="time-table__time__child"
                >
                  {{ time.time }}
                </div>
                <div></div>
              </div>
              <div class="time-table__body">
                <div
                  v-for="Saturday1311 in Saturday1311"
                  :key="Saturday1311.kikaku_id"
                  class="time-table__body__inside"
                >
                  <TimeTableBox
                    :title="Saturday1311.title"
                    :name="Saturday1311.name"
                    :startTime="Saturday1311.startTime"
                    :endTime="Saturday1311.endTime"
                    :start_h="Saturday1311.start_h"
                    :start_m="Saturday1311.start_m"
                    :minutes="Saturday1311.minutes"
                    :url="`/kikaku/${Saturday1311.kikaku_id}/`"
                    class="time-table__body__box"
                  >
                  </TimeTableBox>
                </div>
                <div
                  v-for="SaturdayLB in SaturdayLB"
                  :key="SaturdayLB.kikaku_id"
                  class="time-table__body__inside"
                >
                  <TimeTableBox
                    :title="SaturdayLB.title"
                    :name="SaturdayLB.name"
                    :startTime="SaturdayLB.startTime"
                    :endTime="SaturdayLB.endTime"
                    :start_h="SaturdayLB.start_h"
                    :start_m="SaturdayLB.start_m"
                    :minutes="SaturdayLB.minutes"
                    :url="`/kikaku/${SaturdayLB.kikaku_id}/`"
                    class="time-table__body__box2"
                  >
                  </TimeTableBox>
                </div>
              </div>
              <div class="time-table__body">
              </div>
            </div>
          </div>
          <div
            v-show="dayTab === 2"
            class="time-table__body"
          >
            <h1 class="time-table__body__title">
              22日(日)
            </h1>
            <div class="time-table__saturday">
              <div class="time-table__title">
                <div class="time-table__title__child">薬学ステージ</div>
                <div class="time-table__title__child__2">理工ステージ</div>
              </div>
              <div
                 v-for="time in times"
                  :key="time.id"
                class="time-table__time"
              >
                <div
                  class="time-table__time__child"
                >
                  {{ time.time }}
                </div>
                <div></div>
              </div>
              <div class="time-table__body">
                <div
                  v-for="Sunday1311 in Sunday1311"
                  :key="Sunday1311.kikaku_id"
                  class="time-table__body__inside"
                >
                  <TimeTableBox
                    :title="Sunday1311.title"
                    :name="Sunday1311.name"
                    :startTime="Sunday1311.startTime"
                    :endTime="Sunday1311.endTime"
                    :start_h="Sunday1311.start_h"
                    :start_m="Sunday1311.start_m"
                    :minutes="Sunday1311.minutes"
                    :url="`/kikaku/${Sunday1311.kikaku_id}/`"
                    class="time-table__body__box"
                  >
                  </TimeTableBox>
                </div>
                <div
                  v-for="SundayLB in SundayLB"
                  :key="SundayLB.kikaku_id"
                  class="time-table__body__inside"
                >
                  <TimeTableBox
                    :title="SundayLB.title"
                    :name="SundayLB.name"
                    :startTime="SundayLB.startTime"
                    :endTime="SundayLB.endTime"
                    :start_h="SundayLB.start_h"
                    :start_m="SundayLB.start_m"
                    :minutes="SundayLB.minutes"
                    :url="`/kikaku/${SundayLB.kikaku_id}/`"
                    class="time-table__body__box2"
                  >
                  </TimeTableBox>
                </div>
              </div>
              <div class="time-table__body">
              </div>
            </div>
          </div>
        </TheSection>
      </div>
    <!-- </TheContainer> -->
  </div>
</template>

<script>
import TheSection from '~/components/atoms/TheSection'
// import TheContainer from '~/components/atoms/TheContainer'
import TimeTableBox from '~/components/atoms/TimeTableBox'

// import KikakuList from '~/kikaku/KikakuList.json'
import StageList from '~/kikaku/StageList.json'

export default {
  components: {
    TheSection,
    // TheContainer,
    TimeTableBox
  },
  data () {
    return {
      dayTab: 1,
      days: [
        {
          id: 1,
          day: '21日(土)'
        },
        {
          id: 2,
          day: '22日(日)'
        }
      ],
      times: [
        {
          id: 1,
          time: '10:00'
        },
        {
          id: 2,
          time: '10:30'
        },
        {
          id: 3,
          time: '11:00'
        },
        {
          id: 4,
          time: '11:30'
        },
        {
          id: 5,
          time: '12:00'
        },
        {
          id: 6,
          time: '12:30'
        },
        {
          id: 7,
          time: '13:00'
        },
        {
          id: 8,
          time: '13:30'
        },
        {
          id: 9,
          time: '14:00'
        },
        {
          id: 10,
          time: '14:30'
        },
        {
          id: 11,
          time: '15:00'
        },
        {
          id: 12,
          time: '15:30'
        },
        {
          id: 13,
          time: '16:00'
        },
        {
          id: 14,
          time: '16:30'
        },
        {
          id: 15,
          time: '17:00'
        },
        {
          id: 16,
          time: '17:30'
        },
        {
          id: 17,
          time: '18:00'
        },
        {
          id: 18,
          time: '18:30'
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
      // あとでここに芸能人企画の情報を結びつけるよ
      return StageList.filter(item => item.id > 10 && item.id < 14)
    },
    SundayLB () {
      return StageList.filter(item => item.id > 13 && item.id < 16)
    }
    // Saturday1311WithKikaku () {
    //   return StageList.map((stage) => {
    //     const kikaku = KikakuList.find(
    //       kikaku => kikaku.kikaku_id === this.Saturday1311.kikaku_id
    //     )
    //     if (!kikaku) {
    //       return stage
    //     }
    //     return {
    //       ...stage,
    //       kikakuInfoUrl: `/kikaku/${stage.kikaku_id}/`
    //     }
    //   }
    //   )
    // },
    // SaturdayLBWithKikaku () {
    //   return StageList.map((stage) => {
    //     const kikaku = KikakuList.find(
    //       kikaku => kikaku.kikaku_id === this.SaturdayLB.kikaku_id
    //     )
    //     if (!kikaku) {
    //       return stage
    //     }
    //     return {
    //       ...stage,
    //       kikakuInfoUrl: `/kikaku/${stage.kikaku_id}/`
    //     }
    //   })
    // },
    // Sunday1311WithKikaku () {
    //   return StageList.map((stage) => {
    //     const kikaku = KikakuList.find(
    //       kikaku => kikaku.kikaku_id === this.Sunday1311.kikaku_id
    //     )
    //     if (!kikaku) {
    //       return stage
    //     }
    //     return {
    //       ...stage,
    //       kikakuInfoUrl: `/kikaku/${stage.kikaku_id}/`
    //     }
    //   })
    // },
    // SundayLBWithKikaku () {
    //   return StageList.map((stage) => {
    //     const kikaku = KikakuList.find(
    //       kikaku => kikaku.kikaku_id === this.SundayLB.kikaku_id
    //     )
    //     if (!kikaku) {
    //       return stage
    //     }
    //     return {
    //       ...stage,
    //       kikakuInfoUrl: `/kikaku/${stage.kikaku_id}/`
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.time-table {
  &__title {
    display: flex;
    flex-direction: row;
    &__child {
      position: relative;
      left: 60px;
      background-color: $theme-color;
      color: #fff;
      font-family: $sub-font;
      margin: 1rem 0.5rem 2rem;
      padding: 1rem 2rem;
      text-align: center;
      width: calc(100% / 2 - 60px);
      @include media-breakpoint-down(md) {
        left: 0;
        width: 100%;
        padding: 1rem;
        margin-left: 4rem;
        margin-right: -1rem;
      }
      &__2 {
        position: relative;
        left: 60px;
        background-color: $theme-color;
        color: #fff;
        font-family: $sub-font;
        margin: 1rem 0.5rem 2rem;
        padding: 1rem 2rem;
        text-align: center;
        width: calc(100% / 2 - 60px);
        @include media-breakpoint-down(md) {
          width: 100%;
          padding: 1rem;
          margin-right: 4rem;
          right: 0;
        }
      }
    }
  }
  &__time {
    position: relative;
    &__child {
      margin-bottom: 123px; // なぜか123pxでピッタリでした
      left: 0;
      z-index: -2;
      width: 60px;
      @include media-breakpoint-down(sm) {
        // margin-bottom: 120px;
      }
      &::before {
        content: '';
        border-top: 1px $theme-color dashed;
        position: absolute;
        left: 60px;
        opacity: 0.7;
        height: 0;
        width: calc(100% - 60px);
        display: block;
      }
    }
  }
  &__body {
    z-index: 2;
    &__title {
      font-size: 1.1rem;
    }
    &__inside {
      display: flex;
    }
    &__box {
      width: calc(71% / 4);
      left: calc(25%);
      @include media-breakpoint-down(lg) {
        width: calc(96% / 4);
        left: calc(16.5%);
      }
      @include media-breakpoint-down(md) {
        width: 20%;
        left: calc(15%);
      }
    }
    &__box2 {
      width: calc(71% / 4);
      right: calc(21% + 240px);
      @include media-breakpoint-down(lg) {
        width: calc(96% / 4);
        right: calc(11% + 240px);
      }
      @include media-breakpoint-down(md) {
        width: 20%;
        right: calc(10%);
      }
    }
    // &__saturday {
    //   &__1 {
    //     z-index: 1;
    //     position: absolute;
    //     left: 60px;
    //     background-color: $theme-color;
    //     padding: 1rem;
    //     height: 60px;
    //     width: calc(100% / 4 - 1rem);
    //     @include media-breakpoint-down(sm) {
    //       width: calc(100% / 3 - 2rem);
    //       left: 0;
    //     }
    //   }
    // }
  }
  &__button {
    margin-right: 0.5rem;
    background-color: $theme-color;
    border-radius: 5px;
    border: none;
    color: #fff;
    padding: 0.5rem;
    transition: 0.15s ease all;
    box-shadow: 0 0.25rem 1rem rgba($color: #000000, $alpha: 0.1);
    &:hover {
      transform: scale(1.03);
    }
  }
}
</style>
