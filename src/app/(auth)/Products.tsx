import { IProducts } from '@/types/products';
import React from 'react';
import ProductCard from '../../components/productCard';

const Products = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const data:IProducts[] = await res.json()
    const products = data

    console.log(products)
    return (
        <div>
            {
                products.map((products:IProducts,ind:number)=>{
                    return <ProductCard key={ind} products={products}></ProductCard>
                })
            }
        </div>
    );
};

export default Products;