import {
  Flex,
  Heading,
  useDisclosure,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import { SettingsIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import SettingsModal from './settingsmodal';
import InfoModal from './infomodal';
function Navbar() {
  const {
    isOpen: isOpenInfoModal,
    onOpen: onOpenInfoModal,
    onClose: onCloseInfoModal,
  } = useDisclosure({ defaultIsOpen: true });
  const {
    isOpen: isOpenSettingsModal,
    onOpen: onOpenSettingsModal,
    onClose: onCloseSettingsModal,
  } = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <Flex
      justifyContent='space-between'
      padding='20px'
      borderBottom='1px solid'
      borderColor={colorMode === 'light' ? 'gray.400' : 'gray.600'}
      alignItems='center'
    >
      <Flex w='163px'></Flex>
      <Heading fontWeight={700} size='xl'>
        WORDLE
      </Heading>
      <Flex gap='1rem' alignItems='center'>
        <InfoOutlineIcon
          boxSize={10}
          cursor='pointer'
          onClick={onOpenInfoModal}
        />
        <InfoModal isOpen={isOpenInfoModal} onClose={onCloseInfoModal} />
        <Icon
          viewBox='0 0 51 50'
          boxSize={10}
          color={colorMode === 'light' ? '#1a202c' : 'white'}
        >
          <path
            fill='currentColor'
            d='M6.4216 43.75C5.83132 43.75 5.33618 43.55 4.93618 43.15C4.53618 42.75 4.33688 42.2556 4.33826 41.6667V20.8333C4.33826 20.2431 4.53826 19.7479 4.93826 19.3479C5.33826 18.9479 5.83271 18.7486 6.4216 18.75H13.7133C14.3035 18.75 14.7987 18.95 15.1987 19.35C15.5987 19.75 15.798 20.2444 15.7966 20.8333V41.6667C15.7966 42.2569 15.5966 42.7521 15.1966 43.1521C14.7966 43.5521 14.3022 43.7514 13.7133 43.75H6.4216ZM21.5258 43.75C20.9355 43.75 20.4403 43.55 20.0403 43.15C19.6403 42.75 19.441 42.2556 19.4424 41.6667V8.33333C19.4424 7.74306 19.6424 7.24792 20.0424 6.84792C20.4424 6.44792 20.9369 6.24861 21.5258 6.25H28.8174C29.4077 6.25 29.9028 6.45 30.3028 6.85C30.7028 7.25 30.9022 7.74444 30.9008 8.33333V41.6667C30.9008 42.2569 30.7008 42.7521 30.3008 43.1521C29.9008 43.5521 29.4063 43.7514 28.8174 43.75H21.5258ZM36.6299 43.75C36.0397 43.75 35.5445 43.55 35.1445 43.15C34.7445 42.75 34.5452 42.2556 34.5466 41.6667V25C34.5466 24.4097 34.7466 23.9146 35.1466 23.5146C35.5466 23.1146 36.041 22.9153 36.6299 22.9167H43.9216C44.5119 22.9167 45.007 23.1167 45.407 23.5167C45.807 23.9167 46.0063 24.4111 46.0049 25V41.6667C46.0049 42.2569 45.8049 42.7521 45.4049 43.1521C45.0049 43.5521 44.5105 43.7514 43.9216 43.75H36.6299Z'
          />
        </Icon>
        <SettingsIcon
          boxSize={10}
          cursor='pointer'
          onClick={onOpenSettingsModal}
        />
        <SettingsModal
          isOpen={isOpenSettingsModal}
          onClose={onCloseSettingsModal}
        />
      </Flex>
    </Flex>
  );
}

export default Navbar;
