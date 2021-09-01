import { FC } from 'react';
import { Link } from '@chakra-ui/react';
import NextJSLink from 'next/link';
import { useRouter } from 'next/router';

interface NextLinkInterface {
  to?: string;
}

export const NextLink: FC<NextLinkInterface> = ({ children, to = '/' }) => {
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <NextJSLink href={to} passHref>
      <Link color={isActive ? 'red' : 'blue'}>{children}</Link>
    </NextJSLink>
  );
};
