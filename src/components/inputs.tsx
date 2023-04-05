import { Flex, Input } from '@chakra-ui/react';
import InputEl from './input';
import { useEffect } from 'react';
function Inputs() {
  const keyDownHandler = (event: any) => {
    if (/^[A-Z]$/i.test(event.key) === true) {
      console.log(event.key);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);
  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <InputEl />
      <InputEl />
      <InputEl />
      <InputEl />
      <InputEl />
      <InputEl />
    </Flex>
  );
}

export default Inputs;
