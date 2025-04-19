const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const tweetBtn = document.getElementById('tweetBtn');

async function getQuote() {
  quoteText.classList.add('fade-out');
  authorText.classList.add('fade-out');

  setTimeout(async () => {
    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      quoteText.textContent = `"${data.content}"`;
      authorText.textContent = `— ${data.author}`;
      tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.content)} — ${encodeURIComponent(data.author)}`;
    } catch (error) {
      quoteText.textContent = "Oops! Something went wrong. Try again.";
      authorText.textContent = "";
      tweetBtn.href = "#";
    }

    quoteText.classList.remove('fade-out');
    authorText.classList.remove('fade-out');
  }, 300);
}
