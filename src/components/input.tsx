import { Flex, Input } from '@chakra-ui/react';
import { useContext } from 'react';
import useWordleLogic from '../hooks/wordlelogic';
import { Letters } from '../types/letters';
import { useId } from 'react';
import { LetterContext } from '../context/letterscontext';
import { ContextProps } from '../types/contextprops';
function InputEl() {
  const { rowLetters } = useContext(LetterContext) as ContextProps;
  return (
    <Flex flexDirection='column'>
      {rowLetters &&
        rowLetters.map((item: Letters) => {
          return (
            <Flex key={useId()} gap='0.8rem' paddingTop='10px'>
              <Input
                h='70px'
                minWidth='70px'
                width='70px'
                fontSize='2.2rem'
                textAlign='center'
                maxLength={1}
                textTransform='uppercase'
                fontWeight='600'
                readOnly
                value={item.one.letter}
                bgColor={item.one.color}
              />
              <Input
                h='70px'
                minWidth='70px'
                width='70px'
                fontSize='2.2rem'
                textAlign='center'
                maxLength={1}
                textTransform='uppercase'
                fontWeight='600'
                readOnly
                value={item.two.letter}
                bgColor={item.two.color}
              />
              <Input
                h='70px'
                minWidth='70px'
                width='70px'
                fontSize='2.2rem'
                textAlign='center'
                textTransform='uppercase'
                fontWeight='600'
                maxLength={1}
                readOnly
                value={item.three.letter}
                bgColor={item.three.color}
              />
              <Input
                h='70px'
                minWidth='70px'
                width='70px'
                fontSize='2.2rem'
                textAlign='center'
                textTransform='uppercase'
                fontWeight='600'
                maxLength={1}
                readOnly
                value={item.four.letter}
                bgColor={item.four.color}
              />
              <Input
                h='70px'
                minWidth='70px'
                width='70px'
                fontSize='2.2rem'
                textAlign='center'
                fontWeight='600'
                textTransform='uppercase'
                maxLength={1}
                readOnly
                value={item.five.letter}
                bgColor={item.five.color}
              />
            </Flex>
          );
        })}
    </Flex>
  );
}

export default InputEl;
