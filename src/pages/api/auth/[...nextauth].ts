import NextAuth, { Session } from 'next-auth';
import Adapters from 'next-auth/adapters';
import { Awaitable } from 'next-auth/internals/utils';
import Providers from 'next-auth/providers';

import Models from '../../../models';
import { UserInterface } from '../../../types/auth';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'user',
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  adapter: Adapters.TypeORM.Adapter(process.env.DATABASE_URL as string, {
    models: {
      ...Adapters.TypeORM.Models,
      User: Models.User,
    },
  }),

  database: process.env.DATABASE_URL,
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.SECRET,

  cookies: {
    sessionToken: {
      name: `__auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
    callbackUrl: {
      name: `__auth.cb-url`,
      options: {
        sameSite: 'lax',
        path: '/',
        secure: true,
        httpOnly: true,
      },
    },
    csrfToken: {
      name: `__auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
  },
  callbacks: {
    redirect: async (url, _baseUrl) => {
      return Promise.resolve(url);
    },
    session: (session: Session, user: UserInterface): Awaitable<Session> => {
      return {
        ...session,
        user: {
          ...session.user,
          role: user.role || 'user',
        },
      };
    },
  },
});
