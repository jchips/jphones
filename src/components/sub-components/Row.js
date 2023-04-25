import React, { Component } from 'react';
import MiniPhoneCarousel from './MiniPhoneCarousel';
import { Col } from 'react-bootstrap';
import "../../styles/Row.scss";

class Row extends Component {
  render() {
    return (
      // Creates a column and phone carousel for each phone in the row
      <div className='row scrollbar'>
          {this.props.data.map((phone, index) =>
            <Col lg={4} sm={6} key={index}>
              <MiniPhoneCarousel phone={phone}/>
            </Col>
          )}
      </div>
    );
  }
}

export default Row;
