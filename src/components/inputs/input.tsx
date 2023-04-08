import { Flex, Input, useColorMode } from '@chakra-ui/react';
import { useContext } from 'react';
import useWordleLogic from '../../hooks/wordlelogic';
import { LetterItem, Letters } from '../../types/letters';
import { useId } from 'react';
import { LetterContext } from '../../context/letterscontext';
import { ContextProps } from '../../types/contextprops';
import { Letter } from '../../types/letter';
function InputEl() {
  const { colorMode } = useColorMode();
  const { rowLetters } = useContext(LetterContext) as ContextProps;
  const checkColor = (item: LetterItem) => {
    if (colorMode === 'light' && item.color !== '') {
      return 'white';
    } else if (colorMode === 'dark') return 'white';
    else return 'black';
  };
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
                borderColor={
                  colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300'
                }
                _hover={{
                  borderColor:
                    colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300',
                }}
                color={checkColor(item.one)}
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
                borderColor={
                  colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300'
                }
                _hover={{
                  borderColor:
                    colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300',
                }}
                color={checkColor(item.two)}
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
                borderColor={
                  colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300'
                }
                _hover={{
                  borderColor:
                    colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300',
                }}
                color={checkColor(item.three)}
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
                borderColor={
                  colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300'
                }
                _hover={{
                  borderColor:
                    colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300',
                }}
                color={checkColor(item.four)}
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
                borderColor={
                  colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300'
                }
                _hover={{
                  borderColor:
                    colorMode === 'light' ? 'gray.400' : 'whiteAlpha.300',
                }}
                color={checkColor(item.five)}
              />
            </Flex>
          );
        })}
    </Flex>
  );
}

export default InputEl;
