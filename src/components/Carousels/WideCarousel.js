import React, { Component, createRef } from 'react';
import { Carousel } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ExpandModal from '../ExpandModal/ExpandModal';
import checkHeight from '../../utils/checkHeight';
import { WideSpecs } from './CarouselItems/Specs';
import Display from './CarouselItems/Display';
import { CameraFeatures, Features } from './CarouselItems/Features';
import Cameras from './CarouselItems/Cameras';
import CameraProsCons from './CarouselItems/CameraProsCons';
import ProsAndCons from './CarouselItems/ProsAndCons';
import Approbations from './CarouselItems/Approbations';
import './WideCarousel.scss';

class WideCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      expandData: [],
      showExpandModal: false,
      expandedBubbleType: null,
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

  componentDidMount() {
    const allSlides = ['front', 'specs', 'display', 'features', 'cameras', 'camera-features', 'camera-pros-cons', 'pros-cons', 'approbations'];
    const eightSlidesIcons = ['front', 'specs', 'display', 'features', 'cameras', 'camera-features', 'pros-cons'];
    const noApprobationSlide = ['front', 'specs', 'display', 'features', 'cameras', 'camera-features', 'camera-pros-cons', 'pros-cons'];
    const noCameraTradeOffsSlide = ['front', 'specs', 'display', 'features', 'cameras', 'camera-features', 'pros-cons', 'approbations'];
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
      <div className='row wide-phone-carousel'>
        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-3 col-12 img__container'>
          <LazyLoadImage className='img img-fluid' src={phone.img} alt={phone.name} />
        </div>
        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-9 col-12'>
          <Carousel
            className='wide-carousel'
            interval={null}
            indicators={true}
            indicatorLabels={this.state.slides}
            variant='dark'
            touch={false}
            onSlide={this.enableExpand}>

            {/* First page */}
            <Carousel.Item>
              <h2>{phone.name}</h2>
              <h5>{phone.brand} / {phone.os}</h5>
              <div className='wide-first-slide'>
                <div className='phone-colors'>
                  <p id='colors-title'>Colors:</p>
                  {phone.colors.map(color =>
                    <div style={{ display: 'flex', alignItems: 'center' }} key={color.tag}>
                      <p>{color.color}</p>
                      <div className={`color ${color.tag}`} key={color.tag}></div>
                    </div>
                  )}
                </div>
                <div className='prices blue-text gray-bubble'>
                  <h3>Starting prices</h3>
                  {phone.prices.map((price, index) =>
                    <p key={index}><span>{price.storage}: </span>{price.price}</p>
                  )}
                </div>
                <h6>Released: {phone.released}</h6>
              </div>
            </Carousel.Item>

            {/* Phone specs */}
            <Carousel.Item className='wide-slide specs-slide blue-text'>
              <WideSpecs phone={phone} mmToggle={mmToggle} />
            </Carousel.Item>

            <Carousel.Item className='wide-slide'>
              <Display phone={phone} carouselType={'wide'} />
            </Carousel.Item>

            {/* Features */}
            <Carousel.Item className='wide-slide features-slide'>
              <Features phone={phone} carouselType={'wide'} />
            </Carousel.Item>

            {/* Cameras */}
            <Carousel.Item className='wide-slide cameras-slide blue-text'>
              <Cameras phone={phone} carouselType={'wide'} />
            </Carousel.Item>

            {/* Camera Features */}
            <Carousel.Item className='wide-slide camera-features'>
              <CameraFeatures phone={phone} carouselType={'wide'} />
            </Carousel.Item>

            {/* Camera pros and cons */}
            {/* Only displays if phone has either camera pros or camera cons. */}
            {(phone.cameraPros || phone.cameraCons) && (
              <Carousel.Item className='wide-slide camera-pros-cons'>
                <CameraProsCons
                  phone={phone}
                  handleExpand={this.handleExpand}
                  carouselType={'wide'}
                  ref={{
                    cameraProRef: this.cameraProRef,
                    cameraConRef: this.cameraConRef,
                    cameraProExpandBtn: this.cameraProExpandBtn,
                    cameraConExpandBtn: this.cameraConExpandBtn
                  }} />
              </Carousel.Item>
            )}

            {/* Pros and Cons */}
            <Carousel.Item className='wide-slide pros-and-cons-slide'>
              <ProsAndCons
                phone={phone}
                handleExpand={this.handleExpand}
                carouselType={'wide'}
                ref={{
                  proRef: this.proRef,
                  conRef: this.conRef,
                  proExpandBtn: this.proExpandBtn,
                  conExpandBtn: this.conExpandBtn
                }} />
            </Carousel.Item>

            {/* Approbations */}
            {phone.approbations && (
              <Carousel.Item className='wide-slide'>
                <Approbations phone={phone} carouselType={'wide'} />
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

export default WideCarousel;
