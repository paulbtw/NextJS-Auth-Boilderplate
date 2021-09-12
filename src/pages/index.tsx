import { Text } from '@chakra-ui/layout';
import type { NextPage } from 'next';

import { Meta } from '../components/Meta';

const Home: NextPage = () => {
  return (
    <main>
      <Meta keyValue="homePage" />
      <Text>Test</Text>
    </main>
  );
};

export default Home;
