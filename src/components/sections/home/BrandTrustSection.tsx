import React from 'react';

export default function BrandTrustSection() {
  return (
    <div className="tp-about-area pt-140 pb-100 fix" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5 mb-40 wow fadeInLeft" data-wow-duration=".9s" data-wow-delay=".2s">
            <div className="tp-about-travel-left p-relative">
              <div className="tp-about-travel-thumb">
                <img className="tp-about-travel-img-1 w-100" src="/assets/img/about/travel/02.jpg" alt="Veterinary clinic care" />
                <img className="tp-about-travel-img w-100" src="/assets/img/about/travel/01.jpg" alt="Premium pet care consultation" />
              </div>
              <div className="tp-about-travel-shape p-absolute tptranslateY2">
                <div className="d-flex align-items-center">
                  <span className="tp-about-travel-icon"><img src="/assets/img/about/travel/qoute.svg" alt="quote" /></span>
                  <p>
                    Premium brands,<br /> trusted partnerships<br /> and long-term growth
                  </p>
                </div>
              </div>
              <div className="tp-about-travel-shape-2 p-absolute tptranslateY2 ">
                <div className="p-relative z-index-1 d-flex align-items-center">
                  <img className="tp-about-travel-shape-img p-absolute" src="/assets/img/about/travel/01.png" alt="decorative shape" />
                  <span className="tp-about-travel-icon2"><i className="flaticon-medal"></i></span>
                  <div className="tp-about-travel-shape-content">
                    <h4 className="tp-about-travel-year">
                      <span data-purecounter-duration="1" data-purecounter-end="35" className="purecounter"></span>+
                    </h4>
                    <span>Years of Industry Commitment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 mb-40 wow fadeInRight" data-wow-duration=".9s" data-wow-delay=".2s">
            <div className="tp-about-travel-content">
              <div className="tp-about-family-title mb-40">
                <span className="tp-section-title-pre-family tp-section-title-pre-travel section-title tp-split-in-right mb-10">
                  About Sigmavet
                </span>
                <h2 className="tp-section-title tp-section-title-dark-3 tp-split-in-left">
                  Elevating Pet Care Standards in Sri Lanka
                </h2>
              </div>
              <div className="tp-about-list tp-about-travel-list">
                <ul>
                  <li>
                    <span><i className="flaticon-checkmark"></i></span>
                    <p>
                      We represent internationally trusted pet care brands with a strong focus on quality,
                      science and long-term brand development.
                    </p>
                  </li>
                  <li>
                    <span><i className="flaticon-checkmark"></i></span>
                    <p>
                      Our distribution model supports pet stores, veterinary clinics and business partners across Sri Lanka with reliability and consistency.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="tp-about-progress-wrapper fix mb-50">
                <div className="tp-about-progress-title tp-about-progress-travel">Industry Commitment</div>
                <div className="tp-about-progress tp-about-travel-progress">
                  <div
                    className="progress-bar wow slideInLeft"
                    data-wow-duration="2s"
                    data-wow-delay=".1s"
                    role="progressbar"
                    style={{ width: '92%' }}
                    aria-valuenow={92}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="tp-about-counter">92%</span>
                  </div>
                </div>
              </div>
              <div className="tp-about-contact-wrapper d-flex align-items-center">
                <div className="tp-about-contact-btn-family lineheight-1 mr-50">
                  <a className="tp-btn tp-btn-care-2" href="#brands">Discover More</a>
                </div>
                <div className="tp-about-info-family d-flex align-items-center">
                  <div className="tp-about-info-thumb mr-20">
                    <img src="/assets/img/about/family/03.png" alt="Sigmavet support" />
                  </div>
                  <div className="tp-about-info-content-family">
                    <span>Talk to Sigmavet</span>
                    <a href="tel:+94XXXXXXXXX">+94 77777 3861</a>
                  </div>
                </div>
              </div>
              <p className="mt-30 mb-0 tp-section-title-para-visi">
                Sigmavet is building a stronger future for pet care in Sri Lanka by combining premium global products,
                professional distribution and trusted veterinary relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
