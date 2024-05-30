import React from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <img src={product.image} alt={product.title} className="h-40 sm:h-56 w-full object-cover rounded-t-lg mb-4" />
            <div className="px-2 sm:px-4">
                <h2 className="text-lg sm:text-xl font-bold mb-2 truncate">{product.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
