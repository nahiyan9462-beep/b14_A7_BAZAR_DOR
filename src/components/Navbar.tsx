import React from 'react';
import DateTime from './DateTime';
import { Button } from '@heroui/react';

const Navbar = () => {
    return (
         <header className='container mx-auto'>
             <div className='flex mt-5 gap-2 justify-between'>
                <DateTime/>
                <div className='flex gap-2'>
                    <Button variant="outline">Sign In</Button>
                     <Button>Sign Up</Button>
                </div>

             </div>
             
            <div>

            </div>

         </header>
    );
};

export default Navbar;