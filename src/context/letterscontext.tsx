import { createContext, useState, useEffect } from 'react';
import { Letters } from '../types/letters';
import { ContextProps } from '../types/contextprops';
import { words } from '../constants/words';
import { KeyboardElement } from '../types/keyboardelement';
export const LetterContext = createContext<ContextProps | null>(null);
function LettersContextProvider({ children }: any) {
  const [wordToGuess, setWordToGuess] = useState<string>('');
  const [isGameWon, setIsGameWon] = useState<boolean>(false);
  useEffect(() => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
  }, [setWordToGuess]);

  const [rowLetters, setRowLetters] = useState<Letters[]>([
    {
      one: { letter: ' ', color: '' },
      two: { letter: ' ', color: '' },
      three: { letter: ' ', color: '' },
      four: { letter: ' ', color: '' },
      five: { letter: ' ', color: '' },
    },
    {
      one: { letter: ' ', color: '' },
      two: { letter: ' ', color: '' },
      three: { letter: ' ', color: '' },
      four: { letter: ' ', color: '' },
      five: { letter: ' ', color: '' },
    },
    {
      one: { letter: ' ', color: '' },
      two: { letter: ' ', color: '' },
      three: { letter: ' ', color: '' },
      four: { letter: ' ', color: '' },
      five: { letter: ' ', color: '' },
    },
    {
      one: { letter: ' ', color: '' },
      two: { letter: ' ', color: '' },
      three: { letter: ' ', color: '' },
      four: { letter: ' ', color: '' },
      five: { letter: ' ', color: '' },
    },
    {
      one: { letter: ' ', color: '' },
      two: { letter: ' ', color: '' },
      three: { letter: ' ', color: '' },
      four: { letter: ' ', color: '' },
      five: { letter: ' ', color: '' },
    },
  ]);
  const [keyboardElements, setKeyboardElements] = useState<KeyboardElement[]>([
    { keyLetter: 'Q', color: 'gray.600' },
    { keyLetter: 'W', color: 'gray.600' },
    { keyLetter: 'E', color: 'gray.600' },
    { keyLetter: 'R', color: 'gray.600' },
    { keyLetter: 'T', color: 'gray.600' },
    { keyLetter: 'Y', color: 'gray.600' },
    { keyLetter: 'U', color: 'gray.600' },
    { keyLetter: 'I', color: 'gray.600' },
    { keyLetter: 'O', color: 'gray.600' },
    { keyLetter: 'P', color: 'gray.600' },
    { keyLetter: 'A', color: 'gray.600' },
    { keyLetter: 'S', color: 'gray.600' },
    { keyLetter: 'D', color: 'gray.600' },
    { keyLetter: 'F', color: 'gray.600' },
    { keyLetter: 'G', color: 'gray.600' },
    { keyLetter: 'H', color: 'gray.600' },
    { keyLetter: 'J', color: 'gray.600' },
    { keyLetter: 'K', color: 'gray.600' },
    { keyLetter: 'ENTER', color: 'green.600' },
    { keyLetter: 'L', color: 'gray.600' },
    { keyLetter: 'Z', color: 'gray.600' },
    { keyLetter: 'X', color: 'gray.600' },
    { keyLetter: 'C', color: 'gray.600' },
    { keyLetter: 'V', color: 'gray.600' },
    { keyLetter: 'B', color: 'gray.600' },
    { keyLetter: 'N', color: 'gray.600' },
    { keyLetter: 'M', color: 'gray.600' },
    { keyLetter: 'BACK', color: 'green.600' },
  ]);
  return (
    <LetterContext.Provider
      value={{
        rowLetters,
        setRowLetters,
        wordToGuess,
        keyboardElements,
        isGameWon,
        setIsGameWon,
      }}
    >
      {children}
    </LetterContext.Provider>
  );
}

export default LettersContextProvider;
