import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header.jsx'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CatProduct.css'; 

const CatProduct = () => {
    const { name } = useParams(); // Use name instead of id
    const [products, setProducts] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
            setCategories(response.data);

        } catch (error) {
            setError('Error fetching categories: ' + error);
        }
    };

    const productGetData = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            setRelatedProducts(response.data);
        } catch (error) {
            setError('Error fetching products: ' + error);
        }
    };

    useEffect(() => {
        getProducts();
        productGetData();
    }, []);

    useEffect(() => {
        if (categories.length > 0) {
            // Find the category based on name (which is the parameter)
            const foundCategory = categories.find((category) => category.name === name);
            if (foundCategory) {
                setProducts(foundCategory);
                // Get related products based on the found category id
                const related = relatedProducts.filter((product) => product.category.id === foundCategory.id);
                setRelatedProducts(related);
            }
        }
    }, [categories, relatedProducts, name]);

    // Ensure products is defined before accessing its properties
    return (
        <>
        <Header/>
            {products ? (
                <div className='catproduct'>
                    <h1>#{products.name}</h1>
                    <img src={products.image} alt={products.name} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
            
            <div className="related-products">
                {relatedProducts.length > 0 ? (
                    relatedProducts.map((relatedProduct) => (
                        <div key={relatedProduct.id} className="related-product-card">
                            <img src={relatedProduct.images[0]} alt={relatedProduct.title} /> {/* Assuming images is an array */}
                            <h3>{relatedProduct.title}</h3>
                            <p>{relatedProduct.description}</p>
                            <p>Price: {relatedProduct.price}$</p>
                        </div>
                    ))
                ) : (
                    <p>No related products found.</p>
                )}
            </div>
        </>
    );
};

export default CatProduct;
