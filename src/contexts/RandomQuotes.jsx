import React, { useEffect, useState } from 'react';
export const QuotesContext = React.createContext('');
export default function RandomQuotes({ children }) {
  const [quotes, setQuotes] = useState([{ Author: '', Quote: '' }]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    async function getQuotes() {
      const rawQuotes = await fetch(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      );
      const quotes = await rawQuotes.json();
      setQuotes(quotes.quotes);
    }
    getQuotes();
  }, []);
  return (
    <QuotesContext.Provider value={{ quotes, selectedIndex, setSelectedIndex }}>
      {children}
    </QuotesContext.Provider>
  );
}
