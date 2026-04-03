import React from 'react';

const slides = [
  {
    bg: '/assets/img/banner/travel/01.jpg',
    subtitle: 'Trusted Distribution for Premium Pet Care',
    title: (
      <>
        Advancing Pet Care with Veterinary-Trusted Brands
      </>
    ),
    primaryLabel: 'Explore Our Brands',
    secondaryLabel: 'Partner With Us',
  },
  {
    bg: '/assets/img/banner/travel/02.jpg',
    subtitle: 'Scientific • Premium • Market Ready',
    title: (
      <>
        Connecting Global Pet Care Brands with Sri Lanka
      </>
    ),
    primaryLabel: 'Our Distribution Network',
    secondaryLabel: 'Become a Dealer',
  },
  {
    bg: '/assets/img/banner/travel/02.jpg',
    subtitle: 'Strategic Growth Partner',
    title: (
      <>
        Supporting the Future of Premium Pet Care
      </>
    ),
    primaryLabel: 'About Sigmavet',
    secondaryLabel: 'Contact Us',
  },
];

export default function HeroSection() {
  return (
    <div className="tp-slider-area fix p-relative" id="hero">
      <div className="swiper tp-slider-zoom-2">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="tp-slider-singles">
                <div
                  className="tp-slider-bg-home bg-position"
                  data-background={slide.bg.replace(/^\//, '')}
                  style={{ backgroundImage: `url(${slide.bg})` }}
                ></div>
                <div className="container p-relative">
                  <img
                    className="tp-slider-travel-shape p-absolute"
                    src="/assets/img/banner/travel/01.png"
                    alt="decorative shape"
                  />
                  <div className="row justify-content-center">
                    <div className="col-lg-7 tp-slider-travel-ptb">
                      <div className="tp-slider-travel-wrapper text-center">
                        <span className="tp-slider-travel-subtitle text mb-20 p-relative">
                          <img
                            className="tp-slider-travel-plane p-absolute"
                            src="/assets/img/banner/travel/2.png"
                            alt="decorative accent"
                          />
                          {slide.subtitle}
                        </span>
                        <h2 className="tp-slider-travel-title text2 mb-50">{slide.title}</h2>
                        <div className="tp-slider-travel-btn d-flex justify-content-center">
                          <div className="tp-slider-travel-btn-2">
                            <a className="tp-btn tp-btn-care text3 mr-15" href="#brands">
                              {slide.primaryLabel}
                            </a>
                          </div>
                          <div className="tp-slider-travel-btn-3">
                            <a className="tp-btn tp-btn-care-2 text4" href="#contact">
                              {slide.secondaryLabel}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tp-slider-dot-8 d-sm-flex"></div>
      <div className="tp-slider-navigation-wrapper d-flex justify-content-between">
        <div className="tp-slider-navigation-next"><i className="fa-sharp fa-regular fa-arrow-right"></i></div>
        <div className="tp-slider-navigation-prev"><i className="fa-sharp fa-regular fa-arrow-left"></i></div>
      </div>
    </div>
  );
}
