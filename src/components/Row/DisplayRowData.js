import React, { Component } from 'react';
import MiniCarousel from '../Carousels/Carousel';
import { Col } from 'react-bootstrap';

class DisplayRowData extends Component {
  render() {
    return (
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

export default DisplayRowData;
