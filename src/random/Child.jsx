import { useState, memo, useCallback } from 'react';

export default function Child({ randomProp }) {
  return (
    <>
      <p>
        A child of a function component ALWAYS re-renders when the parent does, unless memoizing it
        with React.memo(), in which case it will re render when a prop changes memory reference
      </p>
      <p>{randomProp.first}</p>
      <Asd />
    </>
  );
}

function Asd() {
  const [first, setFirst] = useState({ hola: 'hola' });

  const [second, setSecond] = useState(false);

  const hola = useCallback(() => {
    '';
    //with an empty array on useCallback, the function will never trigger a re-render on a child
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setSecond((ps) => !ps);
        }}
      >
        TRY CHANGING A STATE NOT PASSED TO A MEMOIZED COMPONENT THROUGH React.memo()
      </button>
      <MemoQwe first={hola} />
    </div>
  );
}
function Qwe({ first, second }) {
  return (
    <div>
      <p>
        ANY NON-STATE VALUE PASSED AS PROPS WILL TRIGGER A RE-RENDER BECAUSE IT IS NOT PERSISTED BY
        REACT.
      </p>
      <p>THAT IS WHY useCallback IS USED</p>
      <p>
        THE MEMOIZED FUNCTION THROUGH A useCallback WITH AN EMPTY DEPENDENCIES ARRAY WILL NEVER
        CHANGE ITS MEMORY REFERENCE, I.E TRIGGER A RE-RENDER OF A CHILD: {first}
      </p>
    </div>
  );
}
const MemoQwe = memo(Qwe);
