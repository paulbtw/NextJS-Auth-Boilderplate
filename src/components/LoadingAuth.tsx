import { FC } from 'react';

import { Box } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';

export const LoadingAuth: FC = () => {
  return (
    <Box w="50%" p={4}>
      <Skeleton height="20px" />
    </Box>
  );
};
