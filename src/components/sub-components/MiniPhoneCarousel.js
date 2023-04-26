import React from "react";
import { createRef } from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/MiniPhoneCarousel.scss"

class MiniPhoneCarousel extends React.Component {
  inputRef = createRef();
  overFlow = () => {
    console.log('inputRef', this.inputRef.current);
    if (this.props.phone.colors.length > 5) {
      this.inputRef.current.style.overflowY = 'auto';
      this.inputRef.current.style.height = "165px";
    }
  }
  render() {
    console.log()
    return(
      <>
        <Carousel id={this.props.phone.id} interval={null} indicators={true} variant="dark">
          <Carousel.Item className="first-slide">
            <h2>{this.props.phone.name}</h2>
            <h5>{this.props.phone.brand}/{this.props.phone.os}</h5>
            <div class="img-container">
              <img
                src={this.props.phone.img}
                alt={this.props.phone.name}
              />
            </div>
            {/* <p className="released">{this.props.phone.released}</p> */}
            <h6>{this.props.phone.released}</h6>
          </Carousel.Item>
          <Carousel.Item className="phone-specs-slide">
            <h3>Phone specs</h3>
            <p><span>UI: </span>{this.props.phone.ui}</p><hr/>
            <p><span>Size: </span>{this.props.phone.size}</p>
            <p><span>Build: </span>{this.props.phone.build}</p><hr/>
            <p><span>Battery: </span>{this.props.phone.battery}</p>
            <p><span>Charging: </span>{this.props.phone.charging}</p><hr/>
            <p><span>Ram: </span>{this.props.phone.ram}</p><hr/>
            <p><span>Capacity: </span>{this.props.phone.capacity}</p>
          </Carousel.Item>
          <Carousel.Item>
            <h2>Colors & Display</h2>
            <div className="display">
              <h4>Display</h4>
              <p>{this.props.phone.display}</p>
            </div>
            <div ref={this.inputRef} className="colors">
              {/* {this.props.phone.colors.length > 5 && this.overFlow()} */}
              <h4>Colors</h4>
              <ul>
                {this.props.phone.colors.map((phoneColor, index) =>
                  <div className="phone-color" key={index}>
                    {phoneColor.tag && (
                      <div className={`color ${phoneColor.tag}`}></div>
                    )}
                    <li>{phoneColor.color}</li>               
                  </div>
                )}
              </ul>
            </div>
          </Carousel.Item>
          <Carousel.Item className="cameras-slide">
            <h2>Cameras</h2>
            <div id="rear-cameras" className="cameras">
              <h4>Rear Cameras:</h4>
              <p><span>Primary: </span>{this.props.phone.rearCameras.primary}</p>
              {this.props.phone.rearCameras.ultrawide && (
                <p><span>Ultrawide: </span> {this.props.phone.rearCameras.ultrawide}</p>
              )}
              {this.props.phone.rearCameras.telephoto && (
                <p><span>Telephoto: </span> {this.props.phone.rearCameras.telephoto}</p>
              )}
              {this.props.phone.rearCameras.periscope && (
                <p><span>Periscope: </span> {this.props.phone.rearCameras.periscope}</p>
              )}
            </div>
            <div id="front-cameras" className="cameras">
              <h4>Front Camera(s):</h4>
              <p><span>Primary: </span>{this.props.phone.frontCameras}</p>
              {this.props.phone.frontCameras.ultrawide && (
                <p><span>Ultrawide: </span> {this.props.phone.frontCameras.ultrawide}</p>
              )}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <h2>Cameras cont.</h2>
          </Carousel.Item>

          {/* Approbations */}
          {this.props.phone.approbations && (
            <Carousel.Item>
              <h2>Approbations</h2>
              <section className="approbations">
                <ul>
                  {this.props.phone.approbations.map((approbation, index) =>
                    <li key={index}>{approbation}</li>
                  )}
                </ul>
              </section>
            </Carousel.Item>
          )}
        </Carousel>
      </>
    )
  }
  componentDidMount() {
    this.overFlow();
  }
}

export default MiniPhoneCarousel;