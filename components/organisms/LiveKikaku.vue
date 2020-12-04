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
          <div
            v-for="video in videos"
            :key="video.id"
            class="live__youtube"
          >
            <h3 class="live__youtube__title">
              {{ video.title }}
            </h3>
            <youtube
              ref="youtube"
              :video-id="video.videoId"
              :fit-parent="true"
              :resize="true"
            />
          </div>
          <!-- ここにライブ配信する動画を埋め込むよ(チャットを載せるか否かは要相談) -->
          <!-- 埋め込めなくなる可能性が出てきたため一旦動画の部分はコメントアウト -->
          <!-- <div class="live__movie">
            公開に際しチャットを埋め込む場合はsrcのurlの部分を変更すること
            <youtube
              ref="youtube"
              :video-id="videoId_1"
              :fit-parent="true"
              :resize="true"
            />
            <iframe
              height="400"
              frameborder="0"
              :src="`https://www.youtube.com/live_chat?v=${videoId_1}&embed_domain=localhost`"
              allowfullscreen
            >
              チャットの高さについては要調整(特にスマホ版)あとURLも
            </iframe>
            <youtube
              ref="youtube"
              :video-id="videoId_2"
              :fit-parent="true"
              :resize="true"
            />
            <iframe
              height="400"
              frameborder="0"
              :src="`https://www.youtube.com/live_chat?v=${videoId_2}&embed_domain=localhost`"
              allowfullscreen
            />
          </div> -->
        </TheSection>
      </div>
      <div class="live__time-table">
        <TimeTable />
      </div>
      <div class="live__link">
        <TheSection>
          <!-- <LinkToContents
          :livelink="true"
            class="live__link__body"
          >
            YouTubeLiveへは当日こちらのボタンからアクセスできます。<br />お楽しみに！
          </LinkToContents> -->
          <div class="live__link__contents">
            <LinkToContents
              :live1311="true"
              day="Sunday"
              start-time="10:45"
              end-time="18:30"
              class="live__link__contents__child"
            >
              薬学ステージのLive配信にアクセス！
            </LinkToContents>
            <LinkToContents
              :live-l-b="true"
              day="Sunday"
              start-time="12:00"
              end-time="17:15"
              class="live__link__contents__child"
            >
              理工ステージのLive配信にアクセス！
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

export default {
  components: {
    TheSection,
    TheContainer,
    SubHeader,
    LinkButton,
    TimeTable,
    LinkToContents
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
