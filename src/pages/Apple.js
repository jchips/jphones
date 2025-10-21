import React from 'react';
import { Alert, Container, FormCheck } from 'react-bootstrap';
import BrandCarousel from '../components/Carousels/BrandCarousel';
import ModelAccordion from '../components/ModelAccordian';
import Footer from '../components/Footer/Footer';
import getData from '../utils/getData';
import setMMToggle from '../utils/setMMtoggle';
import '../styles/Company.scss';

class Apple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iPhoneData: [],
      brandData: {},
      mmToggle: true,
      error: '',
      isLoading: true
    }
  }

  // Loads the data
  async componentDidMount() {
    try {
      let iPhoneData = await getData('iphones');
      let brandData = await getData('brand-data?cat=iphone');
      this.setState({ iPhoneData, brandData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching Apple data. Please try again later.' })
    }
  }

  render() {
    let { error, isLoading, iPhoneData, brandData } = this.state;
    let series = ['17', 'Air', '16', '15', '14', '13', '12', '11', 'XS', 'X', 'SE'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className='apple company'>
            <h2>iPhones</h2>
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
              <ModelAccordion data={iPhoneData} category={version} mmToggle={this.state.mmToggle} key={index} />
            )}
          </div>
        )}
        <Footer />
      </>
    )
  }
}

export default Apple;
