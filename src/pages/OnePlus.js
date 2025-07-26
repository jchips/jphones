import React, { Component } from 'react';
import { Alert, Container, FormCheck } from 'react-bootstrap';
import ModelAccordion from '../components/ModelAccordian';
import BrandCarousel from '../components/Carousels/BrandCarousel';
import Footer from '../components/Footer/Footer';
import getData from '../utils/getData';
import setMMToggle from '../utils/setMMtoggle';
import '../styles/Company.scss';

class OnePlus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneplusData: [],
      brandData: {},
      foldableData: [],
      mmToggle: true,
      error: '',
      isLoading: true
    }
  }

  // Loads the data
  async componentDidMount() {
    try {
      let oneplusData = await getData('oneplus');
      let brandData = await getData('brand-data?cat=oneplus');
      let foldableData = await getData('foldables');
      this.setState({ oneplusData, foldableData, brandData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching OnePlus data. Please try again later.' })
    }
  }

  render() {
    let { error, isLoading, oneplusData, brandData, foldableData } = this.state;
    let series = ['13', '12', '11', '10', '9', '8', '7', '6'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className='oneplus company'>
            <h2>OnePlus Phones</h2>
            <Container>
              <BrandCarousel brand={brandData} />
            </Container>
            <FormCheck
              type='switch'
              id='mm-toggle'
              label='show inches'
              onChange={() => setMMToggle(this)}
            />
            {series.map((model, index) =>
              <ModelAccordion data={oneplusData} category={model} mmToggle={this.state.mmToggle} key={index} />
            )}
            <ModelAccordion data={foldableData} mmToggle={this.state.mmToggle} category={'Open'} />
          </div>
        )}
        <Footer />
      </>
    );
  }
}

export default OnePlus;
