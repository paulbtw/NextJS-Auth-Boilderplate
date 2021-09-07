import type { GetServerSideProps, NextPage } from 'next';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/client';

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

interface SigninProps {
  providers: Record<string, ClientSafeProvider>;
}

const Signin: NextPage<SigninProps> = ({ providers }) => {
  return (
    <>
      <div>Sign In</div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export default Signin;
