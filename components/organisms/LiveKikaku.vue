<template>
  <div class="live">
    <TheContainer>
      <SubHeader>
        <template #title>
          Live配信
        </template>
      </SubHeader>
      <div>
        <TheSection class="live__section">
          <p>理大祭ではYouTubeLiveによる参加団体のパフォーマンスのLive配信を行っています。</p>
          <!-- アーカイブを埋め込む(今更) -->
          <h4 class="live__youtube__text">Live配信のアーカイブはこちら</h4>
          <ClosedContents></ClosedContents>
        </TheSection>
      </div>
      <div class="live__time-table">
        <TimeTable />
      </div>
      <div class="live__link">
        <TheSection>
          <div class="live__link__contents">
            <LinkToContents
              :live1311="true"
              day="Sunday"
              start-time="10:45"
              end-time="18:30"
              class="live__link__contents__child"
            >
            </LinkToContents>
            <LinkToContents
              :live-l-b="true"
              day="Sunday"
              start-time="12:00"
              end-time="17:15"
              class="live__link__contents__child"
            >
            </LinkToContents>
          </div>
        </TheSection>
      </div>
      <div class="live__button">
        <LinkButton
          to="/"
        >
          topページに戻る
        </LinkButton>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheSection from '~/components/atoms/TheSection.vue'
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
import LinkButton from '~/components/atoms/LinkButton.vue'
import TimeTable from '~/components/molecules/TimeTable'
import LinkToContents from '~/components/atoms/LinkToContents'
import ClosedContents from '~/components/atoms/ClosedContents'

export default {
  components: {
    TheSection,
    TheContainer,
    SubHeader,
    LinkButton,
    TimeTable,
    LinkToContents,
    ClosedContents
  },
  data () {
    return {
      videos: [
        {
          id: 1,
          title: '薬学ステージ1日目',
          videoId: '5Z5LGivixHY'
        },
        {
          id: 2,
          title: '理工ステージ1日目',
          videoId: 'L_8VsWOuKw4'
        },
        {
          id: 3,
          title: '薬学ステージ2日目',
          videoId: 'XJ4-ugXDuyU'
        },
        {
          id: 4,
          title: '理工ステージ2日目',
          videoId: '-p5dJN1QpVU'
        }
      ]
      // videoId: '5Z5LGivixHY',
      // videoId2: 'L_8VsWOuKw4' // 動画IDを入力する
    }
  }
}
</script>

<style lang="scss" scoped>
.live {
  padding-top: $global-header-height;
  padding-bottom: 2rem;
  background-image: url('~@/assets/image/bg.svg');
  background-size: repeat;

  &__youtube {
    width: 100%;
    margin-bottom: 1.5rem;
    &__text {
      font-size: 1.2rem;
      margin-top: 1.5rem;
      line-height: 2rem;
    }
    &__title {
      font-family: $sub-font;
      font-size: 1rem;
      font-weight: normal;
    }
  }
  &__button {
    text-align: center;
  }
  // &__time-table {
  //   @include media-breakpoint-down(md) {
  //     overflow: scroll visible;
  //   }
  // }
  &__link {
    &__body {
      background-color: $live-color;
    }
    &__contents{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @include media-breakpoint-down(sm){
        flex-direction: column;
      }
      &__child{
        margin: 1rem 0.5rem;
      }
    }
  }
}
</style>
