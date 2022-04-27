import './App.css';
import { DrumMachine } from './drum-machine/DrumMachine';
import { RandomQuoteGenerator } from './random-quote-generator/RandomQuoteGenerator';
import { Game } from './tic-tac-toe/Game';
function App() {
  return (
    <>
      <Game />
      <RandomQuoteGenerator />
      <DrumMachine />
    </>
  );
}

export default App;
