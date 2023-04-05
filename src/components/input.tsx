import { Flex, Input } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
function InputEl() {
  return (
    <Flex gap='0.8rem' paddingTop='10px'>
      <Input
        h='70px'
        minWidth='70px'
        width='70px'
        fontSize='3rem'
        textAlign='center'
        maxLength={1}
        onChange={(e) => {}}
      />
      <Input
        h='70px'
        minWidth='70px'
        width='70px'
        fontSize='3rem'
        textAlign='center'
        maxLength={1}
        readOnly
      />
      <Input
        h='70px'
        minWidth='70px'
        width='70px'
        fontSize='3rem'
        textAlign='center'
        maxLength={1}
        readOnly
      />
      <Input
        h='70px'
        minWidth='70px'
        width='70px'
        fontSize='3rem'
        textAlign='center'
        maxLength={1}
        readOnly
      />
      <Input
        h='70px'
        minWidth='70px'
        width='70px'
        fontSize='3rem'
        textAlign='center'
        maxLength={1}
        readOnly
      />
    </Flex>
  );
}

export default InputEl;
