import React from 'react'
import Head from "next/head";


const Header = () => {
  return (
    <>
      {/* css */}
      <Head>
        
      </Head>
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
      <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/vendor/font-awesome.min.css" />
      <link rel="stylesheet" href="/css/vendor/owl.carousel.min.css" />
      <link rel="stylesheet" href="/css/vendor/owl.theme.default.min.css" />
      <link rel="stylesheet" href="/css/vendor/magnific-popup.css" />
      {/* head css files */}
      <div className="header header-1">
        {/* TOPBAR */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-md-6">
                <div className="topbar-left">
                  <div className="welcome-text">
                    We help the world growing since 1999
                  </div>
                </div>
              </div>
              <div className="col-sm-7 col-md-6">
                <div className="topbar-right">
                  <ul className="topbar-menu">
                    <li>
                      <a href="career.html" title="Career">
                        Career
                      </a>
                    </li>
                    <li>
                      <a href="contact-feedback.html" title="Give Feedback">
                        Give Feedback
                      </a>
                    </li>
                    <li>
                      <a href="Contact.html" title="Contact Us">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <ul className="topbar-sosmed">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-main">
          <div className="container container-nav">
            <div className="row">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="" />
                <img
                  src="images/logo-stiky.png"
                  alt=""
                  className="logo-stiky"
                />
              </a>

              <nav className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a
                      href="/"
                     
                    >
                      HOME <span className="caret"></span>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      ABOUT US <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/About"> COMPANY</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="/Services"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      SERVICES <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/Services">GENERAL CONTRACTING</a>
                      </li>
                      <li>
                        <a href="/Services">CONSTRUCTION CONSULTANT</a>
                      </li>
                      <li>
                        <a href="/Services">DESIGN AND BUILD</a>
                      </li>
                      <li>
                        <a href="services-2.html">HOUSE RENOVATIOn</a>
                      </li>
                      <li>
                        <a href="services-2.html">TILING AND PAINTING</a>
                      </li>
                      <li>
                        <a href="services-2.html">SPECIAL PROJECTS</a>
                      </li>
                      <li>
                        <a href="services-detail.html">SERVICES DETAIL</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      PAGES <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/Faq">FAQ</a>
                      </li>
                      <li>
                        <a href="pricing-table.html">PRICING TABLE</a>
                      </li>
                      <li>
                        <a href="404page.html">404 PAGE</a>
                      </li>
                      <li>
                        <a href="career.html">CAREER</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      PROJECTS <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/ProjectGrid">GRID LAYOUT</a>
                      </li>
                      <li>
                        <a href="/SingleProject">SINGLE PROJECT</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      NEWS <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="news-grid.html">GRID BAR</a>
                      </li>
                      <li>
                        <a href="news-sidebar.html">SIDEBAR</a>
                      </li>
                      <li>
                        <a href="news-detail.html">SINGLE NEWS</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      CONTACT <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/Contact">CONTACT US</a>
                      </li>
                      <li>
                        <a href="/Quote">GET A QUOTE</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
