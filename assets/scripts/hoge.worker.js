// 受け取ったメッセージをコンソールに表示するだけのWorker
self.addEventListener('message', (message) => {
  console.log(message.data)
})
