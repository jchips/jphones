import React, { Component, createRef } from 'react';
import { Carousel, ListGroup, OverlayTrigger, Popover } from 'react-bootstrap';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import parse from 'html-react-parser';
import ExpandModal from '../ExpandModal/ExpandModal';
import checkHeight from '../../utils/checkHeight';

class BrandCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExpandModal: false,
      expandData: [],
      expandedBubbleType: null,
      slides: ['front', 'features', 'cameras', 'pros-cons'],
    }
    this.proRef = createRef();
    this.conRef = createRef();
    this.proExpandBtn = createRef();
    this.conExpandBtn = createRef();
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
  }

  render() {
    const { brand } = this.props;
    const popover = (
      <Popover id='popover-basic'>
        <Popover.Body>
          <a href={brand.imgAttr.source} target='_blank' rel='noreferrer'>{brand.imgAttr.title}</a>
          {' '}by {brand.imgAttr.author} is licensed by{' '}
          <a href={brand.imgAttr.licenseLink} target='_blank' rel='noreferrer'>{brand.imgAttr.license}</a>.
          <br /><span className='mods'>Modifications: {brand.imgAttr.mods}</span>.
        </Popover.Body>
      </Popover>
    );
    return (
      <>
        <Carousel
          className='brand-carousel'
          interval={null}
          variant='dark'
          indicators={true}
          indicatorLabels={this.state.slides}
          onSlide={this.enableExpand}
        >
          <Carousel.Item className='brand-img text-center'>
            <img src={brand.img} alt={brand.name} />
            <OverlayTrigger trigger='click' placement='top' overlay={popover}>
              <section className='img-attr'>
                <img
                  src='https://img.icons8.com/fluency-systems-regular/48/777777/info--v1.png'
                  alt='info--v1'
                  title='image details'
                />
              </section>
            </OverlayTrigger>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Features</h3>
            <div className='brands-scrollable'>
              <ListGroup variant='flush'>
                {brand.phoneFeatures.map(feature => (
                  <ListGroup.Item key={feature}>{parse(feature)}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Camera Features</h3>
            <div className='brands-scrollable'>
              <ListGroup variant='flush'>
                {brand.cameraFeatures.map(feature => (
                  <ListGroup.Item key={feature}>{parse(feature)}</ListGroup.Item>
                ))}
              </ListGroup>
              {brand.cameraPros && (
                <div>
                  <br />
                  <h3>Camera Pros</h3>
                  <ListGroup variant='flush'>
                    {brand.cameraPros.map(pro => (
                      <ListGroup.Item key={pro}>{parse(pro)}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              )}
              {brand.cameraCons && (
                <div>
                  <br />
                  <h3>Camera Cons</h3>
                  <ListGroup variant='flush'>
                    {brand.cameraCons.map(con => (
                      <ListGroup.Item key={con}>{parse(con)}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>)}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Pros and Cons</h3>
            <div className='pros-and-cons'>
              {brand.pros && (<section className='pros-and-cons-bubble gray-bubble'>
                <div className='bubble-header'>
                  <h4>Pros</h4>
                  <div ref={this.proExpandBtn} className='expand-btn__container'>
                    <HiOutlineArrowsExpand className='expand-btn' onClick={() => this.handleExpand('pros', brand.pros)} />
                  </div>
                </div>
                <div ref={this.proRef} className='scrollable'>
                  <ul>
                    {brand.pros.map(pro => (
                      <li key={pro}>{parse(pro)}</li>
                    ))}
                  </ul>
                </div>
              </section>)}
              {brand.cons && (<section className='pros-and-cons-bubble gray-bubble'>
                <div className='bubble-header'>
                  <h4>Cons</h4>
                  <div ref={this.conExpandBtn} className='expand-btn__container'>
                    <HiOutlineArrowsExpand className='expand-btn' onClick={() => this.handleExpand('cons', brand.cons)} />
                  </div>
                </div>
                <div ref={this.conRef} className='scrollable'>
                  <ul>
                    {brand.cons.map(con => (
                      <li key={con}>{parse(con)}</li>
                    ))}
                  </ul>
                </div>
              </section>)}
            </div>
          </Carousel.Item>
        </Carousel>
        <ExpandModal
          expandData={this.state.expandData}
          bubble={this.state.expandedBubbleType}
          showExpandModal={this.state.showExpandModal}
          handleCloseExpand={this.handleCloseExpand}
        />
      </>
    );
  }
}

export default BrandCarousel;
