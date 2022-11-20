import NextLink from "next/link";
import Image from "next/image";

import useAccount from "../../hooks/useAccount";
import { shortenAddress } from "../../utils/shortenAddress";
import { useStore } from "../Store";

function Navbar({ path }: { path: string }) {
  const { data: account } = useAccount();
  const [connectWallet] = useStore((store) => store.connectWallet);

  return (
    <nav className="sticky top-0 left-0 z-20 w-full border-b border-gray-600 bg-transparent p-5 px-2 py-2.5 backdrop-blur-lg backdrop-filter sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <NextLink href="/">
          <a className="flex items-center">
            <Image
              src="/logo.svg"
              height="30px"
              width="35px"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              Crypto Lottery
            </span>
          </a>
        </NextLink>
        <div className="flex md:order-2">
          {!account && (
            <button
              type="button"
              onClick={connectWallet}
              className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
            >
              Get started
            </button>
          )}
          {account && (
            <div className="flex items-center gap-2 text-white">
              {shortenAddress(account)}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
