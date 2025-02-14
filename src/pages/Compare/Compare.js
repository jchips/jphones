import React, { Component } from 'react';
import { Alert, FormGroup, FormCheck, Accordion } from 'react-bootstrap';
import Groups from './Groups';
import getData from '../../utils/getData';
import compareOptions from '../../json/compare.json';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      companies: compareOptions,
      selectedPhone: {},
      selectedCompany: {},
      error: '',
      isLoading: false,
    };
  }

  /**
   * Fetch all phones for selected phone company
   * @param {Event} e - Check radio button event
   */
  handleSelect = async (e) => {
    let company = JSON.parse(e.target.value);
    this.setSelectedCompany(company);
    try {
      let promises = company.routes.map(async (route) => {
        let res = await getData(route);
        return { route, data: res };
      });
      const fetchedData = await Promise.all(promises);
      this.setState({ data: [...fetchedData], isLoading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ error: 'Failed to fetch phone data' });
    }
  }

  setSelectedCompany = (value) => {
    this.setState({ selectedCompany: value });
  }

  setSelectedPhone = (value) => {
    this.setState({ selectedPhone: value });
  }

  setError = (errorMessage) => {
    this.setState({ error: errorMessage });
  }

  setIsLoading = (value) => {
    this.setState({ isLoading: value });
  }

  render() {
    const { index } = this.props;
    const { data, companies, selectedPhone, selectedCompany, error, isLoading } = this.state;
    return (
      <div className='compare_wrapper'>
        {!isLoading ? (
          <>
            {selectedPhone.name ?
              <div className='compare-header'>
                <p>Phone {index}:</p>{' '}
                <p className='selected-phone-title'>{selectedPhone.name ? `${selectedPhone.name}` : ''}</p>
              </div>
              : <h1>Phone {index}</h1>}
            {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
            <Accordion className='accordion-flush'>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>Select a phone company to start...</Accordion.Header>
                <Accordion.Body>
                  <div className='radio-container'>
                    {companies.map((company, index) =>
                      <FormGroup key={index} controlId={`${company.id}`}>
                        <FormCheck
                          value={JSON.stringify(company)}
                          type='radio'
                          id={`${company.id}-checkbox`}
                          label={`${company.name}`}
                          checked={selectedCompany.name === company.name}
                          onChange={this.handleSelect}
                          key={index}
                        />
                      </FormGroup>
                    )}
                  </div>
                  <Groups
                    data={data}
                    selectedCompany={selectedCompany}
                    selectedPhone={selectedPhone}
                    setSelectedPhone={this.setSelectedPhone}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <p>{selectedPhone.name}</p>
          </>
        ) : null}
      </div>
    );
  }
}

export default Compare;
