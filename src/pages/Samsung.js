import React, { Component } from 'react';
import { Alert, Container, FormCheck } from 'react-bootstrap';
import BrandCarousel from '../components/Carousels/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import Footer from '../components/Footer/Footer';
import getData from '../utils/getData';
import setMMToggle from '../utils/setMMtoggle';
import '../styles/Company.scss';

class Samsung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      samsungSData: [],
      samsungAData: [],
      noteData: [],
      foldableData: [],
      brandData: [],
      mmToggle: false,
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
          <div className='samsung company'>
            <h2>Samsung Phones</h2>
            <Container>
              <BrandCarousel brand={brandData.galaxy} />
            </Container>
            <FormCheck
              type='switch'
              id='mm-toggle'
              label='show milimeters'
              onChange={() => setMMToggle(this)}
            />
            {sPhones.map((version, index) =>
              <ModelAccordion data={samsungSData} category={version} mmToggle={this.state.mmToggle} key={index} />
            )}
            <ModelAccordion data={samsungAData} category='A' mmToggle={this.state.mmToggle} />
            <ModelAccordion data={foldableData} category='Z Fold' mmToggle={this.state.mmToggle} />
            <ModelAccordion data={foldableData} category='Z Flip' mmToggle={this.state.mmToggle} />
            <ModelAccordion data={noteData} category='Note' mmToggle={this.state.mmToggle} />
          </div>
        )}
        <Footer />
      </>
    );
  }
}

export default Samsung;
