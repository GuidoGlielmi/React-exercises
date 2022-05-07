import React, { useState } from 'react';
export const randomContext = React.createContext('');

export default function RandomContext({ children }) {
  const [value, setValue] = useState(true);
  // context's state updates triggers re-rendering on its users
  return (
    <randomContext.Provider value={value}>
      <button onClick={() => setValue((ps) => !ps)}>Change context state</button>
      <div>{children}</div>
    </randomContext.Provider>
  );
}
