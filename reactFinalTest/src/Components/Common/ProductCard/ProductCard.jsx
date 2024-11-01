import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import ArrivalModal from '../Modal/ArrivalModal';
import axios from 'axios';

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const [arrivalModal, setArrivalModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products');
            setProducts(res.data); // Use res.data directly
        } catch (error) {
            console.error('Failed to load products', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleModal = (id) => {
        setSelectedId(id);
        setArrivalModal(true);
    };

    return (
        <div className='product-list'>
            {products.map((item) => (
                <div key={item.id} onClick={() => handleModal(item.id)} className='product-card'>
                    <img className='product-image' src={item.images[0]} alt={item.title} />
                    <h3 className='product-title'>{item.title}</h3>
                    <p className='product-description'>{item.description.slice(0, 88)}...</p>
                    <p className='product-price'>${item.price}</p>
                </div>
            ))}

            {arrivalModal && (
                <ArrivalModal
                    arrivalModal={arrivalModal}
                    setArrivalModal={setArrivalModal}
                    selectedId={selectedId}
                    data={products}
                />
            )}
        </div>
    );
};

export default ProductCard;
