import './App.css';
import Calculator from './calculator/Calculator';
import { DrumMachine } from './drum-machine/DrumMachine';
import { RandomQuoteGenerator } from './random-quote-generator/RandomQuoteGenerator';
import { Game } from './tic-tac-toe/Game';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './nav-bar/style-1/NavBar';
import Navbar2 from './nav-bar/style-2/NavBar2';
import Random from './random/Random';
import { useState } from 'react';
function App() {
  const [selectedNavbar, setSelectedNavbar] = useState(true);

  return (
    <BrowserRouter>
      {selectedNavbar ? <NavBar /> : <Navbar2 />}
      <button onClick={() => setSelectedNavbar((ps) => !ps)}>Change Navbar Transition style</button>
      <Routes>
        <Route path='/tic-tac-toe' element={<Game />}></Route>
        <Route path='/random-quote-generator' element={<RandomQuoteGenerator />}></Route>
        <Route path='/drum-machine' element={<DrumMachine />}></Route>
        <Route path='/calculator' element={<Calculator />}></Route>
        <Route path='/random' element={<Random />}></Route>
        <Route path='*' element={<Navigate to='/tic-tac-toe' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
