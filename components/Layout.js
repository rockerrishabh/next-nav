import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
  const [active, isActive] = useState(false);
  return (
    <div className="mx-auto flex h-24">
      <div className="flex shadow-md flex-1 px-6 items-center">
        <div className="flex flex-1 p-6 justify-between items-center">
          <Link href="/" passHref>
            <div className="flex cursor-pointer hover:text-blue-600">
              <h1 className="font-bold italic">Gaming Dunia</h1>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <div className="space-x-6">
              <Link href="/about">
                <a className="hover:text-blue-600">About</a>
              </Link>
              <Link href="/privacy">
                <a className="hover:text-blue-600"> Policy</a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-blue-600">Terms and Conditions</a>
              </Link>
            </div>
            <div className="flex space-x-4 pl-8 pr-16 items-center">
              <button className="rounded-md hover:bg-blue-400 bg-blue-600 hover:text-gray-100 text-white h-10 w-24 items-center">
                Login
              </button>
              <button className="rounded-md bg-red-600 hover:bg-red-400 hover:text-gray-100 text-white h-10 w-24 items-center">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            isActive(true);
          }}
          className="h-6 w-6 md:hidden cursor-pointer hover:text-blue-600 active:rotate-90 transition duration:1000"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {active && <Sidebar closeMenu={isActive} />}
    </div>
  );
};

export default Layout;
