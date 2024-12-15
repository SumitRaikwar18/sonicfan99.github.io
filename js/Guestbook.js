(() => {
  const commentForm = document.getElementById('commentForm');
  const commentList = document.getElementById('commentList');
  const STORAGE_KEY = 'guestbook_comments';

  // Load existing comments
  const savedComments = Storage.load(STORAGE_KEY) || [];
  savedComments.forEach(comment => addCommentToDOM(comment));

  commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const textarea = commentForm.querySelector('textarea');
      const comment = textarea.value.trim();

      if (comment) {
          const commentData = {
              text: comment,
              date: new Date().toLocaleDateString(),
              id: Date.now()
          };

          addCommentToDOM(commentData);
          savedComments.unshift(commentData);
          Storage.save(STORAGE_KEY, savedComments);
          textarea.value = '';
      }
  });

  function addCommentToDOM(comment) {
      const commentElement = DOM.create('div', 'comment fade-in');
      commentElement.innerHTML = `
          <strong>COOL FAN:</strong> ${comment.text}
          <br>
          <small>Posted on ${comment.date}</small>
      `;
      commentList.prepend(commentElement);
  }
})();