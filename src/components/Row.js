import React, { Component } from 'react';
import MiniPhoneCarousel from './MiniPhoneCarousel';
import "../styles/Row.scss";

class Row extends Component {
  render() {
    return (
      <div className='row scrollbar'>
          {this.props.pixelData.map((pixelPhone, index) =>
            <MiniPhoneCarousel phone={pixelPhone} key={index}/>
          )}
      </div>
    );
  }
}

export default Row;
