import React from 'react';
import { Alert, FormCheck } from 'react-bootstrap';
import ModelAccordion from '../components/ModelAccordian';
import Footer from '../components/Footer/Footer';
import getData from '../utils/getData';
import setMMToggle from '../utils/setMMtoggle';
import '../styles/Company.scss';

class Asus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asusData: [],
      mmToggle: false,
      error: '',
      isLoading: true
    }
  }

  // Loads the data
  async componentDidMount() {
    try {
      let asusData = await getData('asus');
      this.setState({ asusData, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Sorry, there has been an error fetching Asus data. Please try again later.' })
    }
  }

  render() {
    let { error, isLoading, asusData } = this.state;
    let series = ['Zenfone'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className='asus company'>
            <h2>Asus phones</h2>
            <FormCheck
              type='switch'
              id='mm-toggle'
              label='show milimeters'
              onChange={() => setMMToggle(this)}
            />
            {series.map((version, index) =>
              <ModelAccordion data={asusData} category={version} mmToggle={this.state.mmToggle} key={index} />
            )}
          </div>
        )}
        <Footer />
      </>
    )
  }
}

export default Asus;
