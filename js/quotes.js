const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The best preparation for tomorrow is doing your best today.",
        author: "H. Jackson Brown Jr."
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "The future starts today, not tomorrow.",
        author: "Pope John Paul II"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The future is always beginning now.",
        author: "Mark Strand"
    },
    {
        quote: "The future is now.",
        author: "Unknown"

    },
    {
        quote: "The future is not something we enter. The future is something we create.",
        author: "Leonard I. Sweet"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;