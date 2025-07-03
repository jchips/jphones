import React, { Component } from 'react';
import { FormSelect, Accordion } from 'react-bootstrap';

class Groups extends Component {
  /**
   * Displays the name of the phone group.
   * @param {String} route - The endpoint for the selected data.
   * @returns
   */
  displayGroupName = (route) => {
    const { index, selectedCompanyA, selectedCompanyB } = this.props;
    if (route === 'samsung-s') {
      return 'Samsung S series';
    } else if (route === 'samsung-a') {
      return 'Samsung A series';
    } else if (route === 'moto-g-power') {
      return 'Moto G Power series';
    } else if (route.includes('Flip')) {
      let company = index === 'A' ? selectedCompanyA.name : selectedCompanyB.name;
      return company += ' flip';
    } else if (route.includes('foldables')) {
      let company = index === 'A' ? selectedCompanyA.name : selectedCompanyB.name;
      return company += ' foldables';
    } else if (route === 'notes') {
      let company = index === 'A' ? selectedCompanyA.name : selectedCompanyB.name;
      return company += ' Note series';
    } else {
      return index === 'A' ? selectedCompanyA.name : selectedCompanyB.name;
    }
  }

  /**
   * Sets `selectedPhone` to whichever phone the user selects
   * @param {Event} e - Select event.
   */
  handleSelectDevice = (e) => {
    const { index, setSelectedPhoneA, setSelectedPhoneB } = this.props;
    let device = JSON.parse(e.target.value);
    if (index === 'A') {
      setSelectedPhoneA(device);
    } else if (index === 'B') {
      setSelectedPhoneB(device);
    }
  }

  render() {
    const { data } = this.props;
    return (
      <Accordion className='groups accordion-flush'>
        {data.map(item => (
          <Accordion.Item eventKey={item.route} key={item.route}>
            <Accordion.Header>{this.displayGroupName(item.route)}</Accordion.Header>
            <Accordion.Body>
              <FormSelect onChange={this.handleSelectDevice}>
                <option>Choose a device to compare</option>
                {item.data.map(device =>
                  <option value={JSON.stringify(device)} key={device.name}>{device.name}</option>
                )}
              </FormSelect>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  }
}

export default Groups;
