import { Heading, HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { NextLink } from '../NextLink';

export const Logo: FC = () => {
  return (
    <NextLink href="/" style={{ textDecoration: 'none' }}>
      <HStack>
        <Heading style={{ textDecoration: 'none' }}>Logo</Heading>
      </HStack>
    </NextLink>
  );
};
