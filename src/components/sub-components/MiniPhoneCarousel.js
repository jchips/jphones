import React from "react";
import { createRef } from "react";
import { Carousel } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../styles/MiniPhoneCarousel.scss";

class MiniPhoneCarousel extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     disableSwipe: false
  //   }
  // }

  inputRef = createRef();
  // pros = createRef();
  // cons = createRef();

  /**
   * TODO: Could probably make this more efficient
   * Adds a vertical scrollbar to element when there are a lot of array items to be displayed.
   * @param {Object} data - Array of the data that needs to be scrolled. Ex: this.props.phone.colors
   * @param {Element} ref - Element to add scrollbar to.
   * @param {Number} num - Number of array items that can be displayed before the scrollbar appears
   * @param {String} height - The height of the element (needed to be able to add a scrollbar)
   */
  overFlow = (data, ref, num, height) => {
    if (data.length > num & !this.props.phone.foldable) {
      ref.current.style.overflowY = 'auto';
      ref.current.style.height = height;
    } else if (data.length > 4 & this.props.phone.foldable) {
      ref.current.style.overflowY = 'auto';
      ref.current.style.height = '140px';
    }
  }

  render() {
    return (
      <>
        <Carousel id={this.props.phone.id} className="mini-carousel" interval={null} indicators={true} variant="dark">
          <Carousel.Item className="first-slide" touch="false">
            <h2>{this.props.phone.name}</h2>
            <h5>{this.props.phone.brand}/{this.props.phone.os}</h5>
            <div className="img-container">
              {/* <img
                src={this.props.phone.img}
                alt={this.props.phone.name}
              /> */}
              <LazyLoadImage
                src={this.props.phone.img}
                alt={this.props.phone.name}
              />
            </div>
            <h6>{this.props.phone.released}</h6>
          </Carousel.Item>

          {/* Phone specs */}
          <Carousel.Item className="phone-specs-slide">
            <h3>Phone specs</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            <div className="scrollable">
              <p><span>UI: </span>{this.props.phone.ui}</p><hr />
              {!this.props.phone.foldable && (<p><span>Size: </span>{this.props.phone.size}</p>)}
              {this.props.phone.foldable && (<p><span>Open size: </span>{this.props.phone.openSize}</p>)}
              {this.props.phone.foldable && (<p><span>Closed size: </span>{this.props.phone.closedSize}</p>)}
              <p><span>Build: </span>{this.props.phone.build}</p><hr />
              <p><span>Battery: </span>{this.props.phone.battery}</p>
              <p><span>Charging: </span>{this.props.phone.charging}</p><hr />
              <p><span>Ram: </span>{this.props.phone.ram}</p><hr />
              <p><span>Capacity: </span>{this.props.phone.capacity}</p>
            </div>
          </Carousel.Item>

          {/* Colors & Display */}
          <Carousel.Item>
            <h3>Colors & Display</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            {!this.props.phone.foldable && (
              <div className="display">
                <h4>Display</h4>
                <p>{this.props.phone.display}</p>
              </div>
            )}
            {/* Only display this for foldable phones */}
            {this.props.phone.foldable && (
              <div className="display">
                <h4>Display</h4>
                <p><span>Open display: </span>{this.props.phone.openDisplay}</p>
                <p><span>Closed display: </span>{this.props.phone.closedDisplay}</p>
              </div>
            )}
            <div ref={this.inputRef} className="colors">
              <h4>Colors</h4>
              <ul>
                {this.props.phone.colors.map((phoneColor, index) =>
                  <div className="phone-color" key={index}>
                    {phoneColor.tag && (
                      <div className={`color ${phoneColor.tag}`}></div>
                    )}
                    <li>{phoneColor.color}</li>
                  </div>
                )}
              </ul>
            </div>
          </Carousel.Item>

          {/* Features */}
          <Carousel.Item className="features-slide">
            <h3>Features</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            <div className="phones-features scrollable">
              <ul>
                {this.props.phone.phoneFeatures.map((feature, index) =>
                  <li key={index}>{feature}</li>
                )}
              </ul>
            </div>
          </Carousel.Item>

          {/* Cameras */}
          <Carousel.Item className="cameras-slide">
            <h3>Cameras</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
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

          {/* Camera Features */}
          <Carousel.Item className="camera-features">
            <h3>Cameras - Features</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            <section className="scrollable">
              <ul>{this.props.phone.cameraFeatures.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
            </section>
          </Carousel.Item>

          {/* Camera Pros anc Cons */}
          {(this.props.phone.cameraPros || this.props.phone.cameraCons) && (
            <Carousel.Item className="camera-pros-cons">
              <h3>Cameras - Pros & Cons</h3>
              <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
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
          <Carousel.Item className="pros-and-cons-slide">
            <div className="pros-and-cons">
              <h3>Pros and Cons</h3>
              <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
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
            <Carousel.Item>
              <h3>Approbations</h3>
              <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
              <section className="approbations">
                <ul>
                  {this.props.phone.approbations.map((approbation, index) =>
                    <li key={index}>{approbation}</li>
                  )}
                </ul>
              </section>
            </Carousel.Item>
          )}

          {/* Prices */}
          <Carousel.Item className="prices-slide">
            <h3>Starting Prices</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            <section className="prices">
              {this.props.phone.prices.map((prices, index) =>
                <p key={index}><span>{prices.storage}: </span>{prices.price}</p>
              )}
            </section>
            <h6>All prices shown in USD</h6>
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
  componentDidMount() {
    this.overFlow(this.props.phone.colors, this.inputRef, 5, '175px');
    // this.overFlow(this.props.phone.pros, this.pros, 4, '150px');
    // this.overFlow(this.props.phone.cons, this.cons, 3, '125px'); // 125px
  }
}

export default MiniPhoneCarousel;