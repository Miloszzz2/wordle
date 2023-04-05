import './App.css';
import Navbar from './components/navbar';
import Inputs from './components/inputs';
import Keyboard from './components/keyboard';
import { useEffect, useState } from 'react';
import { words } from './constants/words';
import LettersContextProvider from './context/letterscontext';
function App() {
  const [wordToGuess, setWordToGuess] = useState<string>();
  useEffect(() => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWordToGuess(newWord);
  }, [setWordToGuess]);
  return (
    <div className='App'>
      <LettersContextProvider>
        <Navbar />
        <Inputs />
        <Keyboard />
      </LettersContextProvider>
    </div>
  );
}

export default App;
