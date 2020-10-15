if(typeof window === "undefined") {
  const fs = require('fs')

  const CSV_FILE_PATH = 'KikakuList.csv'
  const JSON_FILE_PATH = 'KikakuList.json'
  const TITLES = {}
  TITLES['企画ID'] = 'id'
  // ここからそれぞれの値のタイトルを書いていく

  const raw_data = fs.readFileSync(CSV_FILE_PATH, 'utf-8')
  const array_data = raw_data.split('\n')

  //タイトル行
  const titles = array_data[0].split(',')

  //返却するデータ
  let return_data = []

  //0行目はタイトル行なのでi=0ではなくi=1からループを始める
  for(let i = 1; i < array_data.length; i++) {
    const line = array_data[i].split(/, (?=(?:(?:[^"]*"){2})*[^"]*$)/) || []
    for (let j = 0; j < line.length; j++) {
      if (typeof return_data[i - 1] !== 'object') {
        return_data[i - 1] = {}
      }

      if (!(titles[j] in TITLES)) {
        continue
      }

      let item = line[j].split('"').join('')

      //続きは新歓のやつの51行目以降を参照しながら書く
    }
  }
}
