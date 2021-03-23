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
    window.location.assign('https://twitter.com/intent/tweet?text=' + quote.quote + "\r\n -" + quote.author);
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
        <button className={styles.button} onClick={doTweet}>
          Tweet
        </button>
        <button className={styles.button} onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
