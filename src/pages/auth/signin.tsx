import type { GetServerSideProps, NextPage } from 'next';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';

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
  const router = useRouter();

  return (
    <>
      <div>Sign In</div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: router.query.callbackUrl as string,
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export default Signin;
