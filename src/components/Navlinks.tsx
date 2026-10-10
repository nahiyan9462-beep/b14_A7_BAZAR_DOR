

import { ICategories } from '@/types/categories';
import Link from 'next/link';
import React from 'react';

const Navlinks = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const data:ICategories[] =await res.json()
    const navs = data
    console.log(navs);

    return (
        <div className='flex gap-6 justify-baseline mt-5 items-center'>
            {
                navs.map((n,ind) => <Link  key={ind} href={`/category/${n.slug}`}>{n.icon}{n.nameBn}</Link>)
            }
        </div>
    );
};

export default Navlinks;