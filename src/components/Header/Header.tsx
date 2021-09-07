import { FC, useCallback } from 'react';

import {
  chakra,
  Flex,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

import { Logo } from './Logo';
import { MobileNavContent } from './MobileNavContent';
import { SignInPopover } from './SignInPopover';
import { SignOutButton } from './SignOutButton';

export const Header: FC = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue('white', 'gray.800');

  const mobileNav = useDisclosure();

  const [session, loading] = useSession();

  const authenticationButtonComponent = useCallback(() => {
    if (loading) return null;
    if (session) return <SignOutButton />;
    return <SignInPopover />;
  }, [loading, session]);

  return (
    <>
      <chakra.header
        shadow="md"
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Logo />
            </Flex>

            <Spacer />
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                {authenticationButtonComponent()}
              </HStack>

              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          <MobileNavContent
            bg={bg}
            isOpen={mobileNav.isOpen}
            onClose={mobileNav.onClose}
          />
        </chakra.div>
      </chakra.header>
    </>
  );
};
