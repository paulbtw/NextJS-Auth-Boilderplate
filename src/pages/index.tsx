import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';

const Home: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) return <div>Loading...</div>;
  return (
    <main>
      <div>Test</div>
      {!session && (
        <>
          Not signed in <br /> <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as{' '}
          {session?.user?.email ? session?.user?.email : session?.user?.name}
          <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </main>
  );
};

export default Home;