import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className='flex justify-between p-5 items-center'>
      <Link href='/'>
        <h1 className='pl-1 italic cursor-pointer -translate-y-[2px] text-3xl text-transparent font-black bg-clip-text bg-gradient-to-r from-yellow-500 to-red-400'>
          pn
        </h1>
      </Link>

      <div className='flex items-center space-x-5 text-green-600 font-medium cursor-pointer'>
        <h3>About</h3>
        <h3>CV</h3>
        <Link href='/blog'>Blog</Link>
        <Link href='/projects'>Projects</Link>
      </div>
      <h3 className='cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white hidden md:inline-flex'>
        Sign In
      </h3>
    </header>
  );
}

export default Header;
