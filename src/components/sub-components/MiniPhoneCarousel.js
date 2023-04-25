import React from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/MiniPhoneCarousel.scss"

class MiniPhoneCarousel extends React.Component {
  render() {
    console.log()
    return(
      <>
        <Carousel id={this.props.phone.id} interval={null} indicators={false} variant="dark">
          <Carousel.Item>
            <h2>{this.props.phone.name}</h2>
            <h5>{this.props.phone.Brand}/{this.props.phone.OS}</h5>
            <div class="img-container">
              <img
                src={this.props.phone.img}
                alt={this.props.phone.name}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <h2>slide 2</h2>
          </Carousel.Item>
          <Carousel.Item>
            <h2>slide 3</h2>
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
}

export default MiniPhoneCarousel;