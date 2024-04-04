import React from "react";
// import asusData from "../json/asus-data.json";
import { Alert } from 'react-bootstrap';
import ModelAccordion from "../components/ModelAccordian";
import getData from '../hooks/getData';
import "../styles/Brands.scss";
class Asus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asusData: [],
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
    let versions = ['zenfone'];
    return (
      <>
        {error && <Alert variant='danger' className='m-3'>{error}</Alert>}
        {!isLoading && (
          <div className="asus">
            <h2>Asus phones</h2>
            {versions.map((version, index) =>
              <ModelAccordion data={asusData} category={version} key={index} />
            )}
          </div>
        )}
      </>
    )
  }
}

export default Asus;