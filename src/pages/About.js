import React, { Component } from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import abbreviations from '../json/abbreviations.json';
import '../styles/About.scss';

class About extends Component {
  render() {
    return (
      <div className='about container'>
        <h1>About</h1>
        <Row>
          <Col>
            <img src='./assets/imgs/ar-emoji-pin.jpg' alt='AR Emoji pin' />
          </Col>
          <Col>
            <section>
              <h4>Hi! :)</h4>
              <p>I'm Jaye. I am a phone geek, so I decided to make a site for phone shoppers to find the best phone for them.
                I'm an entry-level full-stack software developer job-seeking and can be contacted at <a href="mailto:jrosecow@gmail.com">Jrosecow@gmail.com</a>.
                Check out my website at <a href='https://jrosecow.com' blank="_target">Jrosecow.com</a>.
              </p>
              <p>This site is to compare phones and pick the best one for purchase.</p>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>jPhones Glossary</Accordion.Header>
                  <Accordion.Body>
                    {abbreviations.map(abbr => 
                      <p key={abbr.abbr}><span>{abbr.abbr}: </span>{abbr.expl}</p>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </section>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
