import React, { createRef } from 'react';
import { Carousel } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import checkHeight from '../../utils/checkHeight';
import { useFitText } from '../../utils/useFixText';
import ExpandModal from '../Modals/ExpandModal/ExpandModal';
import { Specs } from './CarouselItems/Specs';
import Display from './CarouselItems/Display';
import Build from './CarouselItems/Build';
import { CameraFeatures, Features } from './CarouselItems/Features';
import Cameras from './CarouselItems/Cameras';
import CameraProsCons from './CarouselItems/CameraProsCons';
import ProsAndCons from './CarouselItems/ProsAndCons';
import Approbations from './CarouselItems/Approbations';
import './Carousel.scss';
import './MiniCarousel.scss';
import './carousel-indicators.scss';

class MiniCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      expandData: [],
      showExpandModal: false,
      expandedBubbleType: null,
      theme: 'light'
    }
    this.cameraProRef = createRef();
    this.cameraConRef = createRef();
    this.cameraProExpandBtn = createRef();
    this.cameraConExpandBtn = createRef();
    this.proRef = createRef();
    this.conRef = createRef();
    this.proExpandBtn = createRef();
    this.conExpandBtn = createRef();
  }

  setTheme = (getTheme) => {
    this.setState({ theme: getTheme.matches ? 'light' : 'dark' }) // set carousel indicator color
  }

  componentDidMount() {
    const allSlides = ['front', 'specs', 'display', 'build', 'features', 'cameras', 'camera-features', 'camera-pros-cons', 'pros-cons', 'approbations', 'price'];
    const eightSlidesIcons = ['front', 'specs', 'display', 'build', 'features', 'cameras', 'camera-features', 'pros-cons', 'price'];
    const noApprobationSlide = ['front', 'specs', 'display', 'build', 'features', 'cameras', 'camera-features', 'camera-pros-cons', 'pros-cons', 'price'];
    const noCameraTradeOffsSlide = ['front', 'specs', 'display', 'build', 'features', 'cameras', 'camera-features', 'pros-cons', 'approbations', 'price'];
    if (!this.props.phone.cameraPros && !this.props.phone.cameraCons && !this.props.phone.approbations) {
      this.setState({ slides: eightSlidesIcons });
    } else if (!this.props.phone.cameraPros && !this.props.phone.cameraCons) {
      this.setState({ slides: noCameraTradeOffsSlide });
    } else if (!this.props.phone.approbations) {
      this.setState({ slides: noApprobationSlide });
    } else {
      this.setState({ slides: allSlides });
    }

    // Fetch color scheme for carousel indicators
    const getTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.setTheme(getTheme);
    getTheme.addEventListener('change', () => this.setTheme(getTheme)); // watch for changes
    return () => getTheme.removeEventListener('change', () => this.setTheme(getTheme));
  }

  /**
   * Displays the expand modal so users can view the content easier.
   * @param {String} bubbleType - The type of bubble the focused element is (pro bubble, cons bubble...).
   * @param {Object[]} data - An array of text (pros or cons) that will be turned to li elements.
   */
  handleExpand = (bubbleType, data) => {
    this.setState({ expandData: data, showExpandModal: true, expandedBubbleType: bubbleType });
  }

  // Closes expand modal
  handleCloseExpand = () => {
    this.setState({ showExpandModal: false });
  }

  // Makes the expand button appear if needed
  enableExpand = () => {
    checkHeight(this.conRef.current, this.conExpandBtn.current);
    checkHeight(this.proRef.current, this.proExpandBtn.current);
    checkHeight(this.cameraProRef.current, this.cameraProExpandBtn.current);
    checkHeight(this.cameraConRef.current, this.cameraConExpandBtn.current);
  }

  FitTextWrapper = ({ children, maxFontSize, minFontSize, style }) => {
    const { ref, fontSize } = useFitText({ maxFontSize, minFontSize });
    return (
      <h2
        ref={ref}
        style={{
          ...style,
          fontSize,
          whiteSpace: "nowrap",
          overflow: "hidden",
          transition: "font-size 0.1s ease-out",
        }}
      >
        {children}
      </h2>
    );
  }

  render() {
    const { phone, mmToggle } = this.props;
    return (
      <>
        <Carousel
          id={phone.id}
          className='carousel--mini'
          interval={null}
          indicators={true}
          indicatorLabels={this.state.slides}
          variant={this.state.theme}
          touch={false}
          onSlide={this.enableExpand}
        >
          <Carousel.Item className='first-slide'>
            <div className='scrollable'>
              <this.FitTextWrapper>{phone.name}</this.FitTextWrapper> {/* dynamic header */}
              <h5>{phone.brand} / {phone.os}</h5>
              <div className='img__container'>
                <LazyLoadImage src={phone.img} alt={phone.name} />
              </div>
              <h6>{phone.released}</h6>
            </div>
          </Carousel.Item>

          {/* Phone specs */}
          <Carousel.Item className='specs-slide surface-text--rg--blue'>
            <Specs phone={phone} mmToggle={mmToggle} />
          </Carousel.Item>

          {/* Colors & Display */}
          <Carousel.Item className='display-slide'>
            <Display phone={phone} carouselType={'mini'} />
          </Carousel.Item>

          <Carousel.Item>
            <Build phone={phone} carouselType={'mini'} />
          </Carousel.Item>

          {/* Features */}
          <Carousel.Item className='features-slide'>
            <Features phone={phone} carouselType={'mini'} />
          </Carousel.Item>

          {/* Cameras */}
          <Carousel.Item className='cameras-slide surface-text--rg--blue'>
            <Cameras phone={phone} carouselType={'mini'} />
          </Carousel.Item>

          {/* Camera Features */}
          <Carousel.Item className='camera-features-slide'>
            <CameraFeatures phone={phone} carouselType={'mini'} />
          </Carousel.Item>

          {/* Camera Pros and Cons */}
          {/* Only displays if phone has either camera pros or camera cons. */}
          {(phone.cameraPros || phone.cameraCons) && (
            <Carousel.Item className='camera-pc-slide'>
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
          <Carousel.Item className='pros-and-cons-slide'>
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
          <Carousel.Item className='prices-slide surface-text--rg--blue'>
            <h3>Starting Prices</h3>
            <h6 className='phone-title-text'>&mdash; {phone.name} &mdash;</h6>
            <section className='prices__container surface'>
              {phone.prices.map((prices, index) =>
                <p key={index}><span>{prices.storage}: </span>{prices.price}</p>
              )}
            </section>
            <h6>All prices shown in USD</h6>
            {phone.buyLink && <a href={phone.buyLink} target='_blank' rel='noreferrer' className='btn'>Buy now</a>}
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
