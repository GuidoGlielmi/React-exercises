import './App.css';
import Calculator from './calculator/Calculator';
import { DrumMachine } from './drum-machine/DrumMachine';
import { RandomQuoteGenerator } from './random-quote-generator/RandomQuoteGenerator';
import { Game } from './tic-tac-toe/Game';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './nav-bar/NavBar';
function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path='/tic-tac-toe' element={<Game />}></Route>
          <Route path='/random-quote-generator' element={<RandomQuoteGenerator />}></Route>
          <Route path='/drum-machine' element={<DrumMachine />}></Route>
          <Route path='/calculator' element={<Calculator />}></Route>
          <Route path='*' element={<Navigate to='/tic-tac-toe' />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;
