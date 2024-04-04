import React, { Component } from 'react';
import { Alert, Container } from 'react-bootstrap';
import ModelAccordion from '../components/ModelAccordian';
import BrandCarousel from '../components/BrandCarousel';
import getData from '../hooks/getData';
import '../styles/Brands.scss';

class OnePlus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneplusData: [],
      brandData: [],
      foldableData: [],
      error: '',
      isLoading: true
    }
  }

  // Loads the data
  async componentDidMount() {
    try {
      let oneplusData = await getData('oneplus');
      let brandData = await getData('brand-data');
      let foldableData = await getData('foldables');
      this.setState({ oneplusData, foldableData, brandData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching OnePlus data. Please try again later.' })
    }
  }

  render() {
    let { error, isLoading, oneplusData, brandData, foldableData } = this.state;
    let models = ['12', '11', '10', '9', '8', '7', '6'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className='oneplus'>
            <h2>OnePlus Phones</h2>
            <Container>
              <BrandCarousel brand={brandData.oneplus} />
            </Container>
            {models.map((model, index) =>
              <ModelAccordion data={oneplusData} category={model} key={index} />
            )}
            <ModelAccordion data={foldableData} category={'open'} />
          </div>
        )}
      </>
    );
  }
}

export default OnePlus;
