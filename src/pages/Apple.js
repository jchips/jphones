import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import BrandCarousel from '../components/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import '../styles/Brands.scss';
import getData from '../hooks/getData';

class Apple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iPhoneData: [],
      brandData: [],
      error: '',
      isLoading: true
    }
  }

  // Loads the data
  async componentDidMount() {
    try {
      let iPhoneData = await getData('iphones');
      let brandData = await getData('brand-data');
      this.setState({ iPhoneData, brandData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching Apple data. Please try again later.' })
    }
  }

  render() {
    let { error, isLoading, iPhoneData, brandData } = this.state;
    let versions = ['15', '14', '13', '12', '11', 'XS', 'X', 'SE'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className="apple">
            <h2>iPhones</h2>
            <Container>
              <BrandCarousel brand={brandData.iphone} />
            </Container>
            {versions.map((version, index) =>
              <ModelAccordion data={iPhoneData} category={version} key={index} />
            )}
          </div>
        )}
      </>
    )
  }
}

export default Apple;