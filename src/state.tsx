import { waitFor } from "@testing-library/dom";
import { selector } from "recoil";

// List of quotes interface
export interface Quote {
  quote: string;
  author: string;
}

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const allQuotesSelector = selector<Quote[]>({
  key: 'allQuotes',
  get: async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const body = await response.json();
    await sleep(1000)
    return body["quotes"];
  },
});
