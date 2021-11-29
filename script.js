const quoteText = document.querySelector('.quote');
const authorName = document.querySelector('.author .name');
const quoteBtn = document.querySelector('button');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');
const twitterBtn = document.querySelector('.twitter');

// Random quote function
const randomQuote = () => {
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading quotes...';
    // Fetch random quotes from API and parsing it into JS Object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = 'New Quote';
        quoteBtn.classList.remove('loading');
    });
}

quoteBtn.addEventListener('click', randomQuote);

soundBtn.addEventListener('click', () => {
    // Web speech API
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener('click', () => {
    // Copy to Clipboard
    navigator.clipboard.writeText(quoteText.innerText + '\n\n' + 'By: ' + authorName.innerText);
});

twitterBtn.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}%0a%0aBy%20${authorName.innerText}`;
    window.open(tweetUrl, '_blank');
});


