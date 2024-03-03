import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ModelAccordion from '../components/ModelAccordian';
import brandData from '../json/brand-data.json';
import oneplusData from '../json/oneplus-data.json';
import foldableData from '../json/foldable-data.json';
import '../styles/Brands.scss';
import BrandCarousel from '../components/BrandCarousel';

class OnePlus extends Component {
  render() {
    let models = ['12', '11', '10', '9', '8', '7', '6'];
    return (
      <div className='oneplus'>
        <h2>OnePlus Phones</h2>
        <Container>
          <BrandCarousel brand={brandData.oneplus} />
        </Container>
        {models.map((model, index) =>
          <ModelAccordion data={oneplusData} category={model} key={index} />
        )}
        <ModelAccordion data={foldableData} category={'open'} />
      </div>
    );
  }
}

export default OnePlus;
