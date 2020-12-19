<template>
  <!-- サイエンス夢工房 -->
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
        <!-- <TheContainer>
          <TheSection>
            <h3>企画紹介</h3>
            <p class="kikaku-info__description">
              {{ KikakuList.description }}
            </p>
            <div
              v-for="S in Science"
              :key="S.id"
              class="kikaku-info__contents"
            >
              <h2>{{ S.group }}</h2>
              <h3>{{ S.title }}</h3>
              <p v-html="S.description">
                {{ S.description }}
              </p>
              <div
                class="kikaku-info__youtube"
              >
                <youtube
                  ref="youtube"
                  :video-id="S.videoId"
                  :fit-parent="true"
                  :resize="true"
                />
              </div>
            </div>
          </TheSection>
        </TheContainer> -->
        <ClosedContents>
        </ClosedContents>
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
// import TheSection from '~/components/atoms/TheSection'
// import TheContainer from '~/components/atoms/TheContainer'
// // import MarkdownPreview from '~/components/atoms/MarkdownPreview'
import LinkButton from '~/components/atoms/LinkButton'
import ClosedContents from '~/components/atoms/ClosedContents'

import KikakuList from '~/kikaku/KikakuList.json'
import makeHead from '~/utils/makeHead.js'

export default {
  components: {
    KikakuInfoHeader,
    // KikakuInfoBody,
    // TheSection,
    // TheContainer,
    // MarkdownPreview,
    LinkButton,
    ClosedContents
  },
  props: {
    id: {
      type: Number,
      default: 400
    }
  },
  data  () {
    return {
      Science: [
        {
          id: 1,
          group: '朽津研究室',
          title: '自分のDNAを見てみよう！～バイオイメージングの世界～',
          description: '普通の顕微鏡を使うと、生物の体の中の細胞などの形(構造)を見ることができますが、蛍光顕微鏡を使うと、体の中ではたらく特定の物質だけを光らせて見ることができます。例年、サイエンス夢工房において、自分自身の細胞の中にある、自分の遺伝子であるDNAを、光らせて見てみる実験を体験していただいています。今年は、その実験を動画でご覧いただきます。',
          videoId: 'hS75oAJG9Lo'
        },
        {
          id: 2,
          group: '坊ちゃんLab.',
          title: 'DNA、遺伝子組換え技術ってなんだろう？',
          description: '東京理科大学の学生達による研究サークル・坊ちゃんLabが皆さんにDNAや遺伝子についてご説明します！かわいいキャラクターがわかりやすくお話しますので、ぜひのぞいてみてください！',
          videoId: 'gJJb-lcM_tw'
        },
        {
          id: 3,
          group: '環境保全サークルRiSO Ranger',
          title: '理窓会記念自然公園の自然と環境保全･湿地再生活動',
          description: '東京理科大学野田キャンパスには、広大な理窓会記念自然公園があり、今や貴重となった里山の自然が残されています。教育や研究への活用と共に、学生団体RiSO Rangerを中心に、一般市民の方にも御参加いただき、環境保全･湿地再生活動を進めており、2018年に日本生態系協会賞を受賞しました。理窓会記念自然公園の動植物と環境保全･湿地再生活動について御紹介します。',
          videoId: 'TgBUd5yDmAc'
        },
        {
          id: 4,
          group: '野田文化会物理研究会',
          title: 'ほたる回路を作ってみよう！',
          description: '物理研究会ではホタル回路という電気回路をweb上で作成しながら、各素子の説明および動作原理を簡単に説明しています。<br />当日は配信の後、皆さんにweb上で回路作成を体験していただけるZoomリンクを用意していますので、奮ってご参加ください。',
          videoId: 'jYGucZhLeBE'
        },
        {
          id: 5,
          group: '千葉県立東葛飾高校　理科部',
          title: '爆発？！みんなで水素大実験！',
          description: '今回の動画のテーマは「水素の燃焼と爆発」です。内容としては２つの実験からなります。<br />一つ目は、水素の性質として、水素だけだと穏やかに燃焼し、空気(酸素）と混ざると爆発するものです。<br />もう一つは、水素と酸素を２：１の割合で混合した爆鳴気を30ｍビニールチューブに入れて圧電素子で点火し、爆発させビニールチューブ内に水ができることを確認するものです。',
          videoId: '3f0r38ueUeE'
        },
        {
          id: 6,
          group: '千葉県立柏高校　化学研究部',
          title: 'マジックを化学で解き明かす！',
          description: '奇跡の水に魔法の水、さらに復活の水を加えると…？溶液が光ったり鉄を作ったり…？象の歯磨き粉やレインボージュースなど、様々なびっくりマジックを化学の力で解き明かします！',
          videoId: '8B3cZqQ270I'
        }
      ]
    }
  },
  computed: {
    Kikaku () {
      const id = 400 // kikaku_idの値をjsonから調べて直接入力
      return KikakuList.filter(item => item.kikaku_id === id)
    }
  },
  head () {
    return makeHead(
      'サイエンス夢工房',
      '理大祭実行委員会',
      require('~/assets/kikaku/science.png')
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
  &__contents {
    margin-bottom: 2rem;
  }
}
</style>
