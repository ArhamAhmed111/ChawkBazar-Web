import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import BannerCard from '../../Components/Common/BannerCard/BannerCard';
import { bannerCardDetail } from '../../Utills/Constant/BannerCard';
import Banner from '../../Components/Banner/Banner';
import './Home.css';
import CatCard from '../../Components/Common/CatCard/CatCard';
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct';
import FlashSale from '../../Components/FlashSale/FlashSale';
import ProductCard from '../../Components/Common/ProductCard/ProductCard';
import axios from 'axios';
import Images from '../../../public/Assets/Images/banner-7.webp';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    

    return (
        <div>
            <Header />
            <Banner />
            <div className='card-container'>
                {bannerCardDetail.map((item, index) => {
                    const cardClass = index % 2 === 0 ? 'purple-card' : 'yellow-card';
                    return <BannerCard data={item} key={item.id} cardClass={cardClass} />;
                })}
            </div>
            <CatCard />
            <FeaturedProduct />
            <FlashSale />
            <div className='banner'>
                <img className='banner-img' src={Images} alt='Banner' />
            </div>
            
                    <ProductCard />
              
           
            <Footer />
        </div>
    );
};

export default Home;
