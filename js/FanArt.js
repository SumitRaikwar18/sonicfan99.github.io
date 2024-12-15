(() => {
  const fanArtItems = [
      { src: 'images/sonic.gif', alt: 'Sonic Running' },
      { src: 'images/tails-fly.gif', alt: 'Tails Flying' },
      { src: 'images/knuckles-punch.gif', alt: 'Knuckles Punching' },
      { src: 'images/robotnik-mad.gif', alt: 'Dr. Robotnik Mad' }
  ];

  const gallery = document.getElementById('fanArtGallery');

  fanArtItems.forEach(item => {
      const container = DOM.create('div', 'gallery-item');
      
      const img = DOM.create('img', '', {
          src: item.src,
          alt: item.alt,
          loading: 'lazy'
      });

      const overlay = DOM.create('div', 'gallery-overlay');
      overlay.innerHTML = `<span>💫 ${item.alt} 💫</span>`;

      DOM.append(container, img, overlay);
      gallery.appendChild(container);
  });
})();