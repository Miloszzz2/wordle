import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  StackDivider,
  VStack,
  Text,
  Heading,
  Switch,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { ModalProps } from '../../types/modal';
function SettingsModal({ isOpen, onClose }: ModalProps) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Modal
      closeOnOverlayClick={true}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>Settings</ModalHeader>
        <ModalCloseButton top='15px' />
        <ModalBody pb={6}>
          <VStack divider={<StackDivider borderColor='gray.200' />}>
            <Flex justify='space-between' w='100%' padding='15px 0'>
              <Heading size='md'>Light theme</Heading>
              <Switch
                size='lg'
                colorScheme='green'
                onChange={toggleColorMode}
              />
            </Flex>
            <Flex justify='space-between' w='100%' padding='15px 0'>
              <Heading size='md'>Feedback</Heading>
              <Link color='gray.300'>Email</Link>
            </Flex>
            <Flex justify='space-between' w='100%' padding='15px 0'>
              <Heading size='md'>Github</Heading>
              <Link color='gray.300'>Github</Link>
            </Flex>
            <Flex justify='space-between' w='100%' padding='15px 0'>
              <Heading size='md'>Questions</Heading>
              <Link color='gray.300'>FAQ's</Link>
            </Flex>
            <Flex paddingTop='10px' justifyContent='flex-start'>
              <Text color='gray.500'>Miłosz Baczewski 2023 ©</Text>
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SettingsModal;
