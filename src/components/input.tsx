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
                fontSize='3rem'
                textAlign='center'
                maxLength={1}
                textTransform='uppercase'
                readOnly
                value={item.one}
              />
              <Input
                h='70px'
                minWidth='70px'
                width='70px'
                fontSize='3rem'
                textAlign='center'
                maxLength={1}
                textTransform='uppercase'
                readOnly
                value={item.two}
              />
              <Input
                h='70px'
                minWidth='70px'
                width='70px'
                fontSize='3rem'
                textAlign='center'
                textTransform='uppercase'
                maxLength={1}
                readOnly
                value={item.three}
              />
              <Input
                h='70px'
                minWidth='70px'
                width='70px'
                fontSize='3rem'
                textAlign='center'
                textTransform='uppercase'
                maxLength={1}
                readOnly
                value={item.four}
              />
              <Input
                h='70px'
                minWidth='70px'
                width='70px'
                fontSize='3rem'
                textAlign='center'
                textTransform='uppercase'
                maxLength={1}
                readOnly
                value={item.five}
              />
            </Flex>
          );
        })}
    </Flex>
  );
}

export default InputEl;
