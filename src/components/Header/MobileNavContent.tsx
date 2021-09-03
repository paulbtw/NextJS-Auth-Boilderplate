import { CloseButton, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillHome, AiOutlineInbox } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { NextLinkButton } from '../NextLinkButton';

interface MobileNavContentInterface {
  bg: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavContent: FC<MobileNavContentInterface> = ({
  bg,
  isOpen,
  onClose,
}) => {
  return (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={onClose}
      />
      <NextLinkButton w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </NextLinkButton>
      <NextLinkButton
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
        to="/inbox"
      >
        Inbox
      </NextLinkButton>
      <NextLinkButton
        w="full"
        variant="ghost"
        leftIcon={<BsFillCameraVideoFill />}
      >
        Videos
      </NextLinkButton>
    </VStack>
  );
};
