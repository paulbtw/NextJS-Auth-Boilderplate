import { FC, useEffect } from 'react';

import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';

import { AuthEnabledComponentConfig } from '../types/auth';

export const Auth: FC<AuthEnabledComponentConfig> = ({ children, auth }) => {
  const router = useRouter();
  const [session, loading] = useSession();

  const curUser = session?.user;

  useEffect(() => {
    if (loading) return; // Do nothing while loading
    if (!curUser || !auth.role.some((v) => v === curUser.role)) {
      if (auth.redirectUrl) {
        router.push(auth.redirectUrl);
      } else {
        signIn();
      }
    } // If not authenticated, force log in
  }, [curUser, loading, auth, router]);

  if (curUser) {
    return <>{children}</>;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  if (auth.loading) {
    return auth.loading;
  }
  return <div>Loading...</div>;
};
