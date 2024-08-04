// Form code from React.dev - https://react.dev/reference/react-dom/components/input
// Search icon from React Icons - https://react-icons.github.io/react-icons/
// Search bar CSS from Ahmad Emran - https://codepen.io/ahmadbassamemran/pen/rNjMXqg
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import '../styles/DisplayOptions.scss';

class DisplayOptionsForm extends React.Component {
  // Handle radio button form submit
  handleSubmit = (e) => {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const selectedOption = Object.fromEntries(formData.entries());
    this.setDisplay(selectedOption);
  };

  /**
   * Reads what the user selects in the form and then displays the correct phones based on that.
   * @param {Object} selectedOption - Object with user's form input data.
   */
  setDisplay = (selectedOption) => {
    if (selectedOption.displayPhones === 'currentPhones') {
      this.props.display('currentPhones');
    } else {
      this.props.display('allPhones');
    }
  };

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
        <form onSubmit={this.handleSubmit}>
          <legend>Display options:</legend>
          <div>
            <label>
              <input
                type='radio'
                name='displayPhones'
                value='currentPhones'
                defaultChecked={true}
              />{' '}
              Current phones
            </label>
            <label>
              <input type='radio' name='displayPhones' value='allPhones' />{' '}
              All phones
            </label>
            <Button type='submit' variant='primary'>
              Display
            </Button>
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
