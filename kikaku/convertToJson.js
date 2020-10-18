// const { title } = require('process')

if(typeof window === "undefined") {
  const fs = require('fs')

  const CSV_FILE_PATH = 'KikakuList.csv'
  const JSON_FILE_PATH = 'KikakuList.json'

  const TITLES = {}
  TITLES['企画ID'] = 'kikaku_id'
  TITLES['企画を出店する団体の名称'] = 'circle_name'
  TITLES['企画名'] = 'kikaku_name'
  TITLES['ジャンル'] = 'type'
  TITLES['説明文(字数制限なし)'] = 'description'
  TITLES['団体紹介(字数制限なし)'] = 'introduction'
  TITLES['団体公式HP'] = 'url'
  TITLES['団体公式Twitter'] = 'twitter_ids'
  TITLES['画像'] = 'image_filename'

  const raw_data = fs.readFileSync(CSV_FILE_PATH, "utf-8")
  const array_data = raw_data.split("\n")

  //タイトル行
  const titles = array_data[0].split(",")

  //返却するデータ
  let return_data = []

  //0行目はタイトル行なのでi=0ではなくi=1からループを始める
  for (let i = 1; i < array_data.length; ++i) {
    const line = array_data[i].split(/, (?=(?:[^"]*"){2})*[^"]*$/) || []
    for (let j = 0; j < line.length; ++j) {
      if (typeof return_data[i - 1] !== "object") {
        return_data[i - 1] = {}
      }

      if (!(titles[j] in TITLES)) {
        continue
      }

      let item = line[j].split('"').join("")

      if (titles[j] === "企画ID") {
        item = parseInt(item, 10) //文字列を10進数の数に変換
      }

      if (titles[j] === "ジャンル") {
        item = {
          学術: 'academic',
          音楽: 'musical',
          カルチャー: 'cultual',
          展示企画: 'showing'
        }[item]
      }

      return_data[i - 1][TITLES[titles[j]]] = item
    }
  }

  return_json = JSON.stringify(return_data)
  fs.writeFileSync(JSON_FILE_PATH, return_json + "\n")
}
