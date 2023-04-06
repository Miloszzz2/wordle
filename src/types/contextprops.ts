import { KeyboardElement } from './keyboardelement';
import { Letters } from './letters';
export type ContextProps = {
  rowLetters: Letters[];
  setRowLetters: React.Dispatch<React.SetStateAction<Letters[]>>;
  wordToGuess: string;
  keyboardElements: KeyboardElement[];
};
