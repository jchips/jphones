import React, { Component } from 'react';
import { Container, Carousel, ListGroup } from 'react-bootstrap';
import samsungData from "../json/samsung-data.json";
import noteData from "../json/note-data.json";
import VariantsAccordion from "../components/VariantsAccordion";
import "../styles/Brands.scss";

class Samsung extends Component {
  render() {
    let sPhones = ['s22', 's21', 's20', 's10', 's9'];
    return (
      <div className='samsung'>
        <h2>Samsung Phones</h2>
        <Container>
          {/* <Row> */}
            {/* <Col xl={4} lg={4} md={4} sm={3} className='brand-img-container'>
              <img src='/assets/imgs/samsungs.png' alt='Samsung phones' />
            </Col> */}
            {/* <Col > */}
              <Carousel className='brand-carousel' interval={null} variant='dark'>
                <Carousel.Item className='brand-img text-center'>
                  <img src='/assets/imgs/samsungs.png' alt='Samsung phones' />
                </Carousel.Item>
                <Carousel.Item className='slide features-slide'>
                  <h3>Features</h3>
                  <div className='brands-scrollable'>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>Samsung Pay</ListGroup.Item>
                      <ListGroup.Item>Gestures or buttons option</ListGroup.Item>
                      <ListGroup.Item>Samsung TV Plus (free TV)</ListGroup.Item>
                      <ListGroup.Item>IP68 water/dust resistant</ListGroup.Item>
                      <ListGroup.Item>Wireless charging & fast charging</ListGroup.Item>
                      <ListGroup.Item>Google Assistant & Bixby</ListGroup.Item>
                      <ListGroup.Item>Samsung Themes & Goodlock</ListGroup.Item>
                      <ListGroup.Item>Samsung DeX</ListGroup.Item>
                      <ListGroup.Item>WiFi 6 support <i>[exceptions: Note 9 and older]</i></ListGroup.Item>
                      <ListGroup.Item>Ultrasonic in-display fingerprint scanner & Face ID <i>[Note 9 & older have physical fingerprint ID]</i></ListGroup.Item>
                      <ListGroup.Item>Wireless Powershare <i>[exceptions: Note 10 Lite, Note 9 and older]</i></ListGroup.Item>
                      <ListGroup.Item>Dolby Atmos duel stereo speakers <i>[exception: Note 10 Lite]</i></ListGroup.Item>
                      <ListGroup.Item>Expandable microSD storage up to at least 512 GB <i>[exceptions: A80 and every phone after S21s]</i></ListGroup.Item>
                      <ListGroup.Item>Multitasking / one-handed mode / pop-up view / secure folder / clipboard</ListGroup.Item>
                      <ListGroup.Item>Ultra-Power Saving Mode / Quick Camera Launch / AOD / Quick Share</ListGroup.Item>
                      <ListGroup.Item>Edge Panel features (smart select, create a gif...)</ListGroup.Item>
                    </ListGroup>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <h3>Camera Features</h3>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>Night mode</ListGroup.Item>
                    <ListGroup.Item>Ultrawide camera</ListGroup.Item>
                    <ListGroup.Item>HDR10+</ListGroup.Item>
                  </ListGroup>
                </Carousel.Item>
                <Carousel.Item className='slide'>
                  <h3>Pros and Cons</h3>
                  <div className="pros-and-cons">
                    <section className="pros-and-cons-bubble">
                      <h4>Pros</h4>
                      <div className="scrollable">
                        <ul>
                          <li>Fast charging comes ITB <i>[exceptions: S21s, S20 FE]</i></li>
                          <li>AKG earbuds comes ITB <i>[exceptions: S21s, S20 FE]</i></li>
                          <li>Very good-looking sharp displays</li>
                          <li>Have a lot of good deals shortly coming out, so you can get them for cheaper</li>
                        </ul>
                      </div>
                    </section>
                    <section className="pros-and-cons-bubble">
                      <h4>Cons</h4>
                      <div className="scrollable">
                        <ul>
                          <li>Updates are slow to arrive</li>
                          <li>Samsung only updates their phones for 3yrs</li>
                          <li>No headphone jack <i>[exceptions: Note 10 Lite, S10s and older]</i></li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </Carousel.Item>
              </Carousel>
            {/* </Col> */}
          {/* </Row> */}
        </Container>
        {sPhones.map((version, index) =>
          <VariantsAccordion data={samsungData} category={version} key={index} />
        )}
        <VariantsAccordion data={noteData} category="note"></VariantsAccordion>
      </div>
    );
  }
}

export default Samsung;
