"use client";
import Logo from "@/app/components/logo";
import Link from "next/link";
import { useState } from "react";

const urls = [
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Lessons",
    url: "/lessons",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const DesktopNav = () => {
  return (
    <div className="flex-wrap hidden justify-evenly items-center sm:flex py-4">
      <Logo />

      <ul className="ml-8 flex items-center lg:gap-24 gap-6">
        {urls.map((url) => (
          <NavItem key={url.display} display={url.display} slug={url.url} />
        ))}
      </ul>
      <SearchBox />
    </div>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sm:hidden">
      <div className="flex">
        <Logo />
        <button onClick={() => setIsOpen(!isOpen)} className="px-3 py-2 ml-auto rounded-md bg-gray-500 text-white hover:bg-gray-400 duration-300">
          <svg className="w-8 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <ul className={`ml-8 flex-col items-center gap-5 ${isOpen ? "flex" : "hidden"}`}>
        {urls.map((url) => (
          <NavItem key={url.display} display={url.display} slug={url.url} />
        ))}
        <SearchBox />
      </ul>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="bg-gray-300 p-2">
      <div className="container mx-auto">
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  );
};

const NavItem = ({ display, slug }: { display: string; slug: string }) => {
  return (
    <Link className="text-xl uppercase py-2 font-extrabold text-black rounded-md hover:text-ekc-b4 duration-300" href={slug}>
      {display}
    </Link>
  );
};

function SearchBox() {
  return <input type="text" placeholder="Search..." className="lg:mt-0 mt-3 h-min ml-auto lg:w-auto lg:mx-0 mx-auto w-2/3 placeholder:text-white text-white bg-ekc-b4 pl-3 py-3 rounded-md focus:outline-none" />;
}

export default Navigation;
