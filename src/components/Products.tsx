



const Products = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const data = await res.json()
    console.log(data)
    return (
           {
            
           }
    );
};

export default Products;