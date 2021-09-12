import { FC } from 'react';

import { Button, Popover, PopoverTrigger } from '@chakra-ui/react';

import { SignInPopoverContent } from './SignInPopoverContent';

export const SignInPopover: FC = () => {
  return (
    <Popover returnFocusOnClose={false} isLazy>
      <PopoverTrigger>
        <Button colorScheme="brand" variant="solid" size="sm">
          Sign In
        </Button>
      </PopoverTrigger>
      <SignInPopoverContent />
    </Popover>
  );
};
