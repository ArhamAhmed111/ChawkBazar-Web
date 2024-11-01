import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './CatCard.css';

const CatCard = () => {
    const [categories, setCategories] = useState([]);
   
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const { data } = await axios.get('https://api.escuelajs.co/api/v1/categories');
            setCategories(data);
        } catch (error) {
            setError('Failed to fetch categories');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const settings = {
        dots: true,
        infinite: false,
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
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    

    return (
        <div className="slider-container">
         <h1>Featured Category</h1>
            <Slider {...settings}>
           
                {categories.map((category) => (
                    <div key={category.id}>
                        <div 
                            onClick={() => navigate(`/catProduct/${category.name}`)} 
                            className='category-card'
                        >
                            <img 
                                className='cat-card-img' 
                                src={category.image} 
                                alt={category.name} 

                            />
                            <h3 className='cat-card-name'>{category.name}</h3>
                        
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CatCard;
