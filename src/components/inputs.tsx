import { Flex } from '@chakra-ui/react';
import InputElement from './input';
import { useEffect, useContext } from 'react';
import useWordleLogic from '../hooks/wordlelogic';
import { LetterContext } from '../context/letterscontext';
import { ContextProps } from '../types/contextprops';
function Inputs() {
  const { addLetter, currentcolumn, moveToNextRow, currentrow } =
    useWordleLogic();
  const { rowLetters } = useContext(LetterContext) as ContextProps;
  const keyDownHandler = (event: any) => {
    if (/^[A-Z]$/i.test(event.key) === true) {
      if (currentcolumn <= 4) {
        console.log(event.key);
        addLetter(event.key);
        console.log(currentcolumn);
      }
    } else if (event.key === 'Enter') {
      if (currentrow < 5) {
        moveToNextRow();
      }
    }
  };
  console.log(rowLetters);
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      marginTop='40px'
    >
      <InputElement />
    </Flex>
  );
}

export default Inputs;
