import React, { Component } from 'react';
import { Alert, FormGroup, FormCheck, Accordion } from 'react-bootstrap';
import ComparePhone from '../../components/ComparePhone/ComparePhone';
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
      brandData: {},
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
      const brandData = company.brand ? await getData(`brand-data?cat=${company.brand}`) : null;
      this.setState({ data: [...fetchedData], isLoading: false });
      this.setState({ brandData });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ error: 'Failed to fetch phone data' });
    }
  };

  setSelectedCompany = (value) => {
    this.setState({ selectedCompany: value });
  };

  setSelectedPhone = (value) => {
    const { index, setPhoneA, setPhoneB } = this.props;
    const { selectedCompany } = this.state;
    const selectedPhone = { selectIndex: index, ...value };
    this.setState({ selectedPhone });
    if (index === 'A') {
      setPhoneA({ selectBrand: selectedCompany.company, ...value });
    } else if (index === 'B') {
      setPhoneB({ selectBrand: selectedCompany.company, ...value });
    }
  };

  setError = (errorMessage) => {
    this.setState({ error: errorMessage });
  };

  setIsLoading = (value) => {
    this.setState({ isLoading: value });
  };

  render() {
    const { index, phoneA, phoneB } = this.props;
    const {
      data,
      companies,
      selectedPhone,
      selectedCompany,
      brandData,
      error,
      isLoading,
    } = this.state;
    return (
      <div className='compare_wrapper'>
        {!isLoading ? (
          <>
            <Accordion>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  {selectedPhone.name
                    ? selectedPhone.offName
                    : 'Select a phone...'}
                </Accordion.Header>
                <Accordion.Body>
                  <div className='radio-container'>
                    {companies.map((company, index) => (
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
                    ))}
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
            {selectedPhone.name ? (
              <div className='compare-header'>
                <p className='selected-phone-title'>
                  {selectedPhone.offName ? `${selectedPhone.offName}` : ''}
                </p>
              </div>
            ) : (
              <h1>Phone {index}</h1>
            )}
            {error && (
              <Alert variant='danger' className='m-3'>
                {error}
              </Alert>
            )}
            {selectedPhone.name ? (
              <ComparePhone
                index={index}
                phone={selectedPhone}
                phoneA={phoneA}
                phoneB={phoneB}
                brandData={brandData}
                selectedCompany={selectedCompany}
              />
            ) : null}
          </>
        ) : null}
      </div>
    );
  }
}

export default Compare;
