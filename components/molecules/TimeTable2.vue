<template>
  <!-- これは期間内にタイテが完成しなかった時の保険である -->
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
              <div class="time-table__title">
                <div class="time-table__title__child">
                  薬学ステージ
                </div>
                <div class="time-table__title__child">
                  理工学ステージ
                </div>
              </div>
              <div class="time-table__body" />
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
  &__title {
    display: flex;
    flex-direction: row;
    &__child {
      position: relative;
      left: 60px;
      background-color: $theme-color;
      color: #fff;
      font-family: $sub-font;
      margin: 1rem 0.5rem;
      padding: 1rem 2rem;
      text-align: center;
      width: calc(100% / 2 - 60px);
      @include media-breakpoint-down(sm) {
        left: 0;
        width: calc(100% / 2);
        padding: 1rem;
      }
    }
  }
  &__time {
    position: relative;
    &__child {
      margin-bottom: 5rem;
      left: 0;
      z-index: -2;
      width: 60px;
      text-align: center;
      &::before {
        content: '';
        border-top: 1px $theme-color dashed;
        position: absolute;
        top: 0.8rem;
        left: 60px;
        opacity: 0.7;
        height: 0;
        width: calc(100% - 60px);
        display: block;
      }
    }
  }
  &__body {
    &__saturday {
      &__1 {
        z-index: 1;
        position: absolute;
        left: 60px;
        background-color: $theme-color;
        padding: 1rem;
        height: 60px;
        width: calc(100% / 4 - 1rem);
        @include media-breakpoint-down(sm) {
          width: calc(100% / 3 - 2rem);
          left: 0;
        }
      }
    }
  }
}
</style>
