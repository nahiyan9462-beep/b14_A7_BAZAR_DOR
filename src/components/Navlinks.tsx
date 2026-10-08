

import Link from 'next/link';
import React from 'react';

const Navlinks = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const data =await res.json()
    const navs = data
    console.log(navs);

    return (
        <div className='flex gap-4 justify-baseline mt-5 items-center'>
            {
                navs.map((n,ind) => <Link  key={ind} href={n.slug}>{n.nameBn}</Link>)
            }
        </div>
    );
};

export default Navlinks;