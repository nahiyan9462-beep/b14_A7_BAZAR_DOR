
import React from "react";
import DateTime from "./DateTime";
import { Button } from "@heroui/react";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <header className="container mx-auto">
      <div className="sm:px-6 lg:px-8 mt-5">
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <DateTime />
          </div>

          <div className="flex w-full gap-2 sm:w-auto">
            <Button variant="outline" className='flex-1 sm:flex-none '>Sign In</Button>

            <Button
                variant="danger"
              className="flex-1 sm:flex-none"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
          <Navlinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
