
import React from "react";
import DateTime from "./DateTime";
import { Button } from "@heroui/react";
import Navlinks from "./Navlinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container mx-auto">
      <div className="sm:px-6 lg:px-8 mt-5">
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <DateTime />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" className='
            inline-flex items-center justify-center rounded-xl border border-[#b8dcd3] bg-white/70 px-7 py-3.5 text-base font-semibold text-[#24534d] transition duration-200 hover:bg-white
            '>Sign In</Button>
            <Link href='/sign-up'>
            <Button
              variant="danger"
              className="inline-flex items-center justify-center rounded-xl bg-[#12a765] px-7 py-3.5 text-base font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#0d8e56] hover:shadow-lg"
            >
              Sign Up
            </Button>
            </Link>
          </div>
        </div>         
        
        <Navlinks />
         
      </div>
    </header>
  );
};

export default Navbar;
