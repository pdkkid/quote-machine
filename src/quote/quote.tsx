import { useState, useEffect } from 'react'
import { QuoteProps } from './quote.types';
import styles from './quote.module.scss';

export const Quote = function Quote(): JSX.Element {
    const [state, setState] = useState<QuoteProps>();

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => response.json())
            .then(data => setState({allQuotes: data.quotes}))
    }, []);

    useEffect(() => {
        function newQuote() {
            if (state?.allQuotes !== undefined) {
                console.log(state?.allQuotes[4][0])
                setState({currentQuote: state.allQuotes[4][0], currentAuthor: state.allQuotes[4][1]})   
            } 
        }
    }, [state?.allQuotes]);

    // const newQuote = () => {
    //     setState({currentQuote: "test"})
    //     if (state?.allQuotes !== undefined) {
    //         console.log(state?.allQuotes[4][0])
    //         setState({currentQuote: state.allQuotes[4][0], currentAuthor: state.allQuotes[4][1]})   
    //     }
    // }

    const doTweet = () => {
        console.log("Did the Tweet");
    }

    return (
        <div className={styles.quoteContainer}>
            <h1 className={styles.header}>
                Random Quote Machine
            </h1>
            <div className={styles.quoteBody}>
                <div className={styles.quoteText}>
                    {state?.currentQuote}
                    <div className={styles.quoteAuthor}>
                        {state?.currentAuthor}
                    </div>
                </div>
                <button className={styles.button} onClick={doTweet}>
                    Tweet
                </button>
                <button className={styles.button} onClick={newQuote}>
                    New Quote
                </button>
            </div>
        </div>
    );
};