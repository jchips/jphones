import React, { Component } from 'react';
import { Container, Carousel, ListGroup } from 'react-bootstrap';
import oneplusData from '../json/oneplus-data.json';
import foldableData from '../json/foldable-data.json';
import ModelAccordion from "../components/ModelAccordian";
import "../styles/Brands.scss";

class OnePlus extends Component {
  render() {
    let models = ['11', '10', '9', '8', '7', '6'];
    return (
      <div className='oneplus'>
        <h2>OnePlus Phones</h2>
        <Container>
          <Carousel className='brand-carousel' interval={null} variant='dark'>
            <Carousel.Item className='brand-img text-center'>
              <img src='./assets/imgs/oneplus.png' alt='OnePlus phones' />
            </Carousel.Item>
            <Carousel.Item>
              <h3>Features</h3>
              <div className='brands-scrollable'>
                <ListGroup variant='flush'>
                  <ListGroup.Item>30 Warp Charge</ListGroup.Item>
                  <ListGroup.Item>Dual sim</ListGroup.Item>
                  <ListGroup.Item>HDR10+</ListGroup.Item>
                  <ListGroup.Item>Mute switch <i>[exception: OnePlus 10T]</i></ListGroup.Item>
                  <ListGroup.Item>Google Assistant</ListGroup.Item>
                  <ListGroup.Item>Gestures or buttons option</ListGroup.Item>
                  <ListGroup.Item>Water/dust resistant</ListGroup.Item>
                  <ListGroup.Item>Face ID / Optical fingerprint scanner</ListGroup.Item>
                  <ListGroup.Item>Dolby Atmos duel stereo speakers</ListGroup.Item>
                  <ListGroup.Item>Quick camera launch / Fnatic Gaming Mode / Reading Mode / Battery Saving Mode / Zen mode (locks you out of your phone for 20min)</ListGroup.Item>
                  <ListGroup.Item>OxygenOS comes with a lot of customization options including dark mode, accent colors and fonts</ListGroup.Item>
                </ListGroup>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Camera Features</h3>
              <ListGroup variant='flush'>
                <ListGroup.Item>Nightscape</ListGroup.Item>
                <ListGroup.Item>Super Macro mode for upclose photos</ListGroup.Item>
                <ListGroup.Item>Super Stable mode (video stabilization)</ListGroup.Item>
              </ListGroup>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Pros and Cons</h3>
              <div className='pros-and-cons'>
                <section className="pros-and-cons-bubble">
                  <h4>Pros</h4>
                  <div className="scrollable">
                    <ul>
                      <li>Known for very good battery life</li>
                      <li>Fastest charging in the industry</li>
                      <li>Fast charger and clear case comes ITB, and screen protector comes pre-installed</li>
                    </ul>
                  </div>
                </section>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
        {models.map((model, index) =>
          <ModelAccordion data={oneplusData} category={model} key={index} />
        )}
        <ModelAccordion data={foldableData} category={"open"} />
      </div>
    );
  }
}

export default OnePlus;
