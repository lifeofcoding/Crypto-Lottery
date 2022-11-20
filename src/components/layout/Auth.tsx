import Head from "next/head";
import useAccount from "../../hooks/useAccount";

function Auth({ children }: { children: JSX.Element }) {
  const { isLoading, data: account } = useAccount();

  if (isLoading) {
    return (
      <div className="mx-auto mt-20 min-h-screen w-full rounded-md border-2">
        <div className="flex min-h-screen animate-pulse flex-row items-center justify-center space-x-5">
          <div className="rounded-50 min-h-screen w-full bg-gray-300 "></div>
        </div>
      </div>
    );
  }

  if (account) {
    return children;
  } else {
    return (
      <>
        <Head>
          <title>Crypto Lottery - Login</title>
          <meta
            name="description"
            content="Created by Jimmy Rousseau @lifeofcoding"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container mx-auto flex min-h-full flex-col items-center justify-center p-4">
          <div className="absolute top-0 left-0 h-screen w-full overflow-hidden">
            <svg viewBox="0 0 100 100">
              <defs>
                <mask id="mask" x="0" y="0" width="100" height="100">
                  <rect x="0" y="0" width="50" height="50" fill="#ddd" />
                  <rect x="0" y="0" width="100" height="100" fill="#ddd" />
                  <text text-anchor="middle" x="50" y="38" dy="1" fontSize="8">
                    Crypto Lottery
                  </text>
                </mask>
              </defs>
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                mask="url(#mask)"
                fill-opacity="1"
              />
            </svg>
          </div>
        </main>
      </>
    );
  }
}

export default Auth;
