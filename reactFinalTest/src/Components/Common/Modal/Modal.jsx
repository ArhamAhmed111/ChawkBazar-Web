import React, { useEffect, useState } from 'react';
import './Modal.css';

const Modal = ({ modal, setModal, selectedId, data }) => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const singleProduct = data.find(item => item.id === selectedId);
            if (!singleProduct) throw new Error('Product not found');
            setProduct(singleProduct);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedId) {
            setLoading(true);
            setError(null);
            setQuantity(1); // Reset quantity on modal open
            getData();
        }
    }, [selectedId]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setModal(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [setModal]);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            setModal(false);
        }
    };

    if (!modal) return null;

    const handleQuantityChange = (change) => {
        setQuantity((prev) => Math.max(prev + change, 1));
    };

    const handleWatsappClick = () => {
        const phoneNumber = '03122166825';
        const message = `Hello, I'm interested in buying ${quantity} ${product.title}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        setModal(false);
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-labelledby="modal-title" aria-modal="true">
            <div className="modal-content">
                {loading && <p>Loading...</p>}
                {error && (
                    <div>
                        <p>Error: {error}</p>
                        <button onClick={() => getData()}>Retry</button>
                    </div>
                )}
                {product && (
                    <div className="modal-inner">
                        <img src={product.image} alt={product.title} className="modal-image" />
                        <div className="modal-details">
                            <h2 className="modal-title" id="modal-title">{product.title.slice(0, 15)}</h2>
                            <p className="modal-category">Category: {product.category}</p>
                            <p className="modal-brand">Brand: {product.brand || "N/A"}</p>
                            <p className="modal-color">Color: {product.color || "N/A"}</p>
                            <p className="modal-description">{product.description.slice(0, 100)}...</p>
                            <p className="modal-price">Price: <strong>${product.price}</strong></p>
                            <div className="modal-quantity">
                                <button onClick={() => handleQuantityChange(-1)} disabled={quantity === 1}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => handleQuantityChange(1)}>+</button>
                            </div>
                            <button className="modal-buy" onClick={handleWatsappClick}>Buy Product</button>
                            <button className="modal-close" onClick={() => setModal(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
