 
 'use client'
import Link from "next/link";
import DateTime from "./DateTime";
 
import Navlinks from "./Navlinks";
 
import { Button, Spinner } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-clients";

 

const Navbar = () => {
    const {data:session,isPending}=useSession();
   console.log('user session in Navbar', session);
 
   if(isPending){
     return <div className="min-h-screen flex items-center justify-center gap-4">
       <Spinner />
        loading...
     </div>
   }

   const authLinks =<>
          {
            session?.user?<>
              <span>
              {session?.user?.name} </span>
              <Button onClick={()=>signOut()}>SignOut</Button>

            </>:<>
              <Link href='/sign-in'>
                <Button variant="outline" className='
                inline-flex items-center justify-center rounded-3xl border border-[#b8dcd3] bg-white/70 px-7 py-3.5 text-base font-semibold text-[#24534d] transition duration-200 hover:bg-white
                '>Sign In</Button>
            </Link>
            <Link href='/sign-up'
                className="inline-flex items-center justify-center rounded-3xl bg-[#006839] px-7 py-5 text-base font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#0d8e56] hover:shadow-lg"
            >
                <Button variant="danger">
                Sign Up
                </Button>
             </Link>
            </>
          }

   </>

  return (
    <header className="container mx-auto">
      <div className="sm:px-6 lg:px-8 mt-5">
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <DateTime />
          </div> 
             <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {authLinks}
            </div>
        </div> 
               
        
        {<Navlinks />}
         
      </div>
    </header>
  );
};

export default Navbar;
