import { Flex, GridItem, Heading } from '@chakra-ui/react';
import { KeyboardElement } from '../types/keyboardelement';

function KeyButton({ keyLetter, color }: KeyboardElement) {
  return (
    <GridItem
      colSpan={keyLetter == 'ENTER' || keyLetter == 'BACK' ? 2 : 0}
      cursor='pointer'
    >
      <Flex
        bgColor={color}
        h='60px'
        w={keyLetter == 'ENTER' || keyLetter == 'BACK' ? '110px' : '50px'}
        borderRadius='lg'
        justify='center'
        alignItems='center'
      >
        <Heading size='md'>{keyLetter}</Heading>
      </Flex>
    </GridItem>
  );
}

export default KeyButton;
