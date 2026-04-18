import React from 'react';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="tp-footer-area tp-footer-travel-bg pt-140">
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-4 mb-40">
              <div className="tp-footer-title-wraper">
                <h2 className="tp-footer-travel-title mb-30">Start a Conversation with Sigmavet</h2>
                <p className="tp-footer-travel-para mb-40">
                  Whether you are a pet store, veterinary clinic, job applicant or brand partner, our team is ready to connect.
                </p>
                <div className="tp-footer-tel-wrapper d-flex align-items-center">
                  <div className="tp-footer-tel-icon">
                    <span>
                      <i className="flaticon-telephone"></i>
                    </span>
                  </div>
                  <div className="tp-footer-tel-text">
                    <span>Talk to Our Team</span>
                    <a href="tel:+94XXXXXXXXX">+94 77777 3861</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-footer-travel-from">
                <form action="#">
                  <div className="row gx-20 mb-25">
                    <div className="col-lg-6">
                      <div className="tp-footer-travel-input form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="First Name" />
                        <label htmlFor="floatingInput">First Name</label>
                      </div>
                      <div className="tp-footer-travel-input form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput2" placeholder="Email Address" />
                        <label htmlFor="floatingInput2">Email Address</label>
                      </div>
                      <div className="tp-footer-travel-input form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput4" placeholder="Phone Number" />
                        <label htmlFor="floatingInput4">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tp-footer-travel-input form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput3" placeholder="Last Name" />
                        <label htmlFor="floatingInput3">Last Name</label>
                      </div>
                      <div className="tp-footer-travel-input form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput5" placeholder="Company / Organization" />
                        <label htmlFor="floatingInput5">Company / Organization</label>
                      </div>
                      <div className="tp-footer-travel-textarea form-floating">
                        <textarea className="form-control" placeholder="Message" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                        <label htmlFor="floatingTextarea2">Message</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-lg-7 mb-40">
                      <div className="tp-footer-travel-text">
                        <p className="tp-footer-travel-para">
                          By submitting this form, you agree to be contacted by Sigmavet regarding partnerships, business inquiries or relevant opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5 mb-40">
                      <div className="tp-footer-travel-button text-right">
                        <button className="tp-btn tp-btn-care" type="button">Send Inquiry</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="tp-footer-travel-menu-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-3 mb-20">
                <div className="tp-footer-travel-logo">
                  <img src="/assets/img/logo/logo-whte2.png" alt="Sigmavet logo" />
                </div>
              </div>
              <div className="col-lg-6 mb-20">
                <div className="tp-footer-travel-menu">
                  <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#brands">Brands</a></li>
                    <li><a href="#network">Network</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 mb-20">
                <div className="tp-footer-travel-social">
                  <a href="#"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-travel-copyright">
            <div className="row">
              <div className="col-lg-6 mb-20">
                <div className="tp-footer-travel-copyright-text">
                  <p className="tp-footer-travel-para-2 mb-0">© <span id="year"></span> Sigmavet.lk. All rights reserved.</p>
                </div>
              </div>
              <div className="col-lg-6 mb-20">
                <div className="tp-footer-travel-copyright-text text-right">
                  <a className="tp-footer-travel-para-2" href="#">Terms of Use</a>
                  <a className="tp-footer-travel-para-2 ml-40" href="#">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
