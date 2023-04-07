import './App.css';
import Navbar from './components/navbar/navbar';
import Inputs from './components/inputs/inputs';
import Keyboard from './components/keyboard/keyboard';
import LettersContextProvider from './context/letterscontext';
function App() {
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
