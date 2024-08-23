import React, { createRef } from 'react';
import { Carousel } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";
import checkHeight from '../../utils/checkHeight';
import ExpandModal from '../ExpandModal/ExpandModal';
import { Specs } from './CarouselItems/Specs';
import Display from './CarouselItems/Display';
import Build from './CarouselItems/Build';
import { CameraFeatures, Features } from './CarouselItems/Features';
import Cameras from './CarouselItems/Cameras';
import CameraProsCons from './CarouselItems/CameraProsCons';
import ProsAndCons from './CarouselItems/ProsAndConsItem';
import Approbations from './CarouselItems/Approbations';
import './Carousel.scss';
import './MiniCarousel.scss';

class MiniCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      expandData: [],
      showExpandModal: false,
      expandedBubbleType: null,
    }
    this.colorRef = createRef();
    this.cameraProRef = createRef();
    this.cameraConRef = createRef();
    this.cameraProExpandBtn = createRef();
    this.cameraConExpandBtn = createRef();
    this.proRef = createRef();
    this.conRef = createRef();
    this.proExpandBtn = createRef();
    this.conExpandBtn = createRef();
  }

  // happens once componented is mounted
  componentDidMount() {
    const allSlides = ["front", "specs", "display", "build", "features", "cameras", "camera-features", "camera-pros-cons", "pros-cons", "approbations", "price"];
    const eightSlidesIcons = ["front", "specs", "display", "build", "features", "cameras", "camera-features", "pros-cons", "price"];
    const noApprobationSlide = ["front", "specs", "display", "build", "features", "cameras", "camera-features", "camera-pros-cons", "pros-cons", "price"];
    const noCameraTradeOffsSlide = ["front", "specs", "display", "build", "features", "cameras", "camera-features", "pros-cons", "approbations", "price"];
    if (!this.props.phone.cameraPros && !this.props.phone.cameraCons && !this.props.phone.approbations) {
      this.setState({ slides: eightSlidesIcons });
    } else if (!this.props.phone.cameraPros && !this.props.phone.cameraCons) {
      this.setState({ slides: noCameraTradeOffsSlide });
    } else if (!this.props.phone.approbations) {
      this.setState({ slides: noApprobationSlide });
    } else {
      this.setState({ slides: allSlides });
    }
    this.overFlow(this.props.phone.colors, this.colorRef, 6, '187px'); // 5, '175px'
  }

  /**
   * Displays the expand modal so users can view the content easier.
   * @param {String} bubble - The type of bubble the focused element is (pro bubble, cons bubble...).
   * @param {Object[]} data - An array of text (pros or cons) that will be turned to li elements.
   */
  handleExpand = (bubble, data) => {
    this.setState({ expandData: data, showExpandModal: true, expandedBubbleType: bubble });
  }

  // Closes expand modal
  handleCloseExpand = () => {
    this.setState({ showExpandModal: false });
  }

  /**
   * Adds a vertical scrollbar to element when there are a lot of array items to be displayed.
   * TODO: Could probably make this more efficient
   * @param {Object[]} data - Array of the data that needs to be scrolled. Ex: this.props.phone.colors
   * @param {Element} ref - Element to add scrollbar to.
   * @param {Number} num - Number of array items that can be displayed before the scrollbar appears
   * @param {String} height - The height of the element (needed to be able to add a scrollbar)
   */
  overFlow = (data, ref, num, height) => {
    if (data.length > num) {
      ref.current.style.overflowY = 'auto';
      ref.current.style.height = height;
    }
  }

  // Makes the expand button appear if needed
  enableExpand = () => {
    checkHeight(this.conRef.current, this.conExpandBtn.current);
    checkHeight(this.proRef.current, this.proExpandBtn.current);
    checkHeight(this.cameraProRef.current, this.cameraProExpandBtn.current);
    checkHeight(this.cameraConRef.current, this.cameraConExpandBtn.current);
  }

  render() {
    const { phone, mmToggle } = this.props;
    return (
      <>
        <Carousel
          id={phone.id}
          className="mini-carousel"
          interval={null}
          indicators={true}
          indicatorLabels={this.state.slides}
          variant="dark"
          touch={false}
          onSlide={this.enableExpand}
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
          <Carousel.Item className="phone-specs-slide blue-text">
            <Specs phone={phone} mmToggle={mmToggle} />
          </Carousel.Item>

          {/* Colors & Display */}
          <Carousel.Item>
            <Display phone={phone} carouselType={'mini'} />
          </Carousel.Item>

          <Carousel.Item>
            <Build phone={phone} carouselType={'mini'} ref={this.colorRef} />
          </Carousel.Item>

          {/* Features */}
          <Carousel.Item className="features-slide">
            <Features phone={phone} carouselType={'mini'} />
          </Carousel.Item>

          {/* Cameras */}
          <Carousel.Item className="cameras-slide blue-text">
            <Cameras phone={phone} carouselType={'mini'} />
          </Carousel.Item>

          {/* Camera Features */}
          <Carousel.Item className="camera-features">
            <CameraFeatures phone={phone} carouselType={'mini'} />
          </Carousel.Item>

          {/* Camera Pros and Cons */}
          {/* Only displays if phone has either camera pros or camera cons. */}
          {(phone.cameraPros || phone.cameraCons) && (
            <Carousel.Item className='camera-pros-cons'>
              <CameraProsCons
                phone={phone}
                handleExpand={this.handleExpand}
                carouselType={'mini'}
                ref={{
                  cameraProRef: this.cameraProRef,
                  cameraConRef: this.cameraConRef,
                  cameraProExpandBtn: this.cameraProExpandBtn,
                  cameraConExpandBtn: this.cameraConExpandBtn
                }} />
            </Carousel.Item>
          )}

          {/* Pros and Cons */}
          <Carousel.Item className="pros-and-cons-slide">
            <ProsAndCons
              phone={phone}
              handleExpand={this.handleExpand}
              carouselType={'mini'}
              ref={{
                proRef: this.proRef,
                conRef: this.conRef,
                proExpandBtn: this.proExpandBtn,
                conExpandBtn: this.conExpandBtn
              }} />
          </Carousel.Item>

          {/* Approbations */}
          {phone.approbations && (
            <Carousel.Item>
              <Approbations phone={phone} carouselType={'mini'} />
            </Carousel.Item>
          )}

          {/* Prices */}
          <Carousel.Item className="prices-slide blue-text">
            <h3>Starting Prices</h3>
            <h6 className="phone-title">&mdash; {phone.name} &mdash;</h6>
            <section className="prices gray-bubble">
              {phone.prices.map((prices, index) =>
                <p key={index}><span>{prices.storage}: </span>{prices.price}</p>
              )}
            </section>
            <h6>All prices shown in USD</h6>
          </Carousel.Item>
        </Carousel>
        <ExpandModal
          expandData={this.state.expandData}
          bubble={this.state.expandedBubbleType}
          showExpandModal={this.state.showExpandModal}
          handleCloseExpand={this.handleCloseExpand} />
      </>
    )
  }
}

export default MiniCarousel;
