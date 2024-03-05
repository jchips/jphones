import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Carousel, ListGroup } from 'react-bootstrap';
import '../../styles/WidePhoneCarousel.scss'

class WidePhoneCarousel extends Component {
  render() {
    const { phone } = this.props;
    return (
      <div className='row wide-phone-carousel'>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-12 img-container">
          <LazyLoadImage className="img img-fluid" src={phone.img} alt={phone.name} />
        </div>
        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-9 col-12'>
          <Carousel className="wide-carousel" interval={null} indicators={true} variant="dark">

            {/* First page */}
            <Carousel.Item>
              <h2>{phone.name}</h2>
              <h5>{phone.brand} / {phone.os}</h5>
              <div className='mobile-scrollable'>
                <div className='phone-colors'>
                  <p id="colors-title">Colors:</p>
                  {phone.colors.map(color =>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>{color.color}</p>
                      <div className={`color ${color.tag}`} key={color.tag}></div>
                    </div>
                  )}
                </div>
                <div className='prices'>
                  <h3>Starting prices</h3>
                  {phone.prices.map((price, index) =>
                    <p key={index}><span>{price.storage}: </span>{price.price}</p>
                  )}
                </div>
                <h6>Released: {phone.released}</h6>
              </div>
            </Carousel.Item>

            {/* Phone specs */}
            <Carousel.Item className='slide phone-specs-slide'>
              <h2>{phone.name}</h2>
              <div className="mobile-scrollable">
                <ListGroup variant='flush'>
                  <ListGroup.Item><p><span>UI: </span>{phone.ui}</p></ListGroup.Item>
                  {!phone.foldable && (<ListGroup.Item><p><span>Size: </span>{phone.size}</p></ListGroup.Item>)}
                  {phone.foldable && (<ListGroup.Item style={{ padding: "5px" }}>
                    <p>
                      <span>Size: </span>
                      <span className="foldable">Unfolded: </span>{phone.openSize}
                      <span className="foldable">, Folded: </span>{phone.closedSize}
                    </p>
                  </ListGroup.Item>)}
                  {!phone.foldable && (<ListGroup.Item><p><span>Display: </span>{phone.display}</p></ListGroup.Item>)}
                  {phone.foldable && (<ListGroup.Item style={{ padding: "5px" }}><p><span>Unfolded display: </span>{phone.openDisplay}</p></ListGroup.Item>)}
                  {phone.foldable && (<ListGroup.Item style={{ padding: "5px" }}><p><span>Folded display: </span>{phone.closedDisplay}</p></ListGroup.Item>)}
                  <ListGroup.Item><p><span>Build: </span>{phone.build}</p></ListGroup.Item>
                  <ListGroup.Item>
                    <p><span>Battery: </span>{phone.battery}</p>
                    <p><span>Charging: </span>{phone.charging}</p>
                  </ListGroup.Item>
                  <ListGroup.Item><p><span>Ram: </span>{phone.ram}</p></ListGroup.Item>
                  <ListGroup.Item><p><span>Capacity: </span>{phone.capacity}</p></ListGroup.Item>
                </ListGroup>
              </div>
            </Carousel.Item>

            {/* Features */}
            <Carousel.Item className='slide features-slide'>
              <h2>{phone.name}</h2>
              <h3>Features</h3>
              <div className="phones-features scrollable">
                <ul>
                  {phone.phoneFeatures.map((feature, index) =>
                    <li key={index}>{feature}</li>
                  )}
                </ul>
              </div>
            </Carousel.Item>

            {/* Cameras */}
            <Carousel.Item className='slide cameras-slide'>
              <h2>{phone.name}</h2>
              <h3>Cameras</h3>
              <div id="rear-cameras" className="cameras">
                <h4>Rear Cameras:</h4>
                <p><span>Primary: </span>{phone.rearCameras.primary}</p>
                {phone.rearCameras.ultrawide && (
                  <p><span>Ultrawide: </span> {phone.rearCameras.ultrawide}</p>
                )}
                {phone.rearCameras.telephoto && (
                  <p><span>Telephoto: </span> {phone.rearCameras.telephoto}</p>
                )}
                {phone.rearCameras.periscope && (
                  <p><span>Periscope: </span> {phone.rearCameras.periscope}</p>
                )}
                {phone.rearCameras.macro && (
                  <p><span>Macro: </span> {phone.rearCameras.macro}</p>
                )}
                {phone.rearCameras.secondary && (
                  <p><span>Secondary: </span> {phone.rearCameras.secondary}</p>
                )}
              </div>
              <div id="front-cameras" className="cameras">
                <h4>Front Camera(s):</h4>
                <p><span>Primary: </span>{phone.frontCameras}</p>
                {phone.frontCameras.ultrawide && (
                  <p><span>Ultrawide: </span> {phone.frontCameras.ultrawide}</p>
                )}
              </div>
            </Carousel.Item>

            {/* Camera Features */}
            <Carousel.Item className="slide camera-features">
              <h2>{phone.name}</h2>
              <h3>Cameras - Features</h3>
              {/* <hr/> */}
              <section className="scrollable">
                <ul>{phone.cameraFeatures.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
              </section>
              {/* <hr/> */}
            </Carousel.Item>

            {/* Camera pros and cons */}
            {/* Only displays if phone has either camera pros or camera cons. */}
            {(phone.cameraPros || phone.cameraCons) && (
              <Carousel.Item className='slide camera-pros-cons'>
                <h2>{phone.name}</h2>
                <h3>Cameras - Pros & Cons</h3>
                {phone.cameraPros && (
                  <section className="pros-and-cons-bubble">
                    <h4>Camera Pros:</h4>
                    {/* If there are no camera cons, then make the scrollable div length longer */}
                    <div className={phone.cameraCons ? "scrollable" : "scrollable-long"}>
                      <ul>{phone.cameraPros.map((pro, index) => <li key={index}>{pro}</li>)}</ul>
                    </div>
                  </section>
                )}
                {phone.cameraCons && (
                  <section className="pros-and-cons-bubble">
                    <h4>Camera Cons:</h4>
                    {/* If there are no camera pros, then make the scrollable div length longer */}
                    <div className={phone.cameraPros ? "scrollable" : "scrollable-long"}>
                      <ul>{phone.cameraCons.map((con, index) => <li key={index}>{con}</li>)}</ul>
                    </div>
                  </section>
                )}
              </Carousel.Item>
            )}

            {/* Pros and Cons */}
            <Carousel.Item className="slide pros-and-cons-slide">
              <h2>{phone.name}</h2>
              <div className="pros-and-cons">
                <h3>Pros and Cons</h3>
                <section className="pros-and-cons-bubble">
                  <h4>Pros</h4>
                  <div className="scrollable">
                    <ul>{phone.pros.map((pro, index) => <li key={index}>{pro}</li>)}</ul>
                  </div>
                </section>
                <section className="pros-and-cons-bubble">
                  <h4>Cons</h4>
                  <div className="scrollable">
                    <ul>{phone.cons.map((con, index) => <li key={index}>{con}</li>)}</ul>
                  </div>
                </section>
              </div>
            </Carousel.Item>

            {/* Approbations */}
            {phone.approbations && (
              <Carousel.Item className='slide'>
                <h2>{phone.name}</h2>
                <h3>Approbations</h3>
                <section className="approbations">
                  <ul>
                    {phone.approbations.map((approbation, index) =>
                      <li key={index}>{approbation}</li>
                    )}
                  </ul>
                </section>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default WidePhoneCarousel;
