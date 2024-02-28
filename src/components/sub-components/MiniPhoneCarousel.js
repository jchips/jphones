import React from "react";
import { createRef } from "react";
import { Carousel } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../styles/MiniPhoneCarousel.scss";

class MiniPhoneCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableSwipe: false
    }
  }
  inputRef = createRef();

  /**
   * Adds a vertical scrollbar to element when there are a lot of array items to be displayed.
   * TODO: Could probably make this more efficient
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

  /**
   * Disables touchscreen swipe ability only on the first slide of every carousel because of the
   * swiping going crazy while scrolling on mobile screens.
   * @param {Event} index - The index of whichever carousel slide the user is on.
   */
  enableSwipe = (index) => {
    if (index === 0) {
      this.setState({ enableSwipe: false });
    } else {
      this.setState({ enableSwipe: true });
    }
  }

  render() {
    const { phone } = this.props;
    return (
      <>
        <Carousel
          id={phone.id}
          className="mini-carousel"
          interval={null}
          indicators={true}
          variant="dark"
          touch={this.state.enableSwipe}
          onSlide={this.enableSwipe}
        >
          <Carousel.Item className="first-slide">
            <h2>{phone.name}</h2>
            <h5>{phone.brand} / {phone.os}</h5>
            <div className="img-container">
              <LazyLoadImage src={phone.img} alt={phone.name} />
            </div>
            <h6>{phone.released}</h6>
          </Carousel.Item>

          {/* Phone specs */}
          <Carousel.Item className="phone-specs-slide">
            <h3>Phone specs</h3>
            <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
            <div className="scrollable">
              <p><span>UI: </span>{phone.ui}</p><hr />
              {!phone.foldable && (<p><span>Size: </span>{phone.size}</p>)}
              {phone.foldable && (<p><span>Unfolded size: </span>{phone.openSize}</p>)}
              {phone.foldable && (<p><span>Folded size: </span>{phone.closedSize}</p>)}
              <p><span>Build: </span>{phone.build}</p><hr />
              <p><span>Battery: </span>{phone.battery}</p>
              <p><span>Charging: </span>{phone.charging}</p><hr />
              <p><span>Ram: </span>{phone.ram}</p><hr />
              <p><span>Capacity: </span>{phone.capacity}</p>
            </div>
          </Carousel.Item>

          {/* Colors & Display */}
          <Carousel.Item>
            <h3>Colors & Display</h3>
            <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
            {!phone.foldable && (
              <div className="display">
                <h4>Display</h4>
                <p>{phone.display}</p>
              </div>
            )}
            {/* Only display this for foldable phones */}
            {phone.foldable && (
              <div className="display">
                <h4>Display</h4>
                <p><span>Unfolded: </span>{phone.openDisplay}</p>
                <p><span>Folded: </span>{phone.closedDisplay}</p>
              </div>
            )}
            <div ref={this.inputRef} className="colors">
              <h4>Colors</h4>
              <ul>
                {phone.colors.map((phoneColor, index) =>
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
            <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
            <div className="phones-features scrollable">
              <ul>
                {phone.phoneFeatures.map((feature, index) =>
                  <li key={index}>{feature}</li>
                )}
              </ul>
            </div>
          </Carousel.Item>

          {/* Cameras */}
          <Carousel.Item className="cameras-slide">
            <h3>Cameras</h3>
            <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
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
          <Carousel.Item className="camera-features">
            <h3>Cameras - Features</h3>
            <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
            <section className="scrollable">
              <ul>{phone.cameraFeatures.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
            </section>
          </Carousel.Item>

          {/* Camera Pros anc Cons. */}
          {/* Only displays if phone has either camera pros or camera cons. */}
          {(phone.cameraPros || phone.cameraCons) && (
            <Carousel.Item className="camera-pros-cons">
              <h3>Cameras - Pros & Cons</h3>
              <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
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
          <Carousel.Item className="pros-and-cons-slide">
            <div className="pros-and-cons">
              <h3>Pros and Cons</h3>
              <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
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
            <Carousel.Item>
              <h3>Approbations</h3>
              <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
              <section className="approbations">
                <ul>
                  {phone.approbations.map((approbation, index) =>
                    <li key={index}>{approbation}</li>
                  )}
                </ul>
              </section>
            </Carousel.Item>
          )}

          {/* Prices */}
          <Carousel.Item className="prices-slide">
            <h3>Starting Prices</h3>
            <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
            <section className="prices">
              {phone.prices.map((prices, index) =>
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
  }
}

export default MiniPhoneCarousel;