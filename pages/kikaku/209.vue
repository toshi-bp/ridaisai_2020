<template>
  <!-- RICORA MUSIC TEAM -->
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
          :website="KikakuList.website"
        />

        <!-- ここにコンテンツを掲載するよ -->
        <TheContainer>
          <TheSection>
            <h3>企画紹介</h3>
            <p>{{ KikakuList.description }}</p>
            <div
            v-for="videos in videoIds"
            :key="videos. id"
            class="kikaku-info__youtube"
          >
            <youtube
              ref="youtube"
              :video-id="videos.videoId"
              :fit-parent="true"
              :resize="true"
            />
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
  data () {
    return {
      videoIds: [
        {
          id: 1,
          videoId: '7gBB8BqLBsk'
        },
        {
          id: 2,
          videoId: 'QuJvqIX85j8'
        },
        {
          id: 3,
          videoId: '3ILJdxrwEPE'
        },
        {
          id: 4,
          videoId: 'hSJhJUL0Edo'
        },
        {
          id: 5,
          videoId: '9oE_hRcRpRM'
        },
        {
          id: 6,
          videoId: 'RcfAmJ7bSiQ'
        },
        {
          id: 7,
          videoId: '7Bd4OzE7WGQ'
        },
        {
          id: 8,
          videoId: 'jX94Vvor4vM'
        },
        {
          id: 9,
          videoId: 'zFIutT-PmE4'
        },
        {
          id: 10,
          videoId: 'fWpqie55Qks'
        },
        {
          id: 11,
          videoId: 'y900rZh1NUg'
        },
        {
          id: 12,
          videoId: 'BlgEkD7avQQ'
        },
        {
          id: 13,
          videoId: 'AAVHfNV--u0'
        },
        {
          id: 14,
          videoId: '_47YU3XydX4'
        },
        {
          id: 15,
          videoId: 'qG9f18w8TD8'
        }
      ]
    }
  },
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer
  },
  props: {
    id: {
      type: Number,
      default: 209
    }
  },
  computed: {
    Kikaku () {
      const id = 209 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'RICORA',
      'RICORA',
      require('~/assets/kikaku/airship.png')
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
  &__youtube {
    margin-bottom: 1.5rem;
  }
}
</style>
