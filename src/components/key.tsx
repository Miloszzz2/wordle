import { Flex, GridItem, Heading, Button } from '@chakra-ui/react';
import { KeyboardElement } from '../types/keyboardelement';
import useWordleLogic from '../hooks/wordlelogic';
function KeyButton({
  keyLetter,
  color,
  redLetters,
  greenLetters,
  yellowLetters,
}: KeyboardElement) {
  const checkColor = () => {
    if (redLetters?.includes(keyLetter.toLowerCase())) {
      return 'red.500';
    } else if (yellowLetters?.includes(keyLetter.toLowerCase())) {
      return 'yellow.500';
    } else if (greenLetters?.includes(keyLetter.toLowerCase()))
      return 'green.600';
    else return color;
  };
  return (
    <Flex
      h='60px'
      w={keyLetter == 'ENTER' || keyLetter == 'BACK' ? '110px' : '50px'}
      borderRadius='lg'
      justify='center'
      alignItems='center'
    >
      <Button
        size='md'
        w='100%'
        h='100%'
        fontSize='1.3rem'
        fontWeight='bold'
        bgColor={checkColor()}
        _hover={{ bgColor: color === 'green.600' ? 'green.700' : 'gray.700' }}
      >
        {keyLetter}
      </Button>
    </Flex>
  );
}

export default KeyButton;
