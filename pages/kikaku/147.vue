<template>
  <!-- リモートロボット操作体験プロジェクトチーム -->
  <div class="kikaku-info">
    <div
      v-for="(KikakuList, id) in Kikaku"
      :key="id"
    >
      <div KikakuList>
        <KikakuInfoHeader
          :id="KikakuList.kikaku_id"
          :kikaku_name="KikakuList.kikaku_title"
          :circle_name="KikakuList.name"
          :type="KikakuList.type"
          :live="KikakuList.live"
          :youtube="KikakuList.youtube"
          :website="KikakuList.website"
        />

        <!-- ここにコンテンツを掲載するよ -->
        <TheContainer>
          <TheSection>
            <h3>企画紹介</h3>
            <p>{{ KikakuList.description }}</p>
            <div class="kikaku-info__movie">
              <!-- parent=https://nodaridaisai.com -->
              <iframe
                src="https://player.twitch.tv/?channel=fps_shaka&parent=localhost"
                frameborder="0"
                allowfullscreen="true"
                scrolling="no"
                width="100%"
                height="100%"
              ></iframe>
            </div>
            <div class="kikaku-info__chat">
              <iframe
                id="chat_embed"
                src="https://www.twitch.tv/embed/stylishnoob4/chat?parent=localhost"
                height="100%"
                width="100%">
              </iframe>
            </div>
          </TheSection>
        </TheContainer>

        <KikakuInfoBody
          :image-url="require(`@/assets/kikaku/${KikakuList.image_filename}`)"
          :name="KikakuList.name"
          :introduce="KikakuList.introduction"
          :url="KikakuList.url"
          :twitter="KikakuList.twitter_ids"
        />
      </div>
    </div>
  </div>
</template>

<script>
import KikakuInfoHeader from '~/components/molecules/KikakuInfoHeader'
import KikakuInfoBody from '~/components/molecules/KikakuInfoBody'
import TheSection from '~/components/atoms/TheSection'
import TheContainer from '~/components/atoms/TheContainer'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer
  },
  props: {
    id: {
      type: Number,
      default: 147
    }
  },
  computed: {
    Kikaku () {
      const id = 147 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'リモートロボット操縦体験',
      'リモートロボット操縦体験プロジェクトチーム',
      require('~/assets/kikaku/SpMn1UMEEqkp0If1En6LmiNHiuqmPvGxH9JqjrpX.png')
    )
  }
}
</script>

<style lang="scss" scoped>
.kikaku-info {
  padding-top: $global-header-height;
  padding-bottom: 2rem;
  background-image: url('~@/assets/image/bg.svg');
  background-size: repeat;

  &__movie {
    width: 100%;
    height: 500px;
    @include media-breakpoint-down(md) {
      height: 400px;
    }
    @include media-breakpoint-down(sm) {
      height: 200px;
    }
  }

  &__chat {
    width: 100%;
    height: 500px;
  }
}
</style>
