import React, { Suspense, useCallback, useState } from "react";
import { useRecoilValue} from "recoil";
import styles from "./app.module.scss";
import { allQuotesSelector, Quote } from "./state";

function App() {
  return (
    <div className={styles.quoteContainer}>
      <span className={styles.title}>Random Quote Machine</span>
        <Suspense fallback={<span className={styles.loading}>Loading...</span>}>
          <QuoteBox />
        </Suspense>
    </div>
  );
}

function QuoteBox() {
  const allQuotes = useRecoilValue(allQuotesSelector);

  const newQuote = useCallback(():Quote => {
    let rand = Math.floor(Math.random() * allQuotes.length);
      return allQuotes[rand];
  }, [allQuotes]);

  const [quote, setQuote] = useState<Quote>(newQuote());
  
  const doTweet = () => {
    console.log("Did the Tweet");
  };

  const handleNewQuote = useCallback(() => {
    setQuote(newQuote())
  }, [setQuote, newQuote])

  return (
    <div className={styles.quoteBody}>
      <div className={styles.quoteText}>
        {quote.quote}
        <div>- {quote.author}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={doTweet}>
          Tweet
        </button>
        <button onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
