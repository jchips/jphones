import React from "react";
import '../styles/Header.scss';

class Header extends React.Component {
  render() {
    return(
      <>
        <header>
          <div className="hero-image" title="photo creds: https://i.gadgets360cdn.com/large/Best_phones_2018_cover_ndtv_1545054680573.jpg">
            <div id="hero-1" className="hero-text">
              <h1>J. Phones.com</h1>
            </div>
            <div id="hero-2" className="hero-text">
              <h4>Helping you chose your next smartphone!</h4>
            </div>
          </div>
        </header>
      </>
    )
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
  }
}

export default Header;