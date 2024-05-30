import type { NextApiRequest, NextApiResponse } from 'next';

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid product ID' });
    }

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }

        const product: Product = await response.json();
        res.status(200).json(product);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export default handler;
