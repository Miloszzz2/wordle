import { useEffect, useState, useContext } from 'react';
import { words } from '../constants/words';
import { Letters } from '../types/letters';
import { LetterContext } from '../context/letterscontext';
import { ContextProps } from '../types/contextprops';
const useWordleLogic = () => {
  const { rowLetters, setRowLetters } = useContext(
    LetterContext
  ) as ContextProps;
  const [currentcolumn, setCurrentColumn] = useState<number>(0);
  const [currentrow, setCurrentRow] = useState<number>(0);
  const addLetter = (e: any) => {
    let pos: string;
    switch (currentcolumn) {
      case 0:
        pos = 'one';
        break;
      case 1:
        pos = 'two';
        break;
      case 2:
        pos = 'three';
        break;
      case 3:
        pos = 'four';
        break;
      case 4:
        pos = 'five';
        break;
    }
    const newLetters = rowLetters.map((item, index) => {
      if (index === currentrow) {
        return { ...item, [pos]: e };
      } else return item;
    });

    setRowLetters(newLetters);
    setCurrentColumn(currentcolumn + 1);
  };
  const moveToNextRow = () => {
    setCurrentColumn(0);
    setCurrentRow(currentrow + 1);
  };
  return { addLetter, currentrow, currentcolumn, moveToNextRow };
};
export default useWordleLogic;
