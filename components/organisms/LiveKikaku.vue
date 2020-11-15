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
          <p>理大祭ではYouTubeLiveによる参加団体のパフォーマンスのLive配信を行っています。まずはタイムテーブルをチェック！</p>
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
          <LinkToContents
          :livelink="true"
            class="live__link__body"
          >
            YouTubeLiveへは当日こちらのボタンからアクセスできます。<br />お楽しみに！
          </LinkToContents>
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
      videoId_1: 'YAdpFRgXjh0',
      videoId_2: 'CiEzaiFuz9E' // 動画IDを入力する
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

  &__movie {
    &__live {
      width: 100%;
      &__body {
        height: 35rem;
        @include media-breakpoint-down(md) {
          height: 40rem;
        }
        @include media-breakpoint-down(sm) {
          height: 30rem;
        }
      }
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
  }
}
</style>
