import React from 'react';

export default function NavBar() {
  return (
    <>
      <header className="tp-header-height">

        <div className="header-area-start">

          <div className="tp-header-top-care tp-travel-bg d-none d-lg-block pb-50">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-xl-9">
                  <div className="tp-header-care-top tp-header-travel-top">
                    <ul>
                      <li className="mr-60">
                        <a href="https://www.google.com/maps">
                          <i className="fa-sharp fa-regular fa-location-dot"></i> Kurunegala, Sri Lanka
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@sigmavet.lk">
                          <i className="fa-regular fa-envelope"></i> info@sigmavet.lk
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                  <div className="tp-header-social-icon tp-header-care-social tp-header-travel-social d-flex justify-content-end">
                    <span>Follow Us</span>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-bootom-area tp-header-menu-spacing tp-header-travel-menu" id="tp-header-sticky">
            <div className="container">
              <div className="row align-items-center tp-white-bg tp-travel-space">
                <div className="col-xxl-2 col-xl-2 col-6">
                  <div className="tp-logo">
                    <a href="index.html">
                      <img src="/assets/img/logo/logo-3.png" alt="Sigmavet logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 d-none d-xl-block">
                  <div className="tp-main-menu tp-main-menu-care tp-main-menu-travel">
                    <nav className="tp-main-menu-content">
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="brands.html">Brands</a>
                        </li>
                        <li>
                          <a href="network.html">Network</a>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">More</a>
                          <ul className="tp-submenu submenu">
                            <li><a href="marketing.html">Marketing</a></li>
                            <li><a href="blog.html">Insights</a></li>
                            <li><a href="careers.html">Careers</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-6">
                  <div className="tp-header-right-care tp-header-right-travel d-none d-xl-block">
                    <ul className="d-flex align-items-center justify-content-end">
                      <li>
                        <div className="tp-header-search-2 lineheight-1">
                          <button className="search-click-care search-click search-click-travel">
                            <i className="flaticon-search"></i>
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="tp-header-tel-care tp-header-tel-travel ml-30 d-flex align-items-center">
                          <div className="tp-header-tel-icon tp-header-tel-travels">
                            <span>
                              <i className="flaticon-telephone"></i>
                            </span>
                          </div>
                          <div className="tp-header-tel-text tp-header-tel-travels-text">
                            <span>Talk to Sigmavet</span>
                            <a href="tel:+94777773861">+94 77777 3861</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tp-main-menu-bar tp-menu-bar tp-header-hamburger-toogle tp-header-hamburger d-block d-xl-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="tpoffcanvas-area">
          <div className="tpoffcanvas">
            <div className="tpoffcanvas__close-btn">
              <button className="close-btn"><i className="fal fa-times"></i></button>
            </div>
            <div className="tpoffcanvas__logo">
              <a href="index.html">
                <img src="/assets/img/logo/sigma-logo.svg" alt="Sigmavet logo" />
              </a>
            </div>
            <div className="tp-main-menu-mobile d-xl-none"></div>
            <div className="tpoffcanvas-btn-1 mb-50">
              <a className="tpoffcanvas-btn" href="contact.html">PARTNER WITH US</a>
            </div>
            <div className="tpoffcanvas__contact-info">
              <div className="tpoffcanvas__contact-title">
                <h5>Contact us</h5>
              </div>
              <ul>
                <li>
                  <i className="fa-light fa-location-dot"></i>
                  <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
                    Kurunegala, Sri Lanka
                  </a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@sigmavet.lk"><span>info@sigmavet.lk</span></a>
                </li>
                <li>
                  <i className="flaticon-telephone"></i>
                  <a href="tel:+94XXXXXXXXX">+94 77777 3861</a>
                </li>
              </ul>
            </div>
            <div className="tpoffcanvas__social">
              <div className="social-icon">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="body-overlay"></div>

        <div className="tp-search-body-overlay"></div>
        <div className="tp-search-form-toggle">
          <div className="tp-search-close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="tp-search-form">
                  <form action="#">
                    <input type="text" placeholder="Search brands, articles or pages" required />
                    <div className="tp-search-form-icon">
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}