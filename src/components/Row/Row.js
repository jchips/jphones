import React, { Component } from 'react';
import { FormCheck } from 'react-bootstrap';
import DisplayRowData from '../Row/DisplayRowData';
import './Row.scss';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    }
  }

  handleRowDisplay = () => {
    this.setState({ showAll: !this.state.showAll });
  }

  render() {
    const { rowTitle, determineData, getLogoTitle, searchValue, mmToggle, index } = this.props;
    const { showAll } = this.state;
    return (
      <section key={index}>

        {/* Labels row and puts photo next to each title */}
        <div id={rowTitle.split(' ').join('-')} className='row-header'>
          <h2>{rowTitle} Phones</h2>
          <img src={`assets/imgs/logos/${getLogoTitle(rowTitle)}-logo.webp`} alt={`${getLogoTitle(rowTitle)} logo`} />
        </div>

        <div class='form-container'>
          <FormCheck
            type='switch'
            id='row-toggle'
            label={`show all ${rowTitle} phones`}
            onChange={(e) => this.handleRowDisplay(e, rowTitle)}
          />
        </div>

        {/* Display row */}
        <DisplayRowData data={determineData(rowTitle, searchValue, showAll)} mmToggle={mmToggle} />
      </section>
    );
  }
}

export default Row;
