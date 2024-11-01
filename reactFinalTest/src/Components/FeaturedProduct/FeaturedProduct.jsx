import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './FeaturedProduct.css'; 
import Modal from '../Common/Modal/Modal';

const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleModal = (id) => {
        setSelectedId(id);
        setModal(true);
    };

    const getData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.in/api/products');
            const data = response.data.products;
            setProducts(data);
            const categories = [...new Set(data.map((item) => item.category))];

            const selectedProducts = categories.map((category) => {
                return data.find((item) => item.category === category);
            });

            setFeaturedProducts(selectedProducts);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1 className='featured-cat'>Featured Products</h1>
            <div className="featured-container">
                {featuredProducts[0] && (
                    <div className="featured-card-container">
                        <div key={featuredProducts[0].id} onClick={() => handleModal(featuredProducts[0].id)} className="featured-card">
                            <img src={featuredProducts[0].image} alt={featuredProducts[0].title} className="featured-image" />
                            <h3 className="featured-title">{featuredProducts[0].title.slice(0, 15)}</h3>
                            <p className="featured-price">${featuredProducts[0].price}</p>
                        </div>
                    </div>
                )}
                <div className="featured-card-container">
                    {featuredProducts.slice(1, 3).map((item) => (
                        <div key={item.id} onClick={() => handleModal(item.id)} className="featured-card small-card">
                            <img src={item.image} alt={item.title} className="featured-image" />
                            <h3 className="featured-title">{item.title.slice(0, 15)}</h3>
                            <p className="featured-price">${item.price}</p>
                        </div>
                    ))}
                </div>

                {featuredProducts[3] && (
                    <div className="featured-card-container">
                        <div key={featuredProducts[3].id} onClick={() => handleModal(featuredProducts[3].id)} className="featured-card big-Card">
                            <div className='big-card-img'>
                                <img src={featuredProducts[3].image} alt={featuredProducts[3].title} className="featured-image small-card-img" />
                            </div>
                            <h3 className="featured-title">{featuredProducts[3].title.slice(0, 15)}</h3>
                            <p className="featured-price">${featuredProducts[3].price}</p>
                        </div>
                    </div>
                )}
            </div>
            <Modal data={featuredProducts} modal={modal} setModal={setModal} selectedId={selectedId} />
        </>
    );
};

export default FeaturedProduct;
