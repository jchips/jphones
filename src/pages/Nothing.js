import React, { Component } from 'react';
import { Alert, Container, FormCheck } from 'react-bootstrap';
import BrandCarousel from '../components/Carousels/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import Footer from '../components/Footer/Footer';
import getData from '../utils/getData';
import setMMToggle from '../utils/setMMtoggle';
import '../styles/Company.scss';

class Nothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nothingData: [],
      brandData: {},
      mmToggle: true,
      error: '',
      isLoading: true
    }
  }

  // Loads the data
  async componentDidMount() {
    try {
      let nothingData = await getData('nothing');
      let brandData = await getData('brand-data?cat=nothing');
      this.setState({ nothingData, brandData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching Nothing data. Please try again later.' })
    }
  }

  render() {
    let { error, isLoading, nothingData, brandData } = this.state;
    let series = ['Phone 3', 'Phone 2', 'Phone 1'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className='nothing company'>
            <h2>Nothing Phones</h2>
            <Container>
              <BrandCarousel brand={brandData} />
            </Container>
            <FormCheck
              type='switch'
              id='mm-toggle'
              label='show inches'
              onChange={() => setMMToggle(this)}
            />
            {series.map((version, index) =>
              <ModelAccordion data={nothingData} category={version} mmToggle={this.state.mmToggle} key={index} />
            )}
          </div>
        )}
        <Footer />
      </>
    )
  }
}


export default Nothing;
