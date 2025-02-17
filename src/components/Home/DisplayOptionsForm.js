// Form code from React.dev - https://react.dev/reference/react-dom/components/input
// Search icon from React Icons - https://react-icons.github.io/react-icons/
// Search bar CSS from Ahmad Emran - https://codepen.io/ahmadbassamemran/pen/rNjMXqg
import React from 'react';
import { FormCheck, FormGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import './DisplayOptions.scss';

class DisplayOptionsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilters: false,
    };
  }

  setShowFilters = () => {
    this.setState({ showFilters: !this.state.showFilters });
  }

  /**
   * Toggle between showing current selling phones vs all phones on site.
   * @param {Event} e - Checkbox event.
   */
  handleDisplay = (e) => {
    if (!e.target.checked) {
      this.props.setDisplay('currentPhones');
    } else {
      this.props.setDisplay('allPhones');
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

  /**
   * Handles checked event by changing the filter's state.
   * @param {Event} e - Checkbox event.
   */
  handleCheck = (e) => {
    const { id } = e.target;
    const { filters, setFilters } = this.props;
    setFilters(
      filters.map((filters) => {
        return filters.title === id ? { ...filters, checked: !filters.checked } : filters;
      })
    );
  };

  render() {
    const { showFilters } = this.state;
    const { filters } = this.props;
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
          <div className='filters-btn' onClick={this.setShowFilters}>
            <p>{showFilters ? 'Hide filters' : 'Show filters'}</p>
            <div style={{ margin: '0 3px 10px 3px' }}>{showFilters ? <HiChevronUp /> : <HiChevronDown />}</div>
          </div>
          <div className='form-container' style={{ display: showFilters ? 'flex' : 'none' }}>
            {filters
              ? filters.map((filter, index) => (
                <FormGroup key={index} controlId={`${filter.title}`}>
                  <FormCheck
                    key={index}
                    type='checkbox'
                    id={`${filter.title}`}
                    label={`${filter.title}`}
                    checked={filter.checked}
                    onChange={this.handleCheck}
                  />
                </FormGroup>
              ))
              : null}
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
