import React from 'react'

const Banner = () => {
  return (
    <>
    <div id="slides" class="section banner">
      <ul class="slides-container">
        <li>
          <img src="images/slide-3.jpg" alt="" />
          <div class="overlay-bg"></div>
          <div class="container">
            <div class="wrap-caption">
              <h2 class="caption-heading">
                We are the biggest company in the world
              </h2>
              <p class="excerpt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
              </p>
              <a href="#" class="btn btn-primary" title="LEARN MORE"
                >LEARN MORE</a
              >
              <a href="#" class="btn btn-secondary" title="CONTACT US"
                >CONTACT US</a
              >
            </div>
          </div>
        </li>
        <li>
          <img src="images/slide-1.jpg" alt="" />
          <div class="overlay-bg"></div>
          <div class="container">
            <div class="wrap-caption right">
              <h2 class="caption-heading">Providing Innovative Solution</h2>
              <p class="excerpt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
              </p>
              <a href="#" class="btn btn-primary" title="LEARN MORE"
                >LEARN MORE</a
              >
              <a href="#" class="btn btn-secondary" title="CONTACT US"
                >CONTACT US</a
              >
            </div>
          </div>
        </li>
        <li>
          <img src="images/slide-2.jpg" alt="" />
          <div class="overlay-bg"></div>
          <div class="container">
            <div class="wrap-caption center">
              <h2 class="caption-heading">Your Plug for Marine Services</h2>
              <p class="excerpt">
                AOSL maintains a network of specialist sub- contractors,
                partners and vendors which complement our own resources
              </p>
              <a href="#" class="btn btn-primary" title="LEARN MORE"
                >LEARN MORE</a
              >
              <a href="#" class="btn btn-secondary" title="CONTACT US"
                >CONTACT US</a
              >
            </div>
          </div>
        </li>
      </ul>

      <nav class="slides-navigation">
        <div class="container">
          <a href="#" class="next">
            <i class="fa fa-chevron-right"></i>
          </a>
          <a href="#" class="prev">
            <i class="fa fa-chevron-left"></i>
          </a>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Banner
