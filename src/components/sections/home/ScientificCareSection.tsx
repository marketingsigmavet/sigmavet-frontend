import React from 'react';

const cards = [
  {
    image: '/assets/img/service/travel/01.jpg',
    icon: 'flaticon-field-trip',
    title: 'Brand Distribution',
    description:
      'We manage the market presence of premium pet care brands through structured distribution and strong retail and veterinary partnerships.',
  },
  {
    image: '/assets/img/service/travel/02.jpg',
    icon: 'flaticon-health-insurance-2',
    title: 'Veterinary Channel Development',
    description:
      'We work closely with veterinary professionals to support trusted, science-led pet care solutions.',
  },
  {
    image: '/assets/img/service/travel/03.jpg',
    icon: 'flaticon-home-insurance',
    title: 'Retail Partner Growth',
    description:
      'We help pet stores grow through reliable supply, strong brand support and premium product portfolios.',
  },
  {
    image: '/assets/img/service/travel/04.jpg',
    icon: 'flaticon-health-insurance-2',
    title: 'Marketing & Activations',
    description:
      'We create demand through digital campaigns, trade collaborations and brand activations.',
  },
];

export default function ScientificCareSection() {
  return (
    <div className="tp-service-area pt-135 pb-140 fix bg-position" data-background="assets/img/service/travel/bg.jpg" id="marketing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-about-family-title text-center mb-60">
              <span className="tp-section-title-pre-family tp-section-title-pre-travel section-title tp-split-in-right mb-10">
                What We Offer
              </span>
              <h2 className="tp-section-title tp-section-title-dark-3 tp-split-in-left">
                Specialized Capabilities for Premium Pet Care Growth
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="swiper-container tp-service-travel-slider">
              <div className="swiper-wrapper">
                {cards.map((card, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="tp-service-travel-card">
                      <div className="row gx-0 align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="tp-service-travel-thumb">
                            <img className="w-100" src={card.image} alt={card.title} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="tp-service-travel-content">
                            <span className="tp-service-travel-icon mb-30"><i className={card.icon}></i></span>
                            <h4 className="tp-service-travel-title mb-15"><a href="#contact">{card.title}</a></h4>
                            <p className="mb-25">{card.description}</p>
                            <a href="#contact">Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
