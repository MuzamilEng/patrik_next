import Footer from '../Component/Footer';
import Header from '../Component/Header';
import Head from 'next/head';
import React from 'react'

const ProjectGrid = () => {
  return (
    <div>
      <>
        <Head>
          {/* <!-- JS VENDOR --> */}
        

          {/* <!-- sendmail --> */}
          {/* <script
            type="text/javascript"
            src="js/vendor/validator.min.js"
          ></script> */}
          {/* <script
            type="text/javascript"
            src="js/vendor/form-scripts.js"
          ></script> */}
          {/* <script
            type="text/javascript"
            src="js/vendor/owl.carousel.js"
          ></script> */}

          {/* <script
            type="text/javascript"
            src="https://maps.google.com/maps/api/js?sensor=false&#038;ver=4.1.5"
          ></script> */}

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
                <div className="title-page">Projects</div>
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Index</a>
                  </li>
                  <li className="active">Grid Layout</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <nav className="categories">
                  <ul className="portfolio_filter">
                    <li>
                      <a href="" className="active" data-filter="*">
                        all
                      </a>
                    </li>
                    <li>
                      <a href="" data-filter=".eco">
                        Buildings
                      </a>
                    </li>
                    <li>
                      <a href="" data-filter=".manufacturing">
                        Interior Design
                      </a>
                    </li>
                    <li>
                      <a href="" data-filter=".industry">
                        Isolation
                      </a>
                    </li>
                    <li>
                      <a href="" data-filter=".oil">
                        Flooring
                      </a>
                    </li>
                    <li>
                      <a href="" data-filter=".gas">
                        Renovation
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="row grid-services">
              <div className="col-sm-6 col-md-4 eco manufacturing gas">
                <div className="feature-box-7">
                  <div className="media">
                    <img
                      src="images/750x1000.jpg"
                      alt="rud"
                      className="img-responsive"
                    />
                  </div>
                  <div className="body">
                    <div className="info-box">
                      <div className="text">
                        <div className="title">Building Construction</div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry orem Ipsum has been.{" "}
                        </p>
                        <a href="project-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 manufacturing gas">
                <div className="feature-box-7">
                  <div className="media">
                    <img
                      src="images/750x1000.jpg"
                      alt="rud"
                      className="img-responsive"
                    />
                  </div>
                  <div className="body">
                    <div className="info-box">
                      <div className="text">
                        <div className="title">Architecture</div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry orem Ipsum has been.{" "}
                        </p>
                        <a href="project-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 industry factory">
                <div className="feature-box-7">
                  <div className="media">
                    <img
                      src="images/750x1000.jpg"
                      alt="rud"
                      className="img-responsive"
                    />
                  </div>
                  <div className="body">
                    <div className="info-box">
                      <div className="text">
                        <div className="title">Commercial Building</div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry orem Ipsum has been.{" "}
                        </p>
                        <a href="project-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 industry factory">
                <div className="feature-box-7">
                  <div className="media">
                    <img
                      src="images/750x1000.jpg"
                      alt="rud"
                      className="img-responsive"
                    />
                  </div>
                  <div className="body">
                    <div className="info-box">
                      <div className="text">
                        <div className="title">Inside Renovation</div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry orem Ipsum has been.{" "}
                        </p>
                        <a href="project-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 industry oil">
                <div className="feature-box-7">
                  <div className="media">
                    <img
                      src="images/750x1000.jpg"
                      alt="rud"
                      className="img-responsive"
                    />
                  </div>
                  <div className="body">
                    <div className="info-box">
                      <div className="text">
                        <div className="title">Luxury Apartments</div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry orem Ipsum has been.{" "}
                        </p>
                        <a href="project-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 eco">
                <div className="feature-box-7">
                  <div className="media">
                    <img
                      src="images/750x1000.jpg"
                      alt="rud"
                      className="img-responsive"
                    />
                  </div>
                  <div className="body">
                    <div className="info-box">
                      <div className="text">
                        <div className="title">Reverview Green Building</div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry orem Ipsum has been.{" "}
                        </p>
                        <a href="project-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 eco gas">
                <div className="feature-box-7">
                  <div className="media">
                    <img
                      src="images/750x1000.jpg"
                      alt="rud"
                      className="img-responsive"
                    />
                  </div>
                  <div className="body">
                    <div className="info-box">
                      <div className="text">
                        <div className="title">Apartment</div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry orem Ipsum has been.{" "}
                        </p>
                        <a href="project-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 eco">
                <div className="feature-box-7">
                  <div className="media">
                    <img
                      src="images/750x1000.jpg"
                      alt="rud"
                      className="img-responsive"
                    />
                  </div>
                  <div className="body">
                    <div className="info-box">
                      <div className="text">
                        <div className="title">Concrete Building</div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry orem Ipsum has been.{" "}
                        </p>
                        <a href="project-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 oil">
                <div className="feature-box-7">
                  <div className="media">
                    <img
                      src="images/750x1000.jpg"
                      alt="rud"
                      className="img-responsive"
                    />
                  </div>
                  <div className="body">
                    <div className="info-box">
                      <div className="text">
                        <div className="title">Architectural Design</div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry orem Ipsum has been.
                        </p>
                        <a href="project-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
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

export default ProjectGrid
