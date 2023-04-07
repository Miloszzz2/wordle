import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  useToast,
} from '@chakra-ui/react';
import KeyButton from './key';
import { useId } from 'react';
import { useEffect, useContext, useState } from 'react';
import useWordleLogic from '../../hooks/wordlelogic';
import { LetterContext } from '../../context/letterscontext';
import { ContextProps } from '../../types/contextprops';
import { words } from '../../constants/words';
function Keyboard() {
  const toast = useToast();
  const {
    addLetter,
    currentcolumn,
    currentrow,
    moveToNextRow,
    removeLetter,
    checkWord,
    redLetters,
    yellowLetters,
    greenLetters,
  } = useWordleLogic();
  const { rowLetters, keyboardElements, isGameWon, setIsGameWon } = useContext(
    LetterContext
  ) as ContextProps;
  const [currentWord, setCurrentWord] = useState<string>('');
  const keyDownHandler = (event: KeyboardEvent) => {
    if (/^[A-Z]$/i.test(event.key) === true) {
      if (currentcolumn <= 4 && !isGameWon && !redLetters.includes(event.key)) {
        addLetter(event.key.toLowerCase());
        setCurrentWord((currentWord) => currentWord + event.key.toLowerCase());
      }
    } else if (event.key === 'Enter') {
      if (currentcolumn === 5 && currentrow < 5) {
        if (words.includes(currentWord)) {
          checkWord();
          moveToNextRow();
          setCurrentWord('');
        } else {
          toast({
            title: 'Nie ma takiego słowa w bazie',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } else if (event.key === 'Backspace') {
      setCurrentWord((currentWord) =>
        currentWord.substring(0, currentWord.length - 1)
      );
      removeLetter();
    }
  };
  console.log(currentWord);
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);
  return (
    <Flex justify='center' marginTop='70px'>
      <Grid gap='10px' templateColumns='repeat(10, 50px)'>
        {keyboardElements.map((item) => {
          return (
            <GridItem
              key={useId()}
              colSpan={
                item.keyLetter == 'ENTER' || item.keyLetter == 'BACK' ? 2 : 0
              }
              onClick={() => {
                if (item.keyLetter === 'ENTER') {
                  if (words.includes(currentWord)) {
                    checkWord();
                    moveToNextRow();
                    setCurrentWord('');
                  } else {
                    toast({
                      title: 'Nie ma takiego słowa w bazie',
                      status: 'error',
                      duration: 5000,
                      isClosable: true,
                    });
                  }
                } else if (item.keyLetter === 'BACK') {
                  setCurrentWord((currentWord) =>
                    currentWord.substring(0, currentWord.length - 1)
                  );
                  removeLetter();
                } else {
                  if (
                    currentcolumn <= 4 &&
                    !isGameWon &&
                    !redLetters.includes(item.keyLetter.toLowerCase())
                  ) {
                    setCurrentWord(
                      (currentWord) =>
                        currentWord + item.keyLetter.toLowerCase()
                    );
                    addLetter(item.keyLetter.toLowerCase());
                  }
                }
              }}
            >
              <KeyButton
                keyLetter={item.keyLetter}
                color={item.color}
                redLetters={redLetters}
                greenLetters={greenLetters}
                yellowLetters={yellowLetters}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
}

export default Keyboard;
