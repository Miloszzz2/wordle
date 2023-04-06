import './App.css';
import Navbar from './components/navbar';
import Inputs from './components/inputs';
import Keyboard from './components/keyboard';
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
