import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Image,
  Divider,
} from '@chakra-ui/react';
import { ModalProps } from '../../types/modal';
import Example1 from '../../assets/example1.png';
import Example2 from '../../assets/example2.png';
import Example3 from '../../assets/example3.png';
function InfoModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>How to play?</ModalHeader>
        <ModalCloseButton top='15px' />
        <ModalBody pb={6}>
          <Flex padding='10px' flexDirection={'column'} gap='10px'>
            <Heading size='md'>Odgadnij słowo w 6 próbach</Heading>
            <UnorderedList>
              <ListItem paddingTop='5px'>
                Każde słowo musi mieć 5 liter
              </ListItem>
              <ListItem paddingTop='5px'>
                Kolor kafelków zmieni się, aby pokazać, jak blisko odgadnięcia
                jesteś
              </ListItem>
            </UnorderedList>
            <Heading size='md'>Przykłady:</Heading>
            <UnorderedList listStyleType='none'>
              <ListItem paddingTop='10px'>
                <Image
                  src={Example1}
                  h='60px'
                  left='-9px'
                  position='relative'
                />
                <Text paddingTop='2px'>
                  Litera S jest w słowie na właściwym miejscu
                </Text>
              </ListItem>

              <ListItem paddingTop='20px'>
                <Image
                  src={Example2}
                  h='60px'
                  left='-9px'
                  position='relative'
                />
                <Text paddingTop='2px'>
                  Litera K jest w słowie ale na innym miejscu
                </Text>
              </ListItem>
              <ListItem paddingTop='20px'>
                <Image
                  src={Example3}
                  h='60px'
                  left='-9px'
                  position='relative'
                />
                <Text paddingTop='2px'>
                  Żadna z liter nie występuje w słowie
                </Text>
              </ListItem>
            </UnorderedList>
            <Heading size='md' paddingTop='10px'>
              Dodatkowe informacje:
            </Heading>
            <UnorderedList>
              <ListItem paddingTop='5px'>
                Nie możesz wprowadzać liter, które zostały już pokolorowane na
                kolor czerowony
              </ListItem>
              <ListItem paddingTop='5px' paddingBottom='5px'>
                Aby wylosować kolejne słowo odśwież stronę
              </ListItem>
            </UnorderedList>
            <Divider borderColor='gray.200' />

            <Text color='gray.500'>Miłosz Baczewski 2023 ©</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default InfoModal;
