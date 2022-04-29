import React from 'react';
export const routesContext = React.createContext([]);
const routes = [
  { linkName: 'Tic-Tac-Toe', path: '/tic-tac-toe' },
  { linkName: 'Random-Quote-Generator', path: '/random-quote-generator' },
  { linkName: 'Markdown', path: '/markdown' },
  { linkName: 'Drum-Machine', path: '/drum-machine' },
  { linkName: 'Calculator', path: '/calculator' },
  { linkName: 'Random', path: '/random' },
  { linkName: '25+5', path: '/25+5' },
];
export default function RoutesContext({ children }) {
  return <routesContext.Provider value={routes}>{children}</routesContext.Provider>;
}
/*
Possible (simplified) representation of react Router implementation:

export const Route = React.createContext([]);

export function Routes({ children }) { // children would be Route
  return <>{children}</>;
}
export function Route({ element, children }) {
  return (
    <Route.Provider value={''}>
      <>{element}</>
      <>{children}</> // nested route
    </Route.Provider>
  );
}
 */
