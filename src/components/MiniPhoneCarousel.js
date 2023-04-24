import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/MiniPhoneCarousel.scss"

class MiniPhoneCarousel extends React.Component {
  render() {
    return(
      <>
        {/* <div id={this.props.data.id} className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p>{this.props.data.Name}</p>
              <img src="#" className="d-block w-100" alt="not available"/>
            </div>
            <div className="carousel-item">
              <p>page 2</p>
            </div>
            <div className="carousel-item">
              <p>page 3</p>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${this.props.data.id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${this.props.data.id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        <Carousel id={this.props.phone.Tag} interval={null} indicators={false} variant="dark">
      <Carousel.Item>
        <h2>{this.props.phone.Name}</h2>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <h2>slide 2</h2>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <h2>slide 3</h2>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </>
    )
  }
}

export default MiniPhoneCarousel;