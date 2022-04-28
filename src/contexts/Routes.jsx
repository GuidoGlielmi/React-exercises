import React from 'react';
export const RoutesContext = React.createContext('');
const routes = [
  { linkName: 'Tic-Tac-Toe', path: '/tic-tac-toe' },
  { linkName: 'Random-Quote-Generator', path: '/random-quote-generator' },
  { linkName: 'Drum-Machine', path: '/drum-machine' },
  { linkName: 'Calculator', path: '/calculator' },
  { linkName: 'Random', path: '/random' },
];
export default function Routes({ children }) {
  return <RoutesContext.Provider value={routes}>{children}</RoutesContext.Provider>;
}
