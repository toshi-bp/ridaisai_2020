<template>
  <div class="live">
    <TheContainer>
      <SubHeader>
        <template #title>
          ライブ配信
        </template>
      </SubHeader>
      <div>
        <TheSection>
          <p>ここではライブ配信を行っています。配信は二つの会場で行なわれています。</p>
          <!-- ここにライブ配信する動画を埋め込むよ(チャットを載せるか否かは要相談) -->
           <div class="live__movie">
             <!-- 公開に際しチャットを埋め込む場合はsrcのurlの部分を変更すること -->
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
                <!--チャットの高さについては要調整(特にスマホ版)あとURLも-->
              </iframe>
              <!-- heightは:style"{}"を利用して変えていく方式にした方がいいかもしれない -->
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
            </div>
        </TheSection>
      </div>
      <div>
        <TimeTable />
      </div>
      <div>
        <LinkButton
          to="/kikaku/"
        >
          企画一覧
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

export default {
  components: {
    TheSection,
    TheContainer,
    SubHeader,
    LinkButton,
    TimeTable
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
}
</style>
