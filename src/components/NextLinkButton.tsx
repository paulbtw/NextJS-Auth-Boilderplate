import { Button, ButtonProps } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface NextLinkButtonInterface extends ButtonProps {
  to?: string;
}

export const NextLinkButton: FC<NextLinkButtonInterface> = ({
  to = '/',
  children,
  ...props
}) => {
  return (
    <Link href={to} passHref>
      <Button as="a" {...props}>
        {children}
      </Button>
    </Link>
  );
};
