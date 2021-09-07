/* eslint-disable unused-imports/no-unused-imports */
import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      name: string;
      email?: string;
      image?: string;
      role: string;
    };
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    role: string;
    name?: string;
    email?: string;
    image?: string;
  }
}
