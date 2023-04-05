import { Box, Flex, GridItem, Heading } from '@chakra-ui/react';
import { useState } from 'react';
function KeyButton(letter: any) {
  const [currentInput, setCurrentInput] = useState(0);
  const inputs = document.querySelectorAll('input');
  const addLetter = (lettervalue: string) => {
    inputs[currentInput].value = lettervalue;
    console.log(currentInput);
    setCurrentInput(currentInput + 1);
  };
  return (
    <GridItem
      colSpan={letter.letter == 'ENTER' || letter.letter == 'BACK' ? 2 : 0}
      onClick={() => {
        addLetter(letter.letter);
      }}
      cursor='pointer'
    >
      <Flex
        backgroundColor={
          letter.letter == 'ENTER' || letter.letter == 'BACK'
            ? 'green.600'
            : 'gray.500'
        }
        h='60px'
        w={
          letter.letter == 'ENTER' || letter.letter == 'BACK' ? '110px' : '50px'
        }
        borderRadius='lg'
        justify='center'
        alignItems='center'
      >
        <Heading size='md'>{letter.letter}</Heading>
      </Flex>
    </GridItem>
  );
}

export default KeyButton;
