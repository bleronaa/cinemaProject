import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './data.json';
import './Cinema.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Films from './films';
import Footer from '../sections/footer';

const Cinemas = () => {
    const {homeData} = data;

    return (
        <div className='my-slider'>
            <Carousel
                showThumbs={false}
                autoPlay={false}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={true}>
                {homeData.map((cinema) => (
                    <div key={cinema.id}>
                        <img src={cinema.url} alt={cinema.name} className='slider-image'/>
                        <div className='content flex'>
                            <h2 className='h2text'>{cinema.name}</h2>

                        </div>
                    </div>
                ))}
            </Carousel>
            <Films/>
            <Footer/>

        </div>

    );
};

export default Cinemas;
