// Initialize games list
(() => {
    const games = [
        { title: 'Sonic the Hedgehog', year: 1991 },
        { title: 'Sonic the Hedgehog 2', year: 1992 },
        { title: 'Sonic CD', year: 1993 },
        { title: 'Sonic & Knuckles', year: 1994 }
    ];

    const gameList = document.getElementById('gameList');
    games.forEach(game => {
        const li = document.createElement('li');
        li.textContent = `${game.title} (${game.year})`;
        gameList.appendChild(li);
    });

    // Initialize videos
    const videos = [
        { id: 'NNRmP5WIKrc', title: 'SONIC THE HEDGEHOG ICE CREAM COMMERCIAL!' },
        { id: 'G4jd0UWGPgY', title: 'GREEN HILL ZONE REMIX!' }
    ];

    const videoGrid = document.getElementById('videoGrid');
    videos.forEach(video => {
        const container = document.createElement('div');
        container.className = 'video-container';
        container.innerHTML = `
            <iframe
                src="https://www.youtube-nocookie.com/embed/${video.id}"
                title="${video.title}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <h3 class="video-title">${video.title}</h3>
        `;
        videoGrid.appendChild(container);
    });
})();