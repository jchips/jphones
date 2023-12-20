import React from "react";
import iphoneData from "../json/iphone-data.json";
import VariantsAccordion from "../components/VariantsAccordion";
import "../styles/Brands.scss";
import { Carousel, Container, ListGroup } from "react-bootstrap";

class Apple extends React.Component {
  render() {
    let versions = ['15', '14', '13', '12', '11', 'XS', 'X', 'SE'];
    return (
      <div className="apple">
        <h2>iPhones</h2>
        <Container>
          <Carousel className='brand-carousel' interval={null} variant='dark'>
            <Carousel.Item className="brand-img text-center">
              <img src="./assets/imgs/iphones.png" alt="iPhones" />
            </Carousel.Item>
            <Carousel.Item className="features-slide">
              <h3>Features</h3>
              <div className="brands-scrollable">
                <ListGroup variant="flush">
                  <ListGroup.Item>5G (iPhone 12 and later)</ListGroup.Item>
                  <ListGroup.Item>Siri</ListGroup.Item>
                  <ListGroup.Item>Airdrop</ListGroup.Item>
                  <ListGroup.Item>Apple Pay</ListGroup.Item>
                  <ListGroup.Item>True tone display</ListGroup.Item>
                  <ListGroup.Item>Tap-to-top</ListGroup.Item>
                  <ListGroup.Item>Duel stereo speakers</ListGroup.Item>
                  <ListGroup.Item>Wireless charging & fast charging</ListGroup.Item>
                  <ListGroup.Item>iMessage & FaceTime</ListGroup.Item>
                  <ListGroup.Item>Silent & ring physical switch</ListGroup.Item>
                  <ListGroup.Item>Animoji/Memoji <i>[exceptions: SE (2022 & 2020), 8 Plus and older]</i></ListGroup.Item>
                  <ListGroup.Item>3D Face ID <i>[exceptions: SE (2022 & 2020), 8 Plus and older]</i></ListGroup.Item>
                  <ListGroup.Item>IP68 water/dust resistant <i>[exceptions: SE (2022 & 2020), XR, 8 Plus and older]</i></ListGroup.Item>
                </ListGroup>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Camera Features</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>4K video @ 60fps on all cameras</ListGroup.Item>
                <ListGroup.Item>Night mode <i>[exceptions: SE (2022 & 2020), XR, 8 Plus and older]</i></ListGroup.Item>
                <ListGroup.Item>Ultrawide camera <i>[exceptions: SE (2022 & 2020), XR, 8 Plus and older]</i></ListGroup.Item>
              </ListGroup>
              <br />
              <h3>Camera Pros</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>Known for having very good dynamic range</ListGroup.Item>
              </ListGroup>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Pros and Cons</h3>
              <div className="pros-and-cons">
                <section className="pros-and-cons-bubble">
                  <h4>Pros</h4>
                  <div className="scrollable">
                    <ul>
                      <li>Best app optimization on a smartphone</li>
                      <li>Best at running games</li>
                      <li>Considered the smoothest running phones-- really good software</li>
                      <li>Free earpods ITB</li>
                      <li>Apple Watch is the best smartwatch on the market</li>
                      <li>Updates phones for at least 5yrs</li>
                    </ul>
                  </div>
                </section>
                <section className="pros-and-cons-bubble">
                  <h4>Cons</h4>
                  <div className="scrollable">
                    <ul>
                      <li>Very limited customization</li>
                      <li>Camera protrudes</li>
                      <li>No headphone jack</li>
                      <li>Two-step face unlock</li>
                      <li>Face ID doesn't work when phone is flat on table?</li>
                      <li>No more charger ITB ever since iPhone 11 models</li>
                      <li>Late to use common cable (most phones have Lightning port instead of USB Type C)</li>
                      <li>Large notch <i>[exceptions: all 15 models, 14 Pros, SE (2022 & 2020), 8 Plus and older]</i></li>
                      <li>Transferring files between computer and phone is complicated because of Apple being proprietary</li>
                      <li>Google Assistant and Google Maps are better than Siri and Apple Maps</li>
                      <li>Slowest charging in the industry</li>
                    </ul>
                  </div>
                </section>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
        {versions.map((version, index) =>
          <VariantsAccordion data={iphoneData} category={version} key={index} />
        )}
      </div>
    )
  }
}

export default Apple;