import Footer from '../Component/Footer';
import Header from '../Component/Header';
import Head from 'next/head';
import React from 'react'

const Quote = () => {
  return (
    <div>
      <>
        <Head>

          <script type="text/javascript" src="js/script.js"></script>
        </Head>
        {/* css */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Walls - Construction HTML Template</title>
        <meta
          name="description"
          content="Walls - Construction HTML Template. It is built using bootstrap 3.3.2 framework, works totally responsive, easy to customise, well commented codes and seo friendly."
        />
        <meta
          name="keywords"
          content="construction, industrial, development, manufacture, engineering, architecture, assembly, build, foundation, infrastructure"
        />
        <meta name="author" content="rudhisasmito.com" />

        <link rel="shortcut icon" href="images/favicon.ico" />
        <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="images/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="images/apple-touch-icon-114x114.png"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="css/vendor/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/vendor/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/vendor/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/vendor/owl.theme.default.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/vendor/magnific-popup.css"
        />
        <link rel="stylesheet" type="text/css" href="css/style.css" />

        <script
          type="text/javascript"
          src="js/vendor/modernizr.min.js"
        ></script>
        {/* css */}
        <div className="animationload">
          <div className="loader" />
        </div>
        <a href="#0" className="cd-top cd-is-visible cd-fade-out">
          Top
        </a>
        <Header />
        <div className="section banner-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="title-page">Contact Us</div>
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Index</a>
                  </li>
                  <li className="active">Get A Quote</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="section contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-3">
                <div className="widget download">
                  <a
                    href="#"
                    className="btn btn-secondary btn-block btn-sidebar"
                  >
                    <span className="fa  fa-file-pdf-o" /> Company Brochure
                  </a>
                </div>
                <div className="widget contact-info-sidebar">
                  <div className="widget-title">Contact Info</div>
                  <ul className="list-info">
                    <li>
                      <div className="info-icon">
                        <span className="fa fa-map-marker" />
                      </div>
                      <div className="info-text">
                        99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                      </div>{" "}
                    </li>
                    <li>
                      <div className="info-icon">
                        <span className="fa fa-phone" />
                      </div>
                      <div className="info-text">(0761) 654-123987</div>
                    </li>
                    <li>
                      <div className="info-icon">
                        <span className="fa fa-envelope" />
                      </div>
                      <div className="info-text">info@yoursite.com</div>
                    </li>
                    <li>
                      <div className="info-icon">
                        <span className="fa fa-clock-o" />
                      </div>
                      <div className="info-text">Mon - Sat 09:00 - 17:00</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-9 col-md-9">
                <div className="content">
                  <p className="section-heading-3">
                    Suspendisse est nunc mollis id elit ac efficitur rutrum
                    mauris. Pellentesque ut orci ac leo dictum viverra ac ac
                    turpis.
                  </p>
                  <div className="margin-bottom-30" />
                  <h3 className="section-heading-2">
                    I would like to discuss:
                  </h3>
                  <form
                    action="#"
                    className="form-contact"
                    id="contactForm"
                    data-toggle="validator"
                    noValidate={true}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="p_name"
                        placeholder="Full Name..."
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option>Mechanical Engineering</option>
                        <option>Oil and Lubricants</option>
                        <option>Chemical Research</option>
                        <option>Agricultural Processing</option>
                        <option>Power and Energy</option>
                        <option>Material Engineering</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="p_email"
                        placeholder="Enter Address..."
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="p_subject"
                        placeholder="Subject..."
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <textarea
                        id="p_message"
                        className="form-control"
                        rows={6}
                        placeholder="Write message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <div id="success" />
                      <button type="submit" className="btn btn-primary">
                        ASK A QUOTE
                      </button>
                    </div>
                  </form>
                  <div className="margin-bottom-50" />
                  <p>
                    <em>
                      Note: Consectetur adipisicing elit sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section info overlap-bottom">
          <div className="container">
            <div className="row gutter-20">
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-4">
                  <div className="icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="body-content">
                    <div className="heading">CALL US NOW</div>
                    Office: +62 800 9000 123 <br />
                    Mobile: +62 800 9000 123
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-4">
                  <div className="icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="body-content">
                    <div className="heading">COME VISIT US</div>
                    99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-4">
                  <div className="icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="body-content">
                    <div className="heading">SEND US A MESSAGE</div>
                    General: info@walls.com
                    <br />
                    Sales: sales@walls.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default Quote
