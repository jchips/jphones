import React from "react";
import { createRef } from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/MiniPhoneCarousel.scss"

class MiniPhoneCarousel extends React.Component {
  constructor(props) {
    super(props);
    // this.tipsy = React.createRef();
    this.state = {
      height: 0
    }
  }
  tipsy = createRef(null);
  inputRef = createRef();
  pros = createRef();
  cons = createRef();

  /**
   * Adds a vertical scrollbar to element when there are a lot of array items to be displayed.
   * @param {Object} data - Array of the data that needs to be scrolled. Ex: this.props.phone.colors
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

  // changeHeight = () => {
  //   this.setState({height: this.tipsy.current.offsetHeight});
  // }

  render() {
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

          {/* Phone specs */}
          <Carousel.Item className="phone-specs-slide">
            <h3>Phone specs</h3>
            <h6 ref={this.tipsy} className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            <p><span>UI: </span>{this.props.phone.ui}</p><hr/>
            <p><span>Size: </span>{this.props.phone.size}</p>
            <p><span>Build: </span>{this.props.phone.build}</p><hr/>
            <p><span>Battery: </span>{this.props.phone.battery}</p>
            <p><span>Charging: </span>{this.props.phone.charging}</p><hr/>
            <p><span>Ram: </span>{this.props.phone.ram}</p><hr/>
            <p><span>Capacity: </span>{this.props.phone.capacity}</p>
          </Carousel.Item>

          {/* Colors & Display */}
          <Carousel.Item>
            <h3>Colors & Display</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
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
          
          {/* Features */}
          <Carousel.Item className="features-slide">
            <h3>Features</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            <ul>
              {this.props.phone.phoneFeatures.map(feature =>
                <li>{feature}</li>
              )}
            </ul>
          </Carousel.Item>
          
          {/* Cameras */}
          <Carousel.Item className="cameras-slide">
            <h3>Cameras</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
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

          {/* Camera Features */}
          <Carousel.Item className="camera-features">
            <h3>Camera Features</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            <section>
              <span>Camera Features:</span>
              {this.props.phone.cameraFeatures.map(feature => <li>{feature}</li>)}
            </section>    
          </Carousel.Item>

          {/* Camera Pros anc Cons */}
          <Carousel.Item className="camera-pros-cons">
            <h3>Camera Pros & Cons</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            <section>
              <span>Camera Pros:</span>
              {this.props.phone.cameraPros.map(pro => <li>{pro}</li>)}
            </section>
            <section>
              <span>Camera Cons:</span>
              {this.props.phone.cameraCons.map(con => <li>{con}</li>)}
            </section>
          </Carousel.Item>
          
          {/* Pros and Cons */}
          <Carousel.Item className="prosAndCons">
            <h3>Pros and Cons</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            <section ref={this.pros}>
              <h4>Pros</h4>
              <ul>{this.props.phone.pros.map(pro => <li>{pro}</li>)}</ul>
            </section>
            <section ref={this.cons}>
              <h4>Cons</h4>
              <ul>{this.props.phone.cons.map(con => <li>{con}</li>)}</ul>
            </section>
          </Carousel.Item>

          {/* Test */}
          <Carousel.Item className="test">
            <div className="grid-container">
              <h3>Pros and Cons</h3>
              <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
              <section className="dog">
                <h4>Pros</h4>
                <div id="pros-section" className="cow">
                  <ul>{this.props.phone.pros.map(pro => <li>{pro}</li>)}</ul>
                </div>
              </section>
              <section className="dog">
                <h4>Cons</h4>
                <div id="cons-section" className="cow">
                  <ul>{this.props.phone.cons.map(con => <li>{con}</li>)}</ul>
                </div>
              </section>
            </div>
          </Carousel.Item>
          
          {/* Cons */}
          {/* <Carousel.Item className="cons">
            <h3>Cons</h3>
            <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
            {this.props.phone.cons.map(con => <li>{con}</li>)}
          </Carousel.Item> */}

          {/* Approbations */}
          {this.props.phone.approbations && (
            <Carousel.Item>
              <h3>Approbations</h3>
              <h6 className="phone-title">&mdash; {this.props.phone.name} &mdash;</h6>
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
    // window.addEventListener('load', console.log('pros height:', this.pros.current.clientHeight));
    console.log('tipsy', this.tipsy.current.offsetHeight);
    this.overFlow(this.props.phone.colors, this.inputRef, 5, '175px');
    this.overFlow(this.props.phone.pros, this.pros, 4, '150px');
    this.overFlow(this.props.phone.cons, this.cons, 3, '125px'); // 125px
  }
}

export default MiniPhoneCarousel;