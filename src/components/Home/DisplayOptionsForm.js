// Form code from React.dev - https://react.dev/reference/react-dom/components/input
// Search icon from React Icons - https://react-icons.github.io/react-icons/
// Search bar CSS from Ahmad Emran - https://codepen.io/ahmadbassamemran/pen/rNjMXqg
import React from 'react';
import { FormCheck } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './DisplayOptions.scss';

class DisplayOptionsForm extends React.Component {

  handleDisplay = (e) => {
    if (!e.target.checked) {
      this.props.setDisplay('currentPhones');
    } else {
      this.props.setDisplay('allPhones');
    }
  }

  /**
   * Updates the search every time the user enters a new character into the search bar.
   * @param {Event} e - The input event.
   */
  updateSearch = (e) => {
    e.preventDefault(); // prevent instant refresh
    let searchValue = e.target.value.toLowerCase();
    this.props.setSearch(searchValue);
  };

  render() {
    return (
      <section className='display-phones-options'>
        <form>
          <legend>Display options:</legend>
          <div className='form-container'>
            <FormCheck
              type='switch'
              id='display-toggle'
              label='show all phones'
              onChange={this.handleDisplay}
            />
            <FormCheck
              type='switch'
              id='mm-toggle'
              label='show milimeters'
              onChange={this.props.setMMToggle}
            />
          </div>
        </form>
        <div className='search-box'>
          <button className='btn-search' aria-label='Search Button'>
            <FaSearch />
          </button>
          <input
            type='text'
            className='input-search'
            placeholder='Type to Search...'
            onChange={this.updateSearch}
          />
        </div>
      </section>
    );
  }
}

export default DisplayOptionsForm;
