import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import isMobileDevice from "../controllers/checkMobile.controller";

import jactosPrint from '../img/jactos-print.svg';
import infoBrPrint from '../img/info-br-print.svg';
import customersLogo from '../img/customers-logo.svg';
import arrowImg from '../img/arrow.svg';

import post1 from '../img/post-1.svg';
import post2 from '../img/post-2.svg';
import post3 from '../img/post-3.svg';
import post4 from '../img/post-4.svg';

import mainLogo from '../img/main-icon.svg';

import idvImg from '../img/idv.svg';
import postsImg from '../img/posts.svg';
import sitesImg from '../img/sites.svg';

import '../style/solutions.css';

function Solutions() {
    if (!isMobileDevice()) {
        return (
            <React.Fragment>
                <b className='solutions-title' id='solutions'>Soluções em Marketing</b>

                <div className="solutions-container">
                    <div className="solutions-grid-container">
                        <div className="left-wrapper">
                            <b>Criamos o site da sua empresa</b>
                            <img src={jactosPrint} className='jactos-print' />
                        </div>
                        <div className="right-wrapper">
                            <img src={infoBrPrint} className='info-br-print' />
                            <b>Mas também cuidamos da identidade visual</b>
                            <img src={customersLogo} className='customers-logo' />
                        </div>
                    </div>
                    <div className="posts-container">
                        <b>Se liga nesses posts!</b>

                        <div className="posts-wrapper">
                            <img src={post1} className='post' />
                            <img src={post2} className='post' />
                            <img src={post3} className='post' />
                            <img src={post4} className='post' />
                        </div>
                    </div>

                    <div className="bottom-container">
                        <a href="https://www.instagram.com/spectrabr/" target='_blank'>Confira nosso portfólio melhor <img src={arrowImg} className='arrow' /></a>
                    </div>
                </div>
                <img src={mainLogo} className='main-logo' />
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <b className='solutions-title-mob' id='solutions'>Soluções em Marketing</b>

                <div className="solutions-carousel">
                    <Swiper 
                        spaceBetween={50} 
                        slidesPerView={1} 
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        >
                        <SwiperSlide className="solution-item">
                            <b>Sites institucionais</b>
                            <div className="card-img">
                                <img src={sitesImg} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="solution-item">
                            <b>Posts para redes sociais</b>
                            <div className="card-img">
                                <img src={postsImg} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="solution-item">
                            <b>Identidade visual</b>
                            <div className="card-img">
                                <img src={idvImg} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                 <div className="bottom-container-mob">
                    <a href="https://www.instagram.com/spectrabr/" target='_blank'>Confira nosso portfólio melhor <img src={arrowImg} className='arrow' /></a>
                </div>

                <img src={mainLogo} className='main-logo-mob' />
            </React.Fragment>
        )
    }
}

export default Solutions;