import React, { useContext } from 'react';
import { QuotesContext } from 'contexts/RandomQuotes';
export default function Asd() {
  const index = useContext(QuotesContext).selectedIndex;
  return <div style={{ margin: '10px' }}>We are now in index n°{index || ''}</div>;
}
