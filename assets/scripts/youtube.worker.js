import Vue from 'vue'

Vue.use()

export default Vue.extend
function loadVideo () {
  const video = '<youtube ref="youtube" :video-id="videoId" :fit-parent="true" :resize="true" />'
  this.replaceWith(video)
}
