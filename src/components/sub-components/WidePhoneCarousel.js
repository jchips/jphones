import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Carousel, ListGroup } from 'react-bootstrap';
import '../../styles/WidePhoneCarousel.scss'

class WidePhoneCarousel extends Component {
  render() {
    return (
      <div className='row wide-phone-carousel'>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-12 img-container">
          <LazyLoadImage className="img img-fluid" src={this.props.phone.img} alt={this.props.phone.name} />
        </div>
        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-9 col-12'>
          <Carousel className="wide-carousel" interval={null} indicators={true} variant="dark">

            {/* First page */}
            <Carousel.Item>
              <h2>{this.props.phone.name}</h2>
              <h5>{this.props.phone.brand}/{this.props.phone.os}</h5>
              <div className='phone-colors'>
                <p id="colors-title">Colors:</p>
                {this.props.phone.colors.map(color =>
                  <div style={{ display: "flex" }}>
                    <p>{color.color}</p>
                    <div className={`color ${color.tag}`} key={color.tag}></div>
                  </div>
                )}
              </div>
              <div className='prices'>
                <h3>Starting prices</h3>
                {this.props.phone.prices.map((price, index) =>
                  <p key={index}><span>{price.storage}: </span>{price.price}</p>
                )}
              </div>
              <h6>Released: {this.props.phone.released}</h6>
            </Carousel.Item>

            {/* Phone specs */}
            <Carousel.Item className='slide phone-specs-slide'>
              <h2>{this.props.phone.name}</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><p><span>UI: </span>{this.props.phone.ui}</p></ListGroup.Item>
                {!this.props.phone.foldable && (<ListGroup.Item><p><span>Size: </span>{this.props.phone.size}</p></ListGroup.Item>)}
                {this.props.phone.foldable && (<ListGroup.Item style={{padding: "5px"}}><p><span>Size: </span><span className="foldable">Unfolded: </span>{this.props.phone.openSize}<span className="foldable">, Folded: </span>{this.props.phone.closedSize}</p></ListGroup.Item>)}
                {/* {this.props.phone.foldable && (<ListGroup.Item style={{padding: "5px"}}><p><span>Closed size: </span>{this.props.phone.closedSize}</p></ListGroup.Item>)} */}
                {!this.props.phone.foldable && (<ListGroup.Item><p><span>Display: </span>{this.props.phone.display}</p></ListGroup.Item>)}
                {this.props.phone.foldable && (<ListGroup.Item style={{padding: "5px"}}><p><span>Open display: </span>{this.props.phone.openDisplay}</p></ListGroup.Item>)}
                {this.props.phone.foldable && (<ListGroup.Item style={{padding: "5px"}}><p><span>Closed display: </span>{this.props.phone.closedDisplay}</p></ListGroup.Item>)}
                <ListGroup.Item><p><span>Build: </span>{this.props.phone.build}</p></ListGroup.Item>
                <ListGroup.Item>
                  <p><span>Battery: </span>{this.props.phone.battery}</p>
                  <p><span>Charging: </span>{this.props.phone.charging}</p>
                </ListGroup.Item>
                <ListGroup.Item><p><span>Ram: </span>{this.props.phone.ram}</p></ListGroup.Item>
                <ListGroup.Item><p><span>Capacity: </span>{this.props.phone.capacity}</p></ListGroup.Item>
              </ListGroup>
            </Carousel.Item>

            {/* Features */}
            <Carousel.Item className='slide features-slide'>
              <h2>{this.props.phone.name}</h2>
              <h3>Features</h3>
              {/* <hr /> */}
              <div className="phones-features scrollable">
                <ul>
                  {this.props.phone.phoneFeatures.map((feature, index) =>
                    <li key={index}>{feature}</li>
                  )}
                </ul>
              </div>
              {/* <hr /> */}
            </Carousel.Item>

            <Carousel.Item className='slide cameras-slide'>
              <h2>{this.props.phone.name}</h2>
              <h3>Cameras</h3>
              <div id="rear-cameras" className="cameras">
                <h4>Rear Cameras:</h4>
                <p><span>Primary: </span>{this.props.phone.rearCameras.primary}</p>
                {this.props.phone.rearCameras.ultrawide && (
                  <p><span>Ultrawide: </span> {this.props.phone.rearCameras.ultrawide}</p>
                )}
                {this.props.phone.rearCameras.telephoto && (
                  <p><span>Telephoto: </span> {this.props.phone.rearCameras.telephoto}</p>
                )}
                {this.props.phone.rearCameras.periscope && (
                  <p><span>Periscope: </span> {this.props.phone.rearCameras.periscope}</p>
                )}
              </div>
              <div id="front-cameras" className="cameras">
                <h4>Front Camera(s):</h4>
                <p><span>Primary: </span>{this.props.phone.frontCameras}</p>
                {this.props.phone.frontCameras.ultrawide && (
                  <p><span>Ultrawide: </span> {this.props.phone.frontCameras.ultrawide}</p>
                )}
              </div>
            </Carousel.Item>

            <Carousel.Item className="slide camera-features">
              <h2>{this.props.phone.name}</h2>
              <h3>Cameras - Features</h3>
              {/* <hr/> */}
              <section className="scrollable">
                <ul>{this.props.phone.cameraFeatures.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
              </section>
              {/* <hr/> */}
            </Carousel.Item>

            {(this.props.phone.cameraPros || this.props.phone.cameraCons) && (
            <Carousel.Item className='slide camera-pros-cons'>
              <h2>{this.props.phone.name}</h2>
              <h3>Cameras - Pros & Cons</h3>
              {this.props.phone.cameraPros && (
                <section className="pros-and-cons-bubble">
                  <h4>Camera Pros:</h4>
                  <div className="scrollable">
                    <ul>{this.props.phone.cameraPros.map((pro, index) => <li key={index}>{pro}</li>)}</ul>
                  </div>
                </section>
              )}
              {this.props.phone.cameraCons && (
                <section className="pros-and-cons-bubble">
                  <h4>Camera Cons:</h4>
                  <div className="scrollable">
                    <ul>{this.props.phone.cameraCons.map((con, index) => <li key={index}>{con}</li>)}</ul>
                  </div>
                </section>
              )}
            </Carousel.Item>
            )}

            {/* Pros and Cons */}
          <Carousel.Item className="slide pros-and-cons-slide">
            <h2>{this.props.phone.name}</h2>
            <div className="pros-and-cons">
              <h3>Pros and Cons</h3>
              <section className="pros-and-cons-bubble">
                <h4>Pros</h4>
                <div className="scrollable">
                  <ul>{this.props.phone.pros.map((pro, index) => <li key={index}>{pro}</li>)}</ul>
                </div>
              </section>
              <section className="pros-and-cons-bubble">
                <h4>Cons</h4>
                <div className="scrollable">
                  <ul>{this.props.phone.cons.map((con, index) => <li key={index}>{con}</li>)}</ul>
                </div>
              </section>
            </div>
          </Carousel.Item>

          {/* Approbations */}
          {this.props.phone.approbations && (
            <Carousel.Item className='slide'>
              <h2>{this.props.phone.name}</h2>
              <h3>Approbations</h3>
              <section className="approbations">
                <ul>
                  {this.props.phone.approbations.map((approbation, index) =>
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
