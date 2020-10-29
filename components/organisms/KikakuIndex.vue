<template>
  <div class="kikaku">
    <TheContainer>
      <SubHeader>
        <template #title>
          企画一覧
        </template>
      </SubHeader>
      <!-- <div class="kikaku__search">
        <div class="kikaku__search__box">
          <input
            type="text"
            valuename="keyword"
            placeholder="検索キーワード"
            class="kikaku__search__text"
            v-model="keyword"
          >
        </div>
        <button class="kikaku__search__button" @click="Searching">
          検索
        </button>
      </div> -->
      <div>
        <TheSection>
          <p>このページでは理大祭に参加している団体の企画をみることができます。</p>
          <p>
            企画は以下の4つのジャンルに分類されています。それぞれのラベルをクリックするとそれぞれの開催形態の部分に移動できます。
          </p>
          <h3>ジャンルから選ぶ</h3>
          <div class="kikaku__label">
            <KikakuLabel
              @click="clickSmoothScroll(type)"
              v-for="type in types"
              :key="type"
              class="kikaku__label__main"
              :type="type"
              linkComponentIs='a'
              :href="`/2020/kikaku/#${type}`"
            >
              {{
                {
                  academic: '学術系',
                  musical: '音楽系',
                  cultual: '文化系',
                  exhibition: '展示系'
                }[type]
              }}
            </KikakuLabel>
          </div>
          <div>
            <p>
              また、各企画の開催形態は以下の3種類であり、それぞれのラベルをクリックするとそれぞれの開催形態の部分に移動できます。
            </p>
            <h3>開催形態から選ぶ</h3>
            <div class="kikaku__label">
              <KikakuLabel
                @click="clickSmoothScroll(form)"
                v-for="form in forms"
                :key="form"
                class="kikaku__label__main"
                :type="form"
                linkComponentIs='a'
                :href="`/2020/kikaku/#${form}`"
              >
                {{
                  {
                    live: 'ライブ配信',
                    youtube: 'YouTube',
                    website: 'Webサイト'
                  }[form]
                }}
              </KikakuLabel>
            </div>
          </div>
        </TheSection>
      </div>
      <div>
        <TheSection>
          <div
            v-for="(KikakuList, type) in {
              academic: academicKikaku,
              musical: musicalKikaku,
              cultual: cultualKikaku,
              exhibition: exhibitionKikaku
            }"
            :key="type"
          >
            <!-- 企画のジャンル毎にまとめた部分 -->
            <div
              :id="type"
              class="kikaku__index"
            >
              <KikakuLabel
                :type="type"
                linkComponentIs='nuxt-link'
                to="/kikaku/"
              >
                {{
                  {
                    academic: '学術系',
                    musical: '音楽系',
                    cultual: '文化系',
                    exhibition: '展示系'
                  }[type]
                }}
              </KikakuLabel>
            </div>
            <TheRow>
              <TheColumn
                v-for="item in KikakuList"
                :key="item.kikaku_id"
                :spsize="12"
              >
                <ItemCard
                  :to="`/kikaku/${item.kikaku_id}/`"
                  :label-type="item.type"
                  :label-text="item.type"
                  :title="item.kikaku_title"
                  :name="item.name"
                  :image-url="item.image_filename ? require(`~/assets/kikaku/${item.image_filename}`) : ''"
                  :live="item.live"
                  :youtube="item.youtube"
                  :website="item.website"
                />
              </TheColumn>
            </TheRow>
          </div>
          <!-- 企画の形態ごとにまとめた部分 -->
          <div
            v-for="(KikakuList, form) in {
              live: liveKikaku,
              youtube: youtubeKikaku,
              website: websiteKikaku
            }"
            :key="form"
          >
            <div
              :id="form"
              class="kikaku__index"
            >
              <KikakuLabel
                :type="form"
                linkComponentIs='nuxt-link'
                to="/kikaku/"
              >
                {{
                  {
                    live: 'ライブ配信',
                    youtube: 'YouTube',
                    website: 'Webサイト'
                  }[form]
                }}
              </KikakuLabel>
            </div>
            <TheRow>
              <TheColumn
                v-for="item in KikakuList"
                :key="item.kikaku_id"
                :spsize="12"
              >
                <ItemCard
                  :to="`/kikaku/${item.kikaku_id}/`"
                  :label-type="item.type"
                  :label-text="item.type"
                  :title="item.kikaku_title"
                  :name="item.name"
                  :image-url="item.image_filename ? require(`~/assets/kikaku/${item.image_filename}`) : ''"
                  :live="item.live"
                  :youtube="item.youtube"
                  :website="item.website"
                />
              </TheColumn>
            </TheRow>
          </div>
        </TheSection>
      </div>
      <div class="kikaku__button">
        <LinkButton to="/">
          topページに戻る
        </LinkButton>
      </div>
    </TheContainer>
  </div>
</template>

<script>
/* eslint-disabel-line no-alert, no-console */
import TheContainer from '~/components/atoms/TheContainer.vue'
import SubHeader from '~/components/organisms/SubHeader.vue'
// import Search from '~/components/atoms/Search.vue'
import ItemCard from '~/components/molecules/ItemCard'
import TheRow from '~/components/atoms/TheRow.vue'
import TheColumn from '~/components/atoms/TheColumn.vue'
import TheSection from '~/components/atoms/TheSection'
import LinkButton from '~/components/atoms/LinkButton'
import KikakuLabel from '~/components/atoms/KikakuLabel'

import KikakuList from '~/kikaku/KikakuList.json'

export default {
  data () {
    return {
      keyword: '',
      types: ['academic', 'musical', 'cultual', 'exhibition'],
      forms: ['live', 'youtube', 'website']
    }
  },
  components: {
    TheContainer,
    SubHeader,
    // Search,
    ItemCard,
    TheRow,
    TheColumn,
    TheSection,
    LinkButton,
    KikakuLabel
  },
  props: {
    type: {
      type: String
    }
  },
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(this.type),
        400,
        null,
        null,
        'both'
      )
    }
  },
  computed: {
    KikakuList () {
      return KikakuList
    },
    academicKikaku () {
      return KikakuList.filter(item => item.type === 'academic')
    },
    musicalKikaku () {
      return KikakuList.filter(item => item.type === 'musical')
    },
    cultualKikaku () {
      return KikakuList.filter(item => item.type === 'cultual')
    },
    exhibitionKikaku () {
      return KikakuList.filter(item => item.type === 'exhibition')
    },
    liveKikaku () {
      return KikakuList.filter(item => item.live === true)
    },
    youtubeKikaku () {
      return KikakuList.filter(item => item.youtube === true)
    },
    websiteKikaku () {
      return KikakuList.filter(item => item.website === true)
    },
    Searching () {
      const SearchedKikaku = []
      const keyword = this.keyword
      if (this.KikakuList.kikaku_title.includes(keyword) !== -1 || this.KikakuList.name.includes(keyword) !== -1) {
        SearchedKikaku.push(this.KikakuList.kikaku_id)
      }
      return KikakuList.filter(SearchedKikaku => SearchedKikaku.kikaku_id === this.KikakuList.kikaku_id)
    }
  }
}
</script>

<style lang="scss" scoped>
.kikaku {
  padding-top: $global-header-height;
  padding-bottom: 2rem;
  background-image: url('~@/assets/image/bg.svg');
  background-size: repeat;
  &__button {
    text-align: center;
  }
  &__label {
    margin: 1rem 0rem 1.5rem 0;
    display: flex;
    flex-direction: row;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
      margin-bottom: 1rem;
    }
    &__main {
      margin-right: 0.5rem;
      @include media-breakpoint-down(sm) {
      margin-bottom: 1rem;
    }
    }
  }
  &__index {
    padding-top: #{$global-header-height + 1rem};
    margin: -#{$global-header-height + 0.8rem} 0 1.5rem;
    // margin: 1rem 0 1.5rem;
    &__main {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: row;
    }
  }
  &__search {
    margin-bottom: 2rem;
    display: flex;
    @include media-breakpoint-down(sm) {
      margin-right: 0rem;
    }
    &__box {
      display: inline-flex;
      align-items: center;
      padding: 3px 5px;
      background: #fff;
      width: 90%;
      @include media-breakpoint-down(sm) {
        // width: 70%;
      }
    }
    &__text {
      width: 100%;
      border: none;
      background: transparent;
    }
    &__button {
      color: #fff;
      margin-left: 10px;
      display: inline-block;
      outline: none;
      background: $theme-color;
      border: none;
      font-family: $sub-font;
      height: 35px;
      width: 4rem;
    }
  }
}
</style>
