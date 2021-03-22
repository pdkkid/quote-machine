import { atom } from "recoil";


// List of quotes interface
interface allQuotes {
  quote: string;
  author: string;
}

// Setup state atoms
export const quoteState = atom({
  key: "quote",
  default: {
    text: "",
    author: "",
  },
});

export const allQuotesState = atom<allQuotes[]>({
  key: "allQuotes",
  default: [],
});
