<template>
  <!-- TUSCOM -->
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
            <p class="kikaku-info__description">
              {{ KikakuList.description }}
            </p>
            <h4>コンテンツのダウンロード(zipファイルでのダウンロードとなります。)</h4>
            <TheRow>
              <TheColumn
                v-for="game in games"
                :key="game.id"
                :pcsize="4"
                :spsize="12"
              >
                <div class="kikaku-info__game">
                  <h4 class="kikaku-info__game__title">
                    {{ game.title }}
                  </h4>
                  <div class="kikaku-info__download">
                    <DownLoadButton
                      :href="`kikaku/121/${game.zip}`"
                    >
                      <span class="kikaku-info__game__button"><fa icon="download" fixed-width />ダウンロード</span>
                    </DownLoadButton>
                  </div>
                </div>
              </TheColumn>
            </TheRow>
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
import DownLoadButton from '~/components/atoms/DownLoadButton'
import TheRow from '~/components/atoms/TheRow'
import TheColumn from '~/components/atoms/TheColumn'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    KikakuInfoBody,
    TheSection,
    TheContainer,
    DownLoadButton,
    TheRow,
    TheColumn
  },
  props: {
    id: {
      type: Number,
      default: 121
    }
  },
  data () {
    return {
      games: [
        {
          id: 1,
          title: 'action',
          zip: 'action.zip'
        },
        {
          id: 2,
          title: 'action_small',
          zip: 'action_small.zip'
        },
        {
          id: 3,
          title: 'block_breaking',
          zip: 'block_breaking.zip'
        },
        {
          id: 4,
          title: 'block_breaking_small',
          zip: 'block_breaking_small.zip'
        },
        {
          id: 5,
          title: 'SpaceExploration',
          zip: 'SpaceExploration.zip'
        },
        {
          id: 6,
          title: 'SpaceShooting',
          zip: 'SpaceShooting.zip'
        }
      ]
    }
  },
  computed: {
    Kikaku () {
      const id = 121 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      '【ゲーム】TUSCOM作品紹介【プログラミング】',
      'TUSCOM',
      require('~/assets/kikaku/KOBIvrHcqTYWIvy8h9RD3f1qXWcxRNRd3KHTs9Of.jpeg')
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
  }
  &__download {
    text-align: center;
  }
  &__game {
    margin-bottom: 1rem;
    &__title {
      font-size: 1.2rem;
    }
    &__button {
      font-size: 1.1rem;
    }
  }
}
</style>
