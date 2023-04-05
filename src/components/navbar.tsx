import { Flex, Heading } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex
      justifyContent='center'
      padding='20px 0 '
      borderBottom='1px solid'
      borderColor={'whiteAlpha.400'}
    >
      <Heading fontWeight={700} size='xl'>
        WORDLE
      </Heading>
    </Flex>
  );
}

export default Navbar;
