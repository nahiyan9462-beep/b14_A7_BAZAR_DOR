

'use client'
import {useSession } from '@/lib/auth-clients';
import { Button, Spinner} from '@heroui/react';
import Link from 'next/link';
import React from 'react';


 
 

const UserInfo = () => {
     const {data:session,isPending}= useSession();
  console.log('user session in Navbar', session);

  if(isPending){
    return <div className="min-h-screen flex items-center justify-center gap-4">
      <Spinner />
       loading...
    </div>
    }

    return (
         <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href='/sign-in'>
                <Button variant="outline" className='
                inline-flex items-center justify-center rounded-xl border border-[#b8dcd3] bg-white/70 px-7 py-3.5 text-base font-semibold text-[#24534d] transition duration-200 hover:bg-white
                '>Sign In</Button>
            </Link>
            <Link href='/sign-up'>
                <Button
                    
                variant="danger"
                className="inline-flex items-center justify-center rounded-xl bg-[#12a765] px-7 py-3.5 text-base font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#0d8e56] hover:shadow-lg"
                >
                Sign Up
                </Button>
            </Link>
          </div>
    );
};

export default UserInfo;