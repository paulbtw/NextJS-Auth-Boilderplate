import { Button } from '@chakra-ui/button';
import { signOut } from 'next-auth/client';

export const SignOutButton = () => {
  return (
    <Button
      onClick={() => signOut()}
      size="sm"
      colorScheme="brand"
      variant="outline"
    >
      Sign Out
    </Button>
  );
};
