import React, { Component } from 'react';
import pixelData from '../json/pixel-data.json';
import VariantsAccordion from '../components/VariantsAccordion';
import { Container, Carousel, ListGroup } from 'react-bootstrap';

class Google extends Component {
  render() {
    let versions = ['7', '6', '5', '4', '3'];
    return (
      <div className='google'>
        <h2>Pixels</h2>
        <Container>
        <Carousel className='brand-carousel' interval={null} variant='dark'>
            <Carousel.Item className="brand-img text-center">
              <img src="./assets/imgs/pixels.png" alt="Pixels" />
            </Carousel.Item>
            <Carousel.Item className="features-slide">
              <h3>Features</h3>
              <div className="brands-scrollable">
                <ListGroup variant="flush">
                 <ListGroup.Item>Google Pay</ListGroup.Item>
                 <ListGroup.Item>Google Assistant</ListGroup.Item>
                 <ListGroup.Item>Gestures or buttons option</ListGroup.Item>
                 <ListGroup.Item>Fast Charging</ListGroup.Item>
                 <ListGroup.Item>Always-on Display</ListGroup.Item>
                 <ListGroup.Item>Google Lens - Identifies things in front of the camera</ListGroup.Item>
                 <ListGroup.Item>Unlimited high quality storage with Google Photos</ListGroup.Item>
                 <ListGroup.Item>Call Screening - Google Assistant answers calls for you and shows you the call transcript</ListGroup.Item>
                 <ListGroup.Item>Now Playing - Tells you what song is playing in the background w/o you having to ask</ListGroup.Item>
                 <ListGroup.Item>Live caption / call screening / Hold For Me</ListGroup.Item>
                </ListGroup>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Camera Features</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>Night Sight</ListGroup.Item>
                <ListGroup.Item>Optical Image Stabilization (OIS)</ListGroup.Item>
              </ListGroup>
              <br />
              <h3>Camera Pros</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>Portrait photos are super sharp because of Google's amazing software</ListGroup.Item>
              </ListGroup>
              <br />
              <h3>Camera Cons</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>All photos look contrast-y (cool hue color temperature) [but not bad!!]</ListGroup.Item>
              </ListGroup>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Pros and Cons</h3>
              <div className="pros-and-cons">
                <section className="pros-and-cons-bubble">
                  <h4>Pros</h4>
                  <div className="scrollable">
                    <ul>
                      <ListGroup.Item>Guaranteed 3yrs of updates</ListGroup.Item>
                      <ListGroup.Item>Back gets less fingerprints than other phones</ListGroup.Item>
                      <ListGroup.Item>Known for their very good cameras (picture taking)</ListGroup.Item>
                      <ListGroup.Item>Fastest Android (software) updates on the market</ListGroup.Item>
                      <ListGroup.Item>Google Assistant is widely known as the best AI assistant in any phone</ListGroup.Item>
                    </ul>
                  </div>
                </section>
                <section className="pros-and-cons-bubble">
                  <h4>Cons</h4>
                  <div className="scrollable">
                    <ul>
                      <ListGroup.Item>No headphone jack [exceptions: Pixel 4a & 3a]</ListGroup.Item>
                      <ListGroup.Item>Base storage option is too low for modern flagships</ListGroup.Item>
                      <ListGroup.Item>Display is a bit dim (especially with auto-brightness)</ListGroup.Item>
                      <ListGroup.Item>Only officially on Verizon (but does support eSim for other carriers)</ListGroup.Item>
                      <ListGroup.Item>Flagship phones are too expensive for their value ~ like every phone reviewer</ListGroup.Item>
                    </ul>
                  </div>
                </section>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
        {versions.map((version, index) => 
          <VariantsAccordion data={pixelData} category={version} key={index}/>
        )}
      </div>
    );
  }
}

export default Google;
