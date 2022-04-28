import './App.css';
import Calculator from './calculator/Calculator';
import { DrumMachine } from './drum-machine/DrumMachine';
import { RandomQuoteGenerator } from './random-quote-generator/RandomQuoteGenerator';
import { Game } from './tic-tac-toe/Game';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './nav-bar/style-1/NavBar';
import Navbar2 from './nav-bar/style-2/NavBar2';
import Random from './random/Random';
import React from 'react';
import RandomQuotes from 'contexts/RandomQuotes';
// creating context in App doesn't work
//(error: cannot access lexical declaration -RoutesContext- before initialization)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          {/* First two games will share Navbar 1 */}
          <Route path='/tic-tac-toe' element={<Game />} />
          {/* routes inside routes will nest the endpoint */}
          <Route
            path='/random-quote-generator'
            element={
              <RandomQuotes>
                <RandomQuoteGenerator />
              </RandomQuotes>
            }
          />
        </Route>
        <Route path='/' element={<Navbar2 />}>
          {/* First two games will share Navbar 2 */}
          <Route path='/drum-machine' element={<DrumMachine />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/random' element={<Random />} />
        </Route>
        <Route path='*' element={<Navigate to='/tic-tac-toe' />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
