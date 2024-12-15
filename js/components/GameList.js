export function createGameList() {
  const games = [
    { title: 'Sonic the Hedgehog', year: 1991 },
    { title: 'Sonic the Hedgehog 2', year: 1992 },
    { title: 'Sonic CD', year: 1993 },
    { title: 'Sonic & Knuckles', year: 1994 }
  ]

  return `
    <div class="section">
      <h2>🎮 MY FAVORITE SONIC GAMES 🎮</h2>
      <ul>
        ${games.map(game => `<li>${game.title} (${game.year})</li>`).join('')}
      </ul>
    </div>
  `
}