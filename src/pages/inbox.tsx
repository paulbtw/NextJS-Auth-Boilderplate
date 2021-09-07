import React from 'react';

import { LoadingAuth } from '../components/LoadingAuth';
import { ComponentWithAuth } from '../types/auth';
import { UserRoleEnum } from '../types/types';

const Inbox: ComponentWithAuth = () => {
  return <div>asdasdasdasd</div>;
};

Inbox.auth = {
  role: [UserRoleEnum.USER],
  loading: <LoadingAuth />,
  redirectUrl: '/',
};

export default Inbox;
