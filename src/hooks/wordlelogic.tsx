import { useState, useContext } from 'react';
import { Letters } from '../types/letters';
import { LetterContext } from '../context/letterscontext';
import { ContextProps } from '../types/contextprops';
import { useToast } from '@chakra-ui/react';
const useWordleLogic = () => {
  const {
    rowLetters,
    setRowLetters,
    wordToGuess,
    keyboardElements,
    setIsGameWon,
  } = useContext(LetterContext) as ContextProps;
  const [currentcolumn, setCurrentColumn] = useState<number>(0);
  const [currentrow, setCurrentRow] = useState<number>(0);
  const [redLetters, setRedLetters] = useState<string[]>([]);
  const [greenLetters, setGreenLetters] = useState<string[]>([]);
  const [yellowLetters, setYellowLetters] = useState<string[]>([]);
  const toast = useToast();
  const addLetter = (letter: any) => {
    var pos: string = '' as const;
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
    setRowLetters((rowLetters) =>
      rowLetters.map((item, index) => {
        if (index === currentrow) {
          return { ...item, [pos]: { letter: letter, color: '' } };
        } else return item;
      })
    );
    setCurrentColumn((currentcolumn) => currentcolumn + 1);
    console.log(pos);
  };

  const moveToNextRow = () => {
    setCurrentColumn(0);
    setCurrentRow((currentrow) => currentrow + 1);
  };

  const removeLetter = () => {
    let pos: string = '';
    if (currentcolumn >= 1) {
      switch (currentcolumn) {
        case 1:
          pos = 'one';
          break;
        case 2:
          pos = 'two';
          break;
        case 3:
          pos = 'three';
          break;
        case 4:
          pos = 'four';
          break;
        case 5:
          pos = 'five';
          break;
      }
      setCurrentColumn(currentcolumn - 1);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return { ...item, [pos]: { letter: ' ' } };
          } else return item;
        })
      );
    }
  };
  const checkWord = () => {
    rowLetters.map((item, index) => {
      if (index === currentrow) {
        checkFirstLetter(item);
        checkSecondLetter(item);
        checkThirdLetter(item);
        checkFourLetter(item);
        checkFiveLetter(item);
        if (
          item.one.letter === wordToGuess[0] &&
          item.two.letter === wordToGuess[1] &&
          item.three.letter === wordToGuess[2] &&
          item.four.letter === wordToGuess[3] &&
          item.five.letter === wordToGuess[4]
        ) {
          setIsGameWon(true);
          toast({
            title: 'Brawo wygrałeś',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        }
      }
    });
  };
  const checkFirstLetter = (item: Letters) => {
    if (item.one.letter === wordToGuess[0]) {
      setGreenLetters((greenLetters) => [...greenLetters, item.one.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              one: { ...item.one, color: 'green.600' },
            };
          } else return item;
        })
      );
    } else if (wordToGuess.includes(item.one.letter)) {
      setYellowLetters((yellowLetters) => [...yellowLetters, item.one.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              one: { ...item.one, color: 'yellow.500' },
            };
          } else return item;
        })
      );
    } else {
      setRedLetters((losingletters) => [...losingletters, item.one.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              one: { ...item.one, color: 'red.500' },
            };
          } else return item;
        })
      );
    }
  };

  const checkSecondLetter = (item: Letters) => {
    if (item.two.letter === wordToGuess[1]) {
      setGreenLetters((greenLetters) => [...greenLetters, item.two.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              two: { ...item.two, color: 'green.600' },
            };
          } else return item;
        })
      );
    } else if (wordToGuess.includes(item.two.letter)) {
      setYellowLetters((yellowLetters) => [...yellowLetters, item.two.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              two: { ...item.two, color: 'yellow.500' },
            };
          } else return item;
        })
      );
    } else {
      setRedLetters((losingletters) => [...losingletters, item.two.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              two: { ...item.two, color: 'red.500' },
            };
          } else return item;
        })
      );
    }
  };

  const checkThirdLetter = (item: Letters) => {
    if (item.three.letter === wordToGuess[2]) {
      setGreenLetters((greenLetters) => [...greenLetters, item.three.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              three: { ...item.three, color: 'green.600' },
            };
          } else return item;
        })
      );
    } else if (wordToGuess.includes(item.three.letter)) {
      setYellowLetters((yellowLetters) => [
        ...yellowLetters,
        item.three.letter,
      ]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              three: { ...item.three, color: 'yellow.500' },
            };
          } else return item;
        })
      );
    } else {
      setRedLetters((losingletters) => [...losingletters, item.three.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              three: { ...item.three, color: 'red.500' },
            };
          } else return item;
        })
      );
    }
  };

  const checkFourLetter = (item: Letters) => {
    if (item.four.letter === wordToGuess[3]) {
      setGreenLetters((greenLetters) => [...greenLetters, item.four.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              four: { ...item.four, color: 'green.600' },
            };
          } else return item;
        })
      );
    } else if (wordToGuess.includes(item.four.letter)) {
      setYellowLetters((yellowLetters) => [...yellowLetters, item.four.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              four: { ...item.four, color: 'yellow.500' },
            };
          } else return item;
        })
      );
    } else {
      setRedLetters((losingletters) => [...losingletters, item.four.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              four: { ...item.four, color: 'red.500' },
            };
          } else return item;
        })
      );
    }
  };

  const checkFiveLetter = (item: Letters) => {
    if (item.five.letter === wordToGuess[4]) {
      setGreenLetters((greenLetters) => [...greenLetters, item.five.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              five: { ...item.five, color: 'green.600' },
            };
          } else return item;
        })
      );
    } else if (wordToGuess.includes(item.five.letter)) {
      setYellowLetters((yellowLetters) => [...yellowLetters, item.five.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              five: { ...item.five, color: 'yellow.500' },
            };
          } else return item;
        })
      );
    } else {
      setRedLetters((losingletters) => [...losingletters, item.five.letter]);
      setRowLetters((rowLetters) =>
        rowLetters.map((item, index) => {
          if (index === currentrow) {
            return {
              ...item,
              five: { ...item.five, color: 'red.500' },
            };
          } else return item;
        })
      );
      if (currentrow === 4) {
        toast({
          title: 'Ale bocik!!!!',
          status: 'error',
          description: 'Szukane słowo to: ' + wordToGuess.toUpperCase(),
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };
  return {
    addLetter,
    currentrow,
    currentcolumn,
    moveToNextRow,
    setCurrentColumn,
    removeLetter,
    checkWord,
    redLetters,
    yellowLetters,
    greenLetters,
  };
};
export default useWordleLogic;
