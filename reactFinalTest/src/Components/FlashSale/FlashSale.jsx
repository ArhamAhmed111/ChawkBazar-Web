import React, { useEffect, useState } from 'react';
import './FlashSale.css';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Modal from '../Common/Modal/Modal';

const FlashSale = () => {
    const [flashProducts, setFlashProducts] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleModal = (id) => {
        setSelectedId(id);
        setModal(true);
    };

    const fetchData = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.in/api/products');
            const data = res?.data.products;
            setFlashProducts(data);
        } catch (error) {
            setError('Failed to fetch products. Please try again later.');
        } 
    };

    useEffect(() => {
        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

  
console.log(flashProducts)
    return (
        <div className='Flash-container'>
            <h1>Flash Sale</h1>
            <Slider {...settings}>
                {flashProducts.slice(6, 15).map((item,index) => {
                    const{id,title,image,description,price} = item
                    return(
                    <div key={index}>
                        <div className='Flash-card' onClick={() => handleModal(id)}>
                            <img className='flash-img' src={image} alt={item.title} />
                            <h3 className='flash-title'>{title.slice(0, 15)}</h3>
                            <p className='flash-description'>{description.slice(0, 37)}...</p>
                            <p className='flash-price'>${price}</p>
                        </div>
                    </div>)
                })}
            </Slider>
                <Modal data={flashProducts} modal={modal} setModal={setModal} selectedId={selectedId} />
        </div>
    );
}

export default FlashSale;
