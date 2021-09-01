import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Header } from '../components/Header/Header';

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: '1200px' }}
        m="0 auto"
      >
        {children}
      </Flex>
    </>
  );
};

export default DefaultLayout;
