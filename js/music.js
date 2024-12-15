(() => {
    const musicButton = document.getElementById('musicButton');
    const music = document.getElementById('bgMusic');

    if (music) {
        music.addEventListener('canplaythrough', () => {
            musicButton.textContent = 'PLAY GREEN HILL ZONE';
            musicButton.disabled = false;
        });

        music.addEventListener('error', () => {
            musicButton.textContent = 'MUSIC NOT AVAILABLE :(';
            musicButton.disabled = true;
        });

        musicButton.addEventListener('click', () => {
            if (music.paused) {
                music.play()
                    .then(() => {
                        musicButton.textContent = 'PAUSE MUSIC';
                    })
                    .catch(error => {
                        console.error('Error playing audio:', error);
                        musicButton.textContent = 'MUSIC NOT AVAILABLE :(';
                        musicButton.disabled = true;
                    });
            } else {
                music.pause();
                musicButton.textContent = 'PLAY GREEN HILL ZONE';
            }
        });
    }
})();