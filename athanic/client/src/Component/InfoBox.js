import React from 'react'

const InfoBox = () => {
  return (
    <>
        {/* <!-- INFO BOX --> */}
    <div class="section info overlap-bottom">
      <div class="container">
        <div class="row gutter-20">
          <div class="col-sm-4 col-md-4">
            {/* <!-- BOX 1 --> */}
            <div class="box-icon-4">
              <div class="icon"><i class="fa fa-phone"></i></div>
              <div class="body-content">
                <div class="heading">CALL US NOW</div>
                Office: +62 800 9000 123 <br />
                Mobile: +62 800 9000 123
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            {/* <!-- BOX 2 --> */}
            <div class="box-icon-4">
              <div class="icon"><i class="fa fa-map-marker"></i></div>
              <div class="body-content">
                <div class="heading">COME VISIT US</div>
                99 S.t Jomblo Park Pekanbaru 28292. Indonesia
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            {/* <!-- BOX 3 --> */}
            <div class="box-icon-4">
              <div class="icon"><i class="fa fa-envelope"></i></div>
              <div class="body-content">
                <div class="heading">SEND US A MESSAGE</div>
                General: info@walls.com<br />
                Sales: sales@walls.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default InfoBox
