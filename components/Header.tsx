import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const items = useSelector(selectCartItems);
  return (
    <>
      <div className="bg-[#a9a9a9] px-2 py-2 text-center text-sm text-white">
        <p>
          ⚠This app is based on{" "}
          <a
            href="https://youtu.be/DCTuw2P6DCU"
            className="text-blue-900 underline"
          >
            ILW Yennefer
          </a>
          's YT video.⚠
        </p>
        <p>
          Check the{" "}
          <a
            href="https://github.com/moh-sa/Apple-Store"
            className="text-blue-900 underline"
          >
            Github repo
          </a>
        </p>
      </div>
      <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4 ">
        <div className="flex items-center justify-center md:w-1/5">
          <Link href="/">
            <div className="header relative h-10 w-5">
              <Image
                src="https://rb.gy/vsvv2o"
                alt="Apple's Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
        </div>
        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
          <Link href="/" className="header">
            Product
          </Link>
          <Link href="/" className="header">
            Explore
          </Link>
          <Link href="/" className="header">
            Support
          </Link>
          <Link href="/" className="header">
            Business
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-4 md:w-1/5">
          <MagnifyingGlassIcon className="header headerIcon" />
          <Link href="/checkout">
            <div className="relative cursor-pointer">
              {items.length > 0 && (
                <span
                  className="bgGradiant absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center
              rounded-full text-[10px] text-white"
                >
                  {items.length}
                </span>
              )}
              <ShoppingBagIcon className="header headerIcon" />
            </div>
          </Link>
          {session ? (
            <Image
              src={
                session.user?.image ||
                "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              }
              alt=""
              width={34}
              height={34}
              className="cursor-pointer rounded-full"
              onClick={() => signOut()}
            />
          ) : (
            <UserIcon className="header headerIcon" onClick={() => signIn()} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
