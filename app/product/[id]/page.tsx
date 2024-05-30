"use client";
import React, { useState, useEffect } from 'react';

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface ProductPageProps {
    params: {
        id: string;
    };
}

const fetchProduct = async (id: string) => {
    const res = await fetch(`/api/product/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    const product: Product = await res.json();
    return product;
};

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const fetchedProduct = await fetchProduct(params.id);
                setProduct(fetchedProduct);
                setError(null);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Failed to load product. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            </div>
        );
    }

    if (error) {
        return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
    }

    if (!product) {
        return <div className="flex items-center justify-center h-screen">Product not found.</div>;
    }

    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-10">
            <img src={product.image} alt={product.title} className="h-40 sm:h-56 w-full object-cover rounded-lg mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-500 text-sm mb-4">{product.category}</p>
            <button
                className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                onClick={() => window.history.back()}
            >
                Back
            </button>
        </div>
    );
};

export default ProductPage;
