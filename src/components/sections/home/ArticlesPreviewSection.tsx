import React from 'react';

export default function ArticlesPreviewSection() {
  return (
    <div className="tp-team-area fix pt-140 pb-70" id="insights">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 pb-125 mb-70 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
            <div className="tp-team-travel-left p-relative ">
              <span className="tp-team-travel-bg"></span>
              <div className="tp-team-travel-title-wrapper mb-25">
                <h2 className="tp-section-title tp-section-title-dark-3 tp-split-in-left mb-25">
                  Trusted by Veterinary Professionals and Retail Partners
                </h2>
                <p className="tp-section-title-para-visi mb-35">
                  Our work is built on product quality, professional relationships and a long-term commitment to improving pet care standards.
                </p>
              </div>
              <div className="tp-team-travel-contact d-flex align-items-center">
                <span><i className="flaticon-message"></i></span>
                <div className="tp-team-travel-content">
                  <span>Talk to Our Team</span>
                  <a href="tel:+94XXXXXXXXX">+94 77777 3861</a>
                </div>
              </div>
              <div className="tp-team-travel-customer d-flex align-items-center">
                <span><i className="flaticon-trust"></i></span>
                <h5 className="tp-team-travel-title">Premium global brands with a growing islandwide presence.</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-20 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".2s">
            <div className="tp-team-travel-thumb-wrapper">
              <div className="row gx-4 align-items-center">
                <div className="col-4">
                  <div className="tp-team-travel-thumb">
                    <img className="tp-team-travel-img w-100 mb-20" src="/assets/img/team/travel/03.jpg" alt="Veterinary consultation" />
                    <img className="tp-team-travel-img w-100 mb-20" src="/assets/img/team/travel/05.jpg" alt="Retail partnership" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="tp-team-travel-thumb">
                    <img className="tp-team-travel-img w-100 mb-20" src="/assets/img/team/travel/01.jpg" alt="Premium pet care brand support" />
                    <img className="tp-team-travel-img w-100 mb-20" src="/assets/img/team/travel/04.jpg" alt="Scientific pet care" />
                    <img className="tp-team-travel-img w-100 mb-20" src="/assets/img/team/travel/07.jpg" alt="Partner engagement" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="tp-team-travel-thumb">
                    <img className="tp-team-travel-img w-100 mb-20" src="/assets/img/team/travel/02.jpg" alt="Pet wellness" />
                    <img className="tp-team-travel-img w-100 mb-20" src="/assets/img/team/travel/06.jpg" alt="Corporate collaboration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
