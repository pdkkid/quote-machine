import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styles from "./app.module.scss";
import { allQuotesState, quoteState } from "./atoms";

function App() {
  const setAllQuotes = useSetRecoilState(allQuotesState);

  useEffect(() => {
    const getAllQuotes = async () => {
      const url =
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
      const resp = await fetch(url);
      const body = await resp.json();
      setAllQuotes(body["quotes"]);
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
  const [quote, setQuote] = useRecoilState(quoteState);
  const allQuotes = useRecoilValue(allQuotesState);
  let rand: number;

  const doTweet = () => {
    console.log("Did the Tweet");
  };

  const newQuote = () => {
    rand = Math.floor(Math.random() * allQuotes.length);
    if (allQuotes.length > 0)
      setQuote({
        text: allQuotes[rand].quote,
        author: allQuotes[rand].author,
      });
  };

  if (!quote.text || !quote.author) {
    newQuote()
  }

  return (
    <div className={styles.quoteBody}>
      <div className={styles.quoteText + " " + styles.fadein}>
        {quote.text}
        <div>- {quote.author}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={doTweet}>
          Tweet
        </button>
        <button onClick={newQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
