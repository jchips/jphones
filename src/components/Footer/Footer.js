import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <a href='https://www.jrosecow.com' target='_blank' rel='noreferrer'>&copy; Jrosecow</a>
        <p>Carousel indicator icons by <a href='https://icons8.com' title='icons' target='_blank' rel='noreferrer'>icons8.com</a></p>
      </div>
    )
  }
}

export default Footer;
