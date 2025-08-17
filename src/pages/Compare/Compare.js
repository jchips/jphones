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
      selectedPhoneA: {},
      selectedPhoneB: {},
      selectedCompanyA: {},
      selectedCompanyB: {},
      brandData: {},
      error: '',
      isLoading: false,
    };
  }

  setSelectedCompanyA = (value) => {
    this.setState({ selectedCompanyA: value });
  };

  setSelectedCompanyB = (value) => {
    this.setState({ selectedCompanyB: value });
  };

  setSelectedPhoneA = (value) => {
    const { index, setPhoneA } = this.props;
    const { selectedCompanyA } = this.state;
    const selectedPhoneA = { selectIndex: index, ...value };
    this.setState({ selectedPhoneA });
    if (index === 'A') {
      setPhoneA({ selectBrand: selectedCompanyA.company, ...value });
    }
  };

  setSelectedPhoneB = (value) => {
    const { index, setPhoneB } = this.props;
    const { selectedCompanyB } = this.state;
    const selectedPhoneB = { selectIndex: index, ...value };
    this.setState({ selectedPhoneB });
    if (index === 'B') {
      setPhoneB({ selectBrand: selectedCompanyB.company, ...value });
    }
  };

  setError = (errorMessage) => {
    this.setState({ error: errorMessage });
  };

  setIsLoading = (value) => {
    this.setState({ isLoading: value });
  };

  /**
   * Fetch all phones for selected phone company
   * @param {Event} e - Check radio button event
   */
  handleSelect = async (e) => {
    const { index } = this.props;
    let company = JSON.parse(e.target.value);
    if (index === 'A') {
      this.setSelectedCompanyA(company)
    } else if (index === 'B') {
      this.setSelectedCompanyB(company)
    }
    try {
      let promises = company.routes.map(async (route) => {
        let res = await getData(route);
        return { route, data: res };
      });
      const fetchedData = await Promise.all(promises);
      const brandData = company.brand
        ? await getData(`brand-data?cat=${company.brand}`)
        : null;
      this.setState({ data: [...fetchedData], isLoading: false });
      this.setState({ brandData });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ error: 'Failed to fetch phone data' });
    }
  };

  render() {
    const { index, phoneA, phoneB } = this.props;
    const {
      data,
      companies,
      selectedPhoneA,
      selectedPhoneB,
      selectedCompanyA,
      selectedCompanyB,
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
                  {index === 'A'
                    ? selectedPhoneA.name
                      ? selectedPhoneA.offName
                      : 'Select a phone...'
                    : selectedPhoneB.name
                      ? selectedPhoneB.offName
                      : 'Select a phone...'}
                </Accordion.Header>
                <Accordion.Body>
                  <div className='radio-container'>
                    {companies.map((company, i) => (
                      <FormGroup key={i} controlId={`${company.id}`}>
                        <FormCheck
                          value={JSON.stringify(company)}
                          type='radio'
                          id={`${company.id}-checkbox`}
                          label={`${company.name}`}
                          checked={
                            index === 'A'
                              ? selectedCompanyA.name === company.name
                              : selectedCompanyB.name === company.name
                          }
                          onChange={this.handleSelect}
                          key={i}
                        />
                      </FormGroup>
                    ))}
                  </div>
                  <Groups
                    data={data}
                    index={index}
                    selectedCompanyA={selectedCompanyA}
                    selectedCompanyB={selectedCompanyB}
                    selectedPhoneA={selectedPhoneA}
                    selectedPhoneB={selectedPhoneB}
                    setSelectedPhoneA={this.setSelectedPhoneA}
                    setSelectedPhoneB={this.setSelectedPhoneB}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {index === 'A' ? (
              selectedPhoneA.name ? (
                <div className='compare-header'>
                  <p className='selected-phone-title-text'>
                    {selectedPhoneA.offName ? `${selectedPhoneA.offName}` : ''}
                  </p>
                </div>
              ) : (
                <h1>Phone {index}</h1>
              )
            ) : selectedPhoneB.name ? (
              <div className='compare-header'>
                <p className='selected-phone-title-text'>
                  {selectedPhoneB.offName ? `${selectedPhoneB.offName}` : ''}
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
            {index === 'A'
              ? selectedPhoneA.name && (
                <ComparePhone
                  index={index}
                  phone={selectedPhoneA}
                  phoneA={phoneA}
                  phoneB={phoneB}
                  brandData={brandData}
                  selectedCompany={selectedCompanyA}
                />
              )
              : selectedPhoneB.name && (
                <ComparePhone
                  index={index}
                  phone={selectedPhoneB}
                  phoneA={phoneA}
                  phoneB={phoneB}
                  brandData={brandData}
                  selectedCompany={selectedCompanyB}
                />
              )}
          </>
        ) : null}
      </div>
    );
  }
}

export default Compare;
