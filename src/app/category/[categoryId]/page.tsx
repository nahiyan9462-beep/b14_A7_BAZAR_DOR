import ProductCard from "@/components/productCard";
import React from "react";

const CategoryPage = async ({
    params,
    }: {
    params: Promise<{ categoryId: string }>;
    }) => {
    const { categoryId } = await params;

    const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${categoryId}`
    );

    if (!res.ok) {
    throw new Error("Failed to fetch products");
    }

    const data = await res.json();

 
    const products = Array.isArray(data) ? data : data.data;

    if (!Array.isArray(products)) {
    return <p>No products found.</p>;
    }

return ( 

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => ( <ProductCard key={product.id} products={product} />
            ))} 
    </div>
);
};

export default CategoryPage;
