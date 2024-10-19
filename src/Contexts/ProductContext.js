import { useEffect, useState, createContext } from "react";
export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch('https://fakeapidata.com/products');
        const data = await response.json();
        setProduct(data);   
        console.log(data);
        
    };
    fetchProduct();
    }, []);

    return (
    <ProductContext.Provider value={{ product ,setProduct }}>
        {children}
    </ProductContext.Provider>
    );
}
