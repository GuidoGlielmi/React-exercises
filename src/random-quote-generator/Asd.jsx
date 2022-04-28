import React, { useContext } from 'react';
import { QuotesContext } from 'contexts/RandomQuotes';
import { Link } from 'react-router-dom';
export default function Asd() {
  const index = useContext(QuotesContext).selectedIndex;
  return (
    <div style={{ margin: '10px' }}>
      <p>We are now in index n°{index || ''}</p>
      <Link to='/random-quote-generator'>Hide index</Link>
    </div>
  );
}
