import React from "react";
import Head from "next/head";
import Header from "../Component/Header";

const index = () => {
  return (
    <>

        <Head>
          <script type="text/javascript" src="js/vendor/jquery.min.js"></script>
          <script
            type="text/javascript"
            src="js/vendor/bootstrap.min.js"
          ></script>
          <script
            type="text/javascript"
            src="js/vendor/jquery.superslides.js"
          ></script>
          <script
            type="text/javascript"
            src="js/vendor/owl.carousel.js"
          ></script>
          <script
            type="text/javascript"
            src="js/vendor/bootstrap-hover-dropdown.min.js"
          ></script>
          <script
            type="text/javascript"
            src="js/vendor/jquery.magnific-popup.min.js"
          ></script>
          <script type="text/javascript" src="js/vendor/easings.js"></script>
          <script
            type="text/javascript"
            src="js/vendor/isotope.pkgd.min.js"
          ></script>

          <script
            type="text/javascript"
            src="js/vendor/validator.min.js"
          ></script>
          <script
            type="text/javascript"
            src="js/vendor/form-scripts.js"
          ></script>

          {/* <script
            type="text/javascript"
            src="https://maps.google.com/maps/api/js?sensor=false&#038;ver=4.1.5"
          ></script> */}

          <script type="text/javascript" src="js/script.js"></script>
        </Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Athantic Oil - Leading Changes through innovation in Oil and Gas
        </title>
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
        <link rel="apple-touch-icon" sizes="72x72" href="images/slide-1.jpg" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="images/slide-2.jpg"
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
        <div className="animationload">
          <div className="loader" />
        </div>
        <a href="#0" className="cd-top cd-is-visible cd-fade-out">
          Top
        </a>
        <script
          type="text/javascript"
          src="js/vendor/modernizr.min.js"
        ></script>
        {/* body */}
        <div className="header header-1">
          <Header />
        </div>
        <div id="slides" className="section banner">
          <ul className="slides-container">
            <li>
              <img src="images/slide-3.jpg" alt="" />
              <div className="overlay-bg" />
              <div className="container">
                <div className="wrap-caption">
                  <h2 className="caption-heading">
                    We are the biggest company in the world
                  </h2>
                  <p className="excerpt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </p>
                  <a href="#" className="btn btn-primary" title="LEARN MORE">
                    LEARN MORE
                  </a>
                  <a href="#" className="btn btn-secondary" title="CONTACT US">
                    CONTACT US
                  </a>
                </div>
              </div>
            </li>
            <li>
              <img src="images/slide-1.jpg" alt="" />
              <div className="overlay-bg" />
              <div className="container">
                <div className="wrap-caption right">
                  <h2 className="caption-heading">
                    Providing Innovative Solution
                  </h2>
                  <p className="excerpt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </p>
                  <a href="#" className="btn btn-primary" title="LEARN MORE">
                    LEARN MORE
                  </a>
                  <a href="#" className="btn btn-secondary" title="CONTACT US">
                    CONTACT US
                  </a>
                </div>
              </div>
            </li>
            <li>
              <img src="images/slide-2.jpg" alt="" />
              <div className="overlay-bg" />
              <div className="container">
                <div className="wrap-caption center">
                  <h2 className="caption-heading">
                    Your Plug for Marine Services
                  </h2>
                  <p className="excerpt">
                    AOSL maintains a network of specialist sub- contractors,
                    partners and vendors which complement our own resources
                  </p>
                  <a href="#" className="btn btn-primary" title="LEARN MORE">
                    LEARN MORE
                  </a>
                  <a href="#" className="btn btn-secondary" title="CONTACT US">
                    CONTACT US
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <nav className="slides-navigation">
            <div className="container">
              <a href="#" className="next">
                <i className="fa fa-chevron-right" />
              </a>
              <a href="#" className="prev">
                <i className="fa fa-chevron-left" />
              </a>
            </div>
          </nav>
        </div>
        <div className="section feature">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="row overlap feature-gutter">
                  <div className="col-sm-4 col-md-4 border-right">
                    <div className="feature-box-8">
                      <div className="media">
                        <img
                          src="images/600x350.jpg"
                          alt="rud"
                          className="img-responsive"
                        />
                      </div>
                      <div className="body">
                        <a href="services-detail.html" className="title">
                          Marine
                        </a>
                        <p>
                          Athantic Oil is a wholly-owned Nigerian Company,
                          Offshore Construction, Fabrication and Installation
                          Services and Dredging Services to the Marine, oil and
                          gas industry.
                        </p>
                        <p>
                          Its fleet comprises of Fast Intervention Security
                          Vessels (FISVs), Platform Supply Vessels (PSVs) with
                          DP1&amp;2 capabilities, Anchor Handling Tug Supply
                          Vessels (AHTSVs), Offshore Construction Vessels and
                          Barges and Dredgers.
                        </p>
                        <p>
                          Athantic Oil is one of the few private maritime
                          security services companies that have a collaborative
                          relationship with the Nigerian Navy for the use of
                          armed naval personnel.
                        </p>
                        <a href="services-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4 border-right">
                    <div className="feature-box-8">
                      <div className="media">
                        <img
                          src="images/600x350.jpg"
                          alt="rud"
                          className="img-responsive"
                        />
                      </div>
                      <div className="body">
                        <a href="services-detail.html" className="title">
                          Pipeline
                        </a>
                        <p>
                          Athantic Oil Services limited is committed to getting
                          reliable pipeline construction, repairs, maintenance
                          and sectional replacement by using state of art
                          equipment and technology and well trained and
                          experienced personnel. Some of the services provided
                          are;
                        </p>
                        <ul>
                          <li>New Pipeline Construction</li>
                          <li>Pipeline repairs/Sectional Replacement</li>
                          <li>Pipeline Pigging Services</li>
                          <li>Pigging System Components</li>
                          <li>Pipeline Integrity</li>
                          <li>Procurement services</li>
                        </ul>
                        <a href="services-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="feature-box-8">
                      <div className="media">
                        <img
                          src="images/600x350.jpg"
                          alt="rud"
                          className="img-responsive"
                        />
                      </div>
                      <div className="body">
                        <a href="services-detail.html" className="title">
                          Procurement
                        </a>
                        <p>
                          With over 30 years of experience in the oil and gas
                          sector, we provide cutting edge procurement and supply
                          chain management service.
                        </p>
                        <p>
                          Our expertise lies in procurement, scheduling, cost
                          controlling, planning, assuring quality, field &amp;
                          third-party inspections and expediting services. Our
                          understanding in sourcing enhances the analysis,
                          negotiation and evaluation process for clients as well
                          as our suppliers. We source a variety of products for
                          the oil and gas industry including valves, drilling
                          equipment, pumps, MRO tools and safety products.
                        </p>
                        <a href="services-detail.html" className="readmore">
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="spacer-70" />
              <div className="col-sm-5 col-md-5">
                <div className="jumbo-heading">
                  <h2>OUR MARINE SERVICES </h2>
                </div>
                <p>
                  We supply vessels of different categories for customized
                  services. The vessels include:.
                </p>
                <ul>
                  <li>Survey Vessel</li>
                  <li>Terminal Operations Vessel</li>
                  <li>Safety Vessel</li>
                  <li>Diving support vessel (DSV)</li>
                  <li>Salvage Towing Vessel</li>
                  <li>Anchor handling Vessel</li>
                  <li>JACK UP BARGES</li>
                  <li>Construction purpose Vessel</li>
                  <li>Passenger / Crew Boats</li>
                </ul>
                <a className="btn btn-secondary">READ MORE</a>
                <div className="spacer-30" />
              </div>
              <div className="col-sm-7 col-md-7">
                <div className="about-img">
                  <div className="about-img-top">
                    <div className="hover-img">
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <div className="about-img-bottom">
                    <div className="hover-img">
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="spacer-70" />
            </div>
          </div>
        </div>
        <div className="section services">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2 className="section-heading center">SERVICES</h2>
              </div>
            </div>
            <div className="row list-services">
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-5">
                  <div className="icon">
                    <i className="rsi rsi-walls-1" />
                  </div>
                  <div className="body-content">
                    <h4 className="title">Pipeline Services</h4>
                    <div className="text">
                      Pipeline Design, Laying and Construction, Repair,
                      Maintenance, Pigging, ATHANTIC Pipeline System, Slickline
                      Services, Manpower Supply &amp; Temporary Staff Hiring.
                    </div>
                    <a href="services-detail.html" className="readmore">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-5">
                  <div className="icon">
                    <i className="rsi rsi-walls-13" />
                  </div>
                  <div className="body-content">
                    <h4 className="title">Asset Integrity Management</h4>
                    <div className="text">
                      Maintaining industrial assets to be safe, reliable and
                      efficient is essential to the management of any facility.
                    </div>
                    <a href="services-detail.html" className="readmore">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-5">
                  <div className="icon">
                    <i className="rsi rsi-walls-3" />
                  </div>
                  <div className="body-content">
                    <h4 className="title">Installation &amp; Maintenance</h4>
                    <div className="text">
                      General/Fabric Maintenance Electrical Installation,
                      Maintenance &amp; Materials Supply Valves, Pumps,
                      Industrial and Heavy Duty Equipment Wellhead and Xmas
                      Trees
                    </div>
                    <a href="services-detail.html" className="readmore">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-5">
                  <div className="icon">
                    <i className="rsi rsi-walls-10" />
                  </div>
                  <div className="body-content">
                    <h4 className="title">Surveillance Services</h4>
                    <div className="text">
                      Drone Technology, Unmanned Aerial Vehicle (UAV) Autonomous
                      Underwater Vehicle (AUV) Blue Ocean Monitoring Sand
                      Monitoring Underwater Inspection in Lieu of Dry Docking
                      (UWILD)
                    </div>
                    <a href="services-detail.html" className="readmore">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-5">
                  <div className="icon">
                    <i className="rsi rsi-walls-9" />
                  </div>
                  <div className="body-content">
                    <h4 className="title">Marine, Diving &amp; Underwater</h4>
                    <div className="text">
                      Supply, Installation and Maintenance of Marine Equipment
                      Marine Logistics Procurement Services Industrial, Heavy
                      Equipment and Tools Rental (Valves, Pumps, etc)
                    </div>
                    <a href="services-detail.html" className="readmore">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-5">
                  <div className="icon">
                    <i className="rsi rsi-walls-20" />
                  </div>
                  <div className="body-content">
                    <h4 className="title">Construction Services</h4>
                    <div className="text">
                      Electrical Engineering Installation/Upgrade of On-
                      /Offshore Production Facilities &amp; Platforms Process
                      Facilities
                    </div>
                    <a href="services-detail.html" className="readmore">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row list-services">
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-5">
                  <div className="icon">
                    <i className="rsi rsi-walls-1" />
                  </div>
                  <div className="body-content">
                    <h4 className="title">Well &amp; Surface Services</h4>
                    <div className="text">
                      Well Completion and Intervention, Well Integrity and
                      Abandonment Calibration Services, Oil and Gas Measurement/
                      Equipment Energy Services, Energy Saving Solution
                    </div>
                    <a href="services-detail.html" className="readmore">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="box-icon-5">
                  <div className="icon">
                    <i className="rsi rsi-walls-13" />
                  </div>
                  <div className="body-content">
                    <h4 className="title">Manufacturing Services</h4>
                    <div className="text">
                      Valves, Fire Rated Fiberglass/Glass, Reinforced Plastic
                      (GRP) Products, Rotating Equipment Parts, Engineering and
                      Fabrication Consultancy and Training Services
                    </div>
                    <a href="services-detail.html" className="readmore">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section project bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2 className="section-heading white">PROJECTS</h2>
              </div>
              <div className="clearfix" />
              <div id="caro-project">
                <div className="item">
                  <div className="feature-box-7">
                    <div className="media">
                      <img
                        src="images/pigging-1.png"
                        alt="rud"
                        className="img-responsive"
                      />
                    </div>
                    <div className="body">
                      <div className="info-box">
                        <div className="text">
                          <div className="title">Pipeline Pigging</div>
                          <p>Text here.</p>
                          <a href="project-detail.html" className="readmore">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feature-box-7">
                    <div className="media">
                      <img
                        src="images/pipe-1.png"
                        alt="rud"
                        className="img-responsive"
                      />
                    </div>
                    <div className="body">
                      <div className="info-box">
                        <div className="text">
                          <div className="title">Pipeline NDT</div>
                          <p>Text here.</p>
                          <a href="project-detail.html" className="readmore">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feature-box-7">
                    <div className="media">
                      <img
                        src="images/img-1.png"
                        alt="rud"
                        className="img-responsive"
                      />
                    </div>
                    <div className="body">
                      <div className="info-box">
                        <div className="text">
                          <div className="title">Gas Turbine Maintenance</div>
                          <p>Text here</p>
                          <a href="project-detail.html" className="readmore">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feature-box-7">
                    <div className="media">
                      <img
                        src="images/team-1.png"
                        alt="rud"
                        className="img-responsive"
                      />
                    </div>
                    <div className="body">
                      <div className="info-box">
                        <div className="text">
                          <div className="title">Project 4</div>
                          <p>Text here</p>
                          <a href="project-detail.html" className="readmore">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
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
                          <p>Text here</p>
                          <a href="project-detail.html" className="readmore">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
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
                          <div className="title">Project Name</div>
                          <p>Text here.</p>
                          <a href="project-detail.html" className="readmore">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
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
                          <div className="title">Project Name</div>
                          <p>Text here</p>
                          <a href="project-detail.html" className="readmore">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
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
                          <div className="title">Project name</div>
                          <p>text name</p>
                          <a href="project-detail.html" className="readmore">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
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
                          <div className="title">Project name</div>
                          <p>Text here</p>
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
        </div>
        <div className="section testimony">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <h2 className="section-heading">TESTIMONIALS</h2>
                  </div>
                </div>
                <div id="owl-testimony">
                  <div className="item">
                    <div className="testimonial-1">
                      <div className="media">
                        <img
                          src="images/600x600.jpg"
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <div className="body">
                        <div className="title">Paul Juwaal</div>
                        <div className="company">Gasman ltd</div>
                        <p>
                          "I have dealt with IDENT for many years and have had
                          no problems in the past with this company. They are
                          very pleasant to deal with and always take the time to
                          make sure things are done right. Turnaround time from
                          order to delivery is good.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-1">
                      <div className="media">
                        <img
                          src="images/600x600.jpg"
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <div className="body">
                        <div className="title">Debora Deandra</div>
                        <div className="company">Abc ltd</div>
                        <p>
                          "Always quick to respond and willing to go the extra
                          mile. It doesn't matter if it's an order of a thousand
                          or half a dozen, IDENT really cares about keeping
                          their customers happy and getting the product to them
                          on time."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-1">
                      <div className="media">
                        <img
                          src="images/600x600.jpg"
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <div className="body">
                        <div className="title">Steve Nuer</div>
                        <div className="company">Manufacture ltd</div>
                        <p>
                          "Excellent service and very pleasant to deal with.
                          They have custom tailored signage for our needs.
                          Thanks IDENT for your committed service.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-1">
                      <div className="media">
                        <img
                          src="images/600x600.jpg"
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <div className="body">
                        <div className="title">Robert Lav</div>
                        <div className="company">Gaspol ltd</div>
                        <p>
                          "Working with the AOSL team couldn’t be easier.
                          Design, price quotes, and delivery are handled
                          professionally and quickly. No matter how small my
                          order is, it is looked after and makes my life easier.
                          Great team that goes the extra mile in customer
                          service.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section cta">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="cta-1">
                  <div className="body-text">
                    <h3>
                      We’ll identify your needs and enhance your business
                      growth.
                    </h3>
                  </div>
                  <div className="body-action">
                    <a href="#" className="btn btn-secondary">
                      CONTACT US
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section stat-client">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 col-md-2">
                <div className="client-img">
                  <a href="https://themeforest.net/item/pro-soccer-football-club-template/14064275?ref=rudhisasmito">
                    <img
                      src="images/partners.png"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-2 col-md-2">
                <div className="client-img">
                  <a
                    href="https://themeforest.net/item/madass-music-industry-html-template/16015779?ref=rudhisasmito
"
                  >
                    <img
                      src="images/partners.png"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-2 col-md-2">
                <div className="client-img">
                  <a
                    href="https://themeforest.net/item/pestco-pest-control-template/16216536?ref=rudhisasmito
"
                  >
                    <img
                      src="images/partners.png"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-2 col-md-2">
                <div className="client-img">
                  <a
                    href="https://themeforest.net/item/insure-insurance-finance-business-html-template/19207917?ref=rudhisasmito
"
                  >
                    <img
                      src="images/partners.png"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-2 col-md-2">
                <div className="client-img">
                  <a
                    href="https://themeforest.net/item/petro-industrial-html-template/19846808?ref=rudhisasmito
"
                  >
                    <img
                      src="images/partners.png"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-2 col-md-2">
                <div className="client-img">
                  <a
                    href="https://themeforest.net/item/super-clean-cleaning-services-html-template/19947280?ref=rudhisasmito
"
                  >
                    <img
                      src="images/partners.png"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
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
        <div className="footer">
          <div className="fcopy">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <p className="ftex">© 2023 by PayMax - All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default index;
