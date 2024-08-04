import React, { Component } from 'react';
import { Container, Alert } from 'react-bootstrap';
import BrandCarousel from '../components/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import getData from '../hooks/getData';
import Footer from '../components/Footer/Footer';
import '../styles/Brands.scss';

class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pixelData: [],
      brandData: [],
      foldableData: [],
      error: '',
      isLoading: true
    }
  }

  // Loads the data
  async componentDidMount() {
    try {
      let pixelData = await getData('pixels');
      let brandData = await getData('brand-data');
      let foldableData = await getData('foldables');
      this.setState({ pixelData, foldableData, brandData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching Google data. Please try again later.' })
    }
  }

  render() {
    let { error, isLoading, pixelData, brandData, foldableData } = this.state;
    let versions = ['8', '7', '6', '5', '4', '3'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className='google'>
            <h2>Pixels</h2>
            <Container>
              <BrandCarousel brand={brandData.pixel} />
            </Container>
            {versions.map((version, index) =>
              <ModelAccordion data={pixelData} category={version} key={index} />
            )}
            <ModelAccordion data={foldableData} category='fold' />
          </div>
        )}
        <Footer />
      </>
    );
  }
}

export default Google;
