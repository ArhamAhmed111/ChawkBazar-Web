import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div>
      <Carousel interval={10000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-6.jpg&w=1920&q=100"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-4.jpg&w=1920&q=100"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-5.jpg&w=1920&q=100"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
