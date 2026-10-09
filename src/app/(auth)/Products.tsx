import { IProducts } from '@/types/products';
import React from 'react';
import ProductCard from '../../components/productCard';

const Products = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products')
    const data:IProducts[] = await res.json()
    const products = data

    console.log(products)
    return (
        <section className='container mx-auto'>
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
            {
                products.map((products:IProducts,ind:number)=>{
                    return <ProductCard key={ind} products={products}></ProductCard>
                })
            }
            </div>
        </section>
        
    );
};

export default Products;