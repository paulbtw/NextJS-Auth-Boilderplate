import { FC, useCallback, useEffect, useState } from 'react';

import {
  Button,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Stack,
} from '@chakra-ui/react';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/client';

export const SignInPopoverContent: FC = () => {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>();

  const getAllProviders = useCallback(async () => {
    const providersResponse = await getProviders();

    setProviders(providersResponse);
  }, []);

  useEffect(() => {
    getAllProviders();
  }, [getAllProviders]);

  return (
    <PopoverContent w="min">
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>Sign In</PopoverHeader>
      <PopoverBody>
        <Stack spacing={2} direction="column" align="center">
          {providers &&
            Object.values(providers).map((provider) => (
              <Button
                key={provider.name}
                onClick={() => signIn(provider.id)}
                size="sm"
                colorScheme="brand"
                variant="outline"
              >
                Sign in with {provider.name}
              </Button>
            ))}
        </Stack>
      </PopoverBody>
    </PopoverContent>
  );
};
