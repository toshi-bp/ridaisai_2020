<template>
  <!-- 理科大生紹介企画 -->
  <div class="kikaku-info">
    <div
      v-for="(KikakuList, id) in Kikaku"
      :key="id"
    >
      <div>
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
            <!-- <h3>企画紹介</h3>
            <p class="kikaku-info__description">{{ KikakuList.description }}</p> -->
            <div
              v-for="Student in Students"
              :key="Student.id"
            >
              <MarkdownPreview
                :markdown-html="Student.Student"
              />
              <div
                class="kikaku-info__youtube"
              >
                <youtube
                  ref="youtube"
                  :video-id="Student.videoId"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
            </div>
          </TheSection>
        </TheContainer>
      </div>
      <div class="kikaku-info__button">
        <LinkButton to="/">
          topページに戻る
        </LinkButton>
      </div>
    </div>
  </div>
</template>

<script>
import KikakuInfoHeader from '~/components/molecules/KikakuInfoHeader'
// // import KikakuInfoBody from '~/components/molecules/KikakuInfoBody'
import TheSection from '~/components/atoms/TheSection'
import TheContainer from '~/components/atoms/TheContainer'
import MarkdownPreview from '~/components/atoms/MarkdownPreview'
import LinkButton from '~/components/atoms/LinkButton'
import Students1 from '~/assets/markdown/401_1.md'
import Students2 from '~/assets/markdown/401_2.md'
import Students3 from '~/assets/markdown/401_3.md'
import Students4 from '~/assets/markdown/401_4.md'
import Students5 from '~/assets/markdown/401_5.md'
import Students6 from '~/assets/markdown/401_6.md'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    // KikakuInfoBody,
    TheSection,
    TheContainer,
    MarkdownPreview,
    LinkButton
  },
  props: {
    id: {
      type: Number,
      default: 401
    }
  },
  data () {
    return {
      Students: [
        {
          id: 1,
          Student: Students1,
          videoId: 'EBoeTEDAn4c'
        },
        {
          id: 2,
          Student: Students2,
          videoId: 'Z2J4g81qszQ'
        },
        {
          id: 3,
          Student: Students3,
          videoId: '059IWNv0uRM'
        },
        {
          id: 4,
          Student: Students4,
          videoId: 'RYbQJVhI9_U'
        },
        {
          id: 5,
          Student: Students5,
          videoId: 'SxqcuwNoAYY'
        },
        {
          id: 6,
          Student: Students6,
          videoId: 'suky0n4Zd2c'
        }
      ]
    }
  },
  computed: {
    Kikaku () {
      const id = 401 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    },
    Students1 () {
      return Students1
    },
    Students2 () {
      return Students2
    },
    Students3 () {
      return Students3
    },
    Students4 () {
      return Students4
    },
    Students5 () {
      return Students5
    },
    Students6 () {
      return Students6
    }
  },
  head () {
    return makeHead(
      '現役理科大生に聞く！受験体験談・理科大生の生活を徹底紹介！',
      '理大祭実行委員会',
      require('~/assets/kikaku/ForExam.png')
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
  &__description {
    white-space: pre-line;
    margin-top: -1.5rem;
  }
  &__button {
    text-align: center;
  }
}
</style>
