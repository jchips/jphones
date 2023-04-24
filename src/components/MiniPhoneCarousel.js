import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/MiniPhoneCarousel.scss"

class MiniPhoneCarousel extends React.Component {
  render() {
    return(
      <>
        <Carousel id={this.props.phone.Tag} interval={null} indicators={false} variant="dark">
          <Carousel.Item>
            <h2>{this.props.phone.Name}</h2>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
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