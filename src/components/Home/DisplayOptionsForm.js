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
      checkAllFilter: {
        "checked": false
      },
    };
    this.orange = '#ff6a00'
  }

  setShowFilters = () => {
    this.setState({ showFilters: !this.state.showFilters });
  };

  setCheckAllFilter = () => {
    this.setState({
      checkAllFilter: {
        checked: !this.state.checkAllFilter.checked
      }
    })
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
      filters.map((filter) => {
        return filter.title === id
          ? { ...filter, checked: !filter.checked }
          : filter;
      })
    );
  };

  /**
   * Handles toggling the filter to show all companies
   */
  handleCheckAll = (e) => {
    const { filters, setFilters } = this.props;
    this.setCheckAllFilter()
    if (!this.state.checkAllFilter.checked) {
      setFilters(
        filters.map(filter => {
          return filter.type === 'phone'
            ? { ...filter, checked: true }
            : filter;
        })
      )
    } else {
      setFilters(
        filters.map(filter => {
          return filter.type === 'phone'
            ? { ...filter, checked: false }
            : filter;
        })
      )
    }
  }

  render() {
    const { showFilters } = this.state;
    const { filters } = this.props;
    return (
      <section className='display-phones-options'>
        <form>
          <legend>Display options:</legend>
          <div className='filter__wrapper'>
            <FormCheck
              type='switch'
              id='display-toggle'
              label='show all phones'
              onChange={this.handleDisplay}
            />
            <FormCheck
              type='switch'
              id='mm-toggle'
              label='show inches'
              onChange={this.props.setMMToggle}
            />
          </div>
          <div className='filters-btn' onClick={this.setShowFilters}>
            <p>{showFilters ? 'Hide filters' : 'Show filters'}</p>
            <div style={{ margin: '0 3px 10px 3px' }}>
              {showFilters ? <HiChevronUp /> : <HiChevronDown />}
            </div>
          </div>
          <div
            className='filter__container'
            style={{ display: showFilters ? 'flex' : 'none' }}
          >
            {/* Company filters */}
            <p className='m-2 filter-company-label'>Company</p>
            <div className='filter__wrapper'>
              {/* Toggle all companies */}
              <FormGroup controlId='check-all'>
                <FormCheck
                  type='checkbox'
                  id='check-all'
                  label='Select all'
                  checked={this.state.checkAllFilter.checked}
                  onChange={this.handleCheckAll}
                />
              </FormGroup>

              {/* Phone filters */}
              {filters
                ? filters
                  .filter((filter, index) => filter.type === 'phone')
                  .map((filter, index) => (
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

            {/* Add-on filters */}
            <p className='m-2 filter-section-label'>Add-on filters</p>

            {/* Cost filters */}
            <p className='m-2 filter-type-label'>Starting cost</p>
            <div className='filter__wrapper'>
              {filters
                ? filters
                  .filter((filter, index) => filter.type === 'add-on')
                  .map((filter, index) => (
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

            {/* Year filters */}
            <p className='m-2 filter-type-label'>Release year</p>
            <div className='filter__wrapper'>
              {filters
                ? filters
                  .filter((filter, index) => filter.type === 'year')
                  .map((filter, index) => (
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
