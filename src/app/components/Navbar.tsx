"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  // for mobile nav
  const [display, setDisplay] = useState("hidden");

  return (
    <nav className="fixed z-50 w-screen h-[70px] bg-black bg-opacity-90 underline-offset-8 text-white border-b border-white flex justify-between items-center px-4 max-md:px-2 max-xl:bg-opacity-100">
      {/* SITE LOGO AND BRANDNAME */}
      <Link href={""} className="flex flex-row items-center">
        <Image
          src={"logo.svg"}
          alt="site logo"
          width={45}
          height={45}
          className="max-sm:w-7 ring-white rounded-full ring-offset-1 hover:p-1 hover:ring-1 transition-all"
        />
        <h1 className="text-3xl uppercase font-bold italic tracking-widest ml-3 hover:tracking-[4.60px] hover:bg-white hover:px-4 hover:text-black transition-all max-md:text-2xl max-sm:text-lg">
          Durable Dumbbells
        </h1>
      </Link>

      {/* DESKTOP NAV */}
      <div className="flex flex-row items-center justify-between w-80 mx-2 max-lg:hidden">
        <Link
          href={"#"}
          className="hover:underline hover:tracking-widest transition-all"
        >
          Reviews
        </Link>
        <Link
          href={"#"}
          className="hover:underline hover:tracking-widest transition-all"
        >
          Our Product
        </Link>
        <Link href={"#"}>
          <button className="px-6 uppercase font-bold text-xl bg-red-800 hover:bg-white hover:text-black hover:tracking-[4.60px] transition-all">
            Shop
          </button>
        </Link>
      </div>

      {/* MOBILE NAV */}
      <button
        className="lg:hidden text-2xl"
        onClick={() =>
          display == "hidden" ? setDisplay("flex") : setDisplay("hidden")
        }
      >
        <FaBars />
      </button>
      <div
        id="mobile-nav"
        className={`text-xl w-40 h-screen fixed top-[70px] right-0 px-5 ${display} lg:hidden flex-col justify-start  bg-black bg-opacity-90 border-b border-white`}
      >
        <Link
          href={"#"}
          className="py-5 active:underline transition-all active:tracking-widest"
        >
          Reviews
        </Link>
        <Link
          href={"#"}
          className="py-4 active:underline transition-all active:tracking-widest"
        >
          Our Product
        </Link>
        <Link href={"#"}>
          <button className="my-4 py-1 w-full uppercase font-bold text-2xl bg-red-800 hover:bg-white hover:text-black hover:tracking-[4.60px] transition-all">
            Shop
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
