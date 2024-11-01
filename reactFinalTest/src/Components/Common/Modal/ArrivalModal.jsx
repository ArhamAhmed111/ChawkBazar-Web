import { Card } from "antd";
import React, { useEffect, useState } from "react";
import './ArrivalModal.css'

const { Meta } = Card;

const ArrivalModal = ({ arrivalModal, setArrivalModal, data, selectedId }) => {
    const [arrivalProduct, setArrivalProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedId) {
            const singleProduct = data.find((item) => item.id === selectedId);
            if (!singleProduct) {
                setError("Product not found");
                setLoading(false);
                return;
            }
            setArrivalProduct(singleProduct);
            setLoading(false);
        }
    }, [selectedId, data]);

    const handleQuantityChange = (change) => {
        setQuantity((prev) => Math.max(prev + change, 1));
    };

    const handleWatsappClick = () => {
        if (!arrivalProduct) return;
        const phoneNumber = "03122166825";
        const message = `Hello, I'm interested in buying ${quantity} ${arrivalProduct.title}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
        setArrivalModal(false);
    };

    if (!arrivalModal || loading) return null;

    return (
        <div className="arrival-modal">
            {error && <p>Error: {error}</p>}
            {arrivalProduct && (
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={arrivalProduct.title} src={arrivalProduct.images[0]} />}
                >
                    <Meta
                        title={arrivalProduct.title.slice(0, 15)}
                        description={arrivalProduct.description.slice(0, 88)}
                    />
                    <p>Price: ${arrivalProduct.price}</p>
                    <div className="modal-quantity">
                        <button onClick={() => handleQuantityChange(-1)} disabled={quantity === 1}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                    <button className="modal-buy" onClick={handleWatsappClick}>Buy Product</button>
                    <button className="modal-close" onClick={() => setArrivalModal(false)}>Close</button>
                </Card>
            )}
        </div>
    );
};

export default ArrivalModal;
