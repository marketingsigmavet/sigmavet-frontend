import React from 'react';

export default function NetworkCoverageSection() {
  return (
    <div className="tp-visitors-area pt-140 pb-100 fix" id="network">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 mb-40 wow fadeInLeft" data-wow-duration=".9s" data-wow-delay=".2s">
            <div className="tp-about-content-health">
              <div className="tp-about-family-title mb-25">
                <h2 className="tp-section-title tp-section-title-dark-3 tp-split-in-left mb-25">
                  A Distribution Partner Built for Premium Pet Care Brands
                </h2>
                <p className="tp-section-title-para-visi mb-35">
                  Sigmavet combines market understanding, veterinary credibility and structured distribution to help
                  premium pet care brands grow with confidence in Sri Lanka.
                </p>
              </div>
              <div className="tp-about-list-wrapper mb-55">
                <div className="tp-about-list tp-visitors-list">
                  <ul>
                    <li>
                      <span><i className="flaticon-checked-1"></i></span>
                      <span className="tp-about-list-title">Strong presence across pet retail and veterinary channels</span>
                    </li>
                    <li>
                      <span><i className="flaticon-checked-1"></i></span>
                      <span className="tp-about-list-title">Focused on premium, science-led pet care</span>
                    </li>
                    <li>
                      <span><i className="flaticon-checked-1"></i></span>
                      <span className="tp-about-list-title">Reliable long-term partner relationships</span>
                    </li>
                    <li>
                      <span><i className="flaticon-checked-1"></i></span>
                      <span className="tp-about-list-title">Structured distribution for consistent growth</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tp-about-contact-wrapper">
                <div className="tp-about-contact-btn-family lineheight-1 mr-30">
                  <a className="tp-btn tp-btn-care-2" href="#contact">Partner With Us</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-40 wow fadeInRight" data-wow-duration=".9s" data-wow-delay=".2s">
            <div className="tp-visitors-thumb p-relative">
              <img className="tp-visitors-thumb-1" src="/assets/img/visitors/02.jpg" alt="Distribution network operations" />
              <img className="tp-visitors-thumb-2" src="/assets/img/visitors/01.jpg" alt="Veterinary and retail partnerships" />
              <img className="tp-visitors-thumb-3 p-absolute d-none d-sm-flex" src="/assets/img/visitors/01.png" alt="Decorative accent" />
              <img className="tp-visitors-thumb-4 tptranslateY2 p-absolute" src="/assets/img/visitors/02.png" alt="Decorative badge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
