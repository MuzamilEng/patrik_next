import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <!-- FOOTER SECTION --> */}
      <div className="footer">
        <div className="fcopy">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-3">
                <div className="footer-item">
                  <img
                    src="images/logo.png"
                    alt="logo bottom"
                    className="logo-bottom"
                  />
                  <p>
                    This template is a micro niche for business categories,
                    namely Walls - Construction HTML Template. there was an
                    excess of this template is using HTML/CSS.
                  </p>
                  <div className="footer-sosmed">
                    <a href="#" title="">
                      <div className="item">
                        <i className="fa fa-facebook" />
                      </div>
                    </a>
                    <a href="#" title="">
                      <div className="item">
                        <i className="fa fa-twitter" />
                      </div>
                    </a>
                    <a href="#" title="">
                      <div className="item">
                        <i className="fa fa-instagram" />
                      </div>
                    </a>
                    <a href="#" title="">
                      <div className="item">
                        <i className="fa fa-pinterest" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3">
                <div className="footer-item">
                  <div className="footer-title">Recent Post</div>
                  <ul className="recent-post">
                    <li>
                      <a href="#" title="">
                        The Best in dolor sit amet consectetur adipisicing elit
                        sed
                      </a>
                      <span className="date">
                        <i className="fa fa-clock-o" /> June 16, 2017
                      </span>
                    </li>
                    <li>
                      <a href="#" title="">
                        The Best in dolor sit amet consectetur adipisicing elit
                        sed
                      </a>
                      <span className="date">
                        <i className="fa fa-clock-o" /> June 16, 2017
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-md-3">
                <div className="footer-item">
                  <div className="footer-title">Our Services</div>
                  <ul className="list">
                    <li>
                      <a href="#" title="">
                        General Contracting
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Construction Consultant
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Special Projects
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        House Renovation
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Tiling And Painting
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Laminate Flooring
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-md-3">
                <div className="footer-item">
                  <div className="footer-title">Subscribe</div>
                  <p>
                    Lit sed The Best in dolor sit amet consectetur adipisicing
                    elit sedconsectetur adipisicing
                  </p>
                  <form action="#" className="footer-subscribe">
                    <input
                      type="email"
                      name="EMAIL"
                      className="form-control"
                      placeholder="enter your email"
                    />
                    <input id="p_submit" type="submit" defaultValue="send" />
                    <label htmlFor="p_submit">
                      <i className="fa fa-envelope" />
                    </label>
                    <p>Get latest updates and offers.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <p className="ftex">
                  &copy; 2023 by PayMax - All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
