import { createContext, useState } from 'react';
import { Letters } from '../types/letters';
import { ContextProps } from '../types/contextprops';

export const LetterContext = createContext<ContextProps | null>(null);
function LettersContextProvider({ children }: any) {
  // prettier-ignore
  const [rowLetters, setRowLetters] = useState<Letters[]>([
    { one: ' ', two: ' ', three: ' ', four: ' ', five: ' ' },
    { one: ' ', two: ' ', three: ' ', four: ' ', five: ' ' },
    { one: ' ', two: ' ', three: ' ', four: ' ', five: ' ' },
    { one: ' ', two: ' ', three: ' ', four: ' ', five: ' ' },
    { one: ' ', two: ' ', three: ' ', four: ' ', five: ' ' },
    { one: ' ', two: ' ', three: ' ', four: ' ', five: ' ' },
  ]);

  return (
    <LetterContext.Provider value={{ rowLetters, setRowLetters }}>
      {children}
    </LetterContext.Provider>
  );
}

export default LettersContextProvider;
