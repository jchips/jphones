import React, { Component } from 'react';
import MiniCarousel from '../Carousels/Carousel';
import { Col } from 'react-bootstrap';
import "./Row.scss";

class Row extends Component {
  render() {
    return (
      // Creates a column and phone carousel for each phone in the row
      <div className='row scrollbar'>
        {this.props.data.map((phone, index) =>
          <Col lg={4} sm={6} key={index}>
            <MiniCarousel phone={phone} mmToggle={this.props.mmToggle} />
          </Col>
        )}
      </div>
    );
  }
}

export default Row;
