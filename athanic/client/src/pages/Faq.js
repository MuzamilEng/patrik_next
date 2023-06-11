import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Head from 'next/head';
import React from 'react'

const Faq = () => {
  return (
    <div>
      <>
        <Head>
        
          <script
            type="text/javascript"
            src="js/vendor/form-scripts.js"
          ></script>
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
                <div className="title-page">Pages</div>
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Index</a>
                  </li>
                  <li className="active">FAQ</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="section faq">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-3">
                <div className="widget categories">
                  <div className="widget-title">Category</div>
                  <ul className="category-nav">
                    <li>
                      <a href="#">Heading Section 1</a>
                    </li>
                    <li>
                      <a href="#">Heading Section 2</a>
                    </li>
                    <li>
                      <a href="#">Heading Section 3</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-9 col-md-9">
                <p>
                  We provide the 5 star protection plan guarantees you stay safe
                  from pest without hassle. Saves your money. Mauris ultricies
                  et pede id potenti in nec mi elit rhoncus ligula mollis lacus
                  congue scelerisque magna. Ultrices risus elit lectus nunc
                  blandit quis magna enim ipsum nostra leo vestibulum quis nibh
                  arcu sed. Amet a sagittis fringilla massa vitae rhoncus a
                  magna curabitur in.
                </p>
                <div
                  className="panel-group panel-faq"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="spacer-50" />
                  <h4 className="title">Heading Section 1</h4>
                  <div className="panel panel-default">
                    <div
                      className="panel-heading active"
                      role="tab"
                      id="heading1"
                    >
                      <h4 className="panel-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                          className=""
                        >
                          Quisque dignissim vulputate purus in sodales?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="heading1"
                      aria-expanded="true"
                    >
                      <div className="panel-body">
                        <p>
                          Create and publilsh dynamic websites for desktop,
                          tablet, and mobile devices that meet the latest web
                          standards- without writing code. Design freely using
                          familiar tools and hundreds of web fonts. easily add
                          interactivity, including slide shows, forms, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading2">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          Nam porttitor aliquet eros bibendum blandit?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse2"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading2"
                      aria-expanded="false"
                      style={{ height: 0 }}
                    >
                      <div className="panel-body">
                        <p>
                          When you click "Buy" button you'll be directed to our
                          web store "Themeforest". You can purchase our template
                          there, and you will given permission to download our
                          templates.
                        </p>
                        <ul className="service-list">
                          <li>
                            <i className="fa fa-check" /> Ready for all devices.
                          </li>
                          <li>
                            <i className="fa fa-check" /> HTML template
                          </li>
                          <li>
                            <i className="fa fa-check" /> Made with Bootstrap
                            Framework.
                          </li>
                          <li>
                            <i className="fa fa-check" /> Easy Costumizable.
                          </li>
                          <li>
                            <i className="fa fa-check" /> Affordable Price.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading3">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          Nullam non vehicula neque. Vivamus sed consectetur
                          nunc. Proin eu tristique justo, id eleifend urna?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse3"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading3"
                      aria-expanded="false"
                      style={{ height: 0 }}
                    >
                      <div className="panel-body">
                        <p>
                          Unzip the file, locate muse file and double click the
                          file and you will directly to adobe muse. Next step
                          you can modifications our template, you can customize
                          color, text, font, content, logo and image with your
                          need using familiar tools on adobe muse without
                          writing any code.
                        </p>
                        <p>
                          You can't re-distribute the Item as stock, in a tool
                          or template, or with source files. You can't
                          re-distribute or make available the Item as-is or with
                          superficial modifications. These things are not
                          allowed even if the re-distribution is for Free.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading4">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          Quisque feugiat non justo id porta?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse4"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading4"
                      aria-expanded="false"
                      style={{ height: 0 }}
                    >
                      <div className="panel-body">
                        <p>
                          Open muse file, on the top bar adobe muse you will see
                          text tool. click and add web font do you want. Over
                          100+ typekit web font ready to use.
                        </p>
                        <p>
                          You just need open "asset" bar on the right side adobe
                          muse. Next right click on the image asset, then
                          "Relink" image asset with your image fit. All image
                          automatically change on tablet and phone too. it's
                          fast and simple. we make your life easier.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading5">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          Sit amet pulvinar metus est ut nisl?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse5"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading5"
                      aria-expanded="false"
                      style={{ height: 0 }}
                    >
                      <div className="panel-body">
                        <p>
                          You just need to selection the content you didn't
                          need, moving the content with cursor "up" or "down"
                          tool with the keyboards or you can set the the
                          transform on the top bar tool, with type X and Y do
                          you want to set. If you dont need the content, just
                          "Delete" it.
                        </p>
                        <p>
                          If you have pre-purchase questions, Support or want to
                          suggest us a new template or feature, please write
                          directly to
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-50" />
                  <h4 className="title">Heading Section 2</h4>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading6">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse6"
                          aria-expanded="true"
                          aria-controls="collapse1"
                          className=""
                        >
                          Quis luctus odio tortor vel dolor?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse6"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading6"
                      aria-expanded="true"
                    >
                      <div className="panel-body">
                        <p>
                          Create and publilsh dynamic websites for desktop,
                          tablet, and mobile devices that meet the latest web
                          standards- without writing code. Design freely using
                          familiar tools and hundreds of web fonts. easily add
                          interactivity, including slide shows, forms, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading7">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse7"
                          aria-expanded="true"
                          aria-controls="collapse7"
                          className=""
                        >
                          Phasellus vel ipsum diam in egestas blandit?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse7"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading7"
                      aria-expanded="true"
                    >
                      <div className="panel-body">
                        <p>
                          Create and publilsh dynamic websites for desktop,
                          tablet, and mobile devices that meet the latest web
                          standards- without writing code. Design freely using
                          familiar tools and hundreds of web fonts. easily add
                          interactivity, including slide shows, forms, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-50" />
                  <h4 className="title">Heading Section 3</h4>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading8">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse8"
                          aria-expanded="true"
                          aria-controls="collapse1"
                          className=""
                        >
                          Phasellus eget nisi id odio efficitur ultricies eu vel
                          arcu?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse8"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading8"
                      aria-expanded="true"
                    >
                      <div className="panel-body">
                        <p>
                          Create and publilsh dynamic websites for desktop,
                          tablet, and mobile devices that meet the latest web
                          standards- without writing code. Design freely using
                          familiar tools and hundreds of web fonts. easily add
                          interactivity, including slide shows, forms, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading9">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse9"
                          aria-expanded="true"
                          aria-controls="collapse7"
                          className=""
                        >
                          In eleifend luctus est sed porta?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse9"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading9"
                      aria-expanded="true"
                    >
                      <div className="panel-body">
                        <p>
                          Create and publilsh dynamic websites for desktop,
                          tablet, and mobile devices that meet the latest web
                          standards- without writing code. Design freely using
                          familiar tools and hundreds of web fonts. easily add
                          interactivity, including slide shows, forms, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading10">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse10"
                          aria-expanded="true"
                          aria-controls="collapse10"
                          className=""
                        >
                          Aenean imperdiet urna sit amet velit porttitor?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse10"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading10"
                      aria-expanded="true"
                    >
                      <div className="panel-body">
                        <p>
                          Create and publilsh dynamic websites for desktop,
                          tablet, and mobile devices that meet the latest web
                          standards- without writing code. Design freely using
                          familiar tools and hundreds of web fonts. easily add
                          interactivity, including slide shows, forms, and more.
                        </p>
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

export default Faq
