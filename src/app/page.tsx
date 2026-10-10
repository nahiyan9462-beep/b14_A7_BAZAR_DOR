import MarketBanner from '@/components/Banner';
import Marquee from '@/components/Marquee';
import Products from '@/components/Products';



import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Marquee/>
            <MarketBanner/>
            <Products/>
            
        </div>
    );
};

export default HomePage;