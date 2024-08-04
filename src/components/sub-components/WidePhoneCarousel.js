import React, { Component, createRef } from 'react';
import { Carousel, ListGroup } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { HiOutlineArrowsExpand } from "react-icons/hi";
import parse from 'html-react-parser';
import ExpandModal from "../ExpandModal/ExpandModal";
import '../../styles/WidePhoneCarousel.scss';

class WidePhoneCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExpandModal: false,
      expandData: [],
      expandedBubbleType: null,
      slides: []
    }
    this.cameraProRef = createRef();
    this.cameraConRef = createRef();
    this.cameraProExpandBtn = createRef();
    this.cameraConExpandBtn = createRef();
    this.proRef = createRef();
    this.conRef = createRef();
    this.proExpandBtn = createRef();
    this.conExpandBtn = createRef();
    this.checkHeight = this.checkHeight.bind(this);
  }

  componentDidMount() {
    const allSlides = ["front", "specs", "features", "cameras", "camera-features", "camera-pros-cons", "pros-cons", "approbations"];
    const eightSlidesIcons = ["front", "specs", "features", "cameras", "camera-features", "pros-cons"];
    const noApprobationSlide = ["front", "specs", "features", "cameras", "camera-features", "camera-pros-cons", "pros-cons"];
    const noCameraTradeOffsSlide = ["front", "specs", "features", "cameras", "camera-features", "pros-cons", "approbations"];
    if (!this.props.phone.cameraPros && !this.props.phone.cameraCons) {
      this.setState({ slides: noCameraTradeOffsSlide });
    } else if (!this.props.phone.approbations) {
      this.setState({ slides: noApprobationSlide });
    } else if ((!this.props.phone.cameraPros && !this.props.phone.cameraCons) && !this.props.phone.approbations) {
      this.setState({ slides: eightSlidesIcons });
    } else {
      this.setState({ slides: allSlides });
    }
  }

  // Closes expand modal
  handleCloseExpand = () => {
    this.setState({ showExpandModal: false });
  }

  // Re-renders the page every carousel slide turn so that this.checkHeight() can update
  update = () => {
    this.setState({});
  }

  /**
   * Displays the expand modal so users can view the content easier.
   * @param {String} bubble - The type of bubble the focused element is (pro bubble, cons bubble...).
   * @param {Object[]} data - An array of text (pros or cons) that will be turned to li elements.
   */
  handleExpand = (bubble, data) => {
    this.setState({ expandData: data, showExpandModal: true, expandedBubbleType: bubble });
  }

  /**
   * Compares the scrollHeight (total height of element with scroll content added)
   * and clientHeight (height without counting scroll content). If the scrollHeight
   * is present, that means there's a scrollbar. If there's a scrollbar, set the visibility
   * of the expand button to 'visible' so users can expand the content.
   * @param {Element} ref - A reference to a pros or cons bubble on the page.
   * @param {Element} expandBtnRef - A reference to a expand button on the page.
   */
  checkHeight = (ref, expandBtnRef) => {
    if (ref && expandBtnRef) {
      if (ref.scrollHeight > ref.clientHeight) {
        expandBtnRef.style.visibility = 'visible';
      }
    }
  }

  render() {
    const { phone } = this.props;
    this.checkHeight(this.conRef.current, this.conExpandBtn.current);
    this.checkHeight(this.proRef.current, this.proExpandBtn.current);
    this.checkHeight(this.cameraProRef.current, this.cameraProExpandBtn.current);
    this.checkHeight(this.cameraConRef.current, this.cameraConExpandBtn.current);
    return (
      <div className='row wide-phone-carousel'>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-12 img-container">
          <LazyLoadImage className="img img-fluid" src={phone.img} alt={phone.name} />
        </div>
        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-9 col-12'>
          <Carousel className="wide-carousel" interval={null} indicators={true} indicatorLabels={this.state.slides} variant="dark" onSlide={this.update}>

            {/* First page */}
            <Carousel.Item>
              <h2>{phone.name}</h2>
              <h5>{phone.brand} / {phone.os}</h5>
              <div className='mobile-scrollable'>
                <div className='phone-colors'>
                  <p id="colors-title">Colors:</p>
                  {phone.colors.map(color =>
                    <div style={{ display: "flex", alignItems: "center" }} key={color.tag}>
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
                      <span className="foldable">Main: </span>{phone.openSize}
                      <span className="foldable">, Cover: </span>{phone.closedSize}
                    </p>
                  </ListGroup.Item>)}
                  {!phone.foldable && (<ListGroup.Item><p><span>Display: </span>{phone.display}</p></ListGroup.Item>)}
                  {phone.foldable && (<ListGroup.Item style={{ padding: "5px" }}><p><span>Main display: </span>{phone.openDisplay}</p></ListGroup.Item>)}
                  {phone.foldable && (<ListGroup.Item style={{ padding: "5px" }}><p><span>Cover display: </span>{phone.closedDisplay}</p></ListGroup.Item>)}
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
                    <div className='bubble-header'>
                      <h4>Camera Pros:</h4>
                      <div ref={this.cameraProExpandBtn} className="expand-btn-container">
                        <HiOutlineArrowsExpand className="expand-btn" onClick={() => this.handleExpand('camera pros', phone.cameraPros)} />
                      </div>
                    </div>
                    {/* If there are no camera cons, then make the scrollable div length longer */}
                    <div ref={this.cameraProRef} className={phone.cameraCons ? "scrollable" : "scrollable-long"}>
                      <ul>{phone.cameraPros.map((pro, index) => <li key={index}>{parse(pro)}</li>)}</ul>
                    </div>
                  </section>
                )}
                {phone.cameraCons && (
                  <section className="pros-and-cons-bubble">
                    <div className="bubble-header">
                      <h4>Camera Cons:</h4>
                      <div ref={this.cameraConExpandBtn} className="expand-btn-container">
                        <HiOutlineArrowsExpand className="expand-btn" onClick={() => this.handleExpand('camera cons', phone.cameraCons)} />
                      </div>
                    </div>
                    {/* If there are no camera pros, then make the scrollable div length longer */}
                    <div ref={this.cameraConRef} className={phone.cameraPros ? "scrollable" : "scrollable-long"}>
                      <ul>{phone.cameraCons.map((con, index) => <li key={index}>{parse(con)}</li>)}</ul>
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
                  <div className="bubble-header">
                    <h4>Pros</h4>
                    <div ref={this.proExpandBtn} className="expand-btn-container">
                      <HiOutlineArrowsExpand className="expand-btn" onClick={() => this.handleExpand('pros', phone.pros)} />
                    </div>
                  </div>
                  <div ref={this.proRef} className="scrollable">
                    <ul>{phone.pros.map((pro, index) => <li key={index}>{parse(pro)}</li>)}</ul>
                  </div>
                </section>
                <section className="pros-and-cons-bubble">
                  <div className='bubble-header'>
                    <h4>Cons</h4>
                    <div ref={this.conExpandBtn} className="expand-btn-container">
                      <HiOutlineArrowsExpand className="expand-btn" onClick={() => this.handleExpand('cons', phone.cons)} />
                    </div>
                  </div>
                  <div ref={this.conRef} className="scrollable">
                    <ul>{phone.cons.map((con, index) => <li key={index}>{parse(con)}</li>)}</ul>
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
                      <li key={index}>{parse(approbation)}</li>
                    )}
                  </ul>
                </section>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
        <ExpandModal
          expandData={this.state.expandData}
          bubble={this.state.expandedBubbleType}
          showExpandModal={this.state.showExpandModal}
          handleCloseExpand={this.handleCloseExpand} />
      </div>
    );
  }
}

export default WidePhoneCarousel;
