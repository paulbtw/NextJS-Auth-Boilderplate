import { ReactElement } from 'react';

import { UserRoleEnum } from './types';

/**
 * Authentication configuration
 */
export interface AuthEnabledComponentConfig {
  auth: { role: UserRoleEnum[]; loading?: ReactElement; redirectUrl?: string };
}

/**
 * A component with authentication configuration
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentWithAuth<PropsType = any> = React.FC<PropsType> &
  AuthEnabledComponentConfig;
