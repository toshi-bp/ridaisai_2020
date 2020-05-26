export default function (title, description, image) {
  let imageAbsoluteUrl = image
  if (typeof image === 'string' && imageAbsoluteUrl.slice(0, 1) === '/') {
    imageAbsoluteUrl = 'https://nodaridaisai.com' + imageAbsoluteUrl
  }
  const defaultImageUrl = 'https://nodaridaisai.com' + require('~/assets/image/symbol.svg')
  const imageUrl = imageAbsoluteUrl || defaultImageUrl

  return {
    title: title ? `${title} - 野田理大祭2020` : '野田地区理大祭2020',
    meta: [
      { hid: 'description', name: 'description', content: description || '2020年度東京理科大学野田地区理大祭公式ウェブサイト。本年度は11月21日(土)、22日(日)の2日間開催。' },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@noda_ridaisai' },
      { hid: 'twitter:title', name: 'twitter:title', content: title || '2020年度野田地区理大祭' },
      { hid: 'twitter:description', name: 'twitter:description', content: description || '2020年度東京理科大学野田地区理大祭公式ウェブサイト。本年度は11月21日(土)、22日(日)の2日間開催。' },
      { hid: 'twitter:image', name: 'twitter:image', content: imageUrl } // ← ここのURLを変えるのも忘れずに！
    ]
  }
}
