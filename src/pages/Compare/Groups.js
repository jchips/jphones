import React, { Component } from 'react';
import { FormSelect, Accordion } from 'react-bootstrap';

class Groups extends Component {
  /**
   * Displays the name of the phone group.
   * @param {String} route - The endpoint for the selected data.
   * @returns
   */
  displayGroupName = (route) => {
    const { selectedCompany } = this.props;
    if (route === 'samsung-s') {
      return 'Samsung S series';
    } else if (route === 'samsung-a') {
      return 'Samsung A series';
    } else if (route.includes('Flip')) {
      return selectedCompany.name + ' flip';
    } else if (route.includes('foldables')) {
      return selectedCompany.name + ' foldables';
    } else if (route === 'notes') {
      return selectedCompany.name + ' Note series';
    } else {
      return selectedCompany.name;
    }
  }

  /**
   * Sets `selectedPhone` to whichever phone the user selects
   * @param {Event} e - Select event.
   */
  handleSelectDevice = (e) => {
    const { setSelectedPhone } = this.props;
    let device = JSON.parse(e.target.value);
    setSelectedPhone(device);
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
