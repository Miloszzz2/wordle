import { Flex, Grid } from '@chakra-ui/react';
import KeyButton from './key';
function Keyboard() {
  const keyboardElements = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'ENTER',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    'BACK',
  ];
  return (
    <Flex justify='center' marginTop='100px'>
      <Grid gap='10px' templateColumns='repeat(10, 50px)'>
        {keyboardElements.map((item) => {
          return <KeyButton key={item} letter={item}></KeyButton>;
        })}
      </Grid>
    </Flex>
  );
}

export default Keyboard;
