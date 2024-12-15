export function createVideoSection() {
  const videos = [
    { id: 'NNRmP5WIKrc', title: 'SONIC THE HEDGEHOG ICE CREAM COMMERCIAL!' },
    { id: 'G4jd0UWGPgY', title: 'GREEN HILL ZONE REMIX!' }
  ]

  return `
    <div id="videos" class="section">
      <h2>📺 TOTALLY RAD VIDEOS! 📺</h2>
      <div class="video-grid">
        ${videos.map(video => `
          <div class="video-container">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${video.id}"
              title="${video.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h3 class="video-title">${video.title}</h3>
          </div>
        `).join('')}
      </div>
    </div>
  `
}