import React, { Component } from 'react';
import { Alert, Container } from 'react-bootstrap';
import BrandCarousel from '../components/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import Footer from '../components/Footer/Footer';
import getData from '../hooks/getData';
import '../styles/Brands.scss';

class Samsung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      samsungSData: [],
      samsungAData: [],
      noteData: [],
      foldableData: [],
      brandData: [],
      error: '',
      isLoading: true
    }
  }

  // Loads the data
  async componentDidMount() {
    try {
      let samsungSData = await getData('samsung-s');
      let samsungAData = await getData('samsung-a');
      let noteData = await getData('notes');
      let brandData = await getData('brand-data');
      let foldableData = await getData('foldables');
      this.setState({ samsungSData, samsungAData, noteData, foldableData, brandData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching Samsung data. Please try again later.' })
    }
  }

  render() {
    let { samsungSData, samsungAData, noteData, foldableData, brandData, isLoading, error } = this.state;
    let sPhones = ['S24', 'S23', 'S22', 'S21', 'S20', 'S10', 'S9'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className='samsung'>
            <h2>Samsung Phones</h2>
            <Container>
              <BrandCarousel brand={brandData.galaxy} />
            </Container>
            {sPhones.map((version, index) =>
              <ModelAccordion data={samsungSData} category={version} key={index} />
            )}
            <ModelAccordion data={samsungAData} category='A' />
            <ModelAccordion data={foldableData} category='Z Fold' />
            <ModelAccordion data={foldableData} category='Z Flip' />
            <ModelAccordion data={noteData} category='Note' />
          </div>
        )}
        <Footer />
      </>
    );
  }
}

export default Samsung;
