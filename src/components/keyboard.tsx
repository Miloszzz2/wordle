import { Flex, Grid } from '@chakra-ui/react';
import KeyButton from './key';
import { useId } from 'react';
import { useEffect, useContext } from 'react';
import useWordleLogic from '../hooks/wordlelogic';
import { LetterContext } from '../context/letterscontext';
import { ContextProps } from '../types/contextprops';
function Keyboard() {
  const {
    addLetter,
    currentcolumn,
    currentrow,
    moveToNextRow,
    removeLetter,
    checkWord,
  } = useWordleLogic();
  const { rowLetters, keyboardElements } = useContext(
    LetterContext
  ) as ContextProps;
  const keyDownHandler = (event: KeyboardEvent) => {
    if (/^[A-Z]$/i.test(event.key) === true) {
      if (currentcolumn <= 4) {
        addLetter(event.key);
      }
    } else if (event.key === 'Enter') {
      if (currentcolumn === 5 && currentrow < 5) {
        moveToNextRow();
      }
      if (currentcolumn === 5) {
        checkWord();
      }
    } else if (event.key === 'Backspace') {
      removeLetter();
    }
  };
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
            <KeyButton
              key={useId()}
              keyLetter={item.keyLetter}
              color={item.color}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}

export default Keyboard;
