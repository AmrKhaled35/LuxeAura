import { useEffect, useState, createContext } from "react";
export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchProduct = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProduct(data);   
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setError("Failed to load products. Please try again later.");
            setLoading(false);
        }
    };
    fetchProduct();
    }, []);

    return (
    <ProductContext.Provider value={{ product, setProduct, loading, error }}>
        {children}
    </ProductContext.Provider>
    );
}