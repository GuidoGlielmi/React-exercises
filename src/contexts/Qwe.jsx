import React, { useContext } from 'react';
import { randomContext } from './RandomContext';
export default function Qwe() {
  const context = useContext(randomContext);
  return <div>{context ? 'true' : 'false'}</div>;
}
