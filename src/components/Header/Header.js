import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className='hero-image'>
            <div id='hero-1' className='hero-text'>
              <h1>jPhones</h1>
            </div>
            <div id='hero-2' className='hero-text'>
              <h2>Helping you choose your next smartphone!</h2>
            </div>
          </div>
        </header>
      </>
    )
  }
  componentDidMount() {
    // Animated the header text on page source.
    // Resource: https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
  }
}

export default Header;
