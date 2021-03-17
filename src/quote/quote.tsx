import { useState } from 'react'
import { QuoteProps } from './quote.types';
import styles from './quote.module.scss';

export const Quote = function Quote(): JSX.Element {
    const [state, setState] = useState<QuoteProps>({quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia a turpis vitae elementum. Aenean id nisl varius, porta ipsum ullamcorper, molestie metus. Praesent velit massa, aliquam et cursus non.'});

    const doTweet = () => {
        console.log("Did the Tweet");
    }

    const newQuote = () => {
        setState({quote: "example"})
    }

    return (
        <div className={styles.quoteContainer}>
            <h1 className={styles.header}>
                Random Quote Machine
            </h1>
            <div className={styles.quoteBody}>
                <div className={styles.quoteText}>
                    {state.quote}
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