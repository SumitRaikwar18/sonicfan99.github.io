(() => {
  const quizButtons = document.querySelectorAll('.quiz-question button');

  quizButtons.forEach(button => {
      button.addEventListener('click', () => {
          const answer = button.dataset.answer;
          if (answer === 'tails') {
              alert('RADICAL! That\'s correct! Tails is Sonic\'s best buddy!');
          } else {
              alert('NOT COOL! Try again!');
          }
      });
  });
})();