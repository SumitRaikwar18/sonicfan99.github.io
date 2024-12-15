export function createMusicPlayer() {
  return `
    <div class="section">
      <h2>🔊 HIT THAT MUSIC! 🔊</h2>
      <button id="musicButton">LOADING MUSIC...</button>
      <audio id="bgMusic" preload="auto">
        <source src="/green-hill-zone.mp3" type="audio/mpeg">
      </audio>
    </div>
  `
}

export function initMusicPlayer() {
  const musicButton = document.getElementById('musicButton')
  const music = document.getElementById('bgMusic')

  if (music) {
    music.addEventListener('canplaythrough', () => {
      musicButton.textContent = 'PLAY GREEN HILL ZONE'
      musicButton.disabled = false
    })

    music.addEventListener('error', () => {
      musicButton.textContent = 'MUSIC NOT AVAILABLE :('
      musicButton.disabled = true
    })

    musicButton.addEventListener('click', () => {
      if (music.paused) {
        music.play()
        musicButton.textContent = 'PAUSE MUSIC'
      } else {
        music.pause()
        musicButton.textContent = 'PLAY GREEN HILL ZONE'
      }
    })
  }
}