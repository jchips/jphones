import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Carousel } from 'react-bootstrap';
import '../../styles/WidePhoneCarousel.scss'

class WidePhoneCarousel extends Component {
  render() {
    return (
      <div className='row wide-phone-carousel'>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-12 img-container">
          <LazyLoadImage className="img img-fluid" src={this.props.phone.img} alt={this.props.phone.name}/>
        </div>
        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-9 col-12'>
          <Carousel className="wide-carousel" interval={null} indicators={true} variant="dark">
            <Carousel.Item>
              <h2>{this.props.phone.name}</h2>
              <h5>{this.props.phone.brand}/{this.props.phone.os}</h5>
              <div className='phone-colors'>
                <p id="colors-title">Colors:</p>
                {this.props.phone.colors.map(color => 
                  <div style={{display: "flex"}}>
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
            <Carousel.Item>
              <h2>{this.props.phone.name}</h2>
            </Carousel.Item>
            <Carousel.Item>
              <h2>{this.props.phone.name}</h2>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default WidePhoneCarousel;
