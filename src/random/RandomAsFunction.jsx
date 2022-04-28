import React, { useState } from 'react';

export default function RandomAsFunction() {
  const [first, setFirst] = useState({ first: 'first' });
  const [second, setSecond] = useState('second');
  console.log('rendered');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p>{first.first}</p>
      <p>{second}</p>
      <button onClick={() => setFirst((ps) => ps)}>
        FIRST: TRY RE-RENDER THE FIRST STATE BY SETTING A STATE TO THE SAME MEMORY REFERENCE
      </button>
      <button
        onClick={() =>
          setFirst((ps) => {
            ps.first = 'not the first';
            return ps;
          })
        }
      >
        SECOND: TRY RE-RENDER THE FIRST STATE BY MODIFYING A PROPERTY OF A STATE
      </button>
      <button onClick={() => setSecond('not the second')}>
        THIRD: NOW CHANGE THE MEMORY REFERENCE OF THE SECOND (ANY) STATE TO SEE HOW THE PREVIOUS
        CHANGE IN THE PROPERTY IS REFLECTED ON THE UI
      </button>
    </div>
  );
}
