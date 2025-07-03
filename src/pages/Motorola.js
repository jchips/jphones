import React, { Component } from 'react';
import { Container, Alert, FormCheck } from 'react-bootstrap';
import BrandCarousel from '../components/Carousels/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import Footer from '../components/Footer/Footer';
import getData from '../utils/getData';
import setMMToggle from '../utils/setMMtoggle';
import '../styles/Company.scss';

class Motorola extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motoData: [],
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
      let motoData = await getData('moto-g-power');
      let brandData = await getData('brand-data?cat=motorola');
      let foldableData = await getData('foldables');
      this.setState({ motoData, foldableData, brandData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching Motorola data. Please try again later.' })
    }
  }

  render() {
    let { error, isLoading, motoData, brandData, foldableData } = this.state;
    let series = ['G Power'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className='motorola company'>
            <h2>Motorola Phones</h2>
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
              <ModelAccordion data={motoData} category={version} mmToggle={this.state.mmToggle} key={index} />
            )}
            <ModelAccordion data={foldableData} category='razr' mmToggle={this.state.mmToggle} />
          </div>
        )}
        <Footer />
      </>
    );
  }
}

export default Motorola;
