import React, { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState, } from "recoil";
import styles from "./app.module.scss";

// List of quotes interface
interface allQuotes {
  quote: string,
  author: string,
}

// Setup state atoms
const quoteState = atom({
  key: 'quote',
  default: {
    text: "Nothing to say",
    author: "Unknown",
  }
})

const allQuotesState = atom<allQuotes[]>({
  key: 'allQuotes',
  default: [{quote: "Nothing to say", author: "Unknown"}]
})


function App() {
  const setAllQuotes = useSetRecoilState(allQuotesState)

  useEffect(() => {
    const getAllQuotes = async () => {
      const url =
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
      const resp = await fetch(url);
      const body = await resp.json();
      setAllQuotes(body["quotes"])
    };
    getAllQuotes();
  });

  return (
    <div className={styles.quoteContainer}>
      <h1>Random Quote Machine</h1>
      <QuoteBox />
    </div>
  );
}

function QuoteBox() {
  const [ quote, setQuote ] = useRecoilState(quoteState)
  const allQuotes = useRecoilValue(allQuotesState)

  const doTweet = () => {
    console.log("Did the Tweet");
  };

  const newQuote = () => {
    const rand: number = Math.floor(Math.random() * allQuotes.length)
    setQuote({
      text: allQuotes[rand].quote,
      author: allQuotes[rand].author,
    })
  };

  return (
    <div className={styles.quoteBody}>
      <div className={styles.quoteText}>
        {quote.text}
        <div>
          {quote.author}  
        </div>
      </div>
      <button className={styles.button} onClick={doTweet}>
        Tweet
      </button>
      <button className={styles.button} onClick={newQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;
