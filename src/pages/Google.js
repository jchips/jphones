import React, { Component } from 'react';
import { Container, Alert, FormCheck } from 'react-bootstrap';
import BrandCarousel from '../components/Carousels/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import Footer from '../components/Footer/Footer';
import getData from '../utils/getData';
import setMMToggle from '../utils/setMMtoggle';
import '../styles/Company.scss';

class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pixelData: [],
      brandData: {},
      foldableData: [],
      mmToggle: false,
      error: '',
      isLoading: true
    }
  }

  // Loads the data
  async componentDidMount() {
    try {
      let pixelData = await getData('pixels');
      let brandData = await getData('brand-data?cat=pixel');
      let foldableData = await getData('foldables');
      this.setState({ pixelData, foldableData, brandData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching Google data. Please try again later.' })
    }
  }

  render() {
    let { error, isLoading, pixelData, brandData, foldableData } = this.state;
    let series = ['9', '8', '7', '6', '5', '4', '3'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className='google company'>
            <h2>Pixels</h2>
            <Container>
              <BrandCarousel brand={brandData} />
            </Container>
            <FormCheck
              type='switch'
              id='mm-toggle'
              label='show milimeters'
              onChange={() => setMMToggle(this)}
            />
            {series.map((version, index) =>
              <ModelAccordion data={pixelData} category={version} mmToggle={this.state.mmToggle} key={index} />
            )}
            <ModelAccordion data={foldableData} category='Fold' mmToggle={this.state.mmToggle} />
          </div>
        )}
        <Footer />
      </>
    );
  }
}

export default Google;
