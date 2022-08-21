const quoteContainer =document.getElementById('quite-cointainer');
const quoteText =document.getElementById('quote');
const autherText =document.getElementById('author');
const twitterBtn =document.getElementById('twitter');
const newQuoteBtn =document.getElementById('new-quote');
const loader = document.getElementById('loader')


function loading(){
    loader.hidden = false;
    quoteContainer.hidden=true;
}

function complete(){
quoteContainer.hidden=false;
loader.hidden=true;

}

// quotes from api
let apiQuotes = [];
async function getQuotes(){
loading();
    const apiUrl = 'https://api.quotable.io/random'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        autherText.textContent = apiQuotes.author;
        if (apiQuotes.length > 130) {
            quoteText.classList.add('long-quote')
        }else{
            quoteText.classList.remove('long-quote')

        }
        // set coad hide loader
        quoteText.textContent = apiQuotes.content;
complete();

    } catch (error) {
        // catch error
    }
}


// tweet quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${autherText.textContent}`;
    window.open(twitterUrl,'_blank')
}

newQuoteBtn.addEventListener('click',getQuotes);
twitterBtn.addEventListener('click',tweetQuote);

getQuotes();

