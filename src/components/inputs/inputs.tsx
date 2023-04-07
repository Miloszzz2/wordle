import { Flex } from '@chakra-ui/react';
import InputElement from './input';
function Inputs() {
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
