import React, { Component } from 'react';
import { Carousel, ListGroup, OverlayTrigger, Popover } from 'react-bootstrap';
import parse from 'html-react-parser';

class BrandCarousel extends Component {
  render() {
    const { brand } = this.props;
    const popover = (
      <Popover id="popover-basic">
        <Popover.Body>
          <a href={brand.imgAbbr.source} target='_blank' rel='noreferrer'>{brand.imgAbbr.title}</a>
          {' '}by {brand.imgAbbr.author} is licensed by{' '}
          <a href={brand.imgAbbr.licenseLink} target='_blank' rel='noreferrer'>{brand.imgAbbr.license}</a>.
          <br /><span className='mods'>Modifications: {brand.imgAbbr.mods}</span>.
        </Popover.Body>
      </Popover>
    );
    return (
      <Carousel className='brand-carousel' interval={null} variant='dark'>
        <Carousel.Item className='brand-img text-center'>
          <img src={brand.img} alt={brand.name} />
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <section className='img-abbr'>
              <img src="https://img.icons8.com/fluency-systems-regular/48/777777/info--v1.png" alt="info--v1" />
              <p>Image attribution</p>
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
          <ListGroup variant='flush'>
            {brand.cameraFeatures.map(feature => (
              <ListGroup.Item key={feature}>{parse(feature)}</ListGroup.Item>
            ))}
          </ListGroup>
          {brand.cameraPros && (
            <div>
              <br />
              <h3>Camera Pros</h3>
              <ListGroup variant="flush">
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
              <ListGroup variant="flush">
                {brand.cameraCons.map(con => (
                  <ListGroup.Item key={con}>{parse(con)}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>)}
        </Carousel.Item>
        <Carousel.Item>
          <h3>Pros and Cons</h3>
          <div className='pros-and-cons'>
            {brand.pros && (<section className="pros-and-cons-bubble">
              <h4>Pros</h4>
              <div className="scrollable">
                <ul>
                  {brand.pros.map(pro => (
                    <li key={pro}>{parse(pro)}</li>
                  ))}
                </ul>
              </div>
            </section>)}
            {brand.cons && (<section className="pros-and-cons-bubble">
              <h4>Cons</h4>
              <div className="scrollable">
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
    );
  }
}

export default BrandCarousel;
